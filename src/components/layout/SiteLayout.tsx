import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useAuth } from "../../context/AuthContext";
import type { NavigateFn, RoutePath, RouteSummary } from "../../routes/paths";

type SiteLayoutProps = {
  currentPath: RoutePath;
  routes: RouteSummary[];
  onNavigate: NavigateFn;
  children: ReactNode;
};

const BRAND_NAME = "AI Automate Solutions";

function getNavLabel(title: string, path: RoutePath) {
  if (path === "/") {
    return "Home";
  }
  return title;
}

function SiteLayout({ currentPath, routes, onNavigate, children }: SiteLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    annualRevenue: "",
    projectBudget: "",
    help: "",
    optInEmail: false,
    optInSms: false,
  });

  const navItems = useMemo(
    () =>
      routes
        .filter((route) => {
          if (route.includeInNav === false) {
            return false;
          }
          if (route.path === "/proposal-bot") {
            return isAuthenticated;
          }
          if (route.path === "/login") {
            return !isAuthenticated;
          }
          return true;
        })
        .map((route) => ({
          path: route.path,
          label: getNavLabel(route.title, route.path),
        })),
    [routes, isAuthenticated],
  );

  const handleNavigate = useCallback(
    (path: RoutePath) => {
      setIsMenuOpen(false);
      onNavigate(path);
    },
    [onNavigate],
  );

  const handleContactClick = useCallback(() => {
    setIsMenuOpen(false);
    if (currentPath !== "/") {
      onNavigate("/");
      requestAnimationFrame(() => {
        const element = document.getElementById("contact");
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPath, onNavigate]);

  const handleLogout = useCallback(() => {
    logout();
    handleNavigate("/login");
  }, [logout, handleNavigate]);

  const handleFormChange = useCallback(
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value, type, checked } = event.target;
      setFormData((previous) => ({
        ...previous,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Placeholder: integrate with CRM or email automation provider.
      // eslint-disable-next-line no-console
      console.table(formData);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        companySize: "",
        annualRevenue: "",
        projectBudget: "",
        help: "",
        optInEmail: false,
        optInSms: false,
      });
      window.setTimeout(() => setIsSubmitted(false), 6000);
    },
    [formData],
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-textPrimary">
      <header className="sticky top-0 z-40 border-b border-fieldStroke/40 bg-surfaceStrong/90 backdrop-blur supports-[backdrop-filter]:bg-surfaceStrong/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <button
            type="button"
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-3 text-left text-base font-semibold tracking-tight text-textPrimary transition hover:text-accent2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accentSoft text-accent2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M4 7.5L12 3l8 4.5v9L12 21l-8-4.5v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 10.5 12 12.5l3.5-2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hidden sm:block">{BRAND_NAME}</span>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-textMuted lg:flex">
            {navItems.map((item) => {
              const isActive = item.path === currentPath;
              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  className={`relative transition ${
                    isActive ? "text-textPrimary" : "text-textMuted hover:text-accent2"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive ? (
                    <span className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-accent2"></span>
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleContactClick}
              className="hidden rounded-full bg-accent2 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent lg:inline-flex"
            >
              Book Assessment
            </button>
            {isAuthenticated ? (
              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-full border border-accent2/50 px-4 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white lg:inline-flex"
              >
                Sign Out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleNavigate("/login")}
                className="hidden rounded-full border border-accent2/50 px-4 py-2 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white lg:inline-flex"
              >
                Sign In
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-fieldStroke/40 bg-surface text-textPrimary transition hover:border-accent2/50 hover:text-accent2 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-fieldStroke/40 bg-surfaceStrong/95 px-6 pb-6 pt-4 shadow-inner lg:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-textMuted">
              {navItems.map((item) => {
                const isActive = item.path === currentPath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNavigate(item.path)}
                    className={`flex items-center justify-between rounded-2xl border border-fieldStroke/50 bg-surface px-4 py-3 transition ${
                      isActive ? "text-textPrimary" : "hover:border-accent2/40 hover:text-accent2"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-accent2"></span>
                    ) : null}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={handleContactClick}
                className="rounded-2xl border border-accent2/30 bg-accentSoft px-4 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
              >
                Book Assessment
              </button>
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-2xl border border-accent2/30 bg-accentSoft px-4 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleNavigate("/login")}
                  className="rounded-2xl border border-accent2/30 bg-accentSoft px-4 py-3 text-sm font-semibold text-accent2 transition hover:border-accent2 hover:bg-accent2 hover:text-white"
                >
                  Sign In
                </button>
              )}
            </nav>
          </div>
        ) : null}
      </header>

      <main className="flex-1 pb-24">{children}</main>

      <footer className="border-t border-fieldStroke/40 bg-surfaceSoft/60 py-12 text-sm text-textMuted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:px-10">
          <div id="contact" className="grid gap-6 rounded-3xl border border-accent2/20 bg-surface px-6 py-6 shadow-lg shadow-slate-200/40 sm:px-10 sm:py-10 lg:grid-cols-[2fr,1.3fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentWarm">
                Let's talk
              </p>
              <h2 className="text-2xl font-semibold text-textPrimary">
                Schedule your 30-minute strategy session
              </h2>
              <p className="text-base text-textMuted">
                No obligation. Zoom or phone. Your information stays private and we only onboard a limited number of new clients each quarter to protect delivery quality.
              </p>
              <ul className="space-y-2 text-sm text-textPrimary/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                  <span>Detailed intake ensures the first 90 days focus on the right automations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                  <span>We align systems access, compliance requirements, and ROI targets before kickoff.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                  <span>Submissions route directly to our delivery pod for rapid follow-up.</span>
                </li>
              </ul>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-accentWarm/35 bg-surfaceSoft/80 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentWarm">
                Intake form
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  First Name
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  Last Name
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  Company
                  <input
                    required
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  Role
                  <input
                    required
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  Company Size
                  <select
                    required
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  >
                    <option value="">Select</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  Annual Revenue
                  <select
                    required
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  >
                    <option value="">Select</option>
                    <option value="<1M">Less than $1M</option>
                    <option value="1-10M">$1M - $10M</option>
                    <option value="10-25M">$10M - $25M</option>
                    <option value="25-50M">$25M - $50M</option>
                    <option value="50M+">$50M+</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                  Project Budget
                  <select
                    required
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleFormChange}
                    className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                  >
                    <option value="">Select</option>
                    <option value="<25k">Less than $25K</option>
                    <option value="25-50k">$25K - $50K</option>
                    <option value="50-100k">$50K - $100K</option>
                    <option value="100-200k">$100K - $200K</option>
                    <option value="200k+">$200K+</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-textMuted">
                How can we help?
                <textarea
                  required
                  name="help"
                  value={formData.help}
                  onChange={handleFormChange}
                  rows={4}
                  className="rounded-xl border border-fieldStroke/40 bg-white px-3 py-2 text-sm text-textPrimary focus:border-accent2 focus:outline-none focus:ring-1 focus:ring-accent2/40"
                ></textarea>
              </label>
              <div className="space-y-2 text-xs text-textMuted">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="optInEmail"
                    checked={formData.optInEmail}
                    onChange={handleFormChange}
                    className="h-4 w-4 rounded border border-fieldStroke/40 text-accent2 focus:ring-accent2"
                  />
                  Email me playbooks & updates
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="optInSms"
                    checked={formData.optInSms}
                    onChange={handleFormChange}
                    className="h-4 w-4 rounded border border-fieldStroke/40 text-accent2 focus:ring-accent2"
                  />
                  Opt into SMS reminders
                </label>
              </div>
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-accent2 to-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2"
                >
                  Submit intake
                </button>
                <p className="text-xs text-textMuted">
                  We respond within one business day. Submissions route securely to our delivery pod and are never shared.
                </p>
                {isSubmitted ? (
                  <div className="rounded-xl border border-accent2/40 bg-accentSoft/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
                    Thanks! Your intake is on our calendar.
                  </div>
                ) : null}
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-textPrimary/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accentSoft text-accent2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-textPrimary">
                  AI Automate Solutions
                </p>
                <p className="text-xs text-textMuted">
                  We never sell or share your information.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-textMuted">
              <span>(c) {new Date().getFullYear()} AI Automate Solutions.</span>
              <span className="hidden h-1 w-1 rounded-full bg-textMuted/40 sm:inline-block"></span>
              <a href="#privacy" className="transition hover:text-accent2">
                Privacy
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-textMuted/40 sm:inline-block"></span>
              <a href="#terms" className="transition hover:text-accent2">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
