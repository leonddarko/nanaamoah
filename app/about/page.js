import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Music2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {" "}
      <Navbar />
      {/* =========================================================
      HERO
  ========================================================== */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[150px]" />
          <div className="absolute right-[-180px] top-1/3 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[160px]" />
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/20 blur-[150px]" />
        </div>

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                The Story
              </span>
            </div>

            <h1 className="text-6xl font-light leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              More than
              <br />
              <span className="text-white/35">music.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              A life shaped by faith, a voice given with purpose, and a calling
              to point people back to God.
            </p>
          </div>
        </div>
      </section>
      {/* =========================================================
      INTRODUCTION
  ========================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              Nana Amoah
            </p>

            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              A voice for worship.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-sm leading-8 text-white/40 sm:text-base">
            <p>
              Nana Amoah is a Gospel artist whose music is rooted in faith,
              worship and a desire to glorify God through every song.
            </p>

            <p>
              His journey is not simply about creating music. It is about using
              music as a vessel for worship, encouragement and reflection —
              creating moments where people can pause, listen and draw closer to
              God.
            </p>

            <p>
              From the quiet moments of personal worship to the shared
              experience of singing with others, Nana believes music can carry a
              message far beyond the sound itself.
            </p>
          </div>
        </div>
      </section>
      {/* =========================================================
      PORTRAIT
  ========================================================== */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025]">
          <div className="relative aspect-[4/3] sm:aspect-[16/9]">
            <Image
              src="/images/nana-amoah.png"
              alt="Nana Amoah"
              fill
              priority
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Faith • Music • Purpose
              </p>

              <p className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                The journey continues.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
      CALLING
  ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.07]">
        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Music2 size={20} strokeWidth={1.2} />
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                The Calling
              </p>

              <h2 className="mt-4 max-w-lg text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Worship is the heart behind the music.
              </h2>
            </div>

            <div className="max-w-xl text-sm leading-8 text-white/40 sm:text-base">
              <p>
                Every song carries a story. Every melody creates an opportunity
                to communicate something meaningful. For Nana, the goal remains
                simple: create music that honours God and speaks to people
                wherever they are in their journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
      CTA
  ========================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            Discover the music
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">
            Listen. Worship. Connect.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/30">
            Explore Nana Amoah&apos;s music and follow the journey.
          </p>

          <Link
            href="/music"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Explore Music
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
