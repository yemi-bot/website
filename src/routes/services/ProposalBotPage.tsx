import type { NavigateFn } from "../paths";
import {
  AUTOMATION_LAB_MODULES,
  AUTOMATION_KPIS,
  CASE_STUDIES,
} from "../content";

const proposalModule = AUTOMATION_LAB_MODULES.find(
  (module) => module.title === "Proposal Bot",
);

const proposalCase = CASE_STUDIES[0];

type ProposalBotPageProps = {
  onNavigate: NavigateFn;
};

function ProposalBotPage({ onNavigate }: ProposalBotPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Proposal Bot
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Draft compliance-ready proposals in hours, not weeks
        </h1>
        <p className="max-w-3xl text-lg text-textMuted">
          Proposal Bot accelerates Shipley-style workflows with reusable prompts,
          auto-generated outlines, and compliance matrices tied to every
          requirement. Teams keep control of strategy and pricing, while AI clears
          the first-draft backlog and documents every artifact for color reviews.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("/proposal-bot")}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Launch Proposal Bot
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/partner-program")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Join partner program
          </button>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:grid-cols-[1.2fr,1fr] lg:px-12">
        <div className="space-y-4 text-sm text-textMuted">
          <h2 className="text-xl font-semibold text-textPrimary">
            Deliverables generated with each kickoff
          </h2>
          <ul className="space-y-3 text-sm text-textPrimary/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <span>Compliance matrices mapped line-by-line to the solicitation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <span>
                Outline and section starters tailored to your color review methodology.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <span>
                Pricing shells and kickoff packets bundling schedule, risks, and
                SME assignments.
              </span>
            </li>
          </ul>
        </div>
        <ul className="space-y-3 text-sm text-textPrimary/90">
          {AUTOMATION_KPIS.slice(2, 4).map((kpi) => (
            <li key={kpi} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <span>{kpi}</span>
            </li>
          ))}
        </ul>
      </section>

      {proposalModule ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Module snapshot
          </h2>
          <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted">
            <p className="text-xs uppercase tracking-[0.2em] text-accent2">
              {proposalModule.title}
            </p>
            <p className="mt-3">{proposalModule.description}</p>
            <p className="mt-4 text-textPrimary/90">{proposalModule.outcome}</p>
          </div>
        </section>
      ) : null}

      {proposalCase ? (
        <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card md:grid-cols-2 lg:px-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-accent2">
              Client spotlight
            </p>
            <h3 className="text-xl font-semibold text-textPrimary">
              {proposalCase.title}
            </h3>
            <p className="text-sm text-textMuted">{proposalCase.situation}</p>
            <p className="text-sm text-textMuted">{proposalCase.approach}</p>
          </div>
          <div className="space-y-3 text-sm text-textPrimary/90">
            <p>{proposalCase.impact90}</p>
            <p>{proposalCase.impact180}</p>
            <button
              type="button"
              onClick={() => onNavigate("/results")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent2 transition hover:text-accent2"
            >
              Review Automation Lab outcomes
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
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default ProposalBotPage;
