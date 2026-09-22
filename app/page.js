import Link from "next/link";
import { ArrowUpRight, ChevronDown, Play, Music2 } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
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
          <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-purple-700/30 blur-[150px]" />
          <div className="absolute right-[-180px] top-[8%] h-[560px] w-[560px] rounded-full bg-blue-600/30 blur-[160px]" />
          <div className="absolute bottom-[-180px] left-[25%] h-[500px] w-[500px] rounded-full bg-yellow-500/20 blur-[160px]" />
          <div className="absolute bottom-[-160px] right-[15%] h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[160px]" />
        </div>

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Dark vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_45%,rgba(0,0,0,.8)_100%)]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-6 pb-16 pt-8 lg:px-10 mt-22">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            {/* Left */}
            <div className="relative z-10 max-w-2xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-white/40" />

                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/55">
                  Gospel • Worship • Ministry
                </span>
              </div>

              <h1 className="font-serif text-[clamp(4.5rem,10vw,9rem)] leading-[0.82] tracking-[-0.055em]">
                Nana
                <br />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/45 bg-clip-text text-transparent">
                  Amoah
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
                Music born from faith, shaped by worship, and created to reach
                hearts beyond the walls of the church.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/music"
                  className="group flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
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
                  href="/about"
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm text-white/80 backdrop-blur-xl transition hover:bg-white/[0.08]"
                >
                  Discover Nana <ArrowUpRight size={15} />
                </Link>
              </div>

              {/* Socials */}
              <div className="mt-12 flex items-center gap-5 text-white/35">
                <a
                  href="https://www.instagram.com/nanaamoahh/"
                  aria-label="Instagram"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="https://www.youtube.com/@nanaamoahh"
                  aria-label="YouTube"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <FaYoutube size={17} />
                </a>

                <a
                  href="https://facebook.com/nanakwadwo.amoah"
                  aria-label="Facebook"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <FaFacebookF size={15} />
                </a>
              </div>
            </div>

            {/* Artist image */}
            <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:justify-end">
              {/* Gold halo */}
              <div className="absolute right-[12%] top-[12%] h-72 w-72 rounded-full bg-amber-400/10 blur-[110px]" />

              {/* Blue halo */}
              <div className="absolute bottom-[10%] left-[5%] h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

              <div className="relative h-[620px] w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.015] shadow-2xl shadow-black/50 backdrop-blur-sm sm:h-[700px]">
                {/* Image placeholder */}
                <img
                  src="/images/nana-placeholder.jpg"
                  alt="Nana Amoah"
                  className="h-full w-full object-cover object-top opacity-90"
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                        Gospel Artist
                      </p>

                      <p className="mt-2 text-xl font-medium">Nana Amoah</p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur-xl">
                      <Music2 size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating release card */}
              <div className="absolute top-8 -right-2 hidden w-52 rounded-3xl border border-white/10 bg-black/55 p-4 shadow-xl backdrop-blur-2xl sm:block lg:-right-12">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/10">
                    <Play size={14} fill="currentColor" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      Latest Release
                    </p>

                    <p className="mt-1 truncate text-sm font-medium">
                      Nobody Greater (feat. Philip Adzale & Kwaku Kwame) - EP
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical label */}
              <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.45em] text-white xl:block">
                Faith • Music • Purpose
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/30 sm:flex">
          Scroll to explore
          <ChevronDown size={14} />
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#070707] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                The Journey
              </span>

              <div className="mt-6 h-px w-16 bg-white/20" />
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-light leading-tight tracking-tight text-white/90 sm:text-5xl lg:text-6xl">
                A voice shaped by <span className="text-white/35">faith</span>,{" "}
                <span className="text-white/35">worship</span> and a desire to
                point people back to God.
              </h2>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                More about Nana
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
