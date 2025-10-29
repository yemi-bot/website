import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import type { NavigateFn } from "./paths";

type DashboardPageProps = {
  onNavigate: NavigateFn;
};

const PROPOSAL_BOT_METRICS = [
  { label: "Kickoff packets generated", value: "42" },
  { label: "Average prep time saved", value: "68%" },
  { label: "Active reviewers", value: "6" },
  { label: "Compliance alerts resolved", value: "18" },
];

const RECENT_ACTIVITY = [
  {
    id: "PB-1042",
    opportunity: "DHS FEMA Emergency Support IDIQ",
    status: "Kickoff packet ready",
    timestamp: "Today • 09:24 AM",
  },
  {
    id: "PB-1039",
    opportunity: "VA Healthcare Analytics BPA",
    status: "Compliance matrix shared",
    timestamp: "Yesterday • 04:41 PM",
  },
  {
    id: "PB-1035",
    opportunity: "GSA Cloud Modernization RFQ",
    status: "Reviewer comments ingested",
    timestamp: "Yesterday • 11:06 AM",
  },
];

const NEXT_STEPS = [
  "Upload source files for upcoming HHS digital services RFP.",
  "Review automation telemetry with AIAS engineer (Friday 1 PM ET).",
  "Approve updated outline template for DOJ proposal series.",
];

function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      onNavigate("/login");
    }
  }, [isAuthenticated, onNavigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="space-y-10 rounded-3xl border border-fieldStroke/40 bg-surface/80 p-8 shadow-card">
      <header className="flex flex-col gap-4 border-b border-fieldStroke/40 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
            Proposal Bot dashboard
          </p>
          <h1 className="text-3xl font-semibold text-textPrimary">
            Welcome back, AIAS operator
          </h1>
          <p className="text-sm text-textMuted">
            Monitor kickoffs, compliance matrices, and reviewer adoption at a glance.
          </p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
        >
          Sign out
        </button>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROPOSAL_BOT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 px-5 py-6 text-sm text-textMuted"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
              {metric.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-textPrimary">
              {metric.value}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
          <h2 className="text-lg font-semibold text-textPrimary">
            Recent activity
          </h2>
          <ul className="space-y-4">
            {RECENT_ACTIVITY.map((activity) => (
              <li key={activity.id} className="rounded-2xl border border-fieldStroke/40 bg-surface px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
                  {activity.id}
                </p>
                <p className="mt-1 text-sm font-semibold text-textPrimary">
                  {activity.opportunity}
                </p>
                <p className="text-sm text-textMuted">{activity.status}</p>
                <p className="mt-2 text-xs text-textMuted/80">{activity.timestamp}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6">
          <h2 className="text-lg font-semibold text-textPrimary">
            Next actions
          </h2>
          <ul className="space-y-3 text-sm text-textMuted">
            {NEXT_STEPS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onNavigate("/solutions/automation-lab")}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-accent2/50 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Request updates
          </button>
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
