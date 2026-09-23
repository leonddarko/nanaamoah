import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Play,
  Music2,
  CalendarDays,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaDeezer,
} from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-purple-700/30 blur-[160px]" />
          <div className="absolute right-[-180px] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/30 blur-[170px]" />
          <div className="absolute bottom-[-220px] left-[30%] h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[170px]" />
        </div>

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_48%,rgba(0,0,0,.88)_100%)]" />

        {/* Hero */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-6 pb-20 pt-24 lg:px-10">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_.9fr]">

            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}
            <div className="relative z-10 max-w-2xl">

              {/* WeFaintNot identity */}
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <img
                    src="/images/wefaintnot-logo.jpg"
                    alt="WeFaintNot"
                    className="h-full w-full object-contain rounded-full"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.32em] text-white/30">
                    A WeFaintNot Family Ministry
                  </p>

                  <div className="mt-2 h-px w-12 bg-white/20" />
                </div>
              </div>

              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-white/30" />

                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
                  Gospel • Worship • Word
                </span>
              </div>

              {/* Name */}
              <h1 className="font-serif text-[clamp(4.5rem,10vw,8.5rem)] leading-[0.82] tracking-[-0.06em]">
                Nana
                <br />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/40 bg-clip-text text-transparent">
                  Amoah
                </span>
              </h1>

              {/* Mission */}
              <p className="mt-9 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                Called to draw hearts to the heart of the Father through music,
                worship, and the Word of God.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/music"
                  className="group flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-white/90"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                    <Play size={12} fill="currentColor" />
                  </span>

                  Listen Now

                  <span className="flex items-center gap-2 border-l border-black/10 pl-3">
                    <FaYoutube size={13} />
                    <FaSpotify size={13} />
                    <FaApple size={13} />
                    <FaDeezer size={14} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-6 py-4 text-sm text-white/75 backdrop-blur-xl transition duration-300 hover:bg-white/[0.08] hover:text-white"
                >
                  <CalendarDays size={15} strokeWidth={1.5} />
                  Invite Nana
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              {/* Socials */}
              <div className="mt-12 flex items-center gap-5 text-white/30">
                <a
                  href="https://www.instagram.com/nanaamoahh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="https://x.com/nanaamoahh_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <FaXTwitter size={17} />
                </a>

                <a
                  href="https://facebook.com/nanakwadwo.amoah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <FaFacebookF size={15} />
                </a>

                <a
                  href="https://www.tiktok.com/@nanaamoahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <FaTiktok size={15} />
                </a>
              </div>
            </div>

            {/* =====================================================
                ARTIST IMAGE
            ====================================================== */}
            <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:justify-end">

              {/* Ambient halos */}
              <div className="absolute right-[8%] top-[8%] h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
              <div className="absolute bottom-[8%] left-[0%] h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />

              {/* Portrait */}
              <div className="relative h-[600px] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/60 sm:h-[680px]">

                <img
                  src="/images/nana-portrait-head-main.jpg"
                  alt="Nana Amoah"
                  className="h-full w-full object-cover object-top opacity-90"
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />

                {/* Bottom identity */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                        Minister • Gospel Artist
                      </p>

                      <p className="mt-2 text-xl font-medium">
                        Nana Amoah
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/25 backdrop-blur-xl">
                      <Music2 size={17} strokeWidth={1.5} />
                    </div>

                  </div>
                </div>
              </div>

              {/* ===================================================
                  RELEASE CARD
              ==================================================== */}
              <div className="absolute right-0 top-8 hidden w-56 rounded-3xl border border-white/10 bg-black/60 p-4 shadow-xl backdrop-blur-2xl sm:block lg:-right-10">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Play size={13} fill="currentColor" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      Latest Release
                    </p>

                    <p className="mt-1.5 text-xs font-medium leading-5 text-white/80">
                      Nobody Greater
                    </p>

                    <p className="mt-0.5 text-[10px] leading-4 text-white/35">
                      feat. Philip Adzale & Kwaku Kwame
                    </p>
                  </div>

                </div>
              </div>

              {/* ===================================================
                  WEFaintNot FLOATING MARK
              ==================================================== */}
              <div className="absolute bottom-22 -left-1.5 hidden items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-2xl sm:flex lg:-left-5">

                <img
                  src="/images/wefaintnot-logo.jpg"
                  alt="WeFaintNot"
                  className="h-8 w-8 object-contain opacity-80 rounded-full"
                />

                <div>
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                    WeFaintNot Family
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/65">
                    2 Corinthians 4:1
                  </p>
                </div>

              </div>

              {/* Vertical label */}
              <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.45em] text-white/25 xl:block">
                Faith • Music • Purpose
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/25 sm:flex">
          Explore the ministry
          <ChevronDown size={14} />
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* =========================================================
          MINISTRY INTRODUCTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#070707] px-6 py-28 lg:px-10 lg:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-end">

            <div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                  The Ministry
                </span>

                <span className="h-px w-12 bg-white/15" />
              </div>

              <p className="mt-6 max-w-xs text-sm leading-6 text-white/35">
                Strengthening. Encouraging. Exhorting.
                <br />
                Through music and the Word.
              </p>
            </div>

            <div>

              <h2 className="max-w-5xl text-3xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-5xl lg:text-6xl">
                A voice committed to{" "}
                <span className="text-white/35">
                  pointing people back to God.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                Nana Amoah is called to draw the hearts of men to the heart
                of the Father. His ministry carries a simple desire: to
                present Jesus to everyone who encounters him.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                Discover the ministry
                <ArrowUpRight size={15} />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRAISE WAITING
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-28 lg:px-10 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                A Movement of Worship
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight tracking-tight sm:text-6xl">
                Praise
                <span className="text-white/30"> Waiting.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                A powerful move of God pioneered by Nana Amoah, premiered
                monthly on YouTube and crowned each year with a special
                in-person service.
              </p>

              <Link
                href="/events"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white/70 transition hover:bg-white/[0.07] hover:text-white"
              >
                Explore Praise Waiting
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Scripture mark */}
            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.02]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.06),transparent_65%)]" />

              <div className="relative px-8 text-center">
                <p className="font-serif text-5xl italic text-white/10 sm:text-7xl">
                  We faint not.
                </p>

                <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-white/30">
                  2 Corinthians 4:1
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INVITATION CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#070707] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <img
            src="/images/wefaintnot-logo.jpg"
            alt="WeFaintNot"
            className="mx-auto mb-8 h-18 w-18 object-contain opacity-60 rounded-full"
          />

          <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">
            Ministry Invitations
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">
            Invite Nana to minister.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40">
            Worship nights, church services, conventions, youth gatherings,
            thanksgiving, revival programs, launches and prayer retreats.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Invitation & Booking
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}