"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Download,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaSpotify,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const ministryEngagements = [
  "Worship & Praise Nights",
  "Church Services & Conventions",
  "Youth & Campus Gatherings",
  "Thanksgiving & Revival Programs",
  "Music, Album & Ministry Launches",
  "Prayer Retreats",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nanaamoahh/",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "https://x.com/nanaamoahh_",
    icon: FaXTwitter,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@nanaamoahh",
    icon: FaYoutube,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/nanakwadwo.amoah",
    icon: FaFacebookF,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@nanaamoahh",
    icon: FaTiktok,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3EQe9YDfiBp4ZERkmjp6Fu?autoplay_ok=1",
    icon: FaSpotify,
  },
];

const contactDetails = [
  {
    label: "Email",
    value: "info@nanaamoah.com",
    href: "mailto:info@nanaamoah.com",
    icon: Mail,
  },
  {
    label: "Phone",
    icon: Phone,
    numbers: [
      { value: "+233 54 715 2345", href: "tel:+233547152345" },
      { value: "+233 54 135 8595", href: "tel:+233541358595" },
      { value: "+233 24 858 9917", href: "tel:+233248589917" },
    ],
  },
  {
    label: "Based in",
    value: "Accra, Ghana",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-purple-700/20 blur-[160px]" />
          <div className="absolute -right-48 top-[15%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[170px]" />
          <div className="absolute bottom-[-230px] left-[20%] h-[520px] w-[520px] rounded-full bg-amber-700/15 blur-[160px]" />
          <div className="absolute bottom-[-180px] right-[5%] h-[420px] w-[420px] rounded-full bg-orange-950/30 blur-[150px]" />
        </div>

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,.25)_55%,rgba(0,0,0,.8)_100%)]" />

        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10">
          <div className="grid w-full gap-14 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-white/35" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                  Invitations & Enquiries
                </span>
              </div>

              <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[8.5rem]">
                Invite
                <br />
                <span className="text-white/35">Nana.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                We are honoured by every invitation extended to Minister Nana
                Amoah. Share the details of your gathering and the team will
                get back to you.
              </p>

              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/brochures/nana-amoah-invitation-booking-brochure.pdf"
                  download
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-medium text-black transition duration-300 hover:bg-amber-50 hover:shadow-[0_0_35px_rgba(245,158,11,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <Download
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  Download Brochure
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="https://wa.me/233547152345?text=Hello%2C%20I%27d%20like%20to%20make%20an%20invitation%20enquiry%20for%20Minister%20Nana%20Amoah."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-6 py-3 text-xs text-white/80 transition duration-300 hover:border-emerald-300/40 hover:bg-emerald-300/[0.14] hover:shadow-[0_0_35px_rgba(52,211,153,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                >
                  <MessageCircle size={16} className="text-emerald-200/80" />
                  WhatsApp · 054 715 2345
                  <ArrowUpRight
                    size={14}
                    className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-white/30">
                For bookings, event invitations and ministry enquiries.
              </p>
            </div>

            {/* Ministry statement */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-white/[0.025] p-8 backdrop-blur-sm">
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-700/15 blur-[80px]" />

                <div className="relative">
                  <div className="mb-7 flex items-center gap-3">
                    <CalendarDays size={16} className="text-amber-200/60" />
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                      Ministry & Fellowship
                    </span>
                  </div>

                  <p className="font-serif text-3xl italic leading-tight text-white/75">
                    Strengthening.
                    <br />
                    Encouraging.
                    <br />
                    Exhorting.
                  </p>

                  <div className="mt-7 h-px w-12 bg-gradient-to-r from-amber-200/50 to-transparent" />

                  <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/35">
                    Through music & the Word
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINISTRY ENGAGEMENTS */}
      <section className="relative border-t border-white/[0.07]">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-purple-800/[0.10] blur-[140px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-800/[0.12] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-amber-100/40">
                Ministry Engagements
              </p>

              <h2 className="mt-5 max-w-sm text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Where Nana can minister.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                Invitations are welcomed for gatherings where worship, the
                Word and ministry are at the centre.
              </p>

              <div className="mt-8 flex items-center gap-3 text-white/30">
                <span className="h-px w-8 bg-amber-200/40" />
                <span className="text-[9px] uppercase tracking-[0.25em]">
                  Let&apos;s connect
                </span>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.08] sm:grid-cols-2">
              {ministryEngagements.map((item, index) => (
                <div
                  key={item}
                  className="group relative overflow-hidden bg-[#090807] p-6 transition duration-500 hover:bg-[#100d0a] sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-600/0 blur-[55px] transition duration-500 group-hover:bg-amber-600/15" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-[9px] tracking-[0.2em] text-white/30 transition-colors group-hover:text-amber-100/60">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <ArrowUpRight
                        size={14}
                        className="text-white/15 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-100/60"
                      />
                    </div>

                    <p className="max-w-xs text-sm leading-6 text-white/70 transition-colors group-hover:text-white">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="relative border-t border-white/[0.07]">
        <div className="pointer-events-none absolute left-[30%] top-0 h-80 w-80 rounded-full bg-blue-800/[0.09] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-950/25 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-amber-100/40">
                Direct Contact
              </p>

              <h2 className="mt-5 text-3xl font-light tracking-tight sm:text-4xl">
                We&apos;re reachable.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                For booking arrangements, questions or other enquiries, reach
                out through any of the contact channels.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.04]"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-700/0 blur-[65px] transition duration-500 group-hover:bg-amber-700/10" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition duration-300 group-hover:border-amber-100/20 group-hover:bg-amber-100/[0.06]">
                        <Icon
                          size={15}
                          className="text-white/50 transition-colors group-hover:text-amber-100/75"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                          {detail.label}
                        </p>

                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="mt-3 block break-words text-sm leading-6 text-white/65 transition hover:text-white focus-visible:outline-none focus-visible:text-white"
                          >
                            {detail.value}
                          </a>
                        ) : detail.numbers ? (
                          <div className="mt-3 space-y-2">
                            {detail.numbers.map((number) => (
                              <a
                                key={number.href}
                                href={number.href}
                                className="block text-sm text-white/65 transition hover:text-white focus-visible:outline-none focus-visible:text-white"
                              >
                                {number.value}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="mt-3 text-sm text-white/65">
                            {detail.value}
                          </p>
                        )}
                      </div>

                      {detail.href && (
                        <ArrowUpRight
                          size={15}
                          className="mt-1 shrink-0 text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/65"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-20 border-t border-white/[0.08] pt-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                  Stay Connected
                </p>
                <p className="mt-2 text-sm text-white/55">
                  Connect with Nana Amoah.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/40 transition duration-300 hover:-translate-y-1 hover:border-amber-100/25 hover:bg-amber-100/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100/50"
                    >
                      <Icon
                        size={14}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL BRAND STATEMENT */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#070605]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(180,100,40,0.10),transparent_55%)]" />
        <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-96 w-96 rounded-full bg-purple-800/[0.12] blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 top-[-160px] h-96 w-96 rounded-full bg-amber-800/[0.12] blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.035] shadow-[0_0_60px_rgba(180,100,40,0.08)]">
            <img
              src="/images/wefaintnot-logo.jpg"
              alt="WeFaintNot Family"
              className="h-12 w-12 rounded-full object-contain opacity-75"
            />
          </div>

          <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-white/35">
            WeFaintNot Family
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light italic uppercase text-white/80 sm:text-5xl">
            We faint not.
          </h2>

          <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

          <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/35">
            2 Corinthians 4:1
          </p>
        </div>
      </section>
    </main>
  );
}