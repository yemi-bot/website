import type { NavigateFn } from "./paths";
import { AGENCY_LIST, CASE_STUDIES } from "./content";

const RESULTS_METRICS = [
  "37 contracts awarded in Q4 FY25",
  "Time to first award: ~5 months",
  "Average award cycle: ~6 months",
  "Submissions per month: ~4 RFPs + ~8 RFIs",
  "Capability meetings set: ~3/month",
  "New relationships created: ~15/month",
  "Limited seats: we onboard up to 5 clients per quarter",
];

const MEASUREMENT_DEFINITIONS = [
  "Capability meeting: a scheduled briefing with a contracting/buyer decision unit or teaming partner.",
  "Submission: a compliant RFP/RFI/RFQ delivered on or before deadline.",
  "Relationship created: a new, named point of contact with next steps captured.",
  "Time to first award: calendar time from kickoff to first signed award (varies by fit and cycle).",
];

const TESTIMONIALS = [
  {
    quote:
      "Within one quarter our submissions were on time, compliant, and we had real buyer meetings on the calendar.",
    attribution: "VP, IT Integrator (DHS)",
  },
  {
    quote:
      "The cadence and partner outreach opened lanes we couldn't touch alone.",
    attribution: "CEO, SDVOSB Manufacturer (DoD)",
  },
  {
    quote:
      "The automation cut our first-draft time drastically and nothing falls through the cracks now.",
    attribution: "COO, Cloud Services SB (GSA/DOJ)",
  },
];

type ResultsPageProps = {
  onNavigate: NavigateFn;
};

function ResultsPage({ onNavigate }: ResultsPageProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Results
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Proof you can win more, faster
        </h1>
        <p className="max-w-4xl text-lg text-textMuted">
          Below are typical outcomes once Capture Engine and Automation Lab are
          in place. Every metric is tracked weekly so you always know where you
          stand.
        </p>
        <div className="grid gap-4 text-sm text-textPrimary/90 md:grid-cols-2">
          {RESULTS_METRICS.map((metric) => (
            <div
              key={metric}
              className="rounded-3xl border border-fieldStroke/40 bg-surface/80 px-5 py-4"
            >
              {metric}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Schedule My 30-Minute Strategy Session
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Return to Homepage
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Case snapshots
          </p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            Modeled outcomes across missions
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="flex h-full flex-col gap-3 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent2">
                {study.subtitle}
              </p>
              <h3 className="text-lg font-semibold text-textPrimary">
                {study.title}
              </h3>
              <p>{study.situation}</p>
              <p>{study.approach}</p>
              <p className="text-textPrimary/90">{study.impact90}</p>
              <p className="text-textPrimary/90">{study.impact180}</p>
              <button
                type="button"
                onClick={scrollToContact}
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

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Agencies
          </p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            Where clients have won or competed
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6">
            <h3 className="text-lg font-semibold text-textPrimary">Federal</h3>
            <ul className="mt-4 grid max-h-[380px] gap-2 overflow-y-auto pr-3 text-sm text-textMuted">
              {AGENCY_LIST.federal.map((agency) => (
                <li key={agency} className="border-b border-fieldStroke/30 pb-2">
                  {agency}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6">
            <h3 className="text-lg font-semibold text-textPrimary">
              State & Local
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-textMuted">
              {AGENCY_LIST.stateLocal.map((agency) => (
                <li key={agency} className="border-b border-fieldStroke/30 pb-2">
                  {agency}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="button"
          onClick={scrollToContact}
          className="rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
        >
          Ask about your target agencies
        </button>
      </section>

      <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card md:grid-cols-[1.2fr,1fr] lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            How we measure results
          </p>
          <ul className="space-y-3 text-sm text-textPrimary/90">
            {MEASUREMENT_DEFINITIONS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Guarantee & capacity
          </p>
          <p className="text-sm text-textMuted">
            Service guarantee: 10-month guarantee; details provided during your
            strategy session. Capacity: up to 5 new clients per quarter to protect
            delivery quality.
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Book My Strategy Session
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-textPrimary">
          Testimonials
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.attribution}
              className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <p>"{item.quote}"</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-accent2">
                {item.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Schedule My 30-Minute Strategy Session
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/solutions/capture-engine")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Explore Capture Engine
          </button>
        </div>
      </section>
    </div>
  );
}

export default ResultsPage;
