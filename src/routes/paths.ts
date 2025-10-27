export type RoutePath =
  | "/"
  | "/solutions/capture-engine"
  | "/solutions/automation-lab"
  | "/results";

export type NavigateFn = (path: RoutePath) => void;

export type RouteSummary = {
  path: RoutePath;
  title: string;
};
