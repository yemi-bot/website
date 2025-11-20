import { useEffect, useMemo, useRef, useState } from "react";
import type { NavigateFn } from "../paths";
import { AUTOMATION_LAB_MODULES, AUTOMATION_KPIS, CASE_STUDIES } from "../content";
import defaultClients from "../../data/clients.json";

type OpportunityScannerPageProps = {
  onNavigate: NavigateFn;
};

const opportunityModule = AUTOMATION_LAB_MODULES.find(
  (m) => m.title === "Opportunity Scanner",
);
const opportunityCase = CASE_STUDIES[0];

export default function OpportunityScannerPage({
  onNavigate,
}: OpportunityScannerPageProps) {
  // Clients persisted per browser
  const STORAGE_KEY = "aias__clients";
  const normalizeClients = (list: string[]) => {
    const map = new Map<string, string>();
    for (const entry of list) {
      if (!entry || typeof entry !== "string") continue;
      const trimmed = entry.trim();
      if (!trimmed) continue;
      const key = trimmed.toLowerCase();
      if (!map.has(key)) {
        map.set(key, trimmed);
      }
    }
    return Array.from(map.values()).sort((a, b) => a.localeCompare(b));
  };

  const [clients, setClients] = useState<string[]>([]);
  useEffect(() => {
    let stored: string[] | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.every((c) => typeof c === "string")) {
          stored = parsed;
        }
      }
    } catch {
      stored = null;
    }
    const merged = normalizeClients([...(stored ?? []), ...defaultClients]);
    setClients(merged);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {}
  }, []);

  const saveClients = (next: string[]) => {
    const cleaned = normalizeClients(next);
    setClients(cleaned);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    } catch {}
  };

  // Run Panel state
  const [query, setQuery] = useState("");
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [higherGovUrl, setHigherGovUrl] = useState("");
  const [status, setStatus] = useState<"Ready to Run" | "Hold">("Ready to Run");
  const [submitting, setSubmitting] = useState(false);
  const [submittedOk, setSubmittedOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) => c.toLowerCase().includes(q));
  }, [clients, query]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggleClient = (name: string) =>
    setSelectedClients((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );

  function validateUrl(value: string): string | null {
    try {
      const u = new URL(value);
      if (!u.hostname.includes("highergov.com")) return "Link must be a highergov.com URL";
      return null;
    } catch {
      return "Enter a valid HigherGov URL";
    }
  }

  async function handleSubmit() {
    setError(null);
    setSubmittedOk(false);
    if (selectedClients.length === 0) {
      setError("Select at least one client");
      return;
    }
    const urlErr = validateUrl(higherGovUrl);
    if (urlErr) {
      setError(urlErr);
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        type: "opportunity_scanner_run",
        clients: selectedClients,
        highergovUrl: higherGovUrl,
        status,
        queue: status === "Ready to Run",
        time: new Date().toISOString(),
      };
      await fetch("https://hook.us2.make.com/3n3h40e6pkdqbbydyuarqfz76aq3yk57", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmittedOk(true);
      setSelectedClients([]);
      setHigherGovUrl("");
      setStatus("Ready to Run");
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setSubmittedOk(false), 3000);
    }
  }

  // Manage clients
  const [newClient, setNewClient] = useState("");
  const addClient = () => {
    const v = newClient.trim();
    if (!v) return;
    if (!clients.includes(v)) saveClients([...clients, v].sort((a, b) => a.localeCompare(b)));
    setNewClient("");
  };
  const removeClient = (name: string) => {
    saveClients(clients.filter((c) => c !== name));
    setSelectedClients((prev) => prev.filter((c) => c !== name));
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      {/* Intro */}
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">Opportunity Scanner</p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Surface the right opportunities before inboxes fill up
        </h1>
        <p className="max-w-3xl text-lg text-textMuted">
          Opportunity Scanner monitors the sources your capture teams rely on, translates procurement language into
          actionable briefs, and pushes structured intel straight into the systems where work happens.
        </p>
      </section>

      {/* Run Panel */}
      <section className="space-y-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6 shadow-card">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-textPrimary">Run Panel</h2>
            <p className="text-sm text-textMuted">Configure and execute briefing jobs</p>
          </div>
          {submittedOk ? (
            <span className="rounded-full border border-accent2/40 bg-accentSoft/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
              Submitted
            </span>
          ) : null}
        </div>

        {/* Client multi-select */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-textPrimary">Client</label>
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-2xl border border-fieldStroke/40 bg-fieldBg px-4 py-3 text-left text-sm text-textPrimary"
            >
              <span className="truncate">
                {selectedClients.length > 0 ? selectedClients.join(", ") : "Search and select client..."}
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-2">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open ? (
              <div className="absolute z-10 mt-2 w-full rounded-2xl border border-fieldStroke/40 bg-surface p-3 shadow-lg">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="mb-2 w-full rounded-xl border border-fieldStroke/40 bg-fieldBg px-3 py-2 text-sm text-textPrimary outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2/40"
                />
                <div className="max-h-56 overflow-y-auto pr-1">
                  {filtered.map((name) => (
                    <label key={name} className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-surfaceSoft/80">
                      <span className="truncate pr-3">{name}</span>
                      <input type="checkbox" className="h-4 w-4" checked={selectedClients.includes(name)} onChange={() => toggleClient(name)} />
                    </label>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    placeholder="Add client name"
                    className="flex-1 rounded-xl border border-fieldStroke/40 bg-fieldBg px-3 py-2 text-sm text-textPrimary outline-none focus:border-accent2 focus:ring-1 focus:ring-accent2/40"
                  />
                  <button type="button" onClick={addClient} className="rounded-xl border border-accent2/50 px-3 py-2 text-xs font-semibold text-accent2 hover:bg-accent2 hover:text-white">Add</button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedClients.map((c) => (
                    <span key={c} className="inline-flex items-center gap-2 rounded-full border border-fieldStroke/40 bg-surfaceSoft/80 px-3 py-1 text-xs">
                      {c}
                      <button type="button" onClick={() => toggleClient(c)} className="text-textMuted hover:text-accent2">×</button>
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <p className="text-xs text-textMuted">Select multiple clients to associate the link to more than one account.</p>
        </div>

        {/* HigherGov */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-textPrimary">HigherGov Link</label>
          <input
            value={higherGovUrl}
            onChange={(e) => setHigherGovUrl(e.target.value)}
            placeholder="https://www.highergov.com/opportunity/..."
            className="w-full rounded-2xl border border-fieldStroke/40 bg-fieldBg px-4 py-3 text-sm text-textPrimary outline-none transition focus:border-accent2 focus:ring-2 focus:ring-accent2/40"
          />
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-textPrimary">Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as any)} className="w-full rounded-2xl border border-fieldStroke/40 bg-fieldBg px-4 py-3 text-sm text-textPrimary outline-none">
            <option>Ready to Run</option>
            <option>Hold</option>
          </select>
          <p className="text-xs text-textMuted">Only "Ready to Run" queues a job for processing.</p>
        </div>

        {error ? (
          <div className="rounded-2xl border border-accent2/40 bg-accentSoft/60 px-4 py-3 text-sm text-accent2">{error}</div>
        ) : null}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className={`group relative inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white transition ${submitting ? "bg-accent2/70" : "bg-gradient-to-r from-accent2 to-accent"}`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {submitting ? (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {submitting ? "Submitting..." : "Run Briefing"}
          </span>
          {!submitting ? (<span className="absolute inset-0 rounded-2xl bg-white/0 opacity-0 transition group-hover:opacity-10"></span>) : null}
        </button>

        {/* Simple settings block */}
        <div className="pt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">Settings</p>
          <div className="rounded-2xl border border-fieldStroke/40 bg-surfaceSoft/80 p-3">
            <p className="mb-2 text-sm text-textMuted">Manage client list</p>
            <div className="flex flex-wrap gap-2">
              {clients.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full border border-fieldStroke/40 bg-surface px-3 py-1 text-xs">
                  {c}
                  <button type="button" onClick={() => removeClient(c)} className="text-textMuted hover:text-accent2">Remove</button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="grid gap-8 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card lg:grid-cols-[1.2fr,1fr] lg:px-12">
        <div className="space-y-4 text-sm text-textMuted">
          <h2 className="text-xl font-semibold text-textPrimary">How Opportunity Scanner works</h2>
          <p>
            Configure relevant sources—SAM.gov, eBuy, state portals, partner dashboards—and capture the exact filters your team already trusts.
            AI scoring ranks fit, highlights compliance triggers, and identifies team members who should weigh in.
          </p>
          <p>
            Briefs ship into Teams, Slack, SharePoint, or your CRM with a one-click path to launch capture tasks or proposal drafts. Watchlists ensure strategic vehicles and recompetes never slip by.
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

      {/* Module snapshot */}
      {opportunityModule ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-textPrimary">Module snapshot</h2>
          <div className="rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted">
            <p className="text-xs uppercase tracking-[0.2em] text-accent2">{opportunityModule.title}</p>
            <p className="mt-3">{opportunityModule.description}</p>
            <p className="mt-4 text-textPrimary/90">{opportunityModule.outcome}</p>
          </div>
        </section>
      ) : null}

      {/* Client spotlight */}
      {opportunityCase ? (
        <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-7 py-10 shadow-card md:grid-cols-2 lg:px-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-accent2">Client spotlight</p>
            <h3 className="text-xl font-semibold text-textPrimary">{opportunityCase.title}</h3>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
