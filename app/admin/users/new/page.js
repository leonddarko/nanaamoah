
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  UserPlus,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

export default function NewAdminUserPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (
      form.password.length < 8 ||
      !/[A-Za-z]/.test(form.password) ||
      !/\d/.test(form.password)
    ) {
      setError(
        "Use at least 8 characters, including at least one letter and one number."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Unable to create the administrator account."
        );
        return;
      }

      setSuccess("Administrator account created successfully.");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Briefly display the success message before navigating.
      window.setTimeout(() => {
        router.push("/admin/users");
        router.refresh();
      }, 1000);
    } catch {
      setError(
        "A network error occurred. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-white/[0.10] bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10 disabled:opacity-50";

  return (
    <div className="mx-auto max-w-4xl">
      {/* Page heading */}
      <div className="mb-8">
        <Link
          href="/admin/users"
          className="mb-6 inline-flex items-center gap-2 text-xs text-white/40 transition hover:text-white/80"
        >
          <ArrowLeft size={15} />
          Back to users
        </Link>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/[0.08]">
            <UserPlus size={21} className="text-violet-200" />
          </div>

          <div>
            <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Create administrator
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
              Create an account with administrative access to Nana Amoah&apos;s
              website management portal.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Form */}
        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-8">
          <div className="mb-7 border-b border-white/[0.08] pb-5">
            <h2 className="text-sm font-medium">Account details</h2>
            <p className="mt-1.5 text-xs text-white/40">
              Complete all fields to create the account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-xs font-medium text-white/65"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  maxLength={50}
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="First name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-xs font-medium text-white/65"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  maxLength={50}
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Last name"
                  className={inputClass}
                />
              </div>
            </div>

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
                autoComplete="email"
                maxLength={254}
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="admin@example.com"
                className={inputClass}
              />
              <p className="mt-2 text-[11px] text-white/30">
                This address will be used to sign in.
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-medium text-white/65"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  minLength={8}
                  placeholder="Create a strong password"
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/35 hover:text-white"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              <p className="mt-2 text-[11px] leading-5 text-white/35">
                At least 8 characters, with both letters and numbers.
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-xs font-medium text-white/65"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Re-enter your password"
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((value) => !value)
                  }
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/35 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-red-400/15 bg-red-500/[0.06] p-3.5 text-xs leading-5 text-red-300"
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {success && (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-xl border border-emerald-400/15 bg-emerald-500/[0.06] p-3.5 text-xs leading-5 text-emerald-300"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <p>{success}</p>
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/admin/users"
                className="flex h-11 items-center justify-center rounded-xl border border-white/10 px-5 text-xs font-medium text-white/60 transition hover:bg-white/[0.04] hover:text-white"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-xs font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle size={15} className="animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <UserPlus size={15} />
                    Create administrator
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Information panel */}
        <aside className="h-fit rounded-2xl border border-violet-400/10 bg-violet-500/[0.035] p-5">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08]">
            <ShieldCheck size={19} className="text-violet-200" />
          </div>

          <h2 className="text-sm font-medium">Administrator access</h2>
          <p className="mt-2 text-xs leading-6 text-white/45">
            Administrators can access protected management features. Only
            create accounts for people who are authorized to manage the website.
          </p>

          <div className="mt-5 border-t border-white/[0.08] pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Security
            </p>
            <ul className="mt-3 space-y-3 text-xs leading-5 text-white/50">
              <li>• Passwords are hashed on the server.</li>
              <li>• Email addresses must be unique.</li>
              <li>• Only authorized administrators can create accounts.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
