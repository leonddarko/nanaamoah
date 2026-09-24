"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaSpotify,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const enquiryTypes = [
  "Ministry Invitation / Booking",
  "Media / Press",
  "Music / Collaboration",
  "General Enquiry",
];

const ministryEngagements = [
  "Worship & Praise Nights",
  "Church Services & Conventions",
  "Youth & Campus Gatherings",
  "Thanksgiving & Revival Programs",
  "Music, Album & Ministry Launches",
  "Prayer Retreats",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[72vh] overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-purple-700/10 blur-[160px]" />
          <div className="absolute right-[-180px] top-1/4 h-[560px] w-[560px] rounded-full bg-blue-600/10 blur-[170px]" />
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[160px]" />
        </div>

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_45%,rgba(0,0,0,.9)_100%)]" />

        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10">
          <div className="grid w-full gap-14 lg:grid-cols-[1fr_.55fr] lg:items-end">

            {/* Main heading */}
            <div>
              {/* WeFaintNot identity */}
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                  <img
                    src="/images/wefaintnot-logo.jpg"
                    alt="WeFaintNot"
                    className="h-full w-full object-contain opacity-80 rounded-full"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                    WeFaintNot Family
                  </p>

                  <div className="mt-2 h-px w-10 bg-white/20" />
                </div>
              </div>

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-white/30" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                  Invitations & Enquiries
                </span>
              </div>

              <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[8.5rem]">
                Invite
                <br />
                <span className="text-white/30">Nana.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
                We are honoured by every invitation extended to Minister Nana
                Amoah. Share the details of your gathering and the team will
                get back to you.
              </p>
            </div>

            {/* Side statement */}
            <div className="hidden lg:block">
              <div className="border-l border-white/10 pl-7">
                <p className="font-serif text-3xl italic leading-tight text-white/65">
                  Strengthening.
                  <br />
                  Encouraging.
                  <br />
                  Exhorting.
                </p>

                <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Through music & the Word
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MINISTRY ENGAGEMENTS
      ========================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:items-start">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Ministry Engagements
              </p>

              <h2 className="mt-5 max-w-sm text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Where Nana can minister.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/30">
                Invitations are welcomed for gatherings where worship, the
                Word and ministry are at the centre.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
              {ministryEngagements.map((item, index) => (
                <div
                  key={item}
                  className="bg-[#080808] p-6 transition hover:bg-white/[0.035] sm:p-7"
                >
                  <p className="mb-5 text-[9px] tracking-[0.2em] text-white/20">
                    0{index + 1}
                  </p>

                  <p className="max-w-xs text-sm leading-6 text-white/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INVITATION FORM
      ========================================================== */}
      <section className="border-t border-white/[0.07] bg-[#070707]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-32">

          {/* Information */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
              Official Invitation
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-tight sm:text-4xl">
              Tell us about the gathering.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/30">
              Kindly provide the key details of your event so the ministry
              team can properly review and coordinate the invitation.
            </p>

            {/* Requirements */}
            <div className="mt-10 space-y-5 border-t border-white/[0.07] pt-8">

              <div className="flex gap-4">
                <CalendarDays
                  size={16}
                  strokeWidth={1.3}
                  className="mt-0.5 shrink-0 text-white/35"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Timing
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Invitations should ideally be submitted at least one
                    month before the event.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin
                  size={16}
                  strokeWidth={1.3}
                  className="mt-0.5 shrink-0 text-white/35"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Logistics
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Transportation, accommodation where necessary, and
                    hospitality should be considered for the minister and
                    team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Send
                  size={16}
                  strokeWidth={1.3}
                  className="mt-0.5 shrink-0 text-white/35"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Honorarium
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Please include your intended honorarium and transportation
                    budget in your communication.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10 lg:p-12">

            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                Booking Request
              </p>

              <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                Event details
              </h2>
            </div>

            <form className="space-y-7">

              {/* Name + Organisation */}
              <div className="grid gap-7 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organisation"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Church / Organisation
                  </label>

                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    placeholder="Organisation name"
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                  />
                </div>

              </div>

              {/* Email + Phone */}
              <div className="grid gap-7 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+233 ..."
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                  />
                </div>

              </div>

              {/* Event type */}
              <div>
                <label
                  htmlFor="type"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                >
                  Engagement
                </label>

                <select
                  id="type"
                  name="type"
                  defaultValue=""
                  required
                  className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white/60 outline-none transition focus:border-white/25 focus:bg-white/[0.05]"
                >
                  <option value="" disabled className="bg-[#111]">
                    Select an engagement
                  </option>

                  {enquiryTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#111]"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event date + time */}
              <div className="grid gap-7 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Event Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white/60 outline-none transition focus:border-white/25 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Event Time
                  </label>

                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white/60 outline-none transition focus:border-white/25 focus:bg-white/[0.05]"
                  />
                </div>

              </div>

              {/* Venue */}
              <div>
                <label
                  htmlFor="venue"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                >
                  Venue / Location
                </label>

                <input
                  id="venue"
                  name="venue"
                  type="text"
                  placeholder="Venue and city"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                />
              </div>

              {/* Theme */}
              <div>
                <label
                  htmlFor="theme"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                >
                  Event Theme
                </label>

                <input
                  id="theme"
                  name="theme"
                  type="text"
                  placeholder="Theme / programme title"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                />
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                >
                  Honorarium & Transportation Budget
                </label>

                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Intended budget"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                >
                  Additional Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about the programme, expected audience, ministry role and any other relevant details..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Submit Invitation
                <Send
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-center text-[10px] leading-5 text-white/20">
                Please submit invitations at least one month before the event
                where possible.
              </p>

            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECT CONTACT
      ========================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Direct Contact
              </p>

              <h2 className="mt-5 text-3xl font-light tracking-tight sm:text-4xl">
                We&apos;re reachable.
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">

              {/* Email */}
              <a
                href="mailto:wefaintnotfamily@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Mail size={15} className="text-white/45" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-white/55 transition group-hover:text-white">
                    wefaintnotfamily@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Phone size={15} className="text-white/45" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Phone
                  </p>

                  <div className="mt-2 space-y-1 text-sm text-white/55">
                    <a
                      href="tel:+233547152345"
                      className="block transition hover:text-white"
                    >
                      +233 54 715 2345
                    </a>

                    <a
                      href="tel:+233541358595"
                      className="block transition hover:text-white"
                    >
                      +233 54 135 8595
                    </a>

                    <a
                      href="tel:+233248589917"
                      className="block transition hover:text-white"
                    >
                      +233 24 858 9917
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <MapPin size={15} className="text-white/45" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Based in
                  </p>

                  <p className="mt-2 text-sm text-white/55">
                    Accra, Ghana
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Socials */}
          <div className="mt-20 border-t border-white/[0.07] pt-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                Connect with Nana Amoah
              </p>

              <div className="flex items-center gap-3">

                <a
                  href="https://www.instagram.com/nanaamoahh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition hover:border-white/20 hover:text-white"
                >
                  <FaInstagram size={14} />
                </a>

                <a
                  href="https://x.com/nanaamoahh_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition hover:border-white/20 hover:text-white"
                >
                  <FaXTwitter size={14} />
                </a>

                <a
                  href="https://www.youtube.com/@nanaamoahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition hover:border-white/20 hover:text-white"
                >
                  <FaYoutube size={14} />
                </a>

                <a
                  href="https://facebook.com/nanakwadwo.amoah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition hover:border-white/20 hover:text-white"
                >
                  <FaFacebookF size={13} />
                </a>

                <a
                  href="https://www.tiktok.com/@nanaamoahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition hover:border-white/20 hover:text-white"
                >
                  <FaTiktok size={13} />
                </a>

                <a
                  href="https://open.spotify.com/artist/3EQe9YDfiBp4ZERkmjp6Fu?autoplay_ok=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition hover:border-white/20 hover:text-white"
                >
                  <FaSpotify size={14} />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL BRAND STATEMENT
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#070707]">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.035),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">

          <img
            src="/images/wefaintnot-logo.jpg"
            alt="WeFaintNot"
            className="mx-auto h-12 w-12 object-contain opacity-60 rounded-full"
          />

          <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-white/25">
            WeFaintNot Family
          </p>

          <h2 className="mt-5 font-serif text-3xl italic font-light text-white/75 sm:text-5xl">
            We faint not.
          </h2>

          <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/20">
            2 Corinthians 4:1
          </p>

        </div>
      </section>
    </main>
  );
}
