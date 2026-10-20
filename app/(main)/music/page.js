import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Headphones,
  Play,
  Disc3,
  Music2,
} from "lucide-react";
import {
  FaYoutube,
  FaSpotify,
  FaApple,
  FaDeezer,
} from "react-icons/fa6";

const platforms = [
  {
    name: "YouTube",
    description: "Watch music, performances and more.",
    icon: FaYoutube,
    href: "https://www.youtube.com/@nanaamoahh",
  },
  {
    name: "Spotify",
    description: "Stream Nana's music on Spotify.",
    icon: FaSpotify,
    href: "https://open.spotify.com/artist/3EQe9YDfiBp4ZERkmjp6Fu?autoplay_ok=1",
  },
  {
    name: "Apple Music",
    description: "Listen on Apple Music.",
    icon: FaApple,
    href: "https://music.apple.com/gh/artist/nana-amoah/1415387553",
  },
  {
    name: "Deezer",
    description: "Stream Nana's music on Deezer.",
    icon: FaDeezer,
    href: "https://www.deezer.com/en/artist/49080121",
  },
];

const albums = [
  {
    title: "Ascent",
    type: "Album",
    description: "",
    artwork: "/images/music/ascent-album.png",
    year: "2026",
    links: {
      youtube: "https://www.youtube.com/watch?v=uG6NFiPUmvg&list=PLLq0wA5nsaVpq8dSb3fklCfOJoxLS1n6O",
      spotify: "https://open.spotify.com/album/3lfOBC2fXUgMAv9oCeOpxo",
      apple: "https://music.apple.com/gh/album/ascent/1889693524",
      deezer: "https://www.deezer.com/en/album/951878291",
    },
  },
  {
    title: "Praise Waiting (Live)",
    type: "Album",
    description: "",
    artwork: "/images/music/praise-waiting-live.png",
    year: "2025",
    links: {
      youtube: "https://www.youtube.com/playlist?list=PLLq0wA5nsaVqjjssSRbefTvswBlCy3zSU",
      spotify: "https://open.spotify.com/album/0Sl8CV9JCzwHWKSdj6DJuv",
      apple: "https://music.apple.com/gh/album/praise-waiting-live/1794896185",
      deezer: "https://www.deezer.com/en/album/709794151",
    },
  },
];

const sectionLabel =
  "text-[10px] uppercase tracking-[0.35em] text-white/35";

const platformLinks = [
  { key: "youtube", label: "YouTube" },
  { key: "spotify", label: "Spotify" },
  { key: "apple", label: "Apple Music" },
  { key: "deezer", label: "Deezer" },
];

