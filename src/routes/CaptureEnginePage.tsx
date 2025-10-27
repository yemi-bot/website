import type { NavigateFn } from "./paths";
import {
  CAPTURE_ENGINE_90_DAY_PLAN,
  CAPTURE_ENGINE_COMPONENTS,
  CAPTURE_ENGINE_KPIS,
  CASE_STUDIES,
} from "./content";

const CAPTURE_FAQ = [
  {
    question: "Do you write proposals end-to-end?",
    answer:
      "Yes. We own drafting, compliance, and reviews. You provide pricing, resumes, and feedback. Unlimited proposals under engagement.",
  },
  {
    question: "How soon will we see meetings and submissions?",
    answer:
      "Cadences start quickly. Expect first capability meetings in 2-3 weeks and steady monthly submissions by month 2-3.",
  },
  {
    question: "What if we lack past performance in a target agency?",
    answer:
      "We build teaming strategies and capability briefs that leverage adjacent wins and prime/sub roles to open doors.",
  },
  {
    question: "Can you target both federal and SLED?",
    answer:
      "Yes. We prioritize by fit and budget impact, then run cadences accordingly across federal and state/local buyers.",
  },
  {
    question: "How do you handle data and security?",
    answer:
      "U.S.-based execution, scoped access, secure tools, and minimal data collection. We operate with clear data boundaries.",
  },
];

const WEEKLY_CADENCE = [
  { day: "Mon", detail: "Pipeline refresh, targets prioritized, assignments." },
  { day: "Tue-Thu", detail: "Outreach blocks, capability briefings scheduled, teaming calls." },
  { day: "Fri", detail: "Proposal reviews, compliance checks, reporting." },
  { day: "Rolling", detail: "Color reviews, artifact prep, submission management." },
];

const CAPTURE_OUTCOMES = [
  "More capability meetings with federal buyers and partners.",
  "More qualified, compliant submissions that stand out in evaluations.",
  "Faster cycle times and cleaner Shipley-style reviews.",
  "Clear weekly reporting and accountability for every pursuit.",
];

const CAPTURE_RESULTS_IDS = ["dhs", "dod", "hhs"] as const;

type CaptureEnginePageProps = {
  onNavigate: NavigateFn;
};

