import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Music2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[78vh] overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-purple-700/20 blur-[160px]" />
          <div className="absolute right-[-180px] top-1/4 h-[560px] w-[560px] rounded-full bg-blue-600/20 blur-[170px]" />
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/20 blur-[160px]" />
        </div>

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_45%,rgba(0,0,0,.9)_100%)]" />

        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10">
          <div className="grid w-full items-end gap-16 lg:grid-cols-[1fr_.65fr]">

            {/* Main heading */}
            <div>
              {/* WeFaintNot identity */}
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] ">
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
                  The Ministry
                </span>
              </div>

              <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[8.5rem]">
                Called
                <br />
                <span className="text-white/30">to draw.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
                A ministry committed to drawing the hearts of men to the heart
                of the Father through music and the preaching of the Word.
              </p>
            </div>

            {/* Scripture / statement */}
            <div className="hidden lg:block">
              <div className="border-l border-white/10 pl-7">
                <p className="font-serif text-4xl italic leading-tight text-white/70">
                  “My desire is to present Jesus to everyone who encounters me.”
                </p>

                <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/25">
                  — Nana Amoah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BIOGRAPHY
      ========================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[.65fr_1.35fr] lg:px-10 lg:py-36">

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
              Biography
            </p>

            <div className="mt-6 h-px w-14 bg-white/15" />

            <h2 className="mt-7 max-w-xs text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              More than music.
            </h2>
          </div>

          <div className="max-w-3xl space-y-7 text-sm leading-8 text-white/40 sm:text-base">

            <p>
              Nana Amoah is called of God to draw the hearts of men to the
              heart of the Father. His ministry is committed to strengthening,
              encouraging, and exhorting people through music and the preaching
              of the Word of God.
            </p>

            <p>
              At the centre of the ministry is a simple desire: to present
              Jesus to everyone who encounters him. Music becomes one of the
              vessels through which that desire is expressed — creating space
              for worship, reflection, encouragement and an encounter with God.
            </p>

            <p>
              Under the WeFaintNot Family, the ministry continues to create
              opportunities for people to encounter God through worship,
              ministry and the Word.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          PORTRAIT
      ========================================================== */}
      <section className="px-6 pb-28 lg:px-10 lg:pb-36">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025]">

          <div className="relative aspect-[4/3] sm:aspect-[16/8]">

            <Image
              src="/images/nana-amoah.png"
              alt="Nana Amoah"
              fill
              priority
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 sm:p-10">

              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
                  Nana Amoah
                </p>

                <p className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Faith • Music • Purpose
                </p>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur-xl sm:flex">
                <Music2 size={17} strokeWidth={1.3} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE CALLING
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.07]">

        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">

            <div>
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                <Music2 size={19} strokeWidth={1.2} />
              </div>

              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                The Calling
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                Strengthen.
                <br />
                <span className="text-white/30">
                  Encourage.
                </span>
                <br />
                Exhort.
              </h2>
            </div>

            <div className="max-w-2xl">

              <p className="text-lg font-light leading-8 text-white/65 sm:text-xl">
                The assignment is bigger than the song.
              </p>

              <p className="mt-7 text-sm leading-8 text-white/40 sm:text-base">
                Through music and the preaching of the Word of God, Nana
                Amoah's ministry seeks to strengthen, encourage and exhort.
                Every expression points toward the same centre — Jesus.
              </p>

              <div className="mt-10 border-l border-white/10 pl-6">
                <p className="font-serif text-2xl italic leading-relaxed text-white/60 sm:text-3xl">
                  “My desire is to present Jesus to everyone who encounters me.”
                </p>

                <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Nana Amoah
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRAISE WAITING
      ========================================================== */}
      <section className="border-t border-white/[0.07] bg-[#070707]">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-end">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                The Movement
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">
                Praise
                <span className="text-white/30"> Waiting.</span>
              </h2>
            </div>

            <div className="max-w-2xl">

              <p className="text-sm leading-8 text-white/40 sm:text-base">
                Nana Amoah is the pioneer of Praise Waiting — a powerful move
                of God premiered monthly on YouTube and crowned with a special
                in-person service at the end of each year.
              </p>

              <Link
                href="/events"
                className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                Explore Praise Waiting
                <ArrowUpRight size={15} />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEFaintNot
      ========================================================== */}
      <section className="border-t border-white/[0.07]">

        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">

          <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <img
              src="/images/wefaintnot-logo.jpg"
              alt="WeFaintNot"
              className="h-full w-full object-contain opacity-80 rounded-full"
            />
          </div>

          <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-white/25">
            WeFaintNot Family
          </p>

          <h2 className="mt-5 text-3xl font-light tracking-tight sm:text-5xl">
            We faint not.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35">
            A ministry family committed to carrying the assignment with
            faith, endurance and purpose.
          </p>

          <p className="mt-7 font-serif text-xl italic text-white/20">
            2 Corinthians 4:1
          </p>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="border-t border-white/[0.07]">

        <div className="mx-auto max-w-4xl px-6 py-28 text-center">

          <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
            Continue the journey
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">
            Listen. Worship. Encounter.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/30">
            Explore the music and follow the ministry of Nana Amoah.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/music"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              Explore Music
              <ArrowUpRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white"
            >
              Invite Nana
              <ArrowUpRight size={14} />
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}