export default function MusicPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =========================================================
          HERO — KEEP THE ORIGINAL ATMOSPHERE
      ========================================================== */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-purple-700/15 blur-[160px]" />
          <div className="absolute right-[-180px] top-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[170px]" />
          <div className="absolute bottom-[-240px] left-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[160px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />
              <span className={sectionLabel}>Nana Amoah</span>
            </div>

            <h1 className="text-6xl font-light tracking-[-0.055em] sm:text-8xl lg:text-[9rem]">
              Music
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
              Songs of faith, worship and purpose. Enter the musical world of
              Nana Amoah.
            </p>

            <Link
              href="#latest"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-[#e9dfd4]"
            >
              Explore the Music
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          ALBUMS & RELEASES
      ========================================================== */}
      <section className="relative isolate border-t border-white/[0.07]">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-48 top-0 h-[480px] w-[480px] rounded-full bg-[#7046a0]/15 blur-[155px]" />
          <div className="absolute right-[-120px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#845537]/20 blur-[160px]" />
          <div className="absolute bottom-[-160px] left-1/3 h-[350px] w-[350px] rounded-full bg-[#a47b4a]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className={sectionLabel}>Discography</p>

              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Albums & Releases
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
                Explore the music of Nana Amoah, from released projects to
                expressions of worship and ministry.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-[#c5a184]/60 sm:flex">
              <Disc3 size={18} strokeWidth={1.2} />
              <span className="text-[10px] uppercase tracking-[0.25em]">
                The Discography
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album, index) => (
              <article
                key={album.title}
                className="group"
              >
                {/* Artwork */}
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#15100d] p-2 transition duration-500 group-hover:border-[#b28a68]/30">
                  <div className="pointer-events-none absolute -inset-12 bg-[#825438]/10 opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative aspect-square overflow-hidden rounded-[1.25rem]">
                    <Image
                      src={album.artwork}
                      alt={`${album.title} album artwork`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-[#69452f]/10" />

                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-white/75 backdrop-blur-xl">
                        {album.type}
                      </span>
                    </div>

                    {album.links.spotify && (
                      <a
                        href={album.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Listen to ${album.title} on Spotify`}
                        className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#e9dfd4] text-black shadow-xl transition duration-300 hover:scale-105 hover:bg-white"
                      >
                        <Play size={14} fill="currentColor" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="px-1 pt-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight">
                        {album.title}
                      </h3>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                        {album.type}
                        {album.year ? ` · ${album.year}` : ""}
                      </p>
                    </div>

                    <Music2
                      size={18}
                      strokeWidth={1.2}
                      className="mt-1 text-[#b28a68]/60 transition-colors group-hover:text-[#d4b292]"
                    />
                  </div>

                  {album.description && (
                    <p className="mt-4 text-sm leading-6 text-white/40">
                      {album.description}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                    {platformLinks.map((platform) => {
                      const url = album.links[platform.key];

                      if (!url) return null;

                      return (
                        <a
                          key={platform.key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] uppercase tracking-[0.16em] text-white/40 transition hover:text-[#d4b292]"
                        >
                          {platform.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED RELEASE
      ========================================================== */}
      <section
        id="latest"
        className="relative isolate border-t border-white/[0.07]"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-[-100px] h-[480px] w-[480px] rounded-full bg-[#79509b]/15 blur-[155px]" />
          <div className="absolute right-[-100px] top-1/4 h-[540px] w-[540px] rounded-full bg-[#875432]/25 blur-[165px]" />
          <div className="absolute bottom-[-180px] left-1/3 h-[380px] w-[380px] rounded-full bg-[#b18a54]/10 blur-[145px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className={sectionLabel}>Featured Music</p>

              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Latest Release
              </h2>
            </div>

            <span className="hidden text-xs text-white/30 sm:block">
              Listen across platforms
            </span>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0908] shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
            <div className="pointer-events-none absolute -right-24 top-[-100px] h-[400px] w-[400px] rounded-full bg-[#805235]/15 blur-[120px]" />

            <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* Featured artwork */}
              <div className="relative aspect-square overflow-hidden bg-[#17100d] lg:aspect-auto lg:min-h-[540px]">
                <Image
                  src="/images/music/latest-release.png"
                  alt="Nobody Greater release artwork"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-[#754b31]/15" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

                <div className="absolute bottom-7 left-7">
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-white/75 backdrop-blur-xl">
                    Featured Release
                  </span>
                </div>
              </div>

              {/* Release information */}
              <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a184]/70">
                      Nana Amoah
                    </span>

                    <span className="h-px w-8 bg-white/15" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Music
                    </span>
                  </div>

                  <h3 className="mt-6 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                    Nobody
                    <br />
                    <span className="text-white/45">Greater.</span>
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                    Listen to Nana Amoah&apos;s music across your favourite
                    platforms and discover songs centred on faith, worship
                    and purpose.
                  </p>
                </div>

                <div className="mt-12">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/35">
                    Listen on your preferred platform
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      {
                        name: "YouTube",
                        icon: FaYoutube,
                        href: "https://www.youtube.com/watch?v=RyBrsfcRXVE",
                      },
                      {
                        name: "Spotify",
                        icon: FaSpotify,
                        href: "https://open.spotify.com/album/1aBHtMO0nHCW65bpeE0xB2",
                      },
                      {
                        name: "Apple Music",
                        icon: FaApple,
                        href: "https://music.apple.com/gh/album/nobody-greater-feat-philip-adzale-kwaku-kwame-ep/6807652673",
                      },
                      {
                        name: "Deezer",
                        icon: FaDeezer,
                        href: "https://www.deezer.com/en/album/1068581071",
                      },
                    ].map((platform) => {
                      const Icon = platform.icon;

                      return (
                        <a
                          key={platform.name}
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.035] px-4 text-xs text-white/65 transition duration-300 hover:border-[#b28a68]/40 hover:bg-[#70482f]/15 hover:text-white"
                        >
                          <Icon size={15} />
                          {platform.name}
                          <ArrowUpRight size={12} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STREAMING PLATFORMS
      ========================================================== */}
      <section
        id="platforms"
        className="relative isolate overflow-hidden border-t border-white/[0.07]"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-[-100px] h-[430px] w-[430px] rounded-full bg-[#66447f]/15 blur-[150px]" />
          <div className="absolute right-[-120px] bottom-[-150px] h-[470px] w-[470px] rounded-full bg-[#805235]/20 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-xl">
            <p className={sectionLabel}>Listen Everywhere</p>

            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Find the music.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Stream, watch and discover Nana Amoah across your favourite
              music platforms.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <Link
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#b28a68]/35 hover:bg-white/[0.045]"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#825438]/15 opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition duration-300 group-hover:border-[#b28a68]/30 group-hover:bg-[#70482f]/15">
                      <Icon size={20} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="text-white/25 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d4b292]"
                    />
                  </div>

                  <h3 className="relative mt-8 text-lg font-medium">
                    {platform.name}
                  </h3>

                  <p className="relative mt-2 text-xs leading-6 text-white/40">
                    {platform.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-180px] h-[470px] w-[470px] -translate-x-1/2 rounded-full bg-[#805235]/20 blur-[160px]" />
          <div className="absolute -left-40 bottom-[-140px] h-[350px] w-[350px] rounded-full bg-[#594276]/15 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-32">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#b28a68]/25 bg-[#70482f]/15 text-[#d4b292]">
            <Headphones size={21} strokeWidth={1.2} />
          </div>

          <p className={`mt-7 ${sectionLabel}`}>Faith • Music • Purpose</p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">
            Let the music speak.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/45">
            Follow Nana Amoah and stay connected with new releases, worship
            moments and the musical journey.
          </p>

          <Link
            href="#platforms"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e9dfd4] px-6 py-3.5 text-xs font-semibold text-[#17110d] transition hover:bg-white"
          >
            Explore the Platforms
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}