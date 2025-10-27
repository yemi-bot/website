import type { NavigateFn } from "./paths";
import {
  AGENCY_LIST,
  CASE_STUDIES,
  CORE_FAQ,
  HERO_POINTS,
  WHO_WE_HELP,
  WHY_TOP_NOTCH_WINS,
} from "./content";

type HomePageProps = {
  onNavigate: NavigateFn;
};

function HomePage({ onNavigate }: HomePageProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="grid gap-10 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card backdrop-blur-sm lg:grid-cols-[3fr,2fr] lg:px-12 lg:py-16">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accentWarm">
            GovCon Growth
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-textPrimary md:text-5xl">
            Win More Government Contracts in FY26
          </h1>
          <p className="max-w-xl text-lg text-textMuted">
            Top Notch makes you the most competitive small business in the
            market - through shutdowns, swings, and surprises. We plug in a full
            capture team plus IT/AI engineers so you outpace rivals without
            adding headcount.
          </p>
          <ul className="grid gap-3 text-sm text-textPrimary/90 md:grid-cols-2">
            {HERO_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-fieldStroke/40 bg-surfaceSoft/80 px-4 py-3"
              >
                <span className="mt-0.5 h-2 w-2 rounded-full bg-accent"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent2 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent2"
            >
              Schedule My 30-Minute Strategy Session
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
            <p className="max-w-sm text-xs text-textMuted">
              No obligation. Zoom or phone. Your info stays private. Limited
              seats: we onboard up to five clients per quarter.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-accent2/25 bg-gradient-to-br from-accent2/15 via-surfaceStrong to-accentSoft p-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
              Who we help
            </p>
            <ul className="space-y-3 text-sm text-textMuted">
              {WHO_WE_HELP.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-accent2"
                    >
                      <path
                        d="m5 12 4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accentWarm/35 bg-surfaceSoft/70 p-5 text-sm text-textMuted">
            <p>
              "Within one quarter our submissions were on time, compliant, and
              we had real buyer meetings on the calendar."
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-textPrimary/60">
               - VP, IT Integrator (DHS)
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Why top notch wins
          </p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            A proven, tech-enabled capture machine
          </h2>
          <p className="max-w-3xl text-base text-textMuted">
            Every engagement combines veteran capture leadership with automation
            that strips friction out of federal business development. The result:
            more meetings, more compliant submissions, and faster awards.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {WHY_TOP_NOTCH_WINS.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textPrimary/90 shadow-card/30"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:grid-cols-2 lg:gap-8 lg:px-12">
        <div className="space-y-6 border-b border-fieldStroke/30 pb-8 lg:border-b-0 lg:pb-0 lg:pr-8 lg:pr-10 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Capture Engine
          </p>
          <h3 className="text-2xl font-semibold text-textPrimary">
            Done-for-you BD execution under your brand
          </h3>
          <p className="text-base text-textMuted">
            You set the targets. We run BD and proposals so you win faster
            without adding headcount. Unlimited Shipley-inspired proposals under
            the engagement.
          </p>
          <ul className="space-y-4 text-sm text-textPrimary/90">
            <li>
              <strong className="text-textPrimary">
                Opportunity tracking:
              </strong>{" "}
              monitor, qualify, and prioritize targets; keep the funnel moving.
            </li>
            <li>
              <strong className="text-textPrimary">
                Cadence engine:
              </strong>{" "}
              research to call to voicemail to email to repeat to set capability
              meetings.
            </li>
            <li>
              <strong className="text-textPrimary">Proposal ops:</strong>{" "}
              compliance matrices, color reviews, and complete drafting.
            </li>
            <li>
              <strong className="text-textPrimary">TNA Portal:</strong>{" "}
              centralized artifacts, reporting, and pipeline hygiene.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate("/solutions/capture-engine")}
              className="rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
            >
              Explore Capture Engine
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
            >
              Start With a Strategy Session
            </button>
          </div>
        </div>
        <div className="space-y-6 lg:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Automation Lab
          </p>
          <h3 className="text-2xl font-semibold text-textPrimary">
            BD process automation & AI
          </h3>
          <p className="text-base text-textMuted">
            For contractors building BD in-house. Our engineers map your process
            and build automations that multiply output across discovery, capture,
            and proposal ops.
          </p>
          <ul className="space-y-4 text-sm text-textPrimary/90">
            <li>
              <strong className="text-textPrimary">
                Opportunity Scanner:
              </strong>{" "}
              one-page briefs + compliance matrices on your cadence.
            </li>
            <li>
              <strong className="text-textPrimary">
                Inbox to CRM Bridge:
              </strong>{" "}
              turn critical emails into structured intel automatically.
            </li>
            <li>
              <strong className="text-textPrimary">Proposal Bot:</strong> first
              drafts, compliance matrices, pricing templates.
            </li>
            <li>
              <strong className="text-textPrimary">Custom workflows:</strong>{" "}
              built for your stack, approvals, and reporting.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate("/solutions/automation-lab")}
              className="rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
            >
              See Automation Use-Cases
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
            >
              Start a Strategy Session
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Agencies we've supported
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Federal and SLED reach across the mission spectrum
          </h3>
          <p className="max-w-3xl text-base text-textMuted">
            Our teams meet agencies where they are - federal defense, health, civ,
            and the country's largest state and local procurement organizations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
            <h4 className="text-lg font-semibold text-textPrimary">
              Federal
            </h4>
            <ul className="mt-4 grid max-h-[320px] gap-2 overflow-y-auto pr-2 text-sm text-textMuted">
              {AGENCY_LIST.federal.map((agency) => (
                <li key={agency} className="border-b border-fieldStroke/30 pb-2">
                  {agency}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
            <h4 className="text-lg font-semibold text-textPrimary">
              State & Local
            </h4>
            <ul className="mt-4 grid gap-2 text-sm text-textMuted">
              {AGENCY_LIST.stateLocal.map((agency) => (
                <li key={agency} className="border-b border-fieldStroke/30 pb-2">
                  {agency}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            How it works
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            A clear path from consultation to awards
          </h3>
          <p className="max-w-3xl text-base text-textMuted">
            We combine high-frequency BD cadence with automation to accelerate
            wins. Every engagement runs on a 90-day plan with weekly reporting.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "1. Consultation (30 min)",
              description:
                "Speak directly with the President of Top Notch. We confirm goals, fit, and the right program.",
            },
            {
              title: "2. 90-Day Action Plan",
              description:
                "Targets, cadences, deliverables, KPIs - all aligned to your revenue objectives.",
            },
            {
              title: "3. Execution",
              description:
                "Capture Engine runs BD and proposals and/or we deploy Automation Lab modules. Weekly touchpoints keep everything on course.",
            },
            {
              title: "4. Win Contracts",
              description:
                "Reviews, message tuning, and scale-up as wins compound across your portfolio.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textPrimary/90"
            >
              <p className="text-base font-semibold text-textPrimary">
                {step.title}
              </p>
              <p className="mt-2 text-sm text-textMuted">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-textMuted">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Get My 90-Day Plan
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            See Results
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Results snapshots
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Proof you can win more, faster
          </h3>
          <p className="max-w-3xl text-base text-textMuted">
            Capture Engine and Automation Lab deliver measurable outcomes within
            the first quarter. Explore sample velocity across missions and
            agencies.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="flex h-full flex-col gap-4 rounded-3xl border border-fieldStroke/40 bg-surface/70 p-6 shadow-card/40"
            >
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-accent2">
                  {study.subtitle}
                </p>
                <h4 className="text-lg font-semibold text-textPrimary">
                  {study.title}
                </h4>
              </div>
              <p className="text-sm text-textMuted">{study.situation}</p>
              <p className="text-sm text-textMuted">{study.approach}</p>
              <p className="text-sm text-textPrimary/90">{study.impact90}</p>
              <p className="text-sm text-textPrimary/90">{study.impact180}</p>
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

      <section className="grid gap-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:grid-cols-[1.2fr,1fr] lg:px-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Pricing & guarantee
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Commercial models aligned to awards
          </h3>
          <ul className="space-y-3 text-sm text-textPrimary/90">
            <li>
              <strong className="text-textPrimary">Capture Engine:</strong>{" "}
              membership fee + success commission aligned to outcomes.
            </li>
            <li>
              <strong className="text-textPrimary">Automation Lab:</strong>{" "}
              custom quote based on modules and users.
            </li>
            <li>
              <strong className="text-textPrimary">Service guarantee:</strong>{" "}
              10-month guarantee with details provided during the strategy
              session.
            </li>
            <li>
              <strong className="text-textPrimary">Limited seats:</strong> up to
              five new clients onboarded per quarter to protect delivery
              quality.
            </li>
          </ul>
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Discuss Scope and Fees
          </button>
        </div>
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            FAQ
          </p>
          <div className="space-y-4 text-sm text-textMuted">
            {CORE_FAQ.slice(0, 3).map((faq) => (
              <div key={faq.question} className="space-y-2">
                <p className="font-semibold text-textPrimary">{faq.question}</p>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="rounded-full border border-accent2/50 px-4 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Read more success metrics
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-3xl font-semibold text-textPrimary">
          Frequently asked questions
        </h3>
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
          {CORE_FAQ.map((faq) => (
            <div key={faq.question} className="space-y-2">
              <p className="text-base font-semibold text-textPrimary">
                {faq.question}
              </p>
              <p className="text-sm text-textMuted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
