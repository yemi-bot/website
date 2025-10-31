import type { NavigateFn } from "./paths";
import {
  PARTNER_PROGRAM_BENEFITS,
  PARTNER_PROGRAM_CURRICULUM,
} from "./content";

type PartnerProgramPageProps = {
  onNavigate: NavigateFn;
};

function PartnerProgramPage({ onNavigate }: PartnerProgramPageProps) {
  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    onNavigate("/");
    requestAnimationFrame(() => {
      const fallback = document.getElementById("contact");
      fallback?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-10 lg:py-20">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Partner Program
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Automation Partner Accelerator
        </h1>
        <p className="max-w-3xl text-lg text-textMuted">
          A 10-week immersive designed for founders, delivery leads, and automation strategists who want to productize AI services,
          improve fulfillment, and plug into vetted deal flow. We teach the exact playbooks we use to scale Automation Lab retainers.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Join the waitlist
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/pricing")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Compare delivery tiers
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6 text-sm text-textMuted shadow-card">
          <h2 className="text-xl font-semibold text-textPrimary">
            What you receive
          </h2>
          <ul className="space-y-3 text-textPrimary/90">
            {PARTNER_PROGRAM_BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-accent2/35 bg-surfaceSoft/80 p-6 text-sm text-textMuted shadow-card">
          <h2 className="text-xl font-semibold text-textPrimary">
            Cohort cadence
          </h2>
          <ul className="space-y-3 text-textPrimary/90">
            {PARTNER_PROGRAM_CURRICULUM.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Each session blends live instruction, breakout pods, and action plans. Alumni retain access to updates and private deal-sharing channels.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6 shadow-card">
        <h2 className="text-2xl font-semibold text-textPrimary">
          Who should apply
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-textMuted">
            <h3 className="text-lg font-semibold text-textPrimary">Automation leaders</h3>
            <p>
              Operations and delivery leaders who already manage automation projects and want to scale standardized offers with better governance.
            </p>
          </div>
          <div className="space-y-3 text-sm text-textMuted">
            <h3 className="text-lg font-semibold text-textPrimary">AI agencies & integrators</h3>
            <p>
              Teams looking to plug into GovCon demand, pre-built playbooks, and support from peers tackling similar compliance requirements.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleContact}
          className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
        >
          Get notified about the next cohort
        </button>
      </section>
    </div>
  );
}

export default PartnerProgramPage;
