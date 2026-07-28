# AskFinBots

AI-powered tutoring for top financial qualification exams.

**Website:** [www.askfinbots.com](https://www.askfinbots.com)

## Features

- **10 financial qualification exams:** CFA, FRM, CPA, ACCA, CAIA, CFP, SIE, CIMA, CMT, CFA ESG
- **AI chatbot** with exam-focused answers
- **Gemini** (default) and **DeepSeek** LLM providers, with automatic DeepSeek fallback for mainland China / Gemini outages
- **50 free tokens** for each new user account
- **Token top-up** via Telegram customer service
- **Content moderation:** gently rejects irrelevant questions and profanity
- **Classic glow UI** with gold-on-navy aesthetic
- **Terms of Use** and **Contact Us** pages

## Getting Started

### Prerequisites

- Node.js 18+
- API keys for [Google Gemini](https://aistudio.google.com/apikey) and/or [DeepSeek](https://platform.deepseek.com/)

### Setup

```bash
npm install
cp .env.example .env.local
# Add your API keys to .env.local
npm run dev
```

Open [http://localhost:4000](http://localhost:4000).

### Environment Variables

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key (default LLM) |
| `DEEPSEEK_API_KEY` | DeepSeek API key (Chinese alternative) |

At least one API key is required. Both are recommended for full provider switching.

## Customer Service

- **Telegram:** +65 88023346
- **URL:** [t.me/+6588023346](https://t.me/+6588023346)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Google Gemini API
- DeepSeek API

## Deploy

Deploy to Vercel, Netlify, or any Node.js host. Set environment variables in your deployment dashboard.

```bash
npm run build
npm start
```

## License

Private — All rights reserved.
