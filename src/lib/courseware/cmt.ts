import type { CoursewareBundle } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * CMT (Chartered Market Technician) courseware across Levels I–III.
 * Level I builds the vocabulary and tools of technical analysis; Level II
 * applies and analyses them; Level III integrates them into a professional
 * investment process (with constructed-response assessment).
 * Module ids follow `cmt-${levelId}-m${i+1}` and mirror exams.ts topic order.
 */
export const CMT_COURSEWARE: CoursewareBundle[] = [
  {
    examId: "cmt",
    levelId: "l1",
    modules: [
      courseware({
        moduleId: "cmt-l1-m1",
        examId: "cmt",
        levelId: "l1",
        title: "Theory & history of technical analysis",
        examFormat:
          "CMT Level I: 120 multiple-choice questions in 2 hours, testing definitions, tools, and basic concepts at a knowledge/comprehension level.",
        estimatedStudyHours: 18,
        overview:
          "This module introduces the philosophy and history of technical analysis: its core assumptions, how it differs from fundamental analysis, and the evidence and criticisms surrounding it. It sets the conceptual foundation for every later tool.",
        whyItMatters:
          "Understanding the assumptions and rationale of technical analysis frames how and when its tools apply. Level I rewards a clear grasp of definitions and the discipline's premises.",
        learningOutcomes: [
          "State the core assumptions of technical analysis.",
          "Contrast technical and fundamental analysis.",
          "Explain the efficient market hypothesis and its challenge to technicals.",
          "Describe the history and evolution of technical analysis.",
          "Discuss empirical evidence and common criticisms.",
          "Explain the role of price and market action as information.",
        ],
        syllabusAreas: [
          area(
            "Philosophy and assumptions",
            [
              "Price discounts everything",
              "Prices move in trends",
              "History tends to repeat",
            ],
            "40–45%"
          ),
          area(
            "Technical vs fundamental",
            [
              "Differences in approach",
              "Complementary use",
              "Time horizons",
            ],
            "25–30%"
          ),
          area(
            "Evidence and critique",
            [
              "Efficient market hypothesis",
              "Empirical support and anomalies",
              "Criticisms and limitations",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m1-l1",
            "The three premises of technical analysis",
            45,
            ["State the premises", "Explain their logic"],
            [
              "Premise 1: price discounts all known information.",
              "Premise 2: prices move in trends that persist.",
              "Premise 3: history repeats because human behaviour is consistent.",
              "These premises justify analysing price and volume directly.",
            ],
            [
              "What are the three core premises of technical analysis?",
              "Why does 'price discounts everything' justify chart study?",
            ]
          ),
          lesson(
            "cmt-l1-m1-l2",
            "Technical versus fundamental analysis",
            40,
            ["Contrast approaches", "Explain complementarity"],
            [
              "Fundamental analysis studies value; technical analysis studies price behaviour.",
              "Technicals focus on timing and trend; fundamentals on what to own.",
              "Many practitioners combine both.",
              "Time horizon influences which approach dominates.",
            ],
            [
              "How do technical and fundamental analysis differ in focus?",
              "How can the two approaches complement each other?",
            ]
          ),
          lesson(
            "cmt-l1-m1-l3",
            "The efficient market hypothesis debate",
            45,
            ["Explain the EMH", "Assess its challenge"],
            [
              "The EMH holds that prices reflect all information, implying technicals cannot add value (weak form especially).",
              "Behavioural evidence and anomalies challenge strict efficiency.",
              "Trends and momentum contradict pure random-walk views.",
              "Technicians argue markets are not perfectly efficient.",
            ],
            [
              "What does weak-form EMH imply about technical analysis?",
              "What evidence challenges strict market efficiency?",
            ]
          ),
          lesson(
            "cmt-l1-m1-l4",
            "History and evolution",
            40,
            ["Describe the history", "Identify key figures"],
            [
              "Technical analysis has roots in Japanese candlesticks and Dow Theory.",
              "It evolved with charting, indicators, and computing power.",
              "Key contributors shaped its tools and principles.",
              "Modern technicals include quantitative methods.",
            ],
            [
              "What are two historical roots of technical analysis?",
              "How has computing changed technical analysis?",
            ]
          ),
          lesson(
            "cmt-l1-m1-l5",
            "Evidence and criticism",
            40,
            ["Assess evidence", "Address criticisms"],
            [
              "Momentum and trend effects have empirical support.",
              "Critics cite data-mining and subjectivity risks.",
              "Objective, rule-based methods address some criticisms.",
              "Evidence is mixed and context-dependent.",
            ],
            [
              "What is a common criticism of technical analysis?",
              "How can rule-based methods reduce subjectivity?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Three premises: price discounts all; prices trend; history repeats.",
          "EMH forms: weak, semi-strong, strong.",
          "Technical (timing/trend) vs fundamental (value).",
          "Objectivity principle: rules reduce data-mining and bias.",
        ],
        commonTraps: [
          "Confusing the EMH forms.",
          "Treating technical and fundamental analysis as mutually exclusive.",
          "Overstating empirical support for technicals.",
          "Ignoring subjectivity and data-mining risks.",
        ],
        examTechnique: [
          "Memorise the three premises precisely.",
          "Match each EMH form to its implication.",
          "Distinguish approach focus (value vs price behaviour).",
        ],
        practicePlan: [
          "Week 1: premises and technical-vs-fundamental.",
          "Week 2: EMH and evidence.",
          "Week 3: history, criticisms, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Kirkpatrick & Dahlquist — Technical Analysis (reference).",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m2",
        examId: "cmt",
        levelId: "l1",
        title: "Dow Theory & classical market concepts",
        examFormat:
          "MCQs on Dow Theory tenets, trend classification, and classical market structure.",
        estimatedStudyHours: 16,
        overview:
          "This module covers Dow Theory — the foundation of trend analysis — and classical market concepts including trend types, confirmation, and volume. These principles underpin most later technical tools.",
        whyItMatters:
          "Dow Theory established the core ideas of trends, confirmation, and market phases that all trend-following methods rely on. It is foundational and frequently tested.",
        learningOutcomes: [
          "State the tenets of Dow Theory.",
          "Classify primary, secondary, and minor trends.",
          "Explain the phases of primary trends.",
          "Apply the principle of confirmation between averages.",
          "Explain the role of volume in confirming trends.",
          "Describe classical market structure concepts.",
        ],
        syllabusAreas: [
          area(
            "Dow Theory tenets",
            [
              "Averages discount everything",
              "Three trend types and phases",
              "Confirmation and volume",
            ],
            "45–50%"
          ),
          area(
            "Trend classification",
            [
              "Primary, secondary, minor trends",
              "Trend phases (accumulation, participation, distribution)",
              "Trend reversal signals",
            ],
            "30–35%"
          ),
          area(
            "Classical concepts",
            [
              "Support and resistance basics",
              "Market structure",
              "Limitations of Dow Theory",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m2-l1",
            "The tenets of Dow Theory",
            50,
            ["State the tenets", "Explain their meaning"],
            [
              "The averages discount everything.",
              "The market has three trends: primary, secondary, minor.",
              "Primary trends have three phases.",
              "Averages must confirm each other; volume confirms the trend.",
            ],
            [
              "What are the three trend types in Dow Theory?",
              "What does 'averages must confirm each other' mean?",
            ]
          ),
          lesson(
            "cmt-l1-m2-l2",
            "Trend phases",
            45,
            ["Identify phases", "Link to sentiment"],
            [
              "Accumulation: informed buyers enter during pessimism.",
              "Participation (public): trend gains momentum as more join.",
              "Distribution: informed sellers exit during optimism.",
              "Phases connect price to crowd psychology.",
            ],
            [
              "What happens during the accumulation phase?",
              "Who is active during the distribution phase?",
            ],
            "In the accumulation phase, prices are low and sentiment is bearish, but smart money buys; by the distribution phase, prices are high and sentiment is euphoric while informed money sells."
          ),
          lesson(
            "cmt-l1-m2-l3",
            "Confirmation and volume",
            45,
            ["Apply confirmation", "Use volume"],
            [
              "A trend is confirmed when related averages move together.",
              "Divergence between averages warns of possible reversal.",
              "Volume should expand in the direction of the trend.",
              "Weak volume questions a move's validity.",
            ],
            [
              "What does divergence between averages suggest?",
              "How should volume behave in a healthy uptrend?",
            ]
          ),
          lesson(
            "cmt-l1-m2-l4",
            "Trend classification and reversals",
            40,
            ["Classify trends", "Recognise reversals"],
            [
              "Primary trends last months to years; secondary are corrections; minor are short-term noise.",
              "Higher highs and higher lows define an uptrend.",
              "A break of the pattern signals a possible reversal.",
              "Trends persist until clearly reversed.",
            ],
            [
              "How is an uptrend defined by highs and lows?",
              "What signals a potential trend reversal?",
            ]
          ),
          lesson(
            "cmt-l1-m2-l5",
            "Limitations of Dow Theory",
            30,
            ["Assess limitations", "Apply judiciously"],
            [
              "Dow Theory signals can lag major turns.",
              "It identifies trends but not precise entry/exit points.",
              "It was designed for indices, not individual securities.",
              "It remains a conceptual foundation, not a complete system.",
            ],
            [
              "Why can Dow Theory signals lag?",
              "What was Dow Theory originally designed to analyse?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Dow tenets: discount, three trends, three phases, confirmation, volume.",
          "Uptrend = higher highs + higher lows; downtrend = lower highs + lower lows.",
          "Phases: accumulation → participation → distribution.",
          "Confirmation: averages must agree; volume confirms.",
        ],
        commonTraps: [
          "Forgetting the confirmation requirement between averages.",
          "Confusing secondary corrections with trend reversals.",
          "Ignoring volume's confirming role.",
          "Expecting precise timing from Dow Theory.",
        ],
        examTechnique: [
          "Recall the tenets and phases in order.",
          "Use higher-high/higher-low logic to classify trends.",
          "Check confirmation and volume in trend questions.",
        ],
        practicePlan: [
          "Week 1: Dow tenets and phases.",
          "Week 2: confirmation, volume, and trend classification.",
          "Week 3: reversals, limitations, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Edwards & Magee — Technical Analysis of Stock Trends (reference).",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m3",
        examId: "cmt",
        levelId: "l1",
        title: "Chart construction — bar, line, candlestick & point-and-figure",
        examFormat:
          "MCQs on chart types, construction, scaling, and interpretation.",
        estimatedStudyHours: 16,
        overview:
          "This module covers the main chart types and how they are constructed: line, bar, candlestick, and point-and-figure, along with scaling (arithmetic vs logarithmic) and how chart choice affects interpretation.",
        whyItMatters:
          "Charts are the technician's primary tool. Understanding construction and the strengths of each type is essential before applying patterns and indicators.",
        learningOutcomes: [
          "Construct and interpret line, bar, and candlestick charts.",
          "Explain point-and-figure construction and its filtering of time.",
          "Compare arithmetic and logarithmic scaling.",
          "Select the appropriate chart type for a purpose.",
          "Interpret price information across chart types.",
          "Explain how chart choice affects perceived patterns.",
        ],
        syllabusAreas: [
          area(
            "Time-based charts",
            [
              "Line and bar charts",
              "Candlestick construction",
              "Open/high/low/close information",
            ],
            "40–45%"
          ),
          area(
            "Point-and-figure",
            [
              "Box size and reversal amount",
              "Filtering time and noise",
              "Signals",
            ],
            "25–30%"
          ),
          area(
            "Scaling and selection",
            [
              "Arithmetic vs logarithmic scales",
              "Choosing chart types",
              "Impact on interpretation",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m3-l1",
            "Line and bar charts",
            40,
            ["Construct charts", "Read price data"],
            [
              "Line charts plot closing prices, emphasising the trend.",
              "Bar charts show open, high, low, and close for each period.",
              "Bars convey the range and the close's position within it.",
              "Chart type affects the information visible.",
            ],
            [
              "What does a line chart emphasise?",
              "What information does a bar chart add over a line chart?",
            ]
          ),
          lesson(
            "cmt-l1-m3-l2",
            "Candlestick construction",
            45,
            ["Construct candlesticks", "Interpret bodies and wicks"],
            [
              "Candlesticks show OHLC with a body (open-to-close) and wicks (highs/lows).",
              "A filled/red body means close below open; hollow/green means close above.",
              "Long wicks signal rejection of price levels.",
              "Candlesticks make sentiment visually clear.",
            ],
            [
              "What does the candlestick body represent?",
              "What do long wicks suggest?",
            ]
          ),
          lesson(
            "cmt-l1-m3-l3",
            "Point-and-figure charts",
            50,
            ["Construct P&F", "Interpret signals"],
            [
              "Point-and-figure uses columns of Xs (rises) and Os (falls).",
              "Box size and reversal amount filter noise and remove time.",
              "Signals come from breaks of prior columns.",
              "P&F highlights significant price moves only.",
            ],
            [
              "How does point-and-figure filter out time and noise?",
              "What determines when a new column starts?",
            ],
            "With a 1-point box and 3-box reversal, price must reverse 3 points to start a new column, filtering out minor fluctuations and focusing on meaningful moves."
          ),
          lesson(
            "cmt-l1-m3-l4",
            "Scaling",
            40,
            ["Compare scales", "Choose scaling"],
            [
              "Arithmetic scales space equal price changes equally.",
              "Logarithmic scales space equal percentage changes equally.",
              "Log scales are better for long time frames and large moves.",
              "Scaling affects the appearance of trends and patterns.",
            ],
            [
              "When is a logarithmic scale preferable?",
              "How does scaling affect trendlines?",
            ]
          ),
          lesson(
            "cmt-l1-m3-l5",
            "Selecting chart types",
            30,
            ["Match chart to purpose", "Explain trade-offs"],
            [
              "Line charts suit trend clarity; bars/candles suit detail.",
              "Candlesticks add sentiment reading.",
              "P&F suits objective breakout signals.",
              "Chart choice should fit the analytical goal.",
            ],
            [
              "Which chart type best highlights breakouts objectively?",
              "Why might a candlestick chart be chosen over a line chart?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Bar/candle data: open, high, low, close (OHLC).",
          "Candle body = open-to-close; wicks = extremes.",
          "P&F: box size + reversal amount filter noise and time.",
          "Scale choice: arithmetic (absolute) vs logarithmic (percentage).",
        ],
        commonTraps: [
          "Confusing arithmetic and logarithmic scaling effects.",
          "Misreading candlestick body colour/direction.",
          "Thinking P&F charts include time.",
          "Ignoring how chart choice changes perceived patterns.",
        ],
        examTechnique: [
          "Know exactly what each chart type displays.",
          "Recall P&F box/reversal mechanics.",
          "Match chart type to the analytical purpose.",
        ],
        practicePlan: [
          "Week 1: line, bar, and candlestick construction.",
          "Week 2: point-and-figure and scaling.",
          "Week 3: chart selection and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Charting technique references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m4",
        examId: "cmt",
        levelId: "l1",
        title: "Trend, support/resistance & chart patterns",
        examFormat:
          "MCQs on trendlines, support/resistance, and classical chart patterns with price targets.",
        estimatedStudyHours: 18,
        overview:
          "This module covers identifying trends, drawing support and resistance, and recognising classical chart patterns — reversal and continuation — along with their measured price objectives.",
        whyItMatters:
          "Trend and pattern recognition is the heart of classical technical analysis, providing entries, exits, and targets. These are heavily tested at Level I.",
        learningOutcomes: [
          "Draw trendlines and channels.",
          "Identify support and resistance and their significance.",
          "Recognise reversal patterns (head and shoulders, double tops/bottoms).",
          "Recognise continuation patterns (triangles, flags, pennants).",
          "Compute measured-move price targets.",
          "Explain the role of volume in confirming patterns.",
        ],
        syllabusAreas: [
          area(
            "Trend and support/resistance",
            [
              "Trendlines and channels",
              "Support and resistance",
              "Role reversal of S/R",
            ],
            "35–40%"
          ),
          area(
            "Reversal patterns",
            [
              "Head and shoulders",
              "Double and triple tops/bottoms",
              "Rounding and V patterns",
            ],
            "30–35%"
          ),
          area(
            "Continuation patterns",
            [
              "Triangles (symmetrical, ascending, descending)",
              "Flags and pennants",
              "Measured moves and targets",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m4-l1",
            "Trendlines and channels",
            45,
            ["Draw trendlines", "Use channels"],
            [
              "An uptrend line connects higher lows; a downtrend line connects lower highs.",
              "Channels add a parallel line to bound price.",
              "More touches strengthen a trendline's significance.",
              "A break of a trendline warns of change.",
            ],
            [
              "How is an uptrend line drawn?",
              "What increases a trendline's significance?",
            ]
          ),
          lesson(
            "cmt-l1-m4-l2",
            "Support and resistance",
            45,
            ["Identify S/R", "Explain role reversal"],
            [
              "Support is where buying tends to halt declines; resistance halts advances.",
              "Broken resistance often becomes support (role reversal), and vice versa.",
              "The more tests, the more significant the level.",
              "S/R guides entries, exits, and stops.",
            ],
            [
              "What is role reversal of support and resistance?",
              "What makes an S/R level more significant?",
            ]
          ),
          lesson(
            "cmt-l1-m4-l3",
            "Reversal patterns",
            50,
            ["Recognise reversals", "Compute targets"],
            [
              "Head and shoulders signals a top; inverse signals a bottom.",
              "Double/triple tops and bottoms mark failed retests.",
              "The neckline break confirms the pattern.",
              "Target ≈ pattern height projected from the breakout.",
            ],
            [
              "What confirms a head-and-shoulders pattern?",
              "How is the price target measured?",
            ],
            "In a head and shoulders with the head at 120 and neckline at 100, the measured target on a neckline break is roughly 100 − (120 − 100) = 80."
          ),
          lesson(
            "cmt-l1-m4-l4",
            "Continuation patterns",
            45,
            ["Recognise continuations", "Project moves"],
            [
              "Triangles (symmetrical, ascending, descending) show consolidation before continuation.",
              "Flags and pennants are brief pauses within trends.",
              "Breakout direction usually follows the prior trend.",
              "Measured moves project the prior move from the breakout.",
            ],
            [
              "What does an ascending triangle typically signal?",
              "How do you project a flag's target?",
            ]
          ),
          lesson(
            "cmt-l1-m4-l5",
            "Volume and pattern confirmation",
            35,
            ["Confirm with volume", "Avoid false signals"],
            [
              "Volume should expand on breakouts to confirm them.",
              "Low-volume breakouts are prone to failure (false breakouts).",
              "Volume patterns within formations offer clues.",
              "Confirmation reduces whipsaws.",
            ],
            [
              "Why should volume expand on a valid breakout?",
              "What is a false breakout?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Uptrend line: connect higher lows; downtrend line: connect lower highs.",
          "Head-and-shoulders target = neckline ± pattern height.",
          "Measured move: project prior move from breakout point.",
          "Confirmation: breakout + expanding volume.",
        ],
        commonTraps: [
          "Trading breakouts without volume confirmation.",
          "Forgetting support/resistance role reversal.",
          "Mismeasuring pattern targets.",
          "Confusing reversal with continuation patterns.",
        ],
        examTechnique: [
          "Identify the pattern type before projecting a target.",
          "Apply the measured-move method consistently.",
          "Check volume for breakout validity.",
        ],
        practicePlan: [
          "Week 1: trendlines and support/resistance.",
          "Week 2: reversal and continuation patterns.",
          "Week 3: targets, volume confirmation, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Edwards & Magee — Technical Analysis of Stock Trends (reference).",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m5",
        examId: "cmt",
        levelId: "l1",
        title: "Candlestick patterns & confirmation",
        examFormat:
          "MCQs on single and multi-candle patterns and their interpretation and confirmation.",
        estimatedStudyHours: 14,
        overview:
          "This module covers Japanese candlestick patterns — single, dual, and triple formations — how to interpret them as reflections of sentiment, and the importance of confirmation and context.",
        whyItMatters:
          "Candlestick patterns provide short-term sentiment signals widely used by technicians. Recognising them and knowing their reliability is a tested Level I skill.",
        learningOutcomes: [
          "Interpret single candlestick patterns (doji, hammer, shooting star).",
          "Recognise dual patterns (engulfing, harami).",
          "Recognise triple patterns (morning/evening star, three soldiers).",
          "Explain the sentiment behind candlestick shapes.",
          "Apply confirmation and context to candlestick signals.",
          "Assess the reliability and limitations of candlesticks.",
        ],
        syllabusAreas: [
          area(
            "Single-candle patterns",
            [
              "Doji, spinning tops",
              "Hammer, hanging man, shooting star",
              "Marubozu",
            ],
            "35–40%"
          ),
          area(
            "Multi-candle patterns",
            [
              "Engulfing and harami",
              "Morning/evening star",
              "Three white soldiers / black crows",
            ],
            "35–40%"
          ),
          area(
            "Context and confirmation",
            [
              "Location within trend",
              "Confirmation requirements",
              "Reliability and limits",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m5-l1",
            "Single-candle patterns",
            45,
            ["Identify single patterns", "Read sentiment"],
            [
              "A doji shows indecision (open ≈ close).",
              "A hammer signals potential reversal after a decline.",
              "A shooting star warns after an advance.",
              "Wick length reveals rejection of levels.",
            ],
            [
              "What does a doji indicate?",
              "Where is a hammer meaningful in a trend?",
            ]
          ),
          lesson(
            "cmt-l1-m5-l2",
            "Dual-candle patterns",
            45,
            ["Recognise dual patterns", "Interpret them"],
            [
              "A bullish engulfing candle wraps the prior bearish candle.",
              "A harami shows a smaller candle inside the prior body (potential slowing).",
              "Engulfing patterns signal stronger reversals than harami.",
              "Context within the trend matters.",
            ],
            [
              "What defines a bullish engulfing pattern?",
              "What does a harami suggest?",
            ]
          ),
          lesson(
            "cmt-l1-m5-l3",
            "Triple-candle patterns",
            45,
            ["Recognise triple patterns", "Interpret reversals"],
            [
              "Morning star signals a bottom; evening star signals a top.",
              "Three white soldiers show strong bullish momentum.",
              "Three black crows show strong bearish momentum.",
              "Triple patterns often carry higher reliability.",
            ],
            [
              "What does an evening star signal?",
              "What do three white soldiers indicate?",
            ],
            "An evening star — a large up candle, a small-bodied candle, then a large down candle — after a rally warns of a potential top and often precedes a decline when confirmed."
          ),
          lesson(
            "cmt-l1-m5-l4",
            "Context and confirmation",
            35,
            ["Apply context", "Require confirmation"],
            [
              "A pattern's meaning depends on its location in the trend.",
              "Confirmation (e.g. a follow-through candle) improves reliability.",
              "Combine candlesticks with support/resistance and indicators.",
              "Isolated patterns can mislead.",
            ],
            [
              "Why does context matter for candlestick signals?",
              "What is confirmation in candlestick analysis?",
            ]
          ),
          lesson(
            "cmt-l1-m5-l5",
            "Reliability and limitations",
            30,
            ["Assess reliability", "Avoid overuse"],
            [
              "Candlesticks are short-term and prone to noise.",
              "They perform better with confirmation and at key levels.",
              "Over-reliance leads to false signals.",
              "Use as part of a broader framework.",
            ],
            [
              "Why are candlestick signals prone to noise?",
              "How can reliability be improved?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Doji = indecision; hammer/star = potential reversal.",
          "Engulfing (stronger) vs harami (weaker) reversal signals.",
          "Star patterns: morning (bottom), evening (top).",
          "Reliability = pattern + location + confirmation.",
        ],
        commonTraps: [
          "Reading candlesticks without trend context.",
          "Treating every doji as a reversal.",
          "Skipping confirmation.",
          "Confusing hammer and shooting star by location.",
        ],
        examTechnique: [
          "Identify the pattern and its required location.",
          "Note whether confirmation is present.",
          "Combine with other tools when interpreting.",
        ],
        practicePlan: [
          "Week 1: single-candle patterns.",
          "Week 2: dual and triple patterns.",
          "Week 3: context, confirmation, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Nison — Japanese Candlestick Charting Techniques (reference).",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m6",
        examId: "cmt",
        levelId: "l1",
        title: "Moving averages, oscillators & momentum",
        examFormat:
          "MCQs on moving averages, momentum oscillators, signals, and divergence.",
        estimatedStudyHours: 18,
        overview:
          "This module covers the core indicators: moving averages (trend-following) and oscillators (momentum), including how to compute them, generate signals, and interpret divergence and overbought/oversold conditions.",
        whyItMatters:
          "Indicators are central to modern technical analysis. Understanding their construction and signals — and their lagging vs leading nature — is heavily tested and widely applied.",
        learningOutcomes: [
          "Compute and interpret simple and exponential moving averages.",
          "Generate signals from moving-average crossovers.",
          "Compute and interpret momentum and rate of change.",
          "Interpret RSI, stochastics, and MACD.",
          "Identify overbought/oversold conditions and divergence.",
          "Distinguish leading (oscillator) from lagging (MA) indicators.",
        ],
        syllabusAreas: [
          area(
            "Moving averages",
            [
              "SMA and EMA",
              "Crossovers and signals",
              "Lag and whipsaws",
            ],
            "35–40%"
          ),
          area(
            "Momentum and oscillators",
            [
              "Momentum and rate of change",
              "RSI and stochastics",
              "MACD",
            ],
            "35–40%"
          ),
          area(
            "Signals and divergence",
            [
              "Overbought/oversold",
              "Divergence",
              "Combining indicators",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m6-l1",
            "Moving averages",
            50,
            ["Compute MAs", "Generate signals"],
            [
              "SMA averages recent closes; EMA weights recent data more.",
              "Price crossing an MA, or MA crossovers, generate signals.",
              "MAs smooth noise but lag price.",
              "Shorter MAs are more responsive but noisier.",
            ],
            [
              "How does an EMA differ from an SMA?",
              "What is a golden cross?",
            ],
            "A golden cross occurs when a shorter MA (e.g. 50-day) crosses above a longer MA (e.g. 200-day), signalling a potential bullish trend; the reverse is a death cross."
          ),
          lesson(
            "cmt-l1-m6-l2",
            "Momentum and rate of change",
            45,
            ["Compute momentum", "Interpret ROC"],
            [
              "Momentum measures the speed of price change.",
              "Rate of change expresses momentum as a percentage.",
              "Rising momentum supports a trend; falling momentum warns.",
              "Momentum can lead price at turning points.",
            ],
            [
              "What does momentum measure?",
              "How can momentum lead price?",
            ]
          ),
          lesson(
            "cmt-l1-m6-l3",
            "RSI and stochastics",
            50,
            ["Interpret RSI", "Interpret stochastics"],
            [
              "RSI oscillates 0–100; above 70 is overbought, below 30 oversold.",
              "Stochastics compare the close to the recent range.",
              "Extreme readings can persist in strong trends.",
              "Signals include crossovers and divergence.",
            ],
            [
              "What RSI levels indicate overbought and oversold?",
              "What do stochastics compare?",
            ]
          ),
          lesson(
            "cmt-l1-m6-l4",
            "MACD",
            40,
            ["Interpret MACD", "Use signal line"],
            [
              "MACD is the difference between two EMAs, with a signal line and histogram.",
              "MACD line crossing the signal line generates signals.",
              "The histogram shows momentum strength.",
              "MACD combines trend and momentum information.",
            ],
            [
              "How is the MACD line constructed?",
              "What does the MACD histogram show?",
            ]
          ),
          lesson(
            "cmt-l1-m6-l5",
            "Divergence and combining indicators",
            35,
            ["Identify divergence", "Combine indicators"],
            [
              "Bullish divergence: price makes lower lows while the oscillator makes higher lows.",
              "Divergence warns of weakening momentum.",
              "Combine leading oscillators with lagging MAs for balance.",
              "No single indicator is sufficient alone.",
            ],
            [
              "What is bullish divergence?",
              "Why combine leading and lagging indicators?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "SMA = average of last n closes; EMA weights recent data.",
          "RSI: >70 overbought, <30 oversold.",
          "MACD = short EMA − long EMA; signal = EMA of MACD.",
          "Divergence: price and oscillator disagree on new extremes.",
        ],
        commonTraps: [
          "Treating overbought/oversold as automatic reversal signals.",
          "Ignoring MA lag and whipsaws in ranging markets.",
          "Confusing leading and lagging indicators.",
          "Relying on one indicator alone.",
        ],
        examTechnique: [
          "Know each indicator's construction and default thresholds.",
          "Identify divergence carefully (compare highs/lows).",
          "Classify indicators as leading or lagging.",
        ],
        practicePlan: [
          "Week 1: moving averages and crossovers.",
          "Week 2: momentum, RSI, stochastics.",
          "Week 3: MACD, divergence, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Murphy — Technical Analysis of the Financial Markets (reference).",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m7",
        examId: "cmt",
        levelId: "l1",
        title: "Volume, breadth & sentiment indicators",
        examFormat:
          "MCQs on volume analysis, market breadth, and sentiment measures.",
        estimatedStudyHours: 16,
        overview:
          "This module covers volume analysis, market-breadth indicators (advance/decline, new highs/lows), and sentiment measures (put/call, surveys) used to gauge the conviction and internal health of trends.",
        whyItMatters:
          "Volume, breadth, and sentiment reveal whether price moves have broad support or are fragile. They are important confirming and contrarian tools tested at Level I.",
        learningOutcomes: [
          "Interpret volume and its relationship to price.",
          "Apply volume indicators (OBV, accumulation/distribution).",
          "Interpret market breadth (advance/decline, new highs/lows).",
          "Use sentiment indicators (put/call ratio, surveys).",
          "Apply contrarian interpretation of sentiment extremes.",
          "Combine breadth and sentiment with price analysis.",
        ],
        syllabusAreas: [
          area(
            "Volume analysis",
            [
              "Volume-price relationship",
              "On-balance volume",
              "Accumulation/distribution",
            ],
            "35–40%"
          ),
          area(
            "Market breadth",
            [
              "Advance/decline line",
              "New highs/new lows",
              "Breadth divergence",
            ],
            "30–35%"
          ),
          area(
            "Sentiment",
            [
              "Put/call ratio",
              "Sentiment surveys",
              "Contrarian interpretation",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m7-l1",
            "Volume and price",
            45,
            ["Interpret volume", "Confirm price"],
            [
              "Volume should confirm the trend — rising in its direction.",
              "Declining volume in a trend warns of exhaustion.",
              "Volume spikes can mark climaxes.",
              "Volume precedes or confirms price moves.",
            ],
            [
              "How should volume behave in a healthy trend?",
              "What can a volume climax indicate?",
            ]
          ),
          lesson(
            "cmt-l1-m7-l2",
            "Volume indicators",
            45,
            ["Compute OBV", "Interpret A/D"],
            [
              "On-balance volume adds/subtracts volume based on price direction.",
              "Accumulation/distribution weights volume by close location in the range.",
              "Rising OBV supports an uptrend.",
              "Divergence between volume indicators and price warns.",
            ],
            [
              "How is on-balance volume constructed?",
              "What does OBV divergence from price suggest?",
            ]
          ),
          lesson(
            "cmt-l1-m7-l3",
            "Market breadth",
            50,
            ["Interpret breadth", "Spot divergence"],
            [
              "The advance/decline line tracks net advancing issues.",
              "New highs vs new lows gauge participation.",
              "Breadth divergence (index up, breadth down) warns of weakness.",
              "Broad participation supports durable trends.",
            ],
            [
              "What does the advance/decline line measure?",
              "Why is breadth divergence a warning sign?",
            ],
            "If a market index makes a new high but the advance/decline line does not, fewer stocks are participating — a breadth divergence that often precedes a market top."
          ),
          lesson(
            "cmt-l1-m7-l4",
            "Sentiment indicators",
            40,
            ["Interpret sentiment", "Apply contrarian logic"],
            [
              "The put/call ratio gauges option-market fear/greed.",
              "Surveys measure bullish/bearish opinion.",
              "Extremes often mark turning points (contrarian).",
              "Sentiment complements price, not replaces it.",
            ],
            [
              "How is the put/call ratio interpreted?",
              "Why are sentiment extremes contrarian signals?",
            ]
          ),
          lesson(
            "cmt-l1-m7-l5",
            "Combining breadth and sentiment",
            30,
            ["Combine tools", "Confirm signals"],
            [
              "Breadth and sentiment strengthen price-based analysis.",
              "Alignment across tools increases conviction.",
              "Conflicting signals warrant caution.",
              "Use as confirmation and warning, not sole signals.",
            ],
            [
              "Why combine breadth and sentiment with price?",
              "What does conflicting evidence across tools imply?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Volume confirms trend: rising volume in trend direction.",
          "OBV: cumulative volume signed by price direction.",
          "Advance/decline line = cumulative (advancers − decliners).",
          "Contrarian rule: sentiment extremes often precede reversals.",
        ],
        commonTraps: [
          "Ignoring volume when confirming breakouts.",
          "Overlooking breadth divergence at index highs.",
          "Reading sentiment with the crowd rather than contrarily at extremes.",
          "Using breadth/sentiment as standalone signals.",
        ],
        examTechnique: [
          "Check volume for trend confirmation.",
          "Look for breadth divergence at extremes.",
          "Apply contrarian logic to sentiment extremes.",
        ],
        practicePlan: [
          "Week 1: volume and volume indicators.",
          "Week 2: breadth indicators.",
          "Week 3: sentiment and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Market breadth and sentiment references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m8",
        examId: "cmt",
        levelId: "l1",
        title: "Cycles & seasonality (introduction)",
        examFormat:
          "MCQs on cycle concepts, seasonality, and their application at an introductory level.",
        estimatedStudyHours: 12,
        overview:
          "This module introduces market cycles and seasonality: cycle characteristics (amplitude, period, phase), how to identify them, and common seasonal patterns, with appropriate caution about reliability.",
        whyItMatters:
          "Cycles and seasonality add a time dimension to analysis. Level I expects familiarity with the concepts and their limits, which recur in later, more advanced study.",
        learningOutcomes: [
          "Define cycle characteristics: amplitude, period, phase.",
          "Explain how cycles are identified and measured.",
          "Describe common market cycles.",
          "Explain seasonality and its examples.",
          "Combine cycle analysis with other tools.",
          "Assess the reliability and limits of cycle analysis.",
        ],
        syllabusAreas: [
          area(
            "Cycle fundamentals",
            [
              "Amplitude, period, phase",
              "Cycle identification",
              "Summation of cycles",
            ],
            "40–45%"
          ),
          area(
            "Seasonality",
            [
              "Seasonal patterns",
              "Calendar effects",
              "Examples and evidence",
            ],
            "30–35%"
          ),
          area(
            "Application and limits",
            [
              "Combining with other tools",
              "Reliability",
              "Cautions",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m8-l1",
            "Cycle characteristics",
            45,
            ["Define cycle terms", "Measure cycles"],
            [
              "Amplitude is the height; period is the length; phase is the timing.",
              "Cycles repeat approximately, not exactly.",
              "Multiple cycles can combine (summation).",
              "Identifying dominant cycles guides timing.",
            ],
            [
              "What do amplitude, period, and phase describe?",
              "What does summation of cycles mean?",
            ]
          ),
          lesson(
            "cmt-l1-m8-l2",
            "Identifying cycles",
            40,
            ["Identify cycles", "Assess dominance"],
            [
              "Cycles are found via visual inspection and analytical tools.",
              "Dominant cycles have the largest, most consistent influence.",
              "Cycle length may drift over time.",
              "Confirmation reduces false cycle signals.",
            ],
            [
              "How can dominant cycles be identified?",
              "Why might cycle length drift?",
            ]
          ),
          lesson(
            "cmt-l1-m8-l3",
            "Seasonality",
            40,
            ["Explain seasonality", "Cite examples"],
            [
              "Seasonality is a tendency for patterns at certain times.",
              "Examples include calendar and month-of-year effects.",
              "Seasonal tendencies are probabilistic, not guaranteed.",
              "They can be arbitraged away over time.",
            ],
            [
              "What is seasonality?",
              "Why might seasonal effects weaken over time?",
            ]
          ),
          lesson(
            "cmt-l1-m8-l4",
            "Combining cycles with other tools",
            30,
            ["Combine tools", "Confirm timing"],
            [
              "Cycle projections should be confirmed by price and momentum.",
              "Cycles suggest timing; price confirms direction.",
              "Alignment improves confidence.",
              "Do not trade cycles in isolation.",
            ],
            [
              "Why confirm cycle projections with price?",
              "What role do cycles play alongside other tools?",
            ]
          ),
          lesson(
            "cmt-l1-m8-l5",
            "Reliability and cautions",
            25,
            ["Assess reliability", "Apply caution"],
            [
              "Cycles are approximate and can fail.",
              "Over-fitting cycles to past data is a risk.",
              "Use cycles as one input among many.",
              "Maintain scepticism and confirmation.",
            ],
            [
              "What is the risk of over-fitting cycles?",
              "How should cycle analysis be used responsibly?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Cycle traits: amplitude (size), period (length), phase (timing).",
          "Summation: observed price = sum of multiple cycles + trend + noise.",
          "Seasonality = probabilistic time-based tendency.",
          "Confirmation: cycles + price + momentum.",
        ],
        commonTraps: [
          "Treating cycles as precise and reliable.",
          "Over-fitting cycles to historical data.",
          "Trading seasonality as a certainty.",
          "Using cycles without confirmation.",
        ],
        examTechnique: [
          "Define cycle terms precisely.",
          "Emphasise probabilistic, confirmed use.",
          "Recall common seasonal examples.",
        ],
        practicePlan: [
          "Week 1: cycle characteristics and identification.",
          "Week 2: seasonality.",
          "Week 3: application, limits, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Cycle analysis references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l1-m9",
        examId: "cmt",
        levelId: "l1",
        title: "Behavioral finance foundations for technicians",
        examFormat:
          "MCQs on behavioural biases and their link to technical patterns.",
        estimatedStudyHours: 14,
        overview:
          "This module connects behavioural finance to technical analysis: how cognitive and emotional biases create the crowd behaviour that produces trends, patterns, and sentiment extremes.",
        whyItMatters:
          "Technical patterns exist because human psychology is consistent. Understanding behavioural biases explains why technical analysis works and grounds it in evidence.",
        learningOutcomes: [
          "Explain how behavioural biases drive market behaviour.",
          "Link specific biases to technical phenomena.",
          "Describe herding and its effect on trends.",
          "Explain how sentiment extremes reflect biases.",
          "Relate behavioural finance to the premises of technical analysis.",
          "Apply behavioural insight to interpreting patterns.",
        ],
        syllabusAreas: [
          area(
            "Behavioural biases",
            [
              "Cognitive biases (anchoring, confirmation)",
              "Emotional biases (loss aversion, herding)",
              "Overreaction and underreaction",
            ],
            "40–45%"
          ),
          area(
            "Biases and technicals",
            [
              "Biases behind trends and patterns",
              "Sentiment extremes",
              "Support/resistance psychology",
            ],
            "30–35%"
          ),
          area(
            "Integration",
            [
              "Behavioural basis of TA premises",
              "Applying behavioural insight",
              "Limits",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l1-m9-l1",
            "Cognitive and emotional biases",
            45,
            ["Identify biases", "Classify them"],
            [
              "Anchoring and confirmation bias distort perception of information.",
              "Loss aversion and regret drive emotional decisions.",
              "Overreaction and underreaction create price extremes.",
              "Biases are consistent and predictable.",
            ],
            [
              "What is confirmation bias?",
              "How does loss aversion affect trading?",
            ]
          ),
          lesson(
            "cmt-l1-m9-l2",
            "Herding and trends",
            45,
            ["Explain herding", "Link to trends"],
            [
              "Herding causes investors to follow the crowd.",
              "Herding sustains trends beyond fundamentals.",
              "It also produces bubbles and crashes.",
              "Trends reflect collective behaviour.",
            ],
            [
              "How does herding sustain trends?",
              "What extreme outcomes can herding produce?",
            ]
          ),
          lesson(
            "cmt-l1-m9-l3",
            "Biases behind patterns",
            45,
            ["Link biases to patterns", "Explain S/R psychology"],
            [
              "Support/resistance reflects memory and anchoring at prior prices.",
              "Round numbers attract attention (psychological levels).",
              "Reversal patterns reflect shifts in crowd sentiment.",
              "Patterns are footprints of behaviour.",
            ],
            [
              "Why do prior price levels act as support/resistance?",
              "How do reversal patterns reflect sentiment shifts?",
            ],
            "A stock that repeatedly stalls at $100 shows anchoring to a round number: traders remember it as resistance, so their behaviour reinforces the level until decisively broken."
          ),
          lesson(
            "cmt-l1-m9-l4",
            "Sentiment extremes",
            30,
            ["Explain sentiment extremes", "Apply contrarian view"],
            [
              "Extreme optimism/pessimism reflects biased crowd behaviour.",
              "Extremes often precede reversals (contrarian signal).",
              "Sentiment indicators quantify these extremes.",
              "Behavioural insight supports contrarian analysis.",
            ],
            [
              "Why do sentiment extremes often precede reversals?",
              "How do biases create sentiment extremes?",
            ]
          ),
          lesson(
            "cmt-l1-m9-l5",
            "Behavioural basis of technical premises",
            30,
            ["Connect to premises", "Apply insight"],
            [
              "Consistent psychology underpins 'history repeats'.",
              "Trends persist because behaviour persists.",
              "Behavioural finance provides evidence for technicals.",
              "Awareness of one's own biases improves analysis.",
            ],
            [
              "How does behavioural finance support the 'history repeats' premise?",
              "Why should technicians be aware of their own biases?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Bias → behaviour → price pattern chain.",
          "Herding sustains trends and creates bubbles/crashes.",
          "Anchoring explains support/resistance and round numbers.",
          "Contrarian rule: sentiment extremes precede reversals.",
        ],
        commonTraps: [
          "Treating patterns as mechanical rather than behavioural.",
          "Ignoring one's own biases.",
          "Following sentiment with the crowd at extremes.",
          "Confusing overreaction with underreaction.",
        ],
        examTechnique: [
          "Link each bias to its technical manifestation.",
          "Apply contrarian logic to sentiment extremes.",
          "Connect behavioural finance to TA premises.",
        ],
        practicePlan: [
          "Week 1: cognitive and emotional biases.",
          "Week 2: herding and pattern psychology.",
          "Week 3: sentiment, integration, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level I curriculum.",
          "Behavioural finance references.",
        ],
      }),
    ],
  },
  {
    examId: "cmt",
    levelId: "l2",
    modules: [
      courseware({
        moduleId: "cmt-l2-m1",
        examId: "cmt",
        levelId: "l2",
        title: "Advanced pattern recognition & multi-timeframe analysis",
        examFormat:
          "CMT Level II: multiple-choice questions requiring application and analysis (higher cognitive level than Level I).",
        estimatedStudyHours: 20,
        overview:
          "This module advances pattern recognition to complex formations, harmonic and Elliott-style structures (as applicable), and multi-timeframe analysis, emphasising application and analytical judgement.",
        whyItMatters:
          "Level II tests application, not just recognition. Multi-timeframe analysis and advanced patterns improve signal quality and are central to professional practice.",
        learningOutcomes: [
          "Apply advanced and complex chart patterns.",
          "Conduct multi-timeframe analysis.",
          "Reconcile signals across timeframes.",
          "Apply pattern measurement and probability judgement.",
          "Integrate patterns with indicators and volume.",
          "Assess pattern reliability analytically.",
        ],
        syllabusAreas: [
          area(
            "Advanced patterns",
            [
              "Complex reversal/continuation patterns",
              "Harmonic/wave concepts (as applicable)",
              "Measurement and targets",
            ],
            "40–45%"
          ),
          area(
            "Multi-timeframe analysis",
            [
              "Top-down analysis",
              "Reconciling conflicting timeframes",
              "Timeframe alignment",
            ],
            "30–35%"
          ),
          area(
            "Integration",
            [
              "Combining with indicators and volume",
              "Probability and reliability",
              "Judgement",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m1-l1",
            "Advanced pattern recognition",
            55,
            ["Apply complex patterns", "Measure targets"],
            [
              "Complex patterns extend classical formations with more nuance.",
              "Measurement rules provide objective targets.",
              "Context and volume improve reliability.",
              "Not all patterns are equally reliable.",
            ],
            [
              "How do complex patterns extend classical ones?",
              "Why does context affect pattern reliability?",
            ]
          ),
          lesson(
            "cmt-l2-m1-l2",
            "Multi-timeframe analysis",
            55,
            ["Analyse top-down", "Align timeframes"],
            [
              "Top-down analysis starts with higher timeframes for context.",
              "Lower timeframes refine entries and exits.",
              "Aligned timeframes strengthen signals.",
              "Higher timeframes usually dominate.",
            ],
            [
              "Why start analysis with higher timeframes?",
              "What does timeframe alignment achieve?",
            ],
            "A trader confirms an uptrend on the weekly chart, then uses the daily chart to time an entry on a pullback — aligning timeframes to trade with the dominant trend."
          ),
          lesson(
            "cmt-l2-m1-l3",
            "Reconciling conflicting timeframes",
            45,
            ["Reconcile conflicts", "Prioritise"],
            [
              "Timeframes can give conflicting signals.",
              "Higher-timeframe context generally takes priority.",
              "Conflicts may indicate transitions or increased risk.",
              "Resolve conflicts before acting.",
            ],
            [
              "Which timeframe generally takes priority in conflicts?",
              "What can conflicting timeframes indicate?",
            ]
          ),
          lesson(
            "cmt-l2-m1-l4",
            "Integrating patterns with indicators",
            40,
            ["Combine tools", "Confirm patterns"],
            [
              "Indicators and volume confirm or question patterns.",
              "Divergence within a pattern is a warning.",
              "Convergent evidence raises probability.",
              "Integration improves decision quality.",
            ],
            [
              "How do indicators confirm chart patterns?",
              "What does divergence within a pattern suggest?",
            ]
          ),
          lesson(
            "cmt-l2-m1-l5",
            "Probability and judgement",
            40,
            ["Assess probability", "Apply judgement"],
            [
              "Patterns offer probabilities, not certainties.",
              "Reliability varies by pattern, context, and market.",
              "Analytical judgement weighs the evidence.",
              "Manage risk given uncertainty.",
            ],
            [
              "Why treat patterns as probabilities?",
              "What factors affect a pattern's reliability?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Top-down: higher timeframe context → lower timeframe timing.",
          "Timeframe priority: higher usually dominates.",
          "Probability = pattern base rate × context × confirmation.",
          "Integration: pattern + indicator + volume evidence.",
        ],
        commonTraps: [
          "Trading a pattern against the higher-timeframe trend.",
          "Ignoring divergence within patterns.",
          "Treating patterns as certainties.",
          "Failing to reconcile conflicting timeframes.",
        ],
        examTechnique: [
          "Establish higher-timeframe context first.",
          "Seek convergent evidence before acting.",
          "Frame answers in probability terms.",
        ],
        practicePlan: [
          "Week 1: advanced patterns and measurement.",
          "Week 2: multi-timeframe analysis.",
          "Week 3: integration, probability, and application MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level II curriculum.",
          "Advanced charting references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l2-m2",
        examId: "cmt",
        levelId: "l2",
        title: "Statistical & quantitative methods for technicians",
        examFormat:
          "MCQs applying statistics, regression, and quantitative techniques to technical analysis.",
        estimatedStudyHours: 22,
        overview:
          "This module covers the statistical and quantitative methods technicians use: descriptive statistics, correlation and regression, hypothesis testing, and the basics of quantitative model building and validation.",
        whyItMatters:
          "Quantitative rigour distinguishes professional technical analysis. Level II tests the ability to apply statistics to validate indicators and systems and avoid data-mining.",
        learningOutcomes: [
          "Apply descriptive statistics to price data.",
          "Compute and interpret correlation and regression.",
          "Apply hypothesis testing to technical claims.",
          "Explain the basics of quantitative model building.",
          "Recognise data-mining and overfitting risks.",
          "Validate indicators and systems statistically.",
        ],
        syllabusAreas: [
          area(
            "Descriptive and inferential statistics",
            [
              "Distributions and moments",
              "Correlation and regression",
              "Hypothesis testing",
            ],
            "40–45%"
          ),
          area(
            "Quantitative methods",
            [
              "Model building basics",
              "Signal construction",
              "Validation and out-of-sample testing",
            ],
            "30–35%"
          ),
          area(
            "Pitfalls",
            [
              "Data-mining and overfitting",
              "Look-ahead and survivorship bias",
              "Robustness",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m2-l1",
            "Descriptive statistics",
            45,
            ["Apply statistics", "Interpret distributions"],
            [
              "Mean, standard deviation, skewness, and kurtosis describe returns.",
              "Return distributions are often non-normal (fat tails).",
              "Statistics summarise behaviour objectively.",
              "Descriptive stats precede inference.",
            ],
            [
              "What do skewness and kurtosis describe?",
              "Why are return distributions often non-normal?",
            ]
          ),
          lesson(
            "cmt-l2-m2-l2",
            "Correlation and regression",
            50,
            ["Compute correlation", "Interpret regression"],
            [
              "Correlation measures linear association (−1 to +1).",
              "Regression estimates relationships and predictive fit (R²).",
              "Correlation is not causation.",
              "Spurious relationships can arise by chance.",
            ],
            [
              "What does R² measure in a regression?",
              "Why is correlation not causation?",
            ],
            "A high correlation between two indicators may be coincidental; testing on out-of-sample data helps distinguish a genuine relationship from a spurious one."
          ),
          lesson(
            "cmt-l2-m2-l3",
            "Hypothesis testing",
            45,
            ["Apply hypothesis tests", "Interpret significance"],
            [
              "Hypothesis testing evaluates whether results are statistically significant.",
              "p-values indicate the probability under the null hypothesis.",
              "Significance does not guarantee practical importance.",
              "Testing guards against random results.",
            ],
            [
              "What does a p-value indicate?",
              "Why does statistical significance not ensure practical value?",
            ]
          ),
          lesson(
            "cmt-l2-m2-l4",
            "Quantitative model building",
            45,
            ["Build models", "Validate them"],
            [
              "Quantitative signals should be defined objectively.",
              "In-sample fit must be checked against out-of-sample results.",
              "Simplicity and robustness beat complexity.",
              "Validation is essential before trusting a model.",
            ],
            [
              "Why test models out-of-sample?",
              "Why prefer simple, robust models?",
            ]
          ),
          lesson(
            "cmt-l2-m2-l5",
            "Data-mining and pitfalls",
            40,
            ["Recognise pitfalls", "Ensure robustness"],
            [
              "Data-mining finds patterns that do not persist.",
              "Overfitting tailors a model to noise.",
              "Look-ahead and survivorship biases inflate results.",
              "Out-of-sample and walk-forward testing improve reliability.",
            ],
            [
              "What is overfitting?",
              "How does look-ahead bias distort backtests?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Correlation range: −1 to +1; R² = explained variance share.",
          "Hypothesis test: p-value < significance level → reject null.",
          "Validation: in-sample vs out-of-sample (and walk-forward).",
          "Robustness > complexity to avoid overfitting.",
        ],
        commonTraps: [
          "Confusing correlation with causation.",
          "Trusting in-sample results without out-of-sample testing.",
          "Overfitting to noise.",
          "Ignoring look-ahead and survivorship bias.",
        ],
        examTechnique: [
          "Interpret statistics in terms of reliability.",
          "Flag data-mining and bias risks.",
          "Prefer validated, robust conclusions.",
        ],
        practicePlan: [
          "Week 1: descriptive statistics and regression.",
          "Week 2: hypothesis testing and modelling.",
          "Week 3: pitfalls, validation, and application MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level II curriculum.",
          "Quantitative methods references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l2-m3",
        examId: "cmt",
        levelId: "l2",
        title: "Volatility measures & market intermarket analysis",
        examFormat:
          "MCQs on volatility indicators and intermarket relationships.",
        estimatedStudyHours: 18,
        overview:
          "This module covers volatility measurement (ATR, Bollinger Bands, implied volatility) and intermarket analysis — the relationships among stocks, bonds, commodities, and currencies that inform macro-level technical views.",
        whyItMatters:
          "Volatility drives risk sizing and signal reliability, and intermarket relationships reveal the bigger picture. Both are important Level II applications.",
        learningOutcomes: [
          "Compute and interpret volatility measures (ATR, Bollinger Bands).",
          "Explain implied vs historical volatility.",
          "Apply volatility to position sizing and stops.",
          "Analyse intermarket relationships.",
          "Use intermarket analysis for macro context.",
          "Recognise changing correlations across regimes.",
        ],
        syllabusAreas: [
          area(
            "Volatility measures",
            [
              "ATR and Bollinger Bands",
              "Historical vs implied volatility",
              "Volatility and risk",
            ],
            "40–45%"
          ),
          area(
            "Intermarket analysis",
            [
              "Stock-bond-commodity-currency links",
              "Intermarket rotation",
              "Macro context",
            ],
            "35–40%"
          ),
          area(
            "Regimes",
            [
              "Changing correlations",
              "Risk-on/risk-off",
              "Regime-dependent signals",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m3-l1",
            "Volatility measures",
            50,
            ["Compute volatility", "Interpret bands"],
            [
              "Average true range measures typical price movement.",
              "Bollinger Bands place bands at standard deviations from a moving average.",
              "Band expansion/contraction signals changing volatility.",
              "Volatility clusters (calm and stormy periods).",
            ],
            [
              "What does average true range measure?",
              "What do Bollinger Bands widening indicate?",
            ]
          ),
          lesson(
            "cmt-l2-m3-l2",
            "Historical vs implied volatility",
            40,
            ["Compare volatilities", "Interpret VIX"],
            [
              "Historical volatility is realised; implied volatility is market-expected.",
              "Implied volatility (e.g. VIX) reflects option-market expectations.",
              "Spikes in implied volatility signal fear.",
              "Both inform risk assessment.",
            ],
            [
              "How does implied differ from historical volatility?",
              "What does a VIX spike suggest?",
            ]
          ),
          lesson(
            "cmt-l2-m3-l3",
            "Volatility in risk management",
            40,
            ["Size positions", "Set stops"],
            [
              "Position size can be scaled inversely to volatility.",
              "ATR-based stops adapt to market conditions.",
              "Higher volatility warrants smaller positions.",
              "Volatility awareness controls risk.",
            ],
            [
              "How can volatility inform position sizing?",
              "Why use ATR-based stops?",
            ],
            "If a strategy risks a fixed amount per trade, dividing that risk by the ATR sets position size — larger positions in calm markets, smaller in volatile ones."
          ),
          lesson(
            "cmt-l2-m3-l4",
            "Intermarket analysis",
            45,
            ["Analyse intermarket links", "Apply macro context"],
            [
              "Stocks, bonds, commodities, and currencies interrelate.",
              "For example, rising rates can pressure equities and support the currency.",
              "Intermarket rotation reveals capital flows.",
              "Macro context improves single-market analysis.",
            ],
            [
              "How can bond yields relate to equities?",
              "What does intermarket rotation reveal?",
            ]
          ),
          lesson(
            "cmt-l2-m3-l5",
            "Regimes and changing correlations",
            35,
            ["Recognise regimes", "Adapt to correlation shifts"],
            [
              "Correlations change across risk-on and risk-off regimes.",
              "Relationships that hold in calm markets can break in crises.",
              "Regime awareness prevents misapplied signals.",
              "Adapt analysis to the prevailing regime.",
            ],
            [
              "Why do correlations change across regimes?",
              "What is risk-on/risk-off behaviour?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "ATR = average of true ranges over n periods.",
          "Bollinger Bands = MA ± k × standard deviation.",
          "Position size ∝ 1 ÷ volatility (e.g. risk ÷ ATR).",
          "Intermarket: stocks ↔ bonds ↔ commodities ↔ currencies.",
        ],
        commonTraps: [
          "Confusing historical and implied volatility.",
          "Ignoring volatility when sizing positions.",
          "Assuming intermarket relationships are constant.",
          "Applying calm-market correlations during crises.",
        ],
        examTechnique: [
          "Know each volatility measure's construction.",
          "Connect volatility to risk sizing.",
          "Account for regime-dependent correlations.",
        ],
        practicePlan: [
          "Week 1: volatility measures.",
          "Week 2: intermarket analysis.",
          "Week 3: regimes, risk sizing, and application MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level II curriculum.",
          "Murphy — Intermarket Analysis (reference).",
        ],
      }),
      courseware({
        moduleId: "cmt-l2-m4",
        examId: "cmt",
        levelId: "l2",
        title: "Relative strength & sector/asset rotation",
        examFormat:
          "MCQs on relative strength analysis and rotation strategies.",
        estimatedStudyHours: 18,
        overview:
          "This module covers relative strength (comparative, not RSI) and its use in sector and asset rotation strategies — identifying leaders and laggards to allocate toward outperforming areas.",
        whyItMatters:
          "Relative strength is one of the most robust technical phenomena and the basis for momentum and rotation strategies used by professionals. It is a key Level II application.",
        learningOutcomes: [
          "Distinguish comparative relative strength from RSI.",
          "Compute and interpret relative-strength ratios.",
          "Identify leaders and laggards.",
          "Apply sector and asset rotation strategies.",
          "Explain the momentum evidence behind relative strength.",
          "Integrate relative strength into allocation decisions.",
        ],
        syllabusAreas: [
          area(
            "Relative strength concepts",
            [
              "Comparative relative strength vs RSI",
              "Relative-strength ratios and charts",
              "Leaders and laggards",
            ],
            "40–45%"
          ),
          area(
            "Rotation strategies",
            [
              "Sector rotation",
              "Asset-class rotation",
              "Rotation and the business cycle",
            ],
            "35–40%"
          ),
          area(
            "Application",
            [
              "Momentum evidence",
              "Allocation integration",
              "Risks and limits",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m4-l1",
            "Relative strength fundamentals",
            50,
            ["Compute relative strength", "Distinguish from RSI"],
            [
              "Comparative relative strength ratios one asset against another or a benchmark.",
              "A rising ratio means outperformance.",
              "This differs from the RSI oscillator.",
              "Relative strength identifies leadership.",
            ],
            [
              "What does a rising relative-strength ratio indicate?",
              "How does relative strength differ from RSI?",
            ]
          ),
          lesson(
            "cmt-l2-m4-l2",
            "Identifying leaders and laggards",
            45,
            ["Rank by strength", "Select leaders"],
            [
              "Ranking assets by relative strength highlights leaders.",
              "Leaders tend to persist (momentum).",
              "Laggards may continue to underperform.",
              "Rotate toward strength and away from weakness.",
            ],
            [
              "Why do relative-strength leaders tend to persist?",
              "How is a rotation decision informed by rankings?",
            ]
          ),
          lesson(
            "cmt-l2-m4-l3",
            "Sector rotation",
            45,
            ["Apply sector rotation", "Link to the cycle"],
            [
              "Sector leadership shifts across the business cycle.",
              "Cyclical sectors lead in expansions; defensives in downturns.",
              "Relative strength times sector rotation.",
              "Rotation captures leadership changes.",
            ],
            [
              "Which sectors tend to lead in an expansion?",
              "How does relative strength support sector rotation?",
            ],
            "As the cycle matures, relative strength may shift from early-cycle cyclicals toward late-cycle sectors like energy, guiding a rotation of capital toward emerging leaders."
          ),
          lesson(
            "cmt-l2-m4-l4",
            "Asset-class rotation",
            40,
            ["Rotate across assets", "Apply momentum"],
            [
              "Relative strength applies across asset classes (stocks, bonds, commodities).",
              "Momentum-based rotation allocates to strongest classes.",
              "Diversification and risk limits still apply.",
              "Rotation adapts to changing leadership.",
            ],
            [
              "How does asset-class rotation use relative strength?",
              "What risk controls should accompany rotation?",
            ]
          ),
          lesson(
            "cmt-l2-m4-l5",
            "Evidence and limits",
            30,
            ["Cite momentum evidence", "Recognise limits"],
            [
              "Momentum/relative strength has strong empirical support.",
              "It can suffer sharp reversals (momentum crashes).",
              "Transaction costs affect rotation strategies.",
              "Combine with risk management.",
            ],
            [
              "What is a momentum crash?",
              "How do transaction costs affect rotation?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Relative strength ratio = asset price ÷ benchmark price.",
          "Rising ratio = outperformance; falling = underperformance.",
          "Rotation rule: overweight leaders, underweight laggards.",
          "Momentum persists but is subject to sharp reversals.",
        ],
        commonTraps: [
          "Confusing comparative relative strength with RSI.",
          "Chasing leaders without risk controls.",
          "Ignoring momentum-crash risk.",
          "Overlooking transaction costs in frequent rotation.",
        ],
        examTechnique: [
          "Interpret relative-strength ratios directionally.",
          "Link sector leadership to the cycle.",
          "Note momentum's risks in application answers.",
        ],
        practicePlan: [
          "Week 1: relative-strength concepts.",
          "Week 2: sector and asset rotation.",
          "Week 3: evidence, limits, and application MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level II curriculum.",
          "Relative strength and momentum research.",
        ],
      }),
      courseware({
        moduleId: "cmt-l2-m5",
        examId: "cmt",
        levelId: "l2",
        title: "Portfolio applications of technical analysis",
        examFormat:
          "MCQs on applying technical analysis to portfolio construction and management.",
        estimatedStudyHours: 18,
        overview:
          "This module applies technical analysis at the portfolio level: security selection, timing, diversification, and combining technical signals with portfolio construction principles.",
        whyItMatters:
          "Professional technicians work within portfolios, not just single trades. Applying technical analysis to allocation and risk at the portfolio level is a key Level II competency.",
        learningOutcomes: [
          "Apply technical analysis to security selection.",
          "Use technicals for portfolio timing and allocation.",
          "Combine technical signals with diversification.",
          "Manage portfolio-level risk technically.",
          "Integrate relative strength into portfolio construction.",
          "Balance technical signals with portfolio constraints.",
        ],
        syllabusAreas: [
          area(
            "Selection and timing",
            [
              "Technical security selection",
              "Entry/exit timing",
              "Screening",
            ],
            "35–40%"
          ),
          area(
            "Construction and allocation",
            [
              "Relative strength in allocation",
              "Diversification with technicals",
              "Rebalancing",
            ],
            "30–35%"
          ),
          area(
            "Portfolio risk",
            [
              "Position sizing",
              "Correlation and concentration",
              "Drawdown control",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m5-l1",
            "Technical security selection",
            45,
            ["Select securities", "Screen technically"],
            [
              "Technical screens filter for trend, momentum, and setups.",
              "Selection combines relative strength and chart quality.",
              "Screening scales analysis across many securities.",
              "Selection feeds portfolio construction.",
            ],
            [
              "What criteria might a technical screen use?",
              "How does relative strength aid selection?",
            ]
          ),
          lesson(
            "cmt-l2-m5-l2",
            "Timing and allocation",
            45,
            ["Time entries/exits", "Allocate technically"],
            [
              "Technicals inform when to add or reduce exposure.",
              "Trend and breadth guide overall allocation.",
              "Timing complements strategic allocation.",
              "Avoid over-trading on noise.",
            ],
            [
              "How can breadth inform overall allocation?",
              "What is the risk of over-timing?",
            ]
          ),
          lesson(
            "cmt-l2-m5-l3",
            "Diversification with technicals",
            40,
            ["Diversify technically", "Manage correlation"],
            [
              "Diversify across uncorrelated leaders, not just labels.",
              "Correlation can rise in stress, concentrating risk.",
              "Relative strength helps rotate exposures.",
              "Balance conviction with diversification.",
            ],
            [
              "Why diversify across uncorrelated positions?",
              "How does correlation behave in stress?",
            ]
          ),
          lesson(
            "cmt-l2-m5-l4",
            "Position sizing and risk",
            45,
            ["Size positions", "Control drawdown"],
            [
              "Size positions by volatility and conviction.",
              "Limit single-position and sector concentration.",
              "Portfolio-level stops and drawdown limits protect capital.",
              "Risk control preserves the ability to stay invested.",
            ],
            [
              "How does volatility inform position sizing at the portfolio level?",
              "Why set portfolio-level drawdown limits?",
            ],
            "Scaling each position so that a stop-loss risks a fixed small percentage of the portfolio keeps any single loss contained and stabilises the equity curve."
          ),
          lesson(
            "cmt-l2-m5-l5",
            "Integrating technicals with constraints",
            30,
            ["Balance signals and constraints", "Rebalance"],
            [
              "Technical signals operate within portfolio mandates and constraints.",
              "Rebalancing reconciles signals with targets.",
              "Costs and turnover must be managed.",
              "Discipline prevents signal-chasing.",
            ],
            [
              "How do mandates constrain technical signals?",
              "Why manage turnover in a technical portfolio?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Selection = trend + relative strength + chart quality.",
          "Position size ∝ conviction ÷ volatility.",
          "Diversify by correlation, not labels.",
          "Portfolio risk = concentration + correlation + drawdown control.",
        ],
        commonTraps: [
          "Over-trading on short-term noise.",
          "Concentrating in correlated leaders.",
          "Ignoring costs and turnover.",
          "Letting signals override risk limits.",
        ],
        examTechnique: [
          "Apply signals within portfolio constraints.",
          "Size positions by volatility and conviction.",
          "Address correlation and concentration risk.",
        ],
        practicePlan: [
          "Week 1: selection and timing.",
          "Week 2: construction and diversification.",
          "Week 3: risk, integration, and application MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level II curriculum.",
          "Portfolio management references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l2-m6",
        examId: "cmt",
        levelId: "l2",
        title: "Risk management rules for technical strategies",
        examFormat:
          "MCQs on risk management, stops, and money-management rules for technical trading.",
        estimatedStudyHours: 18,
        overview:
          "This module covers risk management for technical strategies: stop-loss placement, position sizing, risk-reward ratios, and money-management rules that protect capital and enable long-term survival.",
        whyItMatters:
          "Risk management, not signal generation, determines long-term survival. Level II emphasises disciplined rules that turn an edge into sustained results.",
        learningOutcomes: [
          "Place stops using technical and volatility methods.",
          "Apply position-sizing and money-management rules.",
          "Compute and use risk-reward ratios.",
          "Manage drawdowns and preserve capital.",
          "Explain the mathematics of risk of ruin.",
          "Design disciplined risk rules for a strategy.",
        ],
        syllabusAreas: [
          area(
            "Stops and exits",
            [
              "Technical and volatility-based stops",
              "Trailing stops",
              "Exit discipline",
            ],
            "35–40%"
          ),
          area(
            "Position sizing and money management",
            [
              "Fixed-fractional sizing",
              "Risk per trade",
              "Risk-reward ratios",
            ],
            "35–40%"
          ),
          area(
            "Capital preservation",
            [
              "Drawdown management",
              "Risk of ruin",
              "Discipline",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m6-l1",
            "Stop-loss placement",
            45,
            ["Place stops", "Use volatility stops"],
            [
              "Stops limit losses and define risk per trade.",
              "Technical stops sit beyond support/resistance.",
              "Volatility (ATR) stops adapt to conditions.",
              "Trailing stops protect profits.",
            ],
            [
              "Where should a technical stop be placed?",
              "How does a volatility-based stop adapt?",
            ]
          ),
          lesson(
            "cmt-l2-m6-l2",
            "Position sizing",
            50,
            ["Size positions", "Apply fixed-fractional"],
            [
              "Fixed-fractional sizing risks a set percentage per trade.",
              "Size = risk capital ÷ (entry − stop distance).",
              "Consistent sizing controls the impact of any loss.",
              "Sizing links stops to portfolio risk.",
            ],
            [
              "How is position size derived from stop distance?",
              "What does fixed-fractional sizing control?",
            ],
            "Risking 1% of a $100,000 account ($1,000) with a $2 stop distance sets position size at 500 shares — sizing directly from risk, not intuition."
          ),
          lesson(
            "cmt-l2-m6-l3",
            "Risk-reward ratios",
            40,
            ["Compute risk-reward", "Apply to selection"],
            [
              "Risk-reward compares potential loss to potential gain.",
              "Favourable ratios allow profitability at lower win rates.",
              "Only take trades with acceptable risk-reward.",
              "Combine win rate and risk-reward for expectancy.",
            ],
            [
              "How does risk-reward relate to required win rate?",
              "What is trade expectancy?",
            ]
          ),
          lesson(
            "cmt-l2-m6-l4",
            "Drawdown and risk of ruin",
            40,
            ["Manage drawdowns", "Understand risk of ruin"],
            [
              "Drawdowns are inevitable; controlling their depth is key.",
              "Risk of ruin rises with larger per-trade risk.",
              "Recovering from deep drawdowns requires outsized gains.",
              "Conservative sizing reduces ruin probability.",
            ],
            [
              "Why does larger per-trade risk raise the risk of ruin?",
              "Why are deep drawdowns hard to recover from?",
            ]
          ),
          lesson(
            "cmt-l2-m6-l5",
            "Discipline and rules",
            30,
            ["Design rules", "Maintain discipline"],
            [
              "Predefined rules remove emotion from decisions.",
              "Consistency turns an edge into results.",
              "Rule-breaking is a leading cause of failure.",
              "Journaling reinforces discipline.",
            ],
            [
              "Why predefine risk rules?",
              "What is a common cause of trading failure?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Position size = risk capital ÷ stop distance.",
          "Risk-reward = potential loss : potential gain.",
          "Expectancy = (win% × avg win) − (loss% × avg loss).",
          "Risk of ruin rises with per-trade risk and losing streaks.",
        ],
        commonTraps: [
          "Sizing positions by intuition rather than risk.",
          "Trading poor risk-reward setups.",
          "Risking too much per trade.",
          "Abandoning rules under emotion.",
        ],
        examTechnique: [
          "Derive size from stop distance and risk capital.",
          "Compute expectancy from win rate and risk-reward.",
          "Emphasise capital preservation.",
        ],
        practicePlan: [
          "Week 1: stops and exits.",
          "Week 2: position sizing and risk-reward.",
          "Week 3: drawdown, discipline, and application MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level II curriculum.",
          "Money-management references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l2-m7",
        examId: "cmt",
        levelId: "l2",
        title: "System design concepts & objectivity",
        examFormat:
          "MCQs on trading-system design, backtesting, and objectivity.",
        estimatedStudyHours: 18,
        overview:
          "This module covers designing objective, rule-based trading systems: defining rules, backtesting, avoiding curve-fitting, and evaluating system robustness and performance.",
        whyItMatters:
          "Objective systems reduce bias and enable testing. Level II emphasises building and validating systems rigorously — a core professional skill.",
        learningOutcomes: [
          "Define objective, rule-based trading systems.",
          "Backtest systems and interpret results.",
          "Avoid curve-fitting and overoptimisation.",
          "Evaluate system robustness and metrics.",
          "Explain the trade-off between complexity and reliability.",
          "Apply walk-forward and out-of-sample testing.",
        ],
        syllabusAreas: [
          area(
            "System design",
            [
              "Rule definition and objectivity",
              "Entry, exit, and filters",
              "Discretion vs mechanical",
            ],
            "35–40%"
          ),
          area(
            "Backtesting",
            [
              "Backtest design",
              "Performance metrics",
              "Data quality",
            ],
            "35–40%"
          ),
          area(
            "Robustness",
            [
              "Curve-fitting and overoptimisation",
              "Walk-forward and out-of-sample",
              "Robustness testing",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m7-l1",
            "Designing objective systems",
            50,
            ["Define rules", "Ensure objectivity"],
            [
              "A system needs objective entry, exit, and risk rules.",
              "Objectivity enables testing and consistency.",
              "Mechanical systems remove emotion; discretionary add judgement.",
              "Clear rules are testable and repeatable.",
            ],
            [
              "Why must system rules be objective?",
              "What is the trade-off between mechanical and discretionary systems?",
            ]
          ),
          lesson(
            "cmt-l2-m7-l2",
            "Backtesting",
            50,
            ["Design backtests", "Interpret metrics"],
            [
              "Backtesting evaluates rules on historical data.",
              "Key metrics: return, drawdown, win rate, expectancy, and risk-adjusted ratios.",
              "Data quality (splits, dividends, survivorship) matters.",
              "Backtests estimate, not guarantee, future results.",
            ],
            [
              "What metrics summarise a backtest?",
              "Why does data quality affect backtests?",
            ]
          ),
          lesson(
            "cmt-l2-m7-l3",
            "Curve-fitting and overoptimisation",
            45,
            ["Avoid curve-fitting", "Detect overoptimisation"],
            [
              "Curve-fitting tailors a system to past noise.",
              "Too many parameters overfit and fail live.",
              "Impressive in-sample results can be illusory.",
              "Simplicity improves out-of-sample reliability.",
            ],
            [
              "What is curve-fitting?",
              "Why do overfit systems fail live?",
            ],
            "A system optimised to hit exactly the best historical parameters may show a stellar backtest but collapse in live trading because it fit noise, not a durable edge."
          ),
          lesson(
            "cmt-l2-m7-l4",
            "Walk-forward and out-of-sample testing",
            40,
            ["Apply walk-forward", "Validate robustly"],
            [
              "Out-of-sample testing checks on unseen data.",
              "Walk-forward re-optimises and tests sequentially.",
              "These methods estimate real-world performance.",
              "Robust systems perform across periods.",
            ],
            [
              "How does walk-forward testing work?",
              "Why test on out-of-sample data?",
            ]
          ),
          lesson(
            "cmt-l2-m7-l5",
            "Robustness and evaluation",
            30,
            ["Assess robustness", "Evaluate systems"],
            [
              "Robust systems tolerate parameter and market changes.",
              "Test across markets and regimes.",
              "Prefer stable performance over peak returns.",
              "Ongoing monitoring detects degradation.",
            ],
            [
              "What makes a system robust?",
              "Why prefer stability over peak backtest returns?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "System = objective entry + exit + risk rules.",
          "Backtest metrics: return, drawdown, win rate, expectancy, Sharpe.",
          "Validation: in-sample → out-of-sample → walk-forward.",
          "Robustness > optimisation (avoid curve-fitting).",
        ],
        commonTraps: [
          "Overoptimising to historical data.",
          "Trusting in-sample results alone.",
          "Ignoring data-quality issues.",
          "Adding parameters that overfit.",
        ],
        examTechnique: [
          "Emphasise objectivity and validation.",
          "Flag curve-fitting risks.",
          "Prefer robust, simple systems.",
        ],
        practicePlan: [
          "Week 1: system design and objectivity.",
          "Week 2: backtesting and metrics.",
          "Week 3: robustness, validation, and application MCQs.",
        ],
        furtherReading: [
          "CMT Association — Level II curriculum.",
          "Trading-system design references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l2-m8",
        examId: "cmt",
        levelId: "l2",
        title: "Ethics for CMT candidates",
        examFormat:
          "MCQs on the CMT Association Code of Ethics and professional standards.",
        estimatedStudyHours: 14,
        overview:
          "This module covers the CMT Association's Code of Ethics and Standards of Professional Conduct, applying ethical principles to technical analysis and client relationships.",
        whyItMatters:
          "Ethics protects the profession's integrity and is a tested component at Level II. Applying standards to technical practice is essential to professional conduct.",
        learningOutcomes: [
          "State the CMT Association Code of Ethics.",
          "Apply standards of professional conduct.",
          "Identify ethical issues in technical analysis and advice.",
          "Explain disclosure and conflict-of-interest requirements.",
          "Apply proper use of the CMT designation.",
          "Resolve ethical dilemmas using the standards.",
        ],
        syllabusAreas: [
          area(
            "Code and standards",
            [
              "Code of Ethics",
              "Standards of professional conduct",
              "Integrity and competence",
            ],
            "45–50%"
          ),
          area(
            "Application",
            [
              "Ethics in analysis and advice",
              "Conflicts and disclosure",
              "Client duties",
            ],
            "30–35%"
          ),
          area(
            "Designation and dilemmas",
            [
              "Use of the CMT designation",
              "Resolving dilemmas",
              "Consequences",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l2-m8-l1",
            "The Code of Ethics",
            45,
            ["Recall the Code", "Apply principles"],
            [
              "The Code requires integrity, competence, and professionalism.",
              "Members must act honestly and in clients' interests.",
              "Standards operationalise the Code.",
              "Ethics underpins professional trust.",
            ],
            [
              "What core principles does the Code require?",
              "How do standards relate to the Code?",
            ]
          ),
          lesson(
            "cmt-l2-m8-l2",
            "Ethics in technical analysis",
            45,
            ["Apply ethics to analysis", "Avoid misrepresentation"],
            [
              "Analysis must have a reasonable basis and be presented honestly.",
              "Do not overstate the reliability of technical signals.",
              "Backtests and results must be presented fairly.",
              "Avoid misleading claims.",
            ],
            [
              "Why must technical results be presented fairly?",
              "What is the risk of overstating signal reliability?",
            ]
          ),
          lesson(
            "cmt-l2-m8-l3",
            "Conflicts and disclosure",
            40,
            ["Manage conflicts", "Disclose properly"],
            [
              "Disclose conflicts of interest that could bias advice.",
              "Client interests come before personal interests.",
              "Personal trading must not disadvantage clients.",
              "Transparency preserves trust.",
            ],
            [
              "What conflicts must be disclosed?",
              "How should personal trading be handled?",
            ]
          ),
          lesson(
            "cmt-l2-m8-l4",
            "Use of the designation",
            30,
            ["Use the CMT properly", "Avoid misuse"],
            [
              "The CMT designation must not be misrepresented.",
              "Candidates may state candidacy accurately.",
              "Do not imply guaranteed performance.",
              "Proper use protects the credential.",
            ],
            [
              "How may a candidate refer to the CMT program?",
              "What claims about performance are improper?",
            ]
          ),
          lesson(
            "cmt-l2-m8-l5",
            "Resolving ethical dilemmas",
            30,
            ["Resolve dilemmas", "Apply the standards"],
            [
              "Identify the standard at issue and the affected parties.",
              "Choose the action consistent with the standards.",
              "Escalate or refuse when necessary.",
              "Document decisions.",
            ],
            [
              "What is the first step in resolving an ethical dilemma?",
              "When should a member refuse to act?",
            ],
            "Asked to publish a bullish report while personally selling the same asset, the ethical response is to refuse the misleading report and disclose the conflict — client interests and honesty come first."
          ),
        ],
        frameworksAndFormulas: [
          "Code principles: integrity, competence, professionalism.",
          "Client-first: interests before personal gain.",
          "Disclosure: reveal conflicts for informed judgement.",
          "Dilemma resolution: identify standard → act → escalate/refuse → document.",
        ],
        commonTraps: [
          "Overstating the reliability of technical signals.",
          "Failing to disclose conflicts.",
          "Misrepresenting the designation.",
          "Prioritising personal over client interests.",
        ],
        examTechnique: [
          "Identify the specific standard in each scenario.",
          "Choose the client-first, honest action.",
          "Recall proper designation use.",
        ],
        practicePlan: [
          "Week 1: Code and standards.",
          "Week 2: application and conflicts.",
          "Week 3: designation, dilemmas, and MCQs.",
        ],
        furtherReading: [
          "CMT Association — Code of Ethics and Standards of Professional Conduct.",
          "CMT Association — Level II curriculum.",
        ],
      }),
    ],
  },
  {
    examId: "cmt",
    levelId: "l3",
    modules: [
      courseware({
        moduleId: "cmt-l3-m1",
        examId: "cmt",
        levelId: "l3",
        title: "Integrating technical analysis into investment process",
        examFormat:
          "CMT Level III: multiple-choice and constructed-response (essay) questions requiring synthesis and integration.",
        estimatedStudyHours: 24,
        overview:
          "This module covers integrating technical analysis into a complete investment process: combining it with fundamental analysis, portfolio management, and decision-making frameworks at a professional level.",
        whyItMatters:
          "Level III tests synthesis and judgement. Integrating technicals into a coherent process — and justifying it in essays — is the culminating professional skill.",
        learningOutcomes: [
          "Integrate technical analysis into a full investment process.",
          "Combine technical and fundamental perspectives.",
          "Apply technicals within portfolio management.",
          "Justify technical decisions in written form.",
          "Design a repeatable analytical framework.",
          "Balance multiple inputs into coherent recommendations.",
        ],
        syllabusAreas: [
          area(
            "Integrated process",
            [
              "Combining technical and fundamental",
              "Top-down and bottom-up integration",
              "Decision frameworks",
            ],
            "40–45%"
          ),
          area(
            "Portfolio integration",
            [
              "Technicals in allocation and selection",
              "Risk integration",
              "Process consistency",
            ],
            "30–35%"
          ),
          area(
            "Synthesis and communication",
            [
              "Justifying decisions",
              "Constructed-response technique",
              "Coherent recommendations",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l3-m1-l1",
            "Combining technical and fundamental analysis",
            50,
            ["Integrate perspectives", "Resolve conflicts"],
            [
              "Fundamentals identify what to own; technicals identify when.",
              "Integration improves timing and conviction.",
              "Conflicts require judgement and prioritisation.",
              "A coherent view synthesises both.",
            ],
            [
              "How do fundamentals and technicals complement each other?",
              "How should conflicts between them be resolved?",
            ]
          ),
          lesson(
            "cmt-l3-m1-l2",
            "Building an integrated process",
            50,
            ["Design a process", "Ensure consistency"],
            [
              "A repeatable process defines inputs, analysis, and decisions.",
              "Top-down context and bottom-up selection combine.",
              "Consistency reduces bias and error.",
              "Document the framework.",
            ],
            [
              "Why is a repeatable process important?",
              "How do top-down and bottom-up analysis combine?",
            ]
          ),
          lesson(
            "cmt-l3-m1-l3",
            "Technicals in portfolio management",
            45,
            ["Apply to portfolios", "Integrate risk"],
            [
              "Technicals inform allocation, selection, and timing within mandates.",
              "Risk management is integral, not an afterthought.",
              "Portfolio-level view prevents single-trade focus.",
              "Integration aligns technicals with objectives.",
            ],
            [
              "How do technicals fit within portfolio mandates?",
              "Why integrate risk from the start?",
            ]
          ),
          lesson(
            "cmt-l3-m1-l4",
            "Justifying decisions in writing",
            45,
            ["Write justifications", "Structure essays"],
            [
              "Essays must present evidence and reasoning clearly.",
              "State the technical rationale and its integration.",
              "Address counter-evidence and risks.",
              "Conclude with a clear recommendation.",
            ],
            [
              "What should a written justification include?",
              "Why address counter-evidence?",
            ],
            "A strong Level III essay states the technical setup, integrates fundamental and risk context, acknowledges the bear case, and closes with a specific, justified recommendation."
          ),
          lesson(
            "cmt-l3-m1-l5",
            "Coherent recommendations",
            30,
            ["Synthesise inputs", "Recommend clearly"],
            [
              "Synthesise multiple inputs into one coherent view.",
              "Avoid contradictory signals in a recommendation.",
              "Prioritise the strongest evidence.",
              "Communicate with clarity and conviction.",
            ],
            [
              "How do you synthesise conflicting inputs?",
              "What makes a recommendation coherent?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Integration: fundamentals (what) + technicals (when) + risk (how much).",
          "Process: inputs → analysis → decision → review.",
          "Essay structure: rationale → integration → risks → recommendation.",
          "Coherence: prioritise strongest evidence, avoid contradiction.",
        ],
        commonTraps: [
          "Presenting technicals in isolation from the process.",
          "Ignoring conflicting evidence in essays.",
          "Inconsistent, ad-hoc analysis.",
          "Vague recommendations.",
        ],
        examTechnique: [
          "Structure essays with rationale, integration, risks, and conclusion.",
          "Prioritise evidence and be decisive.",
          "Show integration, not siloed analysis.",
        ],
        practicePlan: [
          "Week 1: integrating technical and fundamental analysis.",
          "Week 2: process design and portfolio integration.",
          "Week 3: constructed-response practice.",
        ],
        furtherReading: [
          "CMT Association — Level III curriculum.",
          "Investment-process references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l3-m2",
        examId: "cmt",
        levelId: "l3",
        title: "Advanced money management & position sizing",
        examFormat:
          "Multiple-choice and constructed-response on advanced money management and sizing.",
        estimatedStudyHours: 22,
        overview:
          "This module covers advanced money management: optimal position sizing, portfolio heat, correlation-adjusted sizing, and managing risk across a portfolio of positions and strategies.",
        whyItMatters:
          "Advanced money management maximises growth while controlling risk of ruin. At Level III, sizing decisions are portfolio-wide and central to long-term performance.",
        learningOutcomes: [
          "Apply advanced position-sizing methods.",
          "Manage portfolio heat and aggregate risk.",
          "Adjust sizing for correlation among positions.",
          "Explain optimal-f and Kelly concepts and their limits.",
          "Balance growth and drawdown objectives.",
          "Design portfolio-level money-management rules.",
        ],
        syllabusAreas: [
          area(
            "Position sizing methods",
            [
              "Fixed-fractional and fixed-ratio",
              "Kelly and optimal-f (and their limits)",
              "Volatility-based sizing",
            ],
            "40–45%"
          ),
          area(
            "Portfolio risk",
            [
              "Portfolio heat and aggregate risk",
              "Correlation-adjusted sizing",
              "Concentration limits",
            ],
            "30–35%"
          ),
          area(
            "Growth vs drawdown",
            [
              "Geometric growth and drawdown",
              "Risk of ruin",
              "Practical constraints",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l3-m2-l1",
            "Advanced sizing methods",
            50,
            ["Apply sizing methods", "Compare approaches"],
            [
              "Fixed-fractional risks a set percentage; fixed-ratio scales with equity.",
              "Volatility-based sizing normalises risk across positions.",
              "Method choice affects growth and drawdown.",
              "Sizing is a primary performance driver.",
            ],
            [
              "How does fixed-ratio sizing differ from fixed-fractional?",
              "Why normalise sizing by volatility?",
            ]
          ),
          lesson(
            "cmt-l3-m2-l2",
            "Kelly and optimal-f",
            50,
            ["Explain Kelly", "State limits"],
            [
              "The Kelly criterion maximises long-run geometric growth.",
              "Full Kelly is highly volatile; fractional Kelly reduces risk.",
              "Optimal-f similarly maximises growth from historical results.",
              "These methods are sensitive to input errors.",
            ],
            [
              "What does the Kelly criterion maximise?",
              "Why do practitioners use fractional Kelly?",
            ],
            "Full Kelly can prescribe uncomfortably large bets and deep drawdowns; using half-Kelly captures most of the growth with far lower volatility, which is why practitioners scale it down."
          ),
          lesson(
            "cmt-l3-m2-l3",
            "Portfolio heat and correlation",
            45,
            ["Manage portfolio heat", "Adjust for correlation"],
            [
              "Portfolio heat is total risk across open positions.",
              "Correlated positions increase aggregate risk beyond the sum of parts.",
              "Cap total heat and adjust sizing for correlation.",
              "Diversification reduces effective risk.",
            ],
            [
              "What is portfolio heat?",
              "Why adjust sizing for correlation?",
            ]
          ),
          lesson(
            "cmt-l3-m2-l4",
            "Growth versus drawdown",
            40,
            ["Balance objectives", "Manage drawdown"],
            [
              "Geometric growth depends on avoiding large drawdowns.",
              "Aggressive sizing raises growth but also ruin risk.",
              "Drawdown tolerance constrains optimal sizing.",
              "Balance return and survivability.",
            ],
            [
              "Why do large drawdowns hurt geometric growth?",
              "How does drawdown tolerance constrain sizing?",
            ]
          ),
          lesson(
            "cmt-l3-m2-l5",
            "Designing money-management rules",
            30,
            ["Design rules", "Apply constraints"],
            [
              "Portfolio-level rules cap heat, correlation, and drawdown.",
              "Rules should be robust to input uncertainty.",
              "Practical constraints (liquidity, mandates) apply.",
              "Discipline sustains the edge.",
            ],
            [
              "What should portfolio-level money-management rules cap?",
              "Why must sizing rules be robust to input uncertainty?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Fixed-fractional: risk a set % per trade.",
          "Kelly fraction = edge ÷ odds (maximises geometric growth).",
          "Portfolio heat = sum of at-risk amounts (correlation-adjusted).",
          "Growth depends on avoiding deep drawdowns.",
        ],
        commonTraps: [
          "Using full Kelly and enduring extreme drawdowns.",
          "Ignoring correlation in aggregate risk.",
          "Trusting optimal-f despite input sensitivity.",
          "Maximising growth without survivability.",
        ],
        examTechnique: [
          "Explain sizing methods and their limits.",
          "Account for correlation in portfolio risk.",
          "Balance growth against drawdown in answers.",
        ],
        practicePlan: [
          "Week 1: sizing methods and Kelly.",
          "Week 2: portfolio heat and correlation.",
          "Week 3: growth-drawdown balance and constructed-response.",
        ],
        furtherReading: [
          "CMT Association — Level III curriculum.",
          "Money-management and Kelly-criterion references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l3-m3",
        examId: "cmt",
        levelId: "l3",
        title: "Developing, testing & implementing trading systems",
        examFormat:
          "Multiple-choice and constructed-response on system development, testing, and implementation.",
        estimatedStudyHours: 24,
        overview:
          "This module covers the full lifecycle of a trading system at a professional level: development, rigorous testing, implementation, and ongoing monitoring, with emphasis on robustness and realistic assumptions.",
        whyItMatters:
          "Level III requires the ability to develop and defend a complete, robust system. Realistic testing and disciplined implementation separate durable systems from backtest illusions.",
        learningOutcomes: [
          "Develop a complete, objective trading system.",
          "Test systems with realistic assumptions.",
          "Account for costs, slippage, and capacity.",
          "Implement systems with proper controls.",
          "Monitor and adapt systems over time.",
          "Defend system design choices in writing.",
        ],
        syllabusAreas: [
          area(
            "Development",
            [
              "Hypothesis and rule design",
              "Objectivity and simplicity",
              "System components",
            ],
            "35–40%"
          ),
          area(
            "Testing",
            [
              "Realistic backtesting",
              "Costs, slippage, capacity",
              "Robustness and validation",
            ],
            "35–40%"
          ),
          area(
            "Implementation",
            [
              "Execution and controls",
              "Monitoring and degradation",
              "Adaptation",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l3-m3-l1",
            "System development",
            50,
            ["Develop systems", "Design objectively"],
            [
              "Start from a sound hypothesis, not curve-fitting.",
              "Define objective entry, exit, and risk rules.",
              "Prefer simplicity and economic rationale.",
              "Components must work together coherently.",
            ],
            [
              "Why start system design from a hypothesis?",
              "Why prefer simplicity in design?",
            ]
          ),
          lesson(
            "cmt-l3-m3-l2",
            "Realistic testing",
            55,
            ["Test realistically", "Include frictions"],
            [
              "Backtests must include commissions, slippage, and realistic fills.",
              "Ignoring costs overstates performance.",
              "Capacity limits affect scalability.",
              "Validate out-of-sample and walk-forward.",
            ],
            [
              "Why include slippage and costs in backtests?",
              "How do capacity limits affect a system?",
            ],
            "A high-frequency signal that looks profitable gross may be unprofitable after realistic slippage and commissions — testing must include frictions to avoid a false edge."
          ),
          lesson(
            "cmt-l3-m3-l3",
            "Robustness and validation",
            45,
            ["Assess robustness", "Validate rigorously"],
            [
              "Robust systems perform across markets and regimes.",
              "Sensitivity analysis checks parameter stability.",
              "Out-of-sample and walk-forward confirm reliability.",
              "Avoid overfitting.",
            ],
            [
              "How is robustness assessed?",
              "Why run sensitivity analysis on parameters?",
            ]
          ),
          lesson(
            "cmt-l3-m3-l4",
            "Implementation",
            40,
            ["Implement systems", "Apply controls"],
            [
              "Execution quality affects live results.",
              "Controls prevent errors and manage risk.",
              "Discipline follows the system's rules.",
              "Live results may differ from backtests.",
            ],
            [
              "Why does execution quality matter?",
              "What controls support live implementation?",
            ]
          ),
          lesson(
            "cmt-l3-m3-l5",
            "Monitoring and adaptation",
            30,
            ["Monitor systems", "Adapt appropriately"],
            [
              "Monitor for performance degradation and regime change.",
              "Distinguish normal drawdowns from genuine breakdown.",
              "Adapt or retire systems when their edge fades.",
              "Avoid overreacting to noise.",
            ],
            [
              "How do you distinguish a drawdown from system breakdown?",
              "When should a system be retired?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Lifecycle: hypothesis → develop → test → implement → monitor.",
          "Realistic backtest = gross results − costs − slippage (with capacity limits).",
          "Validation: out-of-sample + walk-forward + sensitivity.",
          "Monitor: normal drawdown vs genuine degradation.",
        ],
        commonTraps: [
          "Backtesting without costs and slippage.",
          "Overfitting during development.",
          "Ignoring capacity limits.",
          "Overreacting to normal drawdowns.",
        ],
        examTechnique: [
          "Emphasise realistic assumptions in testing.",
          "Defend design choices with rationale.",
          "Distinguish drawdown from breakdown.",
        ],
        practicePlan: [
          "Week 1: development and design.",
          "Week 2: realistic testing and robustness.",
          "Week 3: implementation, monitoring, and constructed-response.",
        ],
        furtherReading: [
          "CMT Association — Level III curriculum.",
          "Trading-system development references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l3-m4",
        examId: "cmt",
        levelId: "l3",
        title: "Performance measurement of technical strategies",
        examFormat:
          "Multiple-choice and constructed-response on measuring and attributing strategy performance.",
        estimatedStudyHours: 20,
        overview:
          "This module covers measuring the performance of technical strategies: risk-adjusted return metrics, benchmarking, attribution, and evaluating whether results reflect skill or luck.",
        whyItMatters:
          "Honest performance measurement is essential to evaluate and communicate strategy value. Level III expects rigorous, risk-adjusted, skill-versus-luck evaluation.",
        learningOutcomes: [
          "Compute and interpret risk-adjusted performance measures.",
          "Select appropriate benchmarks.",
          "Attribute performance to sources.",
          "Distinguish skill from luck statistically.",
          "Evaluate drawdown and consistency.",
          "Communicate performance honestly.",
        ],
        syllabusAreas: [
          area(
            "Performance metrics",
            [
              "Sharpe, Sortino, Calmar",
              "Drawdown and consistency measures",
              "Risk-adjusted evaluation",
            ],
            "40–45%"
          ),
          area(
            "Benchmarking and attribution",
            [
              "Benchmark selection",
              "Attribution",
              "Alpha vs beta",
            ],
            "30–35%"
          ),
          area(
            "Skill vs luck",
            [
              "Statistical significance of results",
              "Sample size and time",
              "Honest communication",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l3-m4-l1",
            "Risk-adjusted performance measures",
            50,
            ["Compute measures", "Interpret them"],
            [
              "Sharpe uses total risk; Sortino uses downside risk; Calmar uses drawdown.",
              "Each measure emphasises a different risk dimension.",
              "Risk-adjusted returns are more meaningful than raw returns.",
              "Choose the measure fitting the strategy.",
            ],
            [
              "How do Sharpe and Sortino differ?",
              "Why use risk-adjusted rather than raw returns?",
            ]
          ),
          lesson(
            "cmt-l3-m4-l2",
            "Drawdown and consistency",
            40,
            ["Evaluate drawdown", "Assess consistency"],
            [
              "Maximum drawdown captures worst-case pain.",
              "Consistency (e.g. rolling returns) reflects reliability.",
              "Recovery time matters for practical use.",
              "Consistent, moderate returns can beat volatile high returns.",
            ],
            [
              "Why is maximum drawdown an important measure?",
              "Why can consistency outweigh peak returns?",
            ]
          ),
          lesson(
            "cmt-l3-m4-l3",
            "Benchmarking and attribution",
            45,
            ["Select benchmarks", "Attribute performance"],
            [
              "Benchmarks should match the strategy's universe and risk.",
              "Attribution separates market beta from skill (alpha).",
              "Inappropriate benchmarks mislead evaluation.",
              "Attribution clarifies the source of returns.",
            ],
            [
              "What makes a benchmark appropriate?",
              "What does attribution separate?",
            ],
            "A long/short technical strategy should be judged against a suitable benchmark and have its returns attributed to market beta versus genuine timing skill, not compared naively to a long-only index."
          ),
          lesson(
            "cmt-l3-m4-l4",
            "Skill versus luck",
            40,
            ["Assess significance", "Consider sample size"],
            [
              "Short records provide weak evidence of skill.",
              "Statistical tests assess whether results exceed chance.",
              "Larger samples increase confidence.",
              "Luck can masquerade as skill over short periods.",
            ],
            [
              "Why is a short track record weak evidence of skill?",
              "How does sample size affect confidence?",
            ]
          ),
          lesson(
            "cmt-l3-m4-l5",
            "Honest communication",
            30,
            ["Communicate honestly", "Avoid distortion"],
            [
              "Present net, risk-adjusted results without cherry-picking.",
              "Disclose assumptions and limitations.",
              "Avoid misleading performance claims.",
              "Honesty aligns with ethical standards.",
            ],
            [
              "Why present net, risk-adjusted results?",
              "What must be disclosed with performance figures?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Sharpe = (return − risk-free) ÷ total risk; Sortino uses downside risk.",
          "Calmar = return ÷ maximum drawdown.",
          "Attribution: return = beta contribution + alpha (skill).",
          "Skill significance rises with sample size.",
        ],
        commonTraps: [
          "Judging strategies on raw, not risk-adjusted, returns.",
          "Using inappropriate benchmarks.",
          "Overstating skill from short records.",
          "Cherry-picking favourable periods.",
        ],
        examTechnique: [
          "Select the risk measure that fits the strategy.",
          "Attribute returns to beta versus alpha.",
          "Temper skill claims by sample size.",
        ],
        practicePlan: [
          "Week 1: risk-adjusted measures and drawdown.",
          "Week 2: benchmarking and attribution.",
          "Week 3: skill-vs-luck and constructed-response.",
        ],
        furtherReading: [
          "CMT Association — Level III curriculum.",
          "Performance-measurement references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l3-m5",
        examId: "cmt",
        levelId: "l3",
        title: "Communicating technical views to clients/PMs",
        examFormat:
          "Multiple-choice and constructed-response on communicating analysis effectively.",
        estimatedStudyHours: 18,
        overview:
          "This module covers communicating technical analysis to clients and portfolio managers: structuring reports, tailoring to the audience, conveying probability and risk, and writing persuasive, honest recommendations.",
        whyItMatters:
          "Analysis has no value if it cannot be communicated and acted upon. Level III emphasises professional communication, including written recommendations under exam conditions.",
        learningOutcomes: [
          "Structure clear technical reports and recommendations.",
          "Tailor communication to different audiences.",
          "Convey probability, uncertainty, and risk honestly.",
          "Use visuals effectively to support analysis.",
          "Write persuasive, evidence-based recommendations.",
          "Handle disagreement and challenge professionally.",
        ],
        syllabusAreas: [
          area(
            "Structuring communication",
            [
              "Report structure",
              "Executive summary and detail",
              "Visuals and charts",
            ],
            "35–40%"
          ),
          area(
            "Audience and tone",
            [
              "Tailoring to clients vs PMs",
              "Conveying probability and risk",
              "Persuasion and honesty",
            ],
            "35–40%"
          ),
          area(
            "Handling challenge",
            [
              "Responding to disagreement",
              "Managing expectations",
              "Professional conduct",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l3-m5-l1",
            "Structuring reports",
            50,
            ["Structure reports", "Lead with conclusions"],
            [
              "Lead with a clear conclusion, then support it.",
              "Structure: summary → evidence → risks → recommendation.",
              "Concise, organised reports aid decisions.",
              "Support claims with charts and data.",
            ],
            [
              "Why lead a report with the conclusion?",
              "What structure supports clear communication?",
            ]
          ),
          lesson(
            "cmt-l3-m5-l2",
            "Tailoring to the audience",
            45,
            ["Tailor communication", "Adjust detail"],
            [
              "Clients need plain language; PMs may want more technical depth.",
              "Match detail and jargon to the audience.",
              "Understand the audience's decisions and needs.",
              "Effective communication is audience-centred.",
            ],
            [
              "How does communication differ for clients versus PMs?",
              "Why tailor detail to the audience?",
            ]
          ),
          lesson(
            "cmt-l3-m5-l3",
            "Conveying probability and risk",
            45,
            ["Convey uncertainty", "Frame risk honestly"],
            [
              "Present views as probabilities, not certainties.",
              "State the risks and what would invalidate the view.",
              "Avoid overconfidence and false precision.",
              "Honest framing builds credibility.",
            ],
            [
              "Why present views as probabilities?",
              "What should accompany a recommendation regarding risk?",
            ],
            "A credible technical recommendation states the setup, the probability-based expectation, the invalidation level (where the thesis is wrong), and the risk — not a guaranteed forecast."
          ),
          lesson(
            "cmt-l3-m5-l4",
            "Using visuals",
            30,
            ["Use charts", "Support with visuals"],
            [
              "Charts communicate technical evidence efficiently.",
              "Annotate visuals to highlight key points.",
              "Avoid clutter and misleading scales.",
              "Visuals should reinforce, not replace, reasoning.",
            ],
            [
              "How should charts be used in reports?",
              "What visual pitfalls should be avoided?",
            ]
          ),
          lesson(
            "cmt-l3-m5-l5",
            "Handling disagreement",
            30,
            ["Respond to challenge", "Manage expectations"],
            [
              "Respond to disagreement with evidence, not defensiveness.",
              "Acknowledge uncertainty and alternative views.",
              "Manage expectations about outcomes.",
              "Maintain professionalism.",
            ],
            [
              "How should you respond to disagreement?",
              "Why manage client expectations?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Report structure: summary → evidence → risks → recommendation.",
          "Audience tuning: plain (clients) vs technical (PMs).",
          "Recommendation = view + probability + invalidation level + risk.",
          "Visuals: annotate, avoid clutter and misleading scales.",
        ],
        commonTraps: [
          "Burying the conclusion.",
          "Using jargon inappropriate to the audience.",
          "Presenting views as certainties.",
          "Reacting defensively to challenge.",
        ],
        examTechnique: [
          "Lead with the recommendation.",
          "State probability and invalidation levels.",
          "Tailor tone to the stated audience.",
        ],
        practicePlan: [
          "Week 1: report structure and visuals.",
          "Week 2: audience tailoring and risk framing.",
          "Week 3: handling challenge and constructed-response.",
        ],
        furtherReading: [
          "CMT Association — Level III curriculum.",
          "Professional communication references.",
        ],
      }),
      courseware({
        moduleId: "cmt-l3-m6",
        examId: "cmt",
        levelId: "l3",
        title: "Ethics & professional practice (essay/application)",
        examFormat:
          "Constructed-response (essay) and multiple-choice applying the CMT Code of Ethics to complex scenarios.",
        estimatedStudyHours: 18,
        overview:
          "This module applies the CMT Association Code of Ethics and Standards to complex professional scenarios in essay form, requiring candidates to identify issues, apply standards, and recommend appropriate conduct.",
        whyItMatters:
          "Level III tests applied ethical judgement in writing. Resolving realistic dilemmas and justifying conduct is a decisive professional and exam skill.",
        learningOutcomes: [
          "Apply the Code of Ethics to complex scenarios.",
          "Identify the specific standards at issue.",
          "Recommend appropriate conduct and remedies.",
          "Justify ethical decisions in written form.",
          "Manage conflicts of interest professionally.",
          "Apply ethics to performance reporting and advice.",
        ],
        syllabusAreas: [
          area(
            "Applied ethics",
            [
              "Complex scenario analysis",
              "Identifying standards",
              "Recommending conduct",
            ],
            "45–50%"
          ),
          area(
            "Conflicts and reporting",
            [
              "Conflicts of interest",
              "Fair performance reporting",
              "Client duties",
            ],
            "30–35%"
          ),
          area(
            "Essay technique",
            [
              "Structuring ethics essays",
              "Justification and remedies",
              "Partial credit",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l3-m6-l1",
            "Analysing complex scenarios",
            50,
            ["Analyse scenarios", "Identify standards"],
            [
              "Complex scenarios may involve multiple standards.",
              "Identify each issue and the affected parties.",
              "Apply the relevant standard to each.",
              "Prioritise the most serious issues.",
            ],
            [
              "How do you approach a multi-issue ethics scenario?",
              "Why identify affected parties?",
            ]
          ),
          lesson(
            "cmt-l3-m6-l2",
            "Conflicts of interest",
            45,
            ["Manage conflicts", "Recommend remedies"],
            [
              "Disclose and manage conflicts that could bias advice.",
              "Client interests take priority.",
              "Personal trading must not exploit clients.",
              "Recommend concrete remedies.",
            ],
            [
              "How should a conflict of interest be handled?",
              "What remedies address conflicts?",
            ]
          ),
          lesson(
            "cmt-l3-m6-l3",
            "Fair performance reporting",
            45,
            ["Report fairly", "Avoid misrepresentation"],
            [
              "Performance must be presented fairly and completely.",
              "No cherry-picking or misleading backtests.",
              "Disclose assumptions and limitations.",
              "Honest reporting is an ethical duty.",
            ],
            [
              "What makes performance reporting ethical?",
              "Why disclose backtest assumptions?",
            ],
            "Presenting only the best-performing period of a strategy, or a backtest without costs, misrepresents results and violates the duty to present performance fairly and completely."
          ),
          lesson(
            "cmt-l3-m6-l4",
            "Writing ethics essays",
            40,
            ["Structure essays", "Justify decisions"],
            [
              "State the standard, the violation (if any), and the correct conduct.",
              "Be concise and specific.",
              "Address each part of the prompt.",
              "Recommend remedies where asked.",
            ],
            [
              "What three elements should an ethics essay include?",
              "How do you earn partial credit?",
            ]
          ),
          lesson(
            "cmt-l3-m6-l5",
            "Applying ethics to advice",
            30,
            ["Apply to advice", "Protect clients"],
            [
              "Advice must be suitable and honestly communicated.",
              "Do not overstate technical certainty.",
              "Protect client interests at all times.",
              "Ethical advice sustains trust.",
            ],
            [
              "Why must advice avoid overstating certainty?",
              "How does ethics protect the client relationship?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Scenario approach: identify issues → identify standards → recommend conduct.",
          "Essay structure: standard → violation → correct conduct/remedy.",
          "Conflict handling: avoid → manage → disclose.",
          "Fair reporting: complete, honest, net, with disclosures.",
        ],
        commonTraps: [
          "Spotting issues but not recommending remedies.",
          "Missing sub-parts of a prompt.",
          "Vague, unstructured essays.",
          "Overstating certainty in advice.",
        ],
        examTechnique: [
          "Cite the specific standard for each issue.",
          "Answer every part of the prompt concisely.",
          "Recommend concrete conduct or remedies.",
        ],
        practicePlan: [
          "Week 1: scenario analysis and standards.",
          "Week 2: conflicts and performance reporting.",
          "Week 3: timed ethics essays.",
        ],
        furtherReading: [
          "CMT Association — Code of Ethics and Standards.",
          "CMT Association — Level III curriculum.",
        ],
      }),
      courseware({
        moduleId: "cmt-l3-m7",
        examId: "cmt",
        levelId: "l3",
        title: "Case-based constructed-response practice",
        examFormat:
          "Constructed-response case questions integrating the full Level III curriculum under exam conditions.",
        estimatedStudyHours: 26,
        overview:
          "This capstone module provides integrated, case-based constructed-response practice, synthesising technical analysis, portfolio management, risk, performance, and ethics into complete written answers under time pressure.",
        whyItMatters:
          "The Level III exam rewards integrated, well-written case answers. This module builds the synthesis and exam-technique skills needed to pass the constructed-response format.",
        learningOutcomes: [
          "Integrate the full Level III curriculum into case answers.",
          "Analyse a case and identify the key issues.",
          "Structure complete constructed-response answers.",
          "Justify recommendations with integrated evidence.",
          "Manage time across constructed-response tasks.",
          "Self-assess answers against marking criteria.",
        ],
        syllabusAreas: [
          area(
            "Case integration",
            [
              "Synthesising technical, portfolio, risk, and ethics",
              "Identifying key issues",
              "Coherent analysis",
            ],
            "45–50%"
          ),
          area(
            "Constructed-response technique",
            [
              "Answer structure",
              "Justification and evidence",
              "Time management",
            ],
            "30–35%"
          ),
          area(
            "Self-assessment",
            [
              "Marking criteria",
              "Common weaknesses",
              "Improvement",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cmt-l3-m7-l1",
            "Analysing a case",
            50,
            ["Analyse cases", "Identify issues"],
            [
              "Read the case to identify the key technical, portfolio, and ethical issues.",
              "Prioritise the most important requirements.",
              "Gather relevant evidence from the case.",
              "Plan before writing.",
            ],
            [
              "How do you identify the key issues in a case?",
              "Why plan before writing?",
            ]
          ),
          lesson(
            "cmt-l3-m7-l2",
            "Integrating the curriculum",
            55,
            ["Integrate topics", "Synthesise evidence"],
            [
              "Combine technical analysis, risk, portfolio, and performance concepts.",
              "Address ethics where relevant.",
              "Synthesise into a coherent view.",
              "Integration, not recitation, earns marks.",
            ],
            [
              "Why does integration earn more marks than recitation?",
              "What topics might a single case combine?",
            ],
            "A case might require analysing a chart setup (technical), sizing the position (money management), evaluating the strategy's track record (performance), and addressing a reporting conflict (ethics) — all in one integrated answer."
          ),
          lesson(
            "cmt-l3-m7-l3",
            "Structuring answers",
            50,
            ["Structure responses", "Justify recommendations"],
            [
              "Answer the specific requirement in a clear structure.",
              "State the recommendation and justify with evidence.",
              "Address risks and alternatives.",
              "Be concise and complete.",
            ],
            [
              "What structure suits a constructed-response answer?",
              "Why address risks and alternatives?",
            ]
          ),
          lesson(
            "cmt-l3-m7-l4",
            "Time management",
            40,
            ["Manage time", "Prioritise marks"],
            [
              "Allocate time by mark weighting.",
              "Answer every requirement, at least briefly.",
              "Avoid over-running on one part.",
              "Reserve time to review.",
            ],
            [
              "How should time be allocated in constructed-response exams?",
              "Why answer every requirement?",
            ]
          ),
          lesson(
            "cmt-l3-m7-l5",
            "Self-assessment and improvement",
            40,
            ["Self-assess", "Improve answers"],
            [
              "Compare answers to marking criteria and model answers.",
              "Identify recurring weaknesses.",
              "Refine structure, integration, and concision.",
              "Practice builds exam readiness.",
            ],
            [
              "How can you self-assess constructed-response answers?",
              "What recurring weaknesses should you target?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Case approach: read → identify issues → plan → write → review.",
          "Answer structure: requirement → analysis → recommendation → risks.",
          "Integration lens: technical + risk + portfolio + performance + ethics.",
          "Time allocation proportional to marks.",
        ],
        commonTraps: [
          "Reciting knowledge instead of integrating it.",
          "Missing requirements or sub-parts.",
          "Over-running on one task.",
          "Vague, unstructured answers.",
        ],
        examTechnique: [
          "Plan the answer before writing.",
          "Integrate across the curriculum.",
          "Manage time strictly by marks.",
        ],
        practicePlan: [
          "Weeks 1–2: timed single-case constructed responses.",
          "Weeks 3–4: full mock exams under conditions.",
          "Week 5: self-assessment and targeted improvement.",
        ],
        furtherReading: [
          "CMT Association — Level III past exams and sample answers.",
          "CMT Association — Level III curriculum.",
        ],
      }),
    ],
  },
];
