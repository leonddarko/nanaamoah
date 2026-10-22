"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  request: "",
  website: "",
};

export default function PrayerPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [phone, setPhone] = useState(undefined);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!phone) {
      setStatus("error");
      setFeedback("Please select your country and enter your phone number.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/prayer-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your request.");
      }

      setStatus("success");
      setFeedback(data.message);
      setForm(initialForm);
      setPhone(undefined);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.message || "Something went wrong. Please try again in a moment.",
      );
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/30 focus:bg-white/[0.055]";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-purple-700/10 blur-[150px]" />
        <div className="absolute -right-40 top-[35%] h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-amber-700/[0.08] blur-[150px]" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10 lg:pt-44">
        {/* Page introduction */}
        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-white/35" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">
                WeFaintNot Family
              </span>
            </div>

            <h1 className="text-6xl font-light leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
              You are
              <br />
              <span className="text-white/30">not alone.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/45">
              Whatever you are walking through, you are welcome to share your
              prayer request with us. It would be our privilege to stand with
              you in prayer.
            </p>

            <div className="mt-8 flex items-start gap-3 text-white/35">
              <HeartHandshake
                size={19}
                strokeWidth={1.4}
                className="mt-0.5 shrink-0"
              />
              <p className="max-w-sm text-xs leading-6">
                Share what is on your heart. Please provide your contact details
                so the ministry team can identify your request and, if
                appropriate, follow up with you.
              </p>
            </div>
          </div>

          {/* Prayer form */}
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-2xl sm:p-9">
            <div className="mb-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                Prayer Support
              </p>
              <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                Share your request
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/35">
                All fields marked with an asterisk are required.
              </p>
            </div>

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-6"
              >
                <CheckCircle2
                  size={28}
                  className="text-emerald-300"
                  strokeWidth={1.5}
                />

                <h3 className="mt-4 text-lg font-medium text-white/90">
                  Request received
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  {feedback}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFeedback("");
                  }}
                  className="mt-6 text-xs text-white/65 underline underline-offset-4 transition hover:text-white"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot anti-spam field */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={updateField}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-xs text-white/65"
                    >
                      First name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      maxLength={80}
                      value={form.firstName}
                      onChange={updateField}
                      placeholder="Your first name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="text-xs text-white/65">
                      Last name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      maxLength={80}
                      value={form.lastName}
                      onChange={updateField}
                      placeholder="Your last name"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-xs text-white/65">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="prayer-phone"
                    className="text-xs text-white/65"
                  >
                    Phone number *
                  </label>

                  <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-1 transition focus-within:border-white/30">
                    <PhoneInput
                      id="prayer-phone"
                      international
                      defaultCountry="GH"
                      value={phone}
                      onChange={setPhone}
                      autoComplete="tel"
                      placeholder="Enter phone number"
                      className="prayer-phone-input"
                    />
                  </div>

                  <p className="mt-2 text-[10px] text-white/30">
                    Select your country code, then enter your phone number.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <label htmlFor="request" className="text-xs text-white/65">
                      Your prayer request *
                    </label>

                    <span className="text-[10px] tabular-nums text-white/25">
                      {form.request.length}/5000
                    </span>
                  </div>

                  <textarea
                    id="request"
                    name="request"
                    required
                    minLength={5}
                    maxLength={5000}
                    rows={6}
                    value={form.request}
                    onChange={updateField}
                    placeholder="Share your prayer request here..."
                    className={`${inputClass} resize-y leading-7`}
                  />
                </div>
                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm leading-6 text-red-200/90"
                  >
                    {feedback}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <LoaderCircle size={17} className="animate-spin" />
                      Submitting request...
                    </>
                  ) : (
                    <>
                      Submit Prayer Request
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
                <div className="flex items-start gap-2 pt-1">
                  <ShieldCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-white/30"
                  />
                  <p className="text-[11px] leading-5 text-white/30">
                    Your request is submitted to the ministry team and is not
                    published on this website. Please share only information you
                    are comfortable providing.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
