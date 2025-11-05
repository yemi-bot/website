import type { NavigateFn } from "../paths";
import {
  AUTOMATION_LAB_MODULES,
  AUTOMATION_KPIS,
  CASE_STUDIES,
} from "../content";

const opportunityModule = AUTOMATION_LAB_MODULES.find(
  (module) => module.title === "Opportunity Scanner",
);

const opportunityCase = CASE_STUDIES[0];

type OpportunityScannerPageProps = {
  onNavigate: NavigateFn;
};

function OpportunityScannerPage({ onNavigate }: OpportunityScannerPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Opportunity Scanner
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Surface the right opportunities before inboxes fill up
        </h1>
        <p className="max-w-3xl text-lg text-textMuted">
          Opportunity Scanner monitors the sources your capture teams rely on,
          translates procurement language into actionable briefs, and pushes
          structured intel straight into the systems where work happens. No more
          tab-hopping or missed releases—every lead arrives scored, summarized,
          and review-ready.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("/proposal-bot")}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Open operator console
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/pricing")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Review plans
          </button>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:grid-cols-[1.2fr,1fr] lg:px-12">
        <div className="space-y-4 text-sm text-textMuted">
          <h2 className="text-xl font-semibold text-textPrimary">
            How Opportunity Scanner works
          </h2>
          <p>
            Configure relevant sources—SAM.gov, eBuy, state portals, partner
            dashboards—and capture the exact filters your team already trusts.
            AI scoring ranks fit, highlights compliance triggers, and identifies
            team members who should weigh in.
          </p>
          <p>
            Briefs ship into Teams, Slack, SharePoint, or your CRM with a
            one-click path to launch capture tasks or proposal drafts. Watchlists
            ensure strategic vehicles and recompetes never slip by.
          </p>
        </div>
        <ul className="space-y-3 text-sm text-textPrimary/90">
          {AUTOMATION_KPIS.slice(0, 3).map((kpi) => (
            <li key={kpi} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <span>{kpi}</span>
            </li>
          ))}
        </ul>
      </section>

      {opportunityModule ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Module snapshot
          </h2>
          <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted">
            <p className="text-xs uppercase tracking-[0.2em] text-accent2">
              {opportunityModule.title}
            </p>
            <p className="mt-3">{opportunityModule.description}</p>
            <p className="mt-4 text-textPrimary/90">{opportunityModule.outcome}</p>
          </div>
        </section>
      ) : null}

      {opportunityCase ? (
        <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card md:grid-cols-2 lg:px-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-accent2">
              Client spotlight
            </p>
            <h3 className="text-xl font-semibold text-textPrimary">
              {opportunityCase.title}
            </h3>
            <p className="text-sm text-textMuted">{opportunityCase.situation}</p>
            <p className="text-sm text-textMuted">{opportunityCase.approach}</p>
          </div>
          <div className="space-y-3 text-sm text-textPrimary/90">
            <p>{opportunityCase.impact90}</p>
            <p>{opportunityCase.impact180}</p>
            <button
              type="button"
              onClick={() => onNavigate("/results")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent2 transition hover:text-accent2"
            >
              See full results
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

export default OpportunityScannerPage;
