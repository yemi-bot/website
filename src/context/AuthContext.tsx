import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type SubscriptionId = "opportunity-scanner" | "proposal-bot";

type AuthContextValue = {
  isAuthenticated: boolean;
  subscriptions: SubscriptionId[];
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
  updateSubscriptions: (next: SubscriptionId[]) => void;
};

const AUTH_STORAGE_KEY = "aias__auth";
const SUBSCRIPTION_STORAGE_KEY = "aias__subscriptions";
const VALID_USERNAME = "aias";
const VALID_PASSWORD = "pass";
export const DEFAULT_SUBSCRIPTIONS: SubscriptionId[] = [
  "opportunity-scanner",
  "proposal-bot",
];
const ALL_SUBSCRIPTIONS = new Set<SubscriptionId>(DEFAULT_SUBSCRIPTIONS);

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.localStorage.getItem(AUTH_STORAGE_KEY) === "true";
  });
  const [subscriptions, setSubscriptions] = useState<SubscriptionId[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const stored = window.localStorage.getItem(SUBSCRIPTION_STORAGE_KEY);
    if (!stored) {
      return [];
    }
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed.filter((value): value is SubscriptionId =>
        ALL_SUBSCRIPTIONS.has(value as SubscriptionId),
      );
    } catch {
      return [];
    }
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && subscriptions.length === 0) {
      setSubscriptions(DEFAULT_SUBSCRIPTIONS);
    }
  }, [isAuthenticated, subscriptions.length]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (isAuthenticated) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, "true");
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (subscriptions.length > 0) {
      window.localStorage.setItem(
        SUBSCRIPTION_STORAGE_KEY,
        JSON.stringify(subscriptions),
      );
    } else {
      window.localStorage.removeItem(SUBSCRIPTION_STORAGE_KEY);
    }
  }, [subscriptions]);

  const login = useCallback(async (username: string, password: string) => {
    const normalizedUsername = username.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (
      normalizedUsername === VALID_USERNAME &&
      normalizedPassword === VALID_PASSWORD
    ) {
      setIsAuthenticated(true);
       setSubscriptions(DEFAULT_SUBSCRIPTIONS);
      setError(null);
      return true;
    }

    setIsAuthenticated(false);
    setSubscriptions([]);
    setError("Invalid credentials. Try username \"aias\" and password \"pass\".");
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setSubscriptions([]);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const updateSubscriptions = useCallback((next: SubscriptionId[]) => {
    setSubscriptions(
      next.filter((subscription): subscription is SubscriptionId =>
        ALL_SUBSCRIPTIONS.has(subscription),
      ),
    );
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      subscriptions,
      login,
      logout,
      error,
      clearError,
      updateSubscriptions,
    }),
    [
      isAuthenticated,
      subscriptions,
      login,
      logout,
      error,
      clearError,
      updateSubscriptions,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
