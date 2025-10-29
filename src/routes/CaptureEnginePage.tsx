import type { NavigateFn } from "./paths";
import {
  CAPTURE_ENGINE_COMPONENTS,
  CAPTURE_ENGINE_KPIS,
  CAPTURE_ENGINE_90_DAY_PLAN,
  CASE_STUDIES,
} from "./content";

type CaptureEnginePageProps = {
  onNavigate: NavigateFn;
};

const TNA_CASE = CASE_STUDIES.find((caseStudy) => caseStudy.id === "tna");

const CASE_FAQ = [
  {
    question: "How fast did automations go live?",
    answer:
      "Opportunity Scanner and Inbox → CRM Bridge were piloted within two weeks. The full Automation Lab went production inside eight weeks with documentation and training.",
  },
  {
    question: "What systems were connected?",
    answer:
      "Microsoft 365, SharePoint, HubSpot CRM, and Teams. AIAS delivered telemetry dashboards in Power BI for leadership.",
  },
  {
    question: "How is the automation maintained?",
    answer:
      "AIAS operates a managed cadence - weekly telemetry review, prompt updates, and backlog grooming with TNA's capture lead. Ownership can transition in-house when they're ready.",
  },
];

function CaptureEnginePage({ onNavigate }: CaptureEnginePageProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Client story
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          How Top Notch Acquisition (TNA) scaled BD with AIAS Automation Lab
        </h1>
        <p className="max-w-4xl text-lg text-textMuted">
          TNA needed to pursue more federal opportunities without expanding headcount. AIAS deployed automations that
          keep opportunity scouting, inbox management, and proposal prep running around the clock - so their team can
          focus on strategy and partner calls.
        </p>
        <div className="grid gap-6 text-sm text-textPrimary/90 md:grid-cols-2">
          <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6">
            <h2 className="text-base font-semibold text-textPrimary">
              Challenge
            </h2>
            <ul className="mt-3 space-y-3">
              <li>Inbound opportunity research consumed 10+ hours per week.</li>
              <li>Partner and CO intel stalled in inboxes without CRM updates.</li>
              <li>Proposal teams recreated compliance matrices and outlines every pursuit.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-accent2/35 bg-surfaceSoft/80 p-6">
            <h2 className="text-base font-semibold text-textPrimary">
              Solution
            </h2>
            <ul className="mt-3 space-y-3">
              <li>Opportunity Scanner posts ready-to-pursue briefs each morning.</li>
              <li>Inbox → CRM Bridge captures every critical email thread with owners and next steps.</li>
              <li>Proposal Bot generates kickoff packets, compliance matrices, and outlines aligned to Shipley reviews.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Talk with an AIAS engineer
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            View more outcomes
          </button>
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Automation blueprint
          </p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            What AIAS built for TNA
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

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Results at a glance
          </p>
          <h3 className="text-2xl font-semibold text-textPrimary">
            Automation KPIs monitored with leadership
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-textPrimary/90">
            {CAPTURE_ENGINE_KPIS.map((kpi) => (
              <li key={kpi} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{kpi}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 px-7 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            What TNA says
          </p>
          <p className="text-sm text-textMuted">
            {TNA_CASE?.approach}
          </p>
          <p className="text-sm text-textPrimary/90">
            {TNA_CASE?.impact90}
          </p>
          <p className="text-sm text-textPrimary/90">
            {TNA_CASE?.impact180}
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Delivery cadence
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            90-day program, backed by AIAS engineers
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

      <section className="space-y-6">
        <h3 className="text-3xl font-semibold text-textPrimary">
          Questions we answered with TNA
        </h3>
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
          {CASE_FAQ.map((faq) => (
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
            Book your assessment
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Return home
          </button>
        </div>
      </section>
    </div>
  );
}

export default CaptureEnginePage;
