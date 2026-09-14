import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { MENTORS } from "@/lib/mentors";
import { FINANCIAL_EXAMS } from "@/lib/exams";
import { buildPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <section className="mb-12 max-w-3xl">
          <p className="text-sm font-medium text-gold">About AskFinBots</p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-navy">
            Built for finance qualifications — not generic chat
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            {SITE_NAME} is a purpose-built, specialist AI tutor for CFA, FRM, CPA, ACCA, CAIA, CFP,
            SIE, CIMA, CMT, CFA ESG, and related financial exams. Its exam-focused training, syllabus
            coverage, and study guidance are continuously maintained with input from a global network
            of qualified professionals who have passed the qualifications they support. It combines
            structured Study Path planning with question-answering tuned to each syllabus, helping
            candidates focus on what is most useful for exam success.
          </p>
        </section>

        <section className="mb-14 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Who AskFinBots is for</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Candidates preparing for competitive finance certifications who need fast, syllabus-aware
            explanations — ethics vignettes, quantitative methods, financial reporting, risk,
            auditing, and more — plus a clear weekly plan, mind map overview, and flashcards for
            revision. It is study support only and is not affiliated with awarding bodies such as CFA
            Institute, GARP, ACCA, or AICPA.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FINANCIAL_EXAMS.map((exam) => (
              <li
                key={exam.id}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy"
              >
                {exam.name}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Frequently asked questions</h2>
          <dl className="mt-4 space-y-5 text-sm leading-relaxed text-slate-700">
            <div>
              <dt className="font-semibold text-navy">Which finance exams does AskFinBots support?</dt>
              <dd className="mt-1 text-muted">
                Major qualifications including CFA, FRM, ACCA, CPA, CAIA, CFP, SIE, CIMA, CMT, and CFA
                ESG. Choose your track on Ask Bot or under My Profile.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Is AskFinBots a generic ChatGPT wrapper?</dt>
              <dd className="mt-1 text-muted">
                No. It is built for finance exam preparation with Study Path, syllabus mind maps,
                flashcards, and tutoring flows tuned to each qualification.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">How do free tokens work?</dt>
              <dd className="mt-1 text-muted">
                New accounts receive free tokens at registration. One token is used when the tutor
                successfully returns an answer. Monthly Starter, Plus, and Pro plans add capacity.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">
                Can AskFinBots replace official curriculum providers?
              </dt>
              <dd className="mt-1 text-muted">
                No. AskFinBots is educational study support only. Use it alongside official readings
                and approved prep materials from the relevant awarding body.
              </dd>
            </div>
          </dl>
        </section>

        <section className="mb-14 grid gap-6 sm:grid-cols-3">
          <div className="surface-card about-feature-card p-6">
            <span className="about-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 6.5h16M4 12h10M4 17.5h7" />
                <path d="m17 15 1.2 2.4L21 18l-2 1.8.5 2.7-2.5-1.3-2.5 1.3.5-2.7L13 18l2.8-.6L17 15Z" />
              </svg>
            </span>
            <h2 className="font-display text-lg font-semibold text-navy">RAG-powered answers</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Unlike asking a general chatbot, replies are grounded in curated exam materials via
              retrieval-augmented generation (RAG) — so explanations stay closer to the syllabus you
              are sitting.
            </p>
          </div>
          <div className="surface-card about-feature-card p-6">
            <span className="about-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3 4.5 6.5v5c0 4.5 3.1 7.8 7.5 9.5 4.4-1.7 7.5-5 7.5-9.5v-5L12 3Z" />
                <path d="m8.5 12 2.2 2.2 4.8-5" />
              </svg>
            </span>
            <h2 className="font-display text-lg font-semibold text-navy">Holder-verified guidance</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Content direction and study framing are reviewed against practice from people who have
              earned the qualifications — reducing the “confident but wrong” problem common in raw
              LLM answers.
            </p>
          </div>
          <div className="surface-card about-feature-card p-6">
            <span className="about-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 13v-2a7 7 0 0 1 14 0v2" />
                <path d="M5 12H3.5A1.5 1.5 0 0 0 2 13.5v3A1.5 1.5 0 0 0 3.5 18H6v-6H5Zm14 0h1.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H18v-6h1Z" />
                <path d="M18 18c0 1.7-1.3 3-3 3h-2" />
              </svg>
            </span>
            <h2 className="font-display text-lg font-semibold text-navy">Mentor support 24/7</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Get study help any hour through the bot, plus human mentor escalation when you need
              coaching follow-up (included for 1 month with each paid token top-up). Study Path keeps
              your roadmap and progress in one portfolio.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Mentor network</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {MENTORS.length} mentors across all supported qualifications (
              {FINANCIAL_EXAMS.map((e) => e.name).join(", ")}). Profiles below are representative of
              our mentor bench.
            </p>
          </div>
        </section>

        <div className="grid gap-3 sm:grid-cols-2">
          {MENTORS.map((mentor) => (
            <article
              key={mentor.id}
              className="mentor-card flex gap-4 rounded-xl border border-line bg-white p-4 shadow-sm"
            >
              <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full ring-2 ring-navy/10">
                <Image
                  src={mentor.photo}
                  alt={mentor.name}
                  width={176}
                  height={176}
                  quality={90}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-display text-base font-semibold text-navy">
                  {mentor.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted">
                  {mentor.city}, {mentor.country}
                </p>
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-slate-600">
                  {mentor.major}
                  <span className="text-slate-400"> · </span>
                  {mentor.university}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {mentor.qualifications.map((q) => (
                    <span
                      key={`${mentor.id}-${q.name}-${q.year}`}
                      className="inline-flex items-center rounded-md border border-navy/15 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-navy"
                    >
                      {q.name}
                      <span className="ml-1 font-normal text-muted">{q.year}</span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