function CaptureEnginePage({ onNavigate }: CaptureEnginePageProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const captureIds = new Set<string>(CAPTURE_RESULTS_IDS);
  const snapshots = CASE_STUDIES.filter((study) => captureIds.has(study.id));

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Capture Engine
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Capture Engine -  Done-For-You GovCon Business Development
        </h1>
        <p className="max-w-4xl text-lg text-textMuted">
          Win more contracts without adding headcount. We run BD and proposals
          under your brand so you get meetings, compliant submissions, and
          awards.
        </p>
        <div className="grid gap-4 text-sm text-textPrimary/90 md:grid-cols-2">
          <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6">
            <ul className="space-y-3">
              <li>37 contracts awarded in Q4 FY25.</li>
              <li>20 U.S.-based specialists across capture, proposal writing, systems, and AI automation.</li>
              <li>Unlimited proposals under engagement.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-accent2/35 bg-surfaceSoft/80 p-6">
            <ul className="space-y-3">
              <li>Limited seats: we onboard up to five clients per quarter.</li>
              <li>Playbooks built by top-tier small-business GovCon leaders.</li>
              <li>Measured weekly with transparent KPIs.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Start My Strategy Session
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            View Client Results
          </button>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:grid-cols-[1.3fr,1fr] lg:px-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Is this for you?
          </p>
          <p className="text-base text-textMuted">
            You lead a small or mid-market contractor and want a predictable federal pipeline. You have targets and
            past performance to leverage, but BD bandwidth, cadence, or proposal quality is holding you back.
          </p>
          <p className="text-base text-textMuted">
            Sectors we support: technology, engineering, professional services, construction, logistics, manufacturing.
            Set-asides welcome: 8(a), SDVOSB, WOSB, HUBZone, and more.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textPrimary/90">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Outcomes you can expect
          </p>
          <ul className="space-y-3">
            {CAPTURE_OUTCOMES.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full border border-accent2/50 px-4 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Book a 30-Minute Call
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            What's included
          </p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            How we run business development for you
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CAPTURE_ENGINE_COMPONENTS.map((component) => (
            <article
              key={component.title}
              className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <h3 className="text-lg font-semibold text-textPrimary">
                {component.title}
              </h3>
              <p className="mt-3">{component.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card md:grid-cols-[1.2fr,1fr] lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Weekly cadence
          </p>
          <h3 className="text-2xl font-semibold text-textPrimary">
            Repeatable rhythm that keeps your pipeline moving
          </h3>
        </div>
        <div className="grid gap-4 text-sm text-textPrimary/90">
          {WEEKLY_CADENCE.map((item) => (
            <div
              key={item.day}
              className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 px-5 py-4"
            >
              <p className="font-semibold text-textPrimary">{item.day}</p>
              <p className="mt-1 text-textMuted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr,1fr]">
        <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            KPIs & timelines
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-textPrimary">
            Metrics you can forecast against
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-textPrimary/90">
            {CAPTURE_ENGINE_KPIS.map((kpi) => (
              <li key={kpi} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{kpi}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="mt-6 rounded-full border border-accent2/50 px-4 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            See modeled outcomes
          </button>
        </div>
        <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 px-7 py-10 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            90-day plan
          </p>
          <div className="mt-5 space-y-5 text-sm text-textMuted">
            {CAPTURE_ENGINE_90_DAY_PLAN.map((phase) => (
              <div key={phase.phase}>
                <p className="font-semibold text-textPrimary">{phase.phase}</p>
                <ul className="mt-2 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Results snapshots
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Modeled outcomes for key sectors
          </h3>
          <p className="max-w-3xl text-base text-textMuted">
            Replace with named, verified case studies when permitted. Until then, here are modeled velocity profiles based on recent client performance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {snapshots.map((study) => (
            <article
              key={study.id}
              className="flex h-full flex-col gap-3 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent2">
                {study.subtitle}
              </p>
              <h4 className="text-base font-semibold text-textPrimary">
                {study.title}
              </h4>
              <p>{study.situation}</p>
              <p>{study.approach}</p>
              <p className="text-textPrimary/90">{study.impact90}</p>
              <p className="text-textPrimary/90">{study.impact180}</p>
              <button
                type="button"
                onClick={() => onNavigate("/results")}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent2 transition hover:text-accent2"
              >
                {study.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            What you provide
          </p>
          <ul className="mt-4 space-y-3 text-sm text-textPrimary/90">
            <li>Target agencies, vehicles, and past performance.</li>
            <li>Pricing inputs, resumes, and timely feedback.</li>
            <li>An engaged sponsor to clear blockers quickly.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 px-7 py-10 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Pricing & guarantee
          </p>
          <ul className="mt-4 space-y-3 text-sm text-textPrimary/90">
            <li>Commercial model: membership fee + success commission aligned to outcomes.</li>
            <li>Service guarantee: 10-month guarantee (details covered in your meeting).</li>
            <li>Capacity: up to five new clients per quarter.</li>
          </ul>
          <button
            type="button"
            onClick={scrollToContact}
            className="mt-5 rounded-full bg-gradient-to-r from-accent2 to-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Discuss Scope and Fees
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-3xl font-semibold text-textPrimary">
          Frequently asked questions
        </h3>
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
          {CAPTURE_FAQ.map((faq) => (
            <div key={faq.question} className="space-y-2">
              <p className="text-base font-semibold text-textPrimary">
                {faq.question}
              </p>
              <p className="text-sm text-textMuted">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Start My Strategy Session
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Return to Homepage
          </button>
        </div>
      </section>
    </div>
  );
}

export default CaptureEnginePage;
