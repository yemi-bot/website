import type { NavigateFn } from "./paths";
import {
  AUTOMATION_KPIS,
  AUTOMATION_LAB_MODULES,
  AUTOMATION_TIMELINE,
  CASE_STUDIES,
} from "./content";

const AUTOMATION_FAQ = [
  {
    question: "Will this replace our BD team?",
    answer:
      "No. Automation Lab makes your team faster, more consistent, and more compliant so they can focus on strategy and relationships.",
  },
  {
    question: "Can you integrate with our CRM and file system?",
    answer:
      "Yes. We support Salesforce, HubSpot, Pipedrive, SharePoint, Google Drive, Box, Monday, Airtable, Teams, Slack, and more.",
  },
  {
    question: "Who maintains the automations?",
    answer:
      "We maintain during the initial rollout. We can train your admins or stay on retainer for continued optimization.",
  },
  {
    question: "What about proposal quality?",
    answer:
      "Proposal Bot accelerates first drafts and artifacts. Humans still own strategy, pricing, and final narrative.",
  },
  {
    question: "How fast to results?",
    answer:
      "Surface improvements within 2-4 weeks; submission speed gains within 60-90 days; first award timelines depend on capture and fit.",
  },
];

const AUTOMATION_OUTCOMES = [
  "More surfaced opportunities that actually fit your vehicles and thresholds.",
  "~70% faster first drafts and cleaner compliance checks.",
  "Near-zero missed emails or follow-ups in BD.",
  "Tighter reporting and audit-ready artifacts across the pipeline.",
];

const AUTOMATION_REQUIREMENTS = [
  "Target agencies, vehicles, repositories, and current tool access.",
  "A BD lead to approve rules, thresholds, and owners.",
  "Quick feedback on templates, prompts, and automation tweaks.",
];

const AUTOMATION_SECURITY = [
  "U.S.-based execution, scoped access, and least-privilege accounts.",
  "Private repositories, encrypted credentials, and audit logs.",
  "No scraping of restricted portals; respect rate limits and terms.",
  "You control data retention, access, and offboarding.",
];

const AUTOMATION_CASE_IDS = ["tna"];

type AutomationLabPageProps = {
  onNavigate: NavigateFn;
};

function AutomationLabPage({ onNavigate }: AutomationLabPageProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const caseIds = new Set<string>(AUTOMATION_CASE_IDS);
  const examples = CASE_STUDIES.filter((study) => caseIds.has(study.id));

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Automation Lab
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          AI Automate Solutions Automation Lab - BD process automation & AI
        </h1>
        <p className="max-w-4xl text-lg text-textMuted">
          Multiply BD output without new hires. Our engineers map your capture
          process and build automations that surface more opportunities, cut
          drafting time, and keep your CRM clean.
        </p>
        <div className="grid gap-4 text-sm text-textPrimary/90 md:grid-cols-2">
          <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6">
            <ul className="space-y-3">
              <li>In-house AI/automation team dedicated to GovCon.</li>
              <li>Best practices built from experience prompts created from winning techniques.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-accent2/35 bg-surfaceSoft/80 p-6">
            <ul className="space-y-3">
              <li>Works with your stack: Microsoft 365, Google Workspace, Salesforce, HubSpot, Pipedrive, Monday, Airtable, SharePoint, Teams, Slack.</li>
              <li>Custom rollout, training, and optimization included.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            See Automation Use-Cases
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Review Outcomes
          </button>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:grid-cols-[1.2fr,1fr] lg:px-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Is this for you?
          </p>
          <p className="text-base text-textMuted">
            You want an internal BD team that moves faster and misses less. You
            have targets and vehicles, but opportunity discovery, follow-through,
            and proposal drafting are bottlenecks.
          </p>
          <p className="text-base text-textMuted">
            Sectors served: technology, engineering, professional services,
            construction, logistics, manufacturing. Federal and SLED supported.
            Set-asides welcome: 8(a), SDVOSB, WOSB, HUBZone.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textPrimary/90">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Outcomes you can expect
          </p>
          <ul className="space-y-3">
            {AUTOMATION_OUTCOMES.map((outcome) => (
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
            Start a 30-Minute Strategy Session
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Core modules
          </p>
          <h2 className="text-3xl font-semibold text-textPrimary">
            The automations that multiply BD output
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {AUTOMATION_LAB_MODULES.map((module) => (
            <article
              key={module.title}
              className="space-y-3 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <h3 className="text-lg font-semibold text-textPrimary">
                {module.title}
              </h3>
              <p>{module.description}</p>
              <p className="text-textPrimary/90">{module.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card md:grid-cols-[1.1fr,1fr] lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Implementation timeline
          </p>
          <h3 className="text-2xl font-semibold text-textPrimary">
            12-week rollout from assess to optimize
          </h3>
        </div>
        <div className="space-y-5 text-sm text-textMuted">
          {AUTOMATION_TIMELINE.map((phase) => (
            <div key={phase.phase} className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/70 p-5">
              <p className="font-semibold text-textPrimary">{phase.phase}</p>
              <p className="mt-2">{phase.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr,1fr]">
        <div className="rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            KPIs & benchmarks
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-textPrimary">
            Data-backed performance trends
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-textPrimary/90">
            {AUTOMATION_KPIS.map((kpi) => (
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
            Get a custom KPI plan
          </button>
        </div>
        <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 px-7 py-10 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            What we need from you
          </p>
          <ul className="mt-4 space-y-3 text-sm text-textPrimary/90">
            {AUTOMATION_REQUIREMENTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card md:grid-cols-2 lg:px-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Security & data handling
          </p>
          <ul className="space-y-3 text-sm text-textPrimary/90">
            {AUTOMATION_SECURITY.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Pricing & terms
          </p>
          <p className="text-sm text-textMuted">
            Custom quote based on modules, users, and integrations. Engagements
            include assessment, prototyping, deployment, training, and optional
            managed services.
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Discuss scope and fees
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Example outcomes
          </p>
          <h3 className="text-3xl font-semibold text-textPrimary">
            Automation wins across federal missions
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {examples.map((study) => (
            <article
              key={study.id}
              className="flex h-full flex-col gap-3 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent2">
                {study.subtitle}
              </p>
              <h4 className="text-lg font-semibold text-textPrimary">
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

      <section className="space-y-6">
        <h3 className="text-3xl font-semibold text-textPrimary">
          Frequently asked questions
        </h3>
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
          {AUTOMATION_FAQ.map((faq) => (
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
            Start a Strategy Session
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

export default AutomationLabPage;
