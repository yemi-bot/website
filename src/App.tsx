import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import SiteLayout from "./components/layout/SiteLayout";
import HomePage from "./routes/HomePage";
import CaptureEnginePage from "./routes/CaptureEnginePage";
import AutomationLabPage from "./routes/AutomationLabPage";
import ResultsPage from "./routes/ResultsPage";
import NotFoundPage from "./routes/NotFoundPage";
import type { NavigateFn, RoutePath, RouteSummary } from "./routes/paths";

type RouteConfig = {
  path: RoutePath;
  title: string;
  render: (navigate: NavigateFn) => ReactNode;
};

const ROUTES: RouteConfig[] = [
  {
    path: "/",
    title: "Home",
    render: (navigate) => <HomePage onNavigate={navigate} />,
  },
  {
    path: "/solutions/capture-engine",
    title: "Client Story",
    render: (navigate) => <CaptureEnginePage onNavigate={navigate} />,
  },
  {
    path: "/solutions/automation-lab",
    title: "Automation Lab",
    render: (navigate) => <AutomationLabPage onNavigate={navigate} />,
  },
  {
    path: "/results",
    title: "Results",
    render: (navigate) => <ResultsPage onNavigate={navigate} />,
  },
];

const ROUTE_MAP = ROUTES.reduce<Record<RoutePath, RouteConfig>>((acc, route) => {
  acc[route.path] = route;
  return acc;
}, {} as Record<RoutePath, RouteConfig>);

function sanitizePath(pathname: string): RoutePath | null {
  if (!pathname || pathname === "") {
    return "/";
  }

  const withoutTrailing =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (
    (Object.keys(ROUTE_MAP) as RoutePath[]).includes(
      withoutTrailing as RoutePath,
    )
  ) {
    return withoutTrailing as RoutePath;
  }

  return null;
}

function App() {
  const initialPath = useMemo(
    () => sanitizePath(window.location.pathname) ?? "/",
    [],
  );
  const [currentPath, setCurrentPath] = useState<RoutePath>(initialPath);

  useEffect(() => {
    const handlePopState = () => {
      const nextPath = sanitizePath(window.location.pathname);
      if (nextPath) {
        setCurrentPath(nextPath);
      } else {
        setCurrentPath("/");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback(
    (path: RoutePath) => {
      if (path === currentPath) {
        return;
      }

      window.history.pushState({}, "", path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [currentPath],
  );

  const route = ROUTE_MAP[currentPath];

  return (
    <SiteLayout
      currentPath={currentPath}
      onNavigate={navigate}
      routes={ROUTES as RouteSummary[]}
    >
      {route ? route.render(navigate) : <NotFoundPage onNavigate={navigate} />}
    </SiteLayout>
  );
}

export default App;
