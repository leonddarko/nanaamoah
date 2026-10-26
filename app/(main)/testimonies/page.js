"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  LoaderCircle,
  ShieldCheck,
  PlayCircle,
  Quote,
} from "lucide-react";

const categories = [
  "Healing",
  "Answered Prayer",
  "Salvation",
  "Breakthrough",
  "Deliverance",
  "Spiritual Growth",
  "Provision",
  "Protection",
  "Encouragement",
  "Other",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  title: "",
  testimony: "",
  category: "",
  isAnonymous: false,
  publicationConsent: false,
  website: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-purple-300/50 focus:bg-white/[0.05]";

const labelClass = "text-xs font-medium text-white/65";

function displayName(testimony) {
  if (testimony.isAnonymous) return "Anonymous";

  return [testimony.firstName, testimony.lastName].filter(Boolean).join(" ");
}

export default function TestimoniesPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const [testimonies, setTestimonies] = useState([]);
  const [feedStatus, setFeedStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadTestimonies() {
      try {
        const response = await fetch("/api/testimonies?status=approved", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load testimonies.");
        }

        const data = await response.json();

        if (!cancelled) {
          setTestimonies(
            Array.isArray(data.testimonies) ? data.testimonies : [],
          );
          setFeedStatus("success");
        }
      } catch {
        if (!cancelled) setFeedStatus("error");
      }
    }

    loadTestimonies();

    return () => {
      cancelled = true;
    };
  }, []);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback("");

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.title.trim() ||
      !form.testimony.trim() ||
      !form.category
    ) {
      setFeedback("Please complete all required fields.");
      setStatus("error");
      return;
    }

    if (!form.publicationConsent) {
      setFeedback(
        "Please confirm your consent to publication before submitting.",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/testimonies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your testimony.");
      }

      setForm(initialForm);
      setFeedback(data.message);
      setStatus("success");
    } catch (error) {
      setFeedback(error.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#08080b] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[#08080b]" />
        <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[450px] w-[450px] rounded-full bg-purple-700/[0.12] blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-amber-500/[0.07] blur-[140px]" />

        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:text-xs">
              <Heart size={14} className="text-amber-200" />
              Stories of His Faithfulness
            </div>

            <h1 className="mt-7 text-4xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              When God moves,
              <span className="mt-1 block bg-gradient-to-r from-amber-200 via-white to-white/70 bg-clip-text pb-2 text-transparent">
                lives are changed.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Every testimony is a reminder of God&apos;s goodness. Discover
              stories of answered prayer, renewed hope, and transformed lives —
              and share what He has done in yours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#approved-testimonies"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-amber-100"
              >
                Read the testimonies
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#share-testimony"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-6 py-3.5 text-sm text-white/75 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                Share your story
              </a>
            </div>
          </div>

          {/* Cinematic image panel */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-r from-purple-500/10 via-white/[0.03] to-amber-300/10 blur-2xl sm:-inset-5" />

            <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111114] sm:min-h-[540px] sm:rounded-[2rem] lg:min-h-[620px]">
              <img
                src="/images/nana-amoah-testimonies.jpg"
                alt="A moment of worship and praise"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />

              {/* Cinematic overlays */}
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-md sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
                  To God Be the Glory
                </span>
              </div>

              {/* Scripture */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
                <div className="max-w-3xl">
                  <Quote
                    size={30}
                    strokeWidth={1.4}
                    className="text-amber-200 sm:h-9 sm:w-9"
                  />

                  <blockquote className="mt-4 text-2xl font-medium leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
                    “O magnify the LORD with me, and let us exalt his name
                    together.”
                  </blockquote>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="h-px w-10 bg-amber-200/70" />
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/65">
                      Psalm 34:3 · KJV
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle footer beneath image */}
            <div className="mt-5 flex flex-col gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
              <span>Faith. Hope. A living testimony.</span>
              <span>All glory belongs to God.</span>
            </div>
          </div>
        </div>
      </section>
      {/* Approved testimonies */}
      <section
        id="approved-testimonies"
        className="scroll-mt-24 border-t border-white/[0.07] px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-amber-200/70">
                Stories of His Goodness
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Testimonies of Faith
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                Read how others have experienced God&apos;s faithfulness and
                find encouragement for your own journey.
              </p>
            </div>

            <a
              href="#share-testimony"
              className="inline-flex w-fit items-center gap-2 text-sm text-white/65 transition hover:text-white"
            >
              Share your story
              <ArrowRight size={15} />
            </a>
          </div>

          {feedStatus === "loading" && (
            <div className="flex items-center justify-center gap-3 py-16 text-sm text-white/45">
              <LoaderCircle size={18} className="animate-spin" />
              Loading testimonies...
            </div>
          )}

          {feedStatus === "error" && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-8 text-center">
              <p className="text-sm text-white/60">
                Testimonies are temporarily unavailable. Please try again later.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFeedStatus("loading");
                  fetch("/api/testimonies?status=approved", {
                    cache: "no-store",
                  })
                    .then((response) => {
                      if (!response.ok) throw new Error("Request failed");
                      return response.json();
                    })
                    .then((data) => {
                      setTestimonies(
                        Array.isArray(data.testimonies) ? data.testimonies : [],
                      );
                      setFeedStatus("success");
                    })
                    .catch(() => setFeedStatus("error"));
                }}
                className="mt-4 text-xs text-amber-200 hover:text-amber-100"
              >
                Try again
              </button>
            </div>
          )}

          {feedStatus === "success" && testimonies.length === 0 && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-12 text-center">
              <BookOpen size={25} className="mx-auto text-white/35" />
              <h3 className="mt-4 text-lg font-medium">
                Your story could encourage someone.
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/45">
                We&apos;re preparing this space for approved testimonies. Be
                among the first to share what God has done in your life.
              </p>
              <a
                href="#share-testimony"
                className="mt-5 inline-flex items-center gap-2 text-sm text-amber-200 hover:text-amber-100"
              >
                Share your testimony
                <ArrowRight size={15} />
              </a>
            </div>
          )}

          {feedStatus === "success" && testimonies.length > 0 && (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {testimonies.map((item) => (
                <article
                  key={item._id}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/20 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-amber-200/15 bg-amber-200/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-amber-100/80">
                      {item.category}
                    </span>
                    <Quote size={20} className="text-white/25" />
                  </div>

                  <h3 className="mt-5 text-xl font-medium leading-7">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 whitespace-pre-line break-words text-sm leading-7 text-white/55">
                    {item.testimony}
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="text-sm font-medium text-white/80">
                      {displayName(item)}
                    </p>
                    {item.country && (
                      <p className="mt-1 text-xs text-white/35">
                        {item.country}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Submission form */}
      <section
        id="share-testimony"
        className="border-t border-white/[0.07] px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200/15 bg-amber-200/[0.06] text-amber-200">
              <BookOpen size={25} strokeWidth={1.5} />
            </div>
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Share Your Testimony
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/50">
              Share your story in your own words. Your testimony will be
              reviewed before it appears publicly.
            </p>
          </div>

          {status === "success" ? (
            <div className="rounded-3xl border border-emerald-200/15 bg-white/[0.035] px-6 py-12 text-center sm:px-12">
              <CheckCircle2 size={42} className="mx-auto text-emerald-200" />
              <h3 className="mt-6 text-2xl font-medium">
                Thank you for sharing.
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/55">
                {feedback}
              </p>
              <p className="mt-3 text-xs leading-6 text-white/40">
                Your testimony will remain private until it has been reviewed
                and approved for publication.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setFeedback("");
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white/[0.06]"
              >
                Share another testimony
                <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-9"
            >
              <div className="space-y-6">
                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] h-px w-px overflow-hidden"
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
                    <label htmlFor="firstName" className={labelClass}>
                      First name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      maxLength={80}
                      value={form.firstName}
                      onChange={updateField}
                      className={inputClass}
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      maxLength={80}
                      value={form.lastName}
                      onChange={updateField}
                      className={inputClass}
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address{" "}
                      <span className="text-white/35">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      value={form.email}
                      onChange={updateField}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className={labelClass}>
                      Country <span className="text-white/35">(optional)</span>
                    </label>
                    <input
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      maxLength={100}
                      value={form.country}
                      onChange={updateField}
                      className={inputClass}
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className={labelClass}>
                    Testimony category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={form.category}
                    onChange={updateField}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled className="bg-[#111]">
                      Select a category
                    </option>
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category}
                        className="bg-[#111]"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="title" className={labelClass}>
                    Testimony title *
                  </label>
                  <input
                    id="title"
                    name="title"
                    required
                    minLength={3}
                    maxLength={150}
                    value={form.title}
                    onChange={updateField}
                    className={inputClass}
                    placeholder="Give your testimony a meaningful title"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <label htmlFor="testimony" className={labelClass}>
                      Your testimony *
                    </label>
                    <span className="text-[10px] text-white/30">
                      {form.testimony.length}/10,000
                    </span>
                  </div>
                  <textarea
                    id="testimony"
                    name="testimony"
                    required
                    minLength={20}
                    maxLength={10000}
                    rows={7}
                    value={form.testimony}
                    onChange={updateField}
                    className={`${inputClass} resize-y leading-7`}
                    placeholder="Share your story in your own words..."
                  />

                  {/* Video testimony instructions */}
                  <p className="mt-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs leading-6 text-white/55">
                    Prefer to share your testimony on video? Please send your
                    video testimony to{" "}
                    <a
                      href="mailto:info@nanaamoah.com"
                      className="font-medium text-amber-200 underline decoration-amber-200/40 underline-offset-4 transition hover:text-amber-100"
                    >
                      info@nanaamoah.com
                    </a>
                    . For your privacy, only send a video you have the right to
                    share and are comfortable having reviewed for possible
                    publication.
                  </p>

                  <p className="mt-3 text-[11px] leading-5 text-white/35">
                    Please avoid including sensitive personal information about
                    yourself or others.
                  </p>
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <input
                    type="checkbox"
                    name="isAnonymous"
                    checked={form.isAnonymous}
                    onChange={updateField}
                    className="mt-1 h-4 w-4 shrink-0 accent-purple-400"
                  />
                  <span>
                    <span className="block text-sm font-medium text-white/85">
                      Publish my testimony anonymously
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-white/45">
                      Your name will not appear with the published testimony.
                      Your submission details will still be stored privately for
                      administration.
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-amber-200/15 bg-amber-200/[0.025] p-4">
                  <input
                    type="checkbox"
                    name="publicationConsent"
                    required
                    checked={form.publicationConsent}
                    onChange={updateField}
                    className="mt-1 h-4 w-4 shrink-0 accent-amber-300"
                  />
                  <span className="text-xs leading-6 text-white/65">
                    I confirm that this is my testimony, that I have the right
                    to share it, and that I give Nana Amoah permission to
                    publish it on this website after review, using my selected
                    name-display preference. *
                  </span>
                </label>

                <div className="flex items-start gap-2 text-[11px] leading-5 text-white/40">
                  <ShieldCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-white/50"
                  />
                  <p>
                    Submissions are reviewed before publication. Consent does
                    not guarantee publication. You may contact the ministry to
                    request withdrawal of your testimony.
                  </p>
                </div>

                {feedback && status === "error" && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-300/15 bg-red-300/[0.05] px-4 py-3 text-sm text-red-200"
                  >
                    {feedback}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <LoaderCircle size={17} className="animate-spin" />
                      Submitting testimony...
                    </>
                  ) : (
                    <>
                      Submit Testimony
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] leading-5 text-white/30">
                  Submitted testimonies remain private while pending review.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
      <section className="border-t border-white/[0.07] px-5 py-10 text-center">
        <Heart size={18} className="mx-auto text-amber-200/70" />
        <p className="mt-3 text-xs leading-6 text-white/40">
          “O give thanks unto the LORD; for he is good: for his mercy endureth
          for ever.”
        </p>
        <p className="mt-1 text-[10px] text-white/30">Psalm 107:1 · KJV</p>
        <Link
          href="/"
          className="mt-5 inline-block text-xs text-white/50 transition hover:text-white"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}
