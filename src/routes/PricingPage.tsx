import type { NavigateFn } from "./paths";
import { PRICING_PLANS } from "./content";

type PricingPageProps = {
  onNavigate: NavigateFn;
};

function PricingPage({ onNavigate }: PricingPageProps) {
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
      <section className="space-y-6 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Pricing
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Engagement tiers built for automation velocity
        </h1>
        <p className="max-w-3xl text-lg text-textMuted">
          Every program combines discovery, build, change management, and telemetry so leadership can see adoption and ROI.
          Select the tier that matches your capture volume and internal support model. We tune scope during a structured assessment.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleContact}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Talk with an advisor
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            See outcomes
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`flex h-full flex-col gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-xl ${
              plan.popular ? "ring-1 ring-accent2/40" : ""
            }`}
          >
            {plan.popular ? (
              <span className="inline-flex w-fit rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
                Most requested
              </span>
            ) : null}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-textPrimary">{plan.name}</h2>
              <p className="text-sm text-textMuted">{plan.description}</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-semibold text-textPrimary">
                {plan.price}
              </p>
              {plan.period ? (
                <p className="text-sm text-textMuted">{plan.period}</p>
              ) : null}
            </div>
            <ul className="space-y-3 text-sm text-textPrimary/90">
              {plan.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleContact}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-accent2/60 px-5 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
            >
              {plan.cta}
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
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 p-6 text-sm text-textMuted">
        <h2 className="text-xl font-semibold text-textPrimary">What&apos;s included in every tier</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
            <span>Security review, data boundary documentation, and least-privilege access setup.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
            <span>Automation telemetry with adoption, satisfaction, and ROI scoring.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
            <span>Training sessions for capture, proposal, and leadership stakeholders.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
            <span>Quarterly roadmap workshops and enhancement backlog management.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PricingPage;
