"use client";

import { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export default function AdminSignInPage() {
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    async function checkSession() {
      try {
        const session = await getSession();

        if (!isMounted || !session?.user) return;

        if (session.user.role === "admin") {
          router.replace("/admin");
        }
      } catch (error) {
        console.error("Unable to verify the current session.");
      }
    }

    checkSession();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: email.trim().toLowerCase(),
        password,
        redirect: false,
        callbackUrl: "/admin",
      });

      if (!result || result.error) {
        setError(
          "Invalid credentials. Please check your details and try again.",
        );
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Unable to sign in right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-5 py-12 text-white selection:bg-violet-500/30 ">
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-violet-700/[0.12] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-32 h-[440px] w-[440px] rounded-full bg-blue-600/[0.10] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <section className="relative z-10 w-full max-w-[440px]">
        {/* Brand */}
        <div className="mb-10 text-center">
          {/* <a
            href="/"
            aria-label="Nana Amoah homepage"
            className="group mx-auto mb-5 flex w-fit items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-semibold tracking-tight shadow-[0_0_30px_rgba(139,92,246,0.12)]">
              NA
            </span>

            <span className="text-left">
              <span className="block text-sm font-semibold tracking-[0.24em]">
                NANA AMOAH
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.34em] text-white/40">
                W E F A I N T N O T
              </span>
            </span>
          </a> */}

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/35">
            Private access
          </p>
        </div>

        {/* Sign-in card */}
        <div className="rounded-[28px] border border-white/[0.10] bg-white/[0.035] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-9">
          <div className="mb-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/[0.09]">
              <ShieldCheck
                size={22}
                strokeWidth={1.5}
                className="text-violet-200"
              />
            </div>

            <h1 className="text-2xl font-medium tracking-tight sm:text-[28px]">
              Welcome back.
            </h1>

            <p className="mt-2 text-sm leading-6 text-white/45">
              Sign in to access the ministry management portal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-white/65"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="h-12 w-full rounded-xl border border-white/[0.10] bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10 disabled:opacity-50"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-white/65"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-12 w-full rounded-xl border border-white/[0.10] bg-black/30 px-4 pr-12 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10 disabled:opacity-50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/35 transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {error && (
              <p
                role="alert"
                aria-live="polite"
                className="rounded-xl border border-red-400/20 bg-red-500/[0.07] px-4 py-3 text-xs leading-5 text-red-300"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading || !email.trim() || !password}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                  Authenticating...
                </>
              ) : (
                <>
                  Sign in securely
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          <div className="mt-7 flex items-start gap-3 border-t border-white/[0.08] pt-6">
            <LockKeyhole size={15} className="mt-0.5 shrink-0 text-white/35" />
            <p className="text-[11px] leading-5 text-white/35">
              Restricted area. Access is limited to authorized personnel. All
              protected pages require valid authentication and administrator
              privileges.
            </p>
          </div>
        </div>

        <a
          href="/"
          className="mx-auto mt-7 flex w-fit items-center gap-2 text-xs text-white/35 transition hover:text-white/75"
        >
          <ArrowLeft size={14} />
          Return to website
        </a>

        <p className="mt-8 text-center text-[10px] tracking-wide text-white/20">
          © {new Date().getFullYear()} Nana Amoah. All rights reserved.
        </p>
      </section>
    </main>
  );
}
