export type RoutePath =
  | "/"
  | "/solutions/capture-engine"
  | "/solutions/automation-lab"
  | "/results"
  | "/pricing"
  | "/resources"
  | "/partner-program"
  | "/proposal-bot"
  | "/login";

export type NavigateFn = (path: RoutePath) => void;

export type RouteSummary = {
  path: RoutePath;
  title: string;
  includeInNav?: boolean;
};
