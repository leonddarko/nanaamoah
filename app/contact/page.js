"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Send,
  Download,
  MessageCircle,
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
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-yellow-900/30 blur-[160px]" />
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
              {/* <div className="mb-10 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                  <img
                    src="/images/wefaintnot-logo.jpg"
                    alt="WeFaintNot"
                    className="h-full w-full rounded-full object-contain opacity-80"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                    WeFaintNot Family
                  </p>
                  <div className="mt-2 h-px w-10 bg-white/20" />
                </div>
              </div> */}

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
                Amoah. Share the details of your gathering and the team will get
                back to you.
              </p>

              {/* Contact actions */}
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/brochures/nana-amoah-invitation-booking-brochure.pdf"
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-medium text-black transition hover:bg-white/85"
                >
                  <Download size={16} />
                  Download Brochure
                </a>

                <a
                  href="https://wa.me/233547152345?text=Hello%2C%20I%27d%20like%20to%20make%20an%20invitation%20enquiry%20for%20Minister%20Nana%20Amoah."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-green-300/[0.10] px-6 py-3 text-xs text-white/80 transition hover:border-white/30 hover:bg-green-300/[0.15]"
                >
                  <MessageCircle size={16} />
                  WhatsApp · 054 715 2345
                  <ArrowUpRight size={14} className="text-white/40" />
                </a>

                <a
                  href="https://wa.me/233541358595?text=Hello%2C%20I%27d%20like%20to%20make%20an%20invitation%20enquiry%20for%20Minister%20Nana%20Amoah."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-green-300/[0.10] px-6 py-3 text-xs text-white/80 transition hover:border-white/30 hover:bg-green-300/[0.15]"
                >
                  <MessageCircle size={16} />
                  WhatsApp · 054 135 8595
                  <ArrowUpRight size={14} className="text-white/40" />
                </a>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-white/25">
                For bookings, event invitations and ministry enquiries.
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
                Invitations are welcomed for gatherings where worship, the Word
                and ministry are at the centre.
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

                  <p className="mt-2 text-sm text-white/55">Accra, Ghana</p>
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
