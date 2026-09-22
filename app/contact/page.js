"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaSpotify,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const enquiryTypes = [
  "Booking / Event",
  "Media / Press",
  "Music / Collaboration",
  "General Enquiry",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[68vh] items-end overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[150px]" />
          <div className="absolute right-[-180px] top-1/3 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[160px]" />
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[150px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Contact
              </span>
            </div>

            <h1 className="text-6xl font-light leading-[0.92] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              Let&apos;s
              <br />
              <span className="text-white/30">connect.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Whether you&apos;re planning an event, looking for a
              collaboration or simply want to get in touch, we&apos;d love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">

          {/* =====================================================
              CONTACT INFO
          ====================================================== */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Start a conversation.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/30">
              For bookings, collaborations, media enquiries or general
              questions, send a message and the team will get back to you.
            </p>

            <div className="mt-10 space-y-6">
              {/* Email */}
              <a
                href="mailto:wefaintnotfamily@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Mail size={15} className="text-white/50" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/60 transition group-hover:text-white">
                    wefaintnotfamily@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <MapPin size={15} className="text-white/50" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Based in
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                Follow Nana
              </p>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/nanaamoahh/"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  <FaInstagram size={15} />
                </a>

                <a
                  href="https://www.youtube.com/@nanaamoahh"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  <FaYoutube size={16} />
                </a>

                <a
                  href="https://facebook.com/nanakwadwo.amoah"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="https://open.spotify.com/artist/3EQe9YDfiBp4ZERkmjp6Fu?autoplay_ok=1"
                  aria-label="Spotify"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  <FaSpotify size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTACT FORM
          ====================================================== */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10 lg:p-12">
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                Enquiry
              </p>

              <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                How can we help?
              </h2>
            </div>

            <form className="space-y-7">
              {/* Name + Email */}
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                  />
                </div>

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
              </div>

              {/* Enquiry Type */}
              <div>
                <label
                  htmlFor="type"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                >
                  Enquiry Type
                </label>

                <select
                  id="type"
                  name="type"
                  defaultValue=""
                  required
                  className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white/60 outline-none transition focus:border-white/25 focus:bg-white/[0.05]"
                >
                  <option value="" disabled className="bg-[#111]">
                    Select an enquiry
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

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about your enquiry..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition focus:border-white/25 focus:bg-white/[0.05]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Send Enquiry
                <Send
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-center text-[10px] leading-5 text-white/20">
                Your information will only be used to respond to your
                enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOKING CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.07]">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            Book Nana Amoah
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">
            An invitation can become a moment.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/30">
            For worship services, concerts, conferences and special
            gatherings, reach out with your event details.
          </p>

          <a
            href="mailto:wefaintnotfamily@gmail.com?subject=Booking%20Enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Booking Enquiry
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

