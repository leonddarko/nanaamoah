import Image from "next/image";
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
import MinistryHighlights from "@/components/MinistryHighlights";

const sectionLabel =
  "text-[10px] uppercase tracking-[0.35em] text-white/35";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =========================================================
          HERO — EXISTING DESIGN PRESERVED
      ========================================================== */}
      <section className="relative min-h-screen overflow-hidden shadow-amber-950/10 shadow-md">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-purple-700/30 blur-[160px]" />
          <div className="absolute right-[-180px] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/30 blur-[170px]" />
          <div className="absolute bottom-[-220px] left-[30%] h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[170px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_48%,rgba(0,0,0,.88)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-6 pb-20 pt-24 lg:px-10">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_.9fr]">

            {/* LEFT CONTENT */}
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-white/30" />

                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
                  Gospel • Worship • Word
                </span>
              </div>

              <h1 className="font-serif text-[clamp(4.5rem,10vw,8.5rem)] leading-[0.82] tracking-[-0.06em]">
                Nana
                <br />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/40 bg-clip-text text-transparent">
                  Amoah
                </span>
              </h1>

              <p className="mt-9 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                Called to draw hearts to the heart of the Father through music,
                worship, and the Word of God.
              </p>

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

              <div className="mt-12 flex items-center gap-5 text-white/35">
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

            {/* ARTIST PORTRAIT */}
            <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:justify-end">
              <div className="absolute right-[8%] top-[8%] h-80 w-80 rounded-full bg-amber-400/15 blur-[120px]" />
              <div className="absolute bottom-[8%] left-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[110px]" />
              <div className="absolute right-[15%] bottom-[15%] h-64 w-64 rounded-full bg-[#805033]/20 blur-[100px]" />

              <div className="relative h-[600px] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/60 sm:h-[680px]">
                <Image
                  src="/images/nana-portrait-head-main.jpg"
                  alt="Nana Amoah"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-top opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#573823]/20" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
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

              <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.45em] text-white/25 xl:block">
                Faith • Music • Purpose
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/30 sm:flex">
          Explore the ministry
          <ChevronDown size={14} />
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* =========================================================
          MINISTRY HIGHLIGHTS
      ========================================================== */}
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-[-80px] h-[400px] w-[400px] rounded-full bg-[#76503b]/15 blur-[150px]" />
          <div className="absolute right-[-100px] top-1/3 h-[350px] w-[350px] rounded-full bg-[#49356c]/15 blur-[140px]" />
        </div>

        <MinistryHighlights />
      </div>

      {/* =========================================================
          MINISTRY INTRODUCTION
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#070605] px-6 py-24 lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-[-80px] h-[480px] w-[480px] rounded-full bg-[#7145a0]/20 blur-[155px]" />
          <div className="absolute right-[-150px] top-[10%] h-[520px] w-[520px] rounded-full bg-[#815438]/25 blur-[165px]" />
          <div className="absolute bottom-[-200px] left-[30%] h-[400px] w-[400px] rounded-full bg-[#a47a49]/10 blur-[145px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className={sectionLabel}>The Ministry</span>
                <span className="h-px w-12 bg-[#b28a68]/40" />
              </div>

              <p className="mt-6 max-w-xs text-sm leading-6 text-white/45">
                Strengthening. Encouraging. Exhorting.
                <br />
                Through music and the Word.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-3xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-5xl lg:text-6xl">
                A voice committed to{" "}
                <span className="text-white/40">
                  pointing people back to God.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                Nana Amoah is called to draw the hearts of men to the heart
                of the Father. His ministry carries a simple desire: to
                present Jesus to everyone who encounters him.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm text-[#d0ad8d] transition hover:text-white"
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
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#060505] px-6 py-24 lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-[-100px] h-[450px] w-[450px] rounded-full bg-[#714a8a]/20 blur-[155px]" />
          <div className="absolute right-[-140px] top-1/4 h-[520px] w-[520px] rounded-full bg-[#875332]/25 blur-[165px]" />
          <div className="absolute bottom-[-180px] left-[35%] h-[360px] w-[360px] rounded-full bg-[#b08a53]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center lg:gap-20">
            <div>
              <p className={sectionLabel}>A Movement of Worship</p>

              <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight tracking-tight sm:text-6xl">
                Praise
                <span className="text-white/35"> Waiting.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                A powerful move of God pioneered by Nana Amoah, premiered
                monthly on YouTube and crowned each year with a special
                in-person service.
              </p>

              <Link
                href="/events"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.035] px-5 py-3.5 text-sm text-white/75 transition hover:border-[#b28a68]/40 hover:bg-[#70482f]/15 hover:text-white"
              >
                Explore Praise Waiting
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* One supporting ministry image */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#17100d] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <div className="absolute -inset-10 bg-[#875332]/15 blur-[90px]" />

              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/praise-waiting-worship.jpg"
                  alt="A moment of worship at Praise Waiting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-[#70472f]/15" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#d4b292]/80">
                    WeFaintNot Family
                  </p>

                  <p className="mt-3 font-serif text-3xl italic text-white/90 sm:text-4xl uppercase">
                    We faint not.
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/50">
                    2 Corinthians 4:1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INVITATION CTA
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#070605] px-6 py-24 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#805235]/20 blur-[165px]" />
          <div className="absolute -left-40 bottom-[-160px] h-[400px] w-[400px] rounded-full bg-[#594276]/15 blur-[150px]" />
          <div className="absolute -right-40 bottom-[-150px] h-[400px] w-[400px] rounded-full bg-[#a47a49]/10 blur-[145px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border border-[#b28a68]/30 bg-[#21160f]/70 p-2 shadow-[0_0_60px_rgba(133,86,52,0.14)]">
            <Image
              src="/images/wefaintnot-logo.jpg"
              alt="WeFaintNot Family"
              width={72}
              height={72}
              className="h-full w-full rounded-full object-contain opacity-85"
            />
          </div>

          <p className={sectionLabel}>Ministry Invitations</p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">
            Invite Nana to minister.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">
            Worship nights, church services, conventions, youth gatherings,
            thanksgiving, revival programs, launches and prayer retreats.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e9dfd4] px-7 py-4 text-sm font-semibold text-[#17110d] transition hover:bg-white"
          >
            Invitation & Booking
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}