import type { NavigateFn } from "./paths";
import { RESOURCE_GUIDES, RESOURCE_CHANNELS } from "./content";

type ResourcesPageProps = {
  onNavigate: NavigateFn;
};

function ResourcesPage({ onNavigate }: ResourcesPageProps) {
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
          Resources
        </p>
        <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
          Build, launch, and scale your automation program
        </h1>
        <p className="max-w-3xl text-lg text-textMuted">
          Access playbooks, checklists, and live enablement sessions that unpack how we design, deploy, and govern Automation Lab.
          New content drops monthly so your team stays ahead of compliance updates and tooling changes.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("/partner-program")}
            className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
          >
            Explore partner program
          </button>
          <button
            type="button"
            onClick={() => onNavigate("/results")}
            className="rounded-full border border-accent2/50 px-6 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
          >
            Review client outcomes
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-textPrimary">Featured guides</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {RESOURCE_GUIDES.map((guide) => (
            <article
              key={guide.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-fieldStroke/40 bg-surface/80 p-6 text-sm text-textMuted shadow-card"
            >
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-accent2">
                  {guide.status}
                </p>
                <h3 className="text-lg font-semibold text-textPrimary">
                  {guide.title}
                </h3>
              </div>
              <p>{guide.description}</p>
              <button
                type="button"
              onClick={handleContact}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent2 transition hover:text-accent2"
              >
                Request access
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

      <section className="grid gap-6 rounded-3xl border border-fieldStroke/40 bg-surfaceSoft/80 px-7 py-10 shadow-card md:grid-cols-3">
        {RESOURCE_CHANNELS.map((channel) => (
          <div key={channel.name} className="space-y-3">
            <h3 className="text-lg font-semibold text-textPrimary">{channel.name}</h3>
            <p className="text-sm text-textMuted">{channel.description}</p>
            <button
              type="button"
              onClick={() => onNavigate("/login")}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2 transition hover:text-accent2"
            >
              {channel.linkLabel}
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
    </div>
  );
}

export default ResourcesPage;
