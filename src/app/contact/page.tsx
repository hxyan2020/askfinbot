import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, TELEGRAM_CONTACT, TELEGRAM_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl flex-1 px-3 py-6 min-[380px]:px-4 sm:px-6 sm:py-14">
        <section className="overflow-hidden rounded-xl border border-line bg-navy shadow-lg shadow-navy/10 sm:rounded-2xl sm:shadow-xl">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center p-5 min-[380px]:p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold sm:text-sm sm:tracking-[0.18em]">
                Contact our team
              </p>
              <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white min-[380px]:text-4xl sm:mt-3 sm:text-5xl">
                We&apos;re here to help
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">
                Whether you need account assistance, technical support, or want to help shape the
                future of {SITE_NAME}, our team would be glad to hear from you.
              </p>
              <div className="mt-5 sm:mt-7">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm transition active:scale-[0.99] sm:w-auto sm:hover:-translate-y-0.5 sm:hover:shadow-lg"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M21.8 3.2a1.1 1.1 0 0 0-1.1-.2L2.8 9.9c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.8 5.5c.2.7.1 1 .8 1 .5 0 .8-.2 1-.4l2.2-2.1 4.7 3.5c.9.5 1.5.3 1.7-.8l3-14.4c.3-1.3-.5-1.9-1.6-1.4ZM8 12.5l9-5.7c.5-.3.9-.1.5.2l-7.4 6.7-.3 3.1L8 12.5Z" />
                  </svg>
                  <span>Message us on Telegram</span>
                </a>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-400 sm:text-left sm:text-xs">
                  <span className="whitespace-nowrap">{TELEGRAM_CONTACT}</span>
                  <span aria-hidden="true"> · </span>
                  Replies typically within one business day
                </p>
              </div>
            </div>
            <div className="relative min-h-[210px] min-[380px]:min-h-[240px] sm:min-h-[320px] lg:min-h-[470px]">
              <Image
                src="/askfinbot-team.jpg"
                alt="The AskFinBots support and finance education team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-[68%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy/45 lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {[
            {
              title: "Account support",
              text: "Get help accessing your account, updating your profile, or managing your selected qualification track.",
              icon: "01",
            },
            {
              title: "Technical support",
              text: "Tell us what happened, which browser and device you use, and the qualification selected. A screenshot helps us investigate faster.",
              icon: "02",
            },
            {
              title: "Feedback & suggestions",
              text: `Share feedback on exam coverage, courseware, answer quality, or features that would make ${SITE_NAME} more useful to candidates.`,
              icon: "03",
            },
            {
              title: "Partnerships & media",
              text: "For institutional collaboration, content partnerships, or media requests, start your Telegram message with “Business Inquiry”.",
              icon: "04",
            },
          ].map((item) => (
            <article key={item.title} className="surface-card group flex items-start gap-4 p-4 transition active:bg-slate-50 sm:block sm:p-6 sm:hover:-translate-y-1 sm:hover:shadow-lg">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                {item.icon}
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold leading-tight text-navy sm:mt-4 sm:text-xl">{item.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-2">{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-6 text-center sm:mt-8">
          <Link href="/terms" className="text-sm text-muted underline underline-offset-4 hover:text-navy">
            Terms of Use
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
