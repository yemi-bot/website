import type { NavigateFn } from "./paths";
import {
  HERO_POINTS,
  WHO_WE_HELP,
  WHY_AIAS_WINS,
  AUTOMATION_LAB_MODULES,
  CAPTURE_ENGINE_90_DAY_PLAN,
  CASE_STUDIES,
  RESULTS_METRICS,
  CORE_FAQ,
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
      <section className="grid gap-10 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-12 shadow-card backdrop-blur-sm lg:grid-cols-[3fr,2fr] lg:px-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accentWarm">
            AI Automate Solutions
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-textPrimary md:text-5xl">
            Automate GovCon business development without adding headcount
          </h1>
          <p className="max-w-xl text-lg text-textMuted">
            AIAS designs, builds, and runs automation layers that keep federal and SLED pursuits moving. From opportunity
            scouting to inbox hygiene and proposal prep, your team gets hours back while sponsors see measurable ROI.
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent2 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
            >
              Book an Automation Assessment
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
              Start with a 30-minute working session. We inventory sources, systems, and automation wins we can deliver in
              the first 90 days.
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
              "Our BD crew now focuses on strategy and partner calls instead of data entry. The automation lab knocked
              down our admin pileup."
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-textPrimary/60">
              - VP, Top Notch Acquisition (AIAS client)
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Why teams partner with AIAS
          </p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            Automations designed for real BD cadence
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {WHY_AIAS_WINS.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textPrimary/90 shadow-card/30"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Automation lab modules
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Everything your BD stack needs to run on autopilot
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {AUTOMATION_LAB_MODULES.map((module) => (
            <article
              key={module.title}
              className="space-y-3 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <h4 className="text-lg font-semibold text-textPrimary">
                {module.title}
              </h4>
              <p>{module.description}</p>
              <p className="text-textPrimary/90">{module.outcome}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("/solutions/automation-lab")}
            className="rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Explore Automation Lab
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Talk with Engineering
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            90-day deployment
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            From discovery to measurable adoption
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CAPTURE_ENGINE_90_DAY_PLAN.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <p className="text-base font-semibold text-textPrimary">
                {phase.phase}
              </p>
              <ul className="mt-3 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Client spotlight
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Top Notch Acquisition (TNA) launches the Automation Lab
          </h3>
          <p className="max-w-3xl text-base text-textMuted">
            TNA partnered with AIAS to remove manual BD busywork and scale pursuits without hiring. The first automations
            were live in two weeks; the full stack went production in eight.
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

      <section className="space-y-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Outcomes we track
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Automation metrics sponsors can trust
          </h3>
        </div>
        <ul className="grid gap-3 text-sm text-textPrimary/90 md:grid-cols-2">
          {RESULTS_METRICS.map((metric) => (
            <li
              key={metric}
              className="flex items-start gap-3 rounded-2xl border border-fieldStroke/40 bg-surfaceSoft/80 px-4 py-3"
            >
              <span className="mt-0.5 h-2 w-2 rounded-full bg-accent"></span>
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h3 className="text-3xl font-semibold text-textPrimary">FAQ</h3>
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
