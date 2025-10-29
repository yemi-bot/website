import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import type { NavigateFn } from "./paths";

type LoginPageProps = {
  onNavigate: NavigateFn;
};

function LoginPage({ onNavigate }: LoginPageProps) {
  const { isAuthenticated, login, error, clearError } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      onNavigate("/proposal-bot");
    }
  }, [isAuthenticated, onNavigate]);

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const success = await login(username, password);
    setIsSubmitting(false);
    if (success) {
      onNavigate("/proposal-bot");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-3xl border border-fieldStroke/40 bg-surface/80 px-6 py-10 shadow-card">
      <div className="space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">
          Secure access
        </p>
        <h1 className="text-2xl font-semibold text-textPrimary">
          Sign in to your AIAS dashboard
        </h1>
        <p className="text-sm text-textMuted">
          Use the credentials provided by AI Automate Solutions to view your automation telemetry.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-semibold text-textPrimary">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="rounded-2xl border border-fieldStroke/40 bg-fieldBg px-4 py-3 text-sm text-textPrimary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            placeholder="aias"
            autoComplete="username"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-semibold text-textPrimary">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-2xl border border-fieldStroke/40 bg-fieldBg px-4 py-3 text-sm text-textPrimary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            placeholder="pass"
            autoComplete="current-password"
            required
          />
        </div>

        {error ? (
          <div className="rounded-2xl border border-accent2/40 bg-accentSoft px-4 py-3 text-sm text-accent2">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent2 to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-accent2 hover:to-accent2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="text-center text-xs text-textMuted">
        Example credentials: <code className="font-semibold text-textPrimary">username: aias</code> ·{" "}
        <code className="font-semibold text-textPrimary">password: pass</code>
      </p>
    </div>
  );
}

export default LoginPage;
