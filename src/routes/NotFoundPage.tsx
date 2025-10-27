import type { NavigateFn } from "./paths";

type NotFoundPageProps = {
  onNavigate: NavigateFn;
};

function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
        Page not found
      </p>
      <h1 className="text-4xl font-semibold text-textPrimary md:text-5xl">
        We could not find the page you were looking for.
      </h1>
      <p className="max-w-2xl text-base text-textMuted">
        Use the navigation above to explore our solutions or head back to the
        homepage to learn how we help small and emerging mid-market contractors
        win more government business.
      </p>
      <button
        type="button"
        onClick={() => onNavigate("/")}
        className="rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
      >
        Return to Homepage
      </button>
    </div>
  );
}

export default NotFoundPage;
