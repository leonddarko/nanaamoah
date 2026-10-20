import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Music2, Sparkles } from "lucide-react";

const ambientGrid =
  "pointer-events-none absolute inset-0 overflow-hidden";

const sectionLabel =
  "text-[10px] uppercase tracking-[0.35em] text-white/35";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =========================================================
          HERO — PRESERVED
      ========================================================== */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <div className={ambientGrid}>
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-purple-700/20 blur-[160px]" />
          <div className="absolute right-[-180px] top-1/4 h-[560px] w-[560px] rounded-full bg-blue-600/20 blur-[170px]" />
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/20 blur-[160px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_45%,rgba(0,0,0,.9)_100%)]" />

        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10">
          <div className="grid w-full items-end gap-16 lg:grid-cols-[1fr_.65fr]">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-white/30" />
                <span className={sectionLabel}>The Ministry</span>
              </div>

              <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[8.5rem]">
                Called
                <br />
                <span className="text-white/30">to draw.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                A ministry committed to drawing the hearts of men to the
                heart of the Father through music and the preaching of the Word.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-[#b28a68]/30 pl-7">
                <p className="font-serif text-4xl italic leading-tight text-white/75">
                  “My desire is to present Jesus to everyone who encounters me.”
                </p>

                <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-[#c4a184]/60">
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
      <section className="relative isolate border-t border-white/[0.07]">
        <div className={`${ambientGrid} -z-10`}>
          <div className="absolute -left-48 top-0 h-[480px] w-[480px] rounded-full bg-[#604080]/20 blur-[150px]" />
          <div className="absolute right-[-120px] top-1/3 h-[440px] w-[440px] rounded-full bg-[#70452f]/20 blur-[150px]" />
          <div className="absolute bottom-[-100px] left-1/3 h-[300px] w-[300px] rounded-full bg-[#8b6842]/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.65fr_1.35fr] lg:gap-20 lg:px-10 lg:py-32">
          <div>
            <p className={sectionLabel}>Biography</p>
            <div className="mt-6 h-px w-14 bg-[#b28a68]/50" />

            <h2 className="mt-7 max-w-xs text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              More than music.
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/40">
              A life and ministry shaped by a desire to make Jesus known.
            </p>
          </div>

          <div>
            <div className="space-y-6 text-sm leading-8 text-white/55 sm:text-base">
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

            {/* Editorial image strip */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5">
                            <div className="group relative mt-8 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#17100d] sm:mt-12">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/nana-amoah-worship.jpg"
                    alt="Nana Amoah serving through ministry"
                    fill
                    sizes="(max-width: 640px) 50vw, 400px"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-[#76503a]/10" />
                </div>
                <p className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-white/75">
                  Worship
                </p>
              </div>

              <div className="group relative mt-8 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#17100d] sm:mt-12">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/nana-amoah-ministry.jpg"
                    alt="Nana Amoah serving through ministry"
                    fill
                    sizes="(max-width: 640px) 50vw, 400px"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-[#76503a]/10" />
                </div>
                <p className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-white/75">
                  The Ministry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTRAIT
      ========================================================== */}
      <section className="relative isolate px-6 pb-24 lg:px-10 lg:pb-32">
        <div className={`${ambientGrid} -z-10`}>
          <div className="absolute left-[15%] top-[-80px] h-[400px] w-[400px] rounded-full bg-[#7c4d34]/20 blur-[150px]" />
          <div className="absolute right-[-100px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-[#48386f]/15 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#100d0b] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-[4/3] sm:aspect-[16/8]">
            <Image
              src="/images/nana-amoah.png"
              alt="Nana Amoah"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-[#3b2418]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-[#3d2a20]/10" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-10 lg:p-12">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#d2b59b]/75">
                  Nana Amoah
                </p>

                <p className="mt-2 text-2xl font-light tracking-tight sm:text-3xl lg:text-4xl">
                  Faith <span className="text-white/30">•</span> Music{" "}
                  <span className="text-white/30">•</span> Purpose
                </p>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur-xl sm:flex">
                <Music2 size={18} strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE CALLING
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <div className={`${ambientGrid} -z-10`}>
          <div className="absolute -right-40 top-[-50px] h-[500px] w-[500px] rounded-full bg-[#8a5836]/20 blur-[160px]" />
          <div className="absolute -left-40 bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#49356c]/20 blur-[150px]" />
          <div className="absolute right-[35%] bottom-[-180px] h-[350px] w-[350px] rounded-full bg-[#b18a55]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#b28a68]/25 bg-[#6b4631]/15 text-[#d3b092]">
                <Music2 size={19} strokeWidth={1.2} />
              </div>

              <p className={sectionLabel}>The Calling</p>

              <h2 className="mt-5 max-w-xl text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                Strengthen.
                <br />
                <span className="text-white/40">Encourage.</span>
                <br />
                Exhort.
              </h2>

              <div className="mt-10 hidden max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] sm:block">
                <div className="relative aspect-[5/3]">
                  <Image
                    src="/images/nana-amoah-preaching.jpg"
                    alt="Nana Amoah sharing the Word of God"
                    fill
                    sizes="(max-width: 1024px) 50vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3e261b]/45 to-transparent" />
                </div>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg font-light leading-8 text-white/75 sm:text-xl">
                The assignment is bigger than the song.
              </p>

              <p className="mt-7 text-sm leading-8 text-white/50 sm:text-base">
                Through music and the preaching of the Word of God, Nana
                Amoah&apos;s ministry seeks to strengthen, encourage and exhort.
                Every expression points toward the same centre — Jesus.
              </p>

              <div className="mt-10 border-l border-[#b28a68]/40 pl-6">
                <p className="font-serif text-2xl italic leading-relaxed text-white/70 sm:text-3xl">
                  “My desire is to present Jesus to everyone who encounters me.”
                </p>

                <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#c4a184]/65">
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
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#080706]">
        <div className={`${ambientGrid} -z-10`}>
          <div className="absolute -left-40 top-[-100px] h-[460px] w-[460px] rounded-full bg-[#6b3f80]/20 blur-[155px]" />
          <div className="absolute right-[-100px] top-1/4 h-[520px] w-[520px] rounded-full bg-[#84542f]/25 blur-[165px]" />
          <div className="absolute bottom-[-200px] left-1/3 h-[380px] w-[380px] rounded-full bg-[#a77c4b]/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:gap-16">
            <div>
              <p className={sectionLabel}>The Movement</p>

              <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">
                Praise
                <span className="text-white/40"> Waiting.</span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                A recurring gathering centred on worship, the Word and an
                encounter with God.
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                Nana Amoah is the pioneer of Praise Waiting — a powerful move
                of God premiered monthly on YouTube and crowned with a special
                in-person service at the end of each year.
              </p>

              <Link
                href="/events"
                className="mt-7 inline-flex items-center gap-2 text-sm text-[#d4b292] transition hover:text-white"
              >
                Explore Praise Waiting
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Event imagery */}
          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-[1.35fr_1fr] sm:gap-5">
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#17100d]">
              <div className="relative aspect-[5/4] sm:aspect-[5/3]">
                <Image
                  src="/images/praise-waiting-worship.jpg"
                  alt="Worship during Praise Waiting"
                  fill
                  sizes="(max-width: 640px) 100vw, 65vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-[#71462e]/15" />
              </div>
              <p className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.3em] text-white/75">
                A moment in worship
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#17100d] group-hover:scale-[1.03]">
              <div className="relative aspect-[5/4] sm:aspect-[5/3]">
                <Image
                  src="/images/praise-waiting-gathering.jpg"
                  alt="The Praise Waiting gathering"
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-[#8a6440]/50" />
              </div>
              <p className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.3em] text-white/75">
                Gathered in His presence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEFaintNot
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <div className={`${ambientGrid} -z-10`}>
          <div className="absolute left-1/2 top-[-160px] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[#79553b]/20 blur-[155px]" />
          <div className="absolute -right-40 bottom-[-120px] h-[360px] w-[360px] rounded-full bg-[#5c477b]/15 blur-[145px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full border border-[#b28a68]/25 bg-[#21160f]/70 p-2 shadow-[0_0_60px_rgba(133,86,52,0.12)]">
            <Image
              src="/images/wefaintnot-logo.jpg"
              alt="WeFaintNot Family"
              width={76}
              height={76}
              className="h-full w-full rounded-full object-contain"
            />
          </div>

          <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-[#c4a184]/60">
            WeFaintNot Family
          </p>

          <h2 className="mt-5 text-3xl font-light tracking-tight sm:text-5xl">
            WE FAINT NOT.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">
            A ministry family committed to carrying the assignment with
            faith, endurance and purpose.
          </p>

          <p className="mt-7 font-serif text-xl italic text-[#c4a184]/40">
            2 Corinthians 4:1
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <div className={`${ambientGrid} -z-10`}>
          <div className="absolute left-1/2 top-[-180px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#75472f]/20 blur-[160px]" />
          <div className="absolute right-[-160px] bottom-[-140px] h-[400px] w-[400px] rounded-full bg-[#4d3b70]/15 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#b28a68]/25 bg-[#6b4631]/15 text-[#d3b092]">
            <Sparkles size={16} strokeWidth={1.2} />
          </div>

          <p className={`mt-6 ${sectionLabel}`}>Continue the journey</p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">
            Listen. Worship. Encounter.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/45">
            Explore the music and follow the ministry of Nana Amoah.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/music"
              className="inline-flex items-center gap-2 rounded-full bg-[#e9dfd4] px-6 py-3.5 text-xs font-semibold text-[#17110d] transition hover:bg-white"
            >
              Explore Music
              <ArrowUpRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.035] px-6 py-3.5 text-xs text-white/70 transition hover:border-[#b28a68]/40 hover:bg-[#6b4631]/15 hover:text-white"
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