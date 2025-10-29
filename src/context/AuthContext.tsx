import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
};

const AUTH_STORAGE_KEY = "aias__auth";
const VALID_USERNAME = "aias";
const VALID_PASSWORD = "pass";

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
  const [error, setError] = useState<string | null>(null);

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

  const login = useCallback(async (username: string, password: string) => {
    const normalizedUsername = username.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (
      normalizedUsername === VALID_USERNAME &&
      normalizedPassword === VALID_PASSWORD
    ) {
      setIsAuthenticated(true);
      setError(null);
      return true;
    }

    setIsAuthenticated(false);
    setError("Invalid credentials. Try username \"aias\" and password \"pass\".");
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      login,
      logout,
      error,
      clearError,
    }),
    [isAuthenticated, login, logout, error, clearError],
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
