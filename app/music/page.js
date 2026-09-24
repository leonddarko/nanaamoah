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
} from "react-icons/fa";

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
    title: "Nobody Greater",
    type: "EP",
    description:
      "",
    artwork: "/images/music/latest-release.png",
    year: "2026",
    links: {
      youtube: "https://www.youtube.com/watch?v=RyBrsfcRXVE",
      spotify: "https://open.spotify.com/album/1aBHtMO0nHCW65bpeE0xB2",
      apple:
        "https://music.apple.com/gh/album/nobody-greater-feat-philip-adzale-kwaku-kwame-ep/6807652673",
      deezer: "https://www.deezer.com/en/album/1068581071",
    },
  },
  {
    title: "Ascent",
    type: "Album",
    description:
      "",
    artwork: "/images/music/ascent-album.png",
    year: "2026",
    links: {
      youtube: "",
      spotify: "https://open.spotify.com/album/3lfOBC2fXUgMAv9oCeOpxo",
      apple:
        "https://music.apple.com/gh/album/ascent/1889693524",
      deezer: "https://www.deezer.com/en/album/951878291",
    },
  },
];

export default function MusicPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-purple-700/15 blur-[160px]" />
          <div className="absolute right-[-180px] top-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[170px]" />
          <div className="absolute bottom-[-240px] left-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[160px]" />
        </div>

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Nana Amoah
              </span>
            </div>

            <h1 className="text-6xl font-light tracking-[-0.055em] sm:text-8xl lg:text-[9rem]">
              Music
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
              Songs of faith, worship and purpose. Enter the musical world of
              Nana Amoah.
            </p>

            <Link
              href="#latest"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              Explore the Music
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          LATEST RELEASE
      ========================================================== */}
      <section
        id="latest"
        className="relative border-t border-white/[0.07]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/25">
                Featured
              </p>

              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
                Latest Release
              </h2>
            </div>

            <span className="hidden text-xs text-white/20 sm:block">
              Now streaming
            </span>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* Artwork */}
              <div className="relative aspect-square overflow-hidden lg:aspect-auto lg:min-h-[560px]">
                <img
                  src="/images/music/latest-release.png"
                  alt="Nana Amoah latest release artwork"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-white/60 backdrop-blur-xl">
                    Latest Release
                  </span>
                </div>

                <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-xl">
                  <Play size={15} fill="white" />
                </div>
              </div>

              {/* Information */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Nana Amoah
                    </span>

                    <span className="h-px w-8 bg-white/10" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
                      Release
                    </span>
                  </div>

                  <h3 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">
                    Nobody Greater
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/35">
                    Listen to Nana Amoah&apos;s music across your favourite
                    platforms and enter into songs centered on faith, worship
                    and purpose.
                  </p>
                </div>

                <div className="mt-12">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/20">
                    Listen on
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.youtube.com/watch?v=RyBrsfcRXVE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-xs text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <FaYoutube size={15} />
                      YouTube
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href="https://open.spotify.com/album/1aBHtMO0nHCW65bpeE0xB2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-xs text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <FaSpotify size={15} />
                      Spotify
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href="https://music.apple.com/gh/album/nobody-greater-feat-philip-adzale-kwaku-kwame-ep/6807652673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-xs text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <FaApple size={15} />
                      Apple Music
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href="https://www.deezer.com/en/album/1068581071"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-xs text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <FaDeezer size={15} />
                      Deezer
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ALBUMS
      ========================================================== */}
      <section className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/25">
                Discography
              </p>

              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
                Albums & Releases
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/35">
                Explore the music of Nana Amoah, from released projects to
                future expressions of worship and ministry.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-white/20 sm:flex">
              <Disc3 size={17} strokeWidth={1.2} />
              <span className="text-[10px] uppercase tracking-[0.25em]">
                Discography
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album) => (
              <article key={album.title} className="group">
                {/* Artwork */}
                <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025]">
                  <img
                    src={album.artwork}
                    alt={`${album.title} artwork`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-white/65 backdrop-blur-xl">
                      {album.type}
                    </span>
                  </div>

                  <a
                    href={album.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Play ${album.title}`}
                    className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100"
                  >
                    <Play size={14} fill="currentColor" />
                  </a>
                </div>

                {/* Details */}
                <div className="px-1 pt-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight">
                        {album.title}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/25">
                        {album.type}
                        {album.year ? ` • ${album.year}` : ""}
                      </p>
                    </div>

                    <Music2
                      size={17}
                      strokeWidth={1.2}
                      className="mt-1 text-white/20"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/30">
                    {album.description}
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <a
                      href={album.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white"
                    >
                      Spotify
                    </a>

                    <a
                      href={album.links.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white"
                    >
                      Apple Music
                    </a>

                    <a
                      href={album.links.deezer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white"
                    >
                      Deezer
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STREAMING PLATFORMS
      ========================================================== */}
      <section
        id="platforms"
        className="border-t border-white/[0.07]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/25">
              Listen
            </p>

            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
              Find the music
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/35">
              Stream and discover Nana Amoah across your favourite music
              platforms.
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
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                      <Icon size={20} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-8 text-lg font-medium">
                    {platform.name}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/30">
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
      <section className="relative overflow-hidden border-t border-white/[0.07]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <Headphones
            size={28}
            strokeWidth={1}
            className="mx-auto text-white/30"
          />

          <h2 className="mt-7 text-4xl font-light tracking-tight sm:text-6xl">
            Let the music speak.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/30">
            Follow Nana Amoah and stay connected with every new release,
            worship moment and musical journey.
          </p>

          <Link
            href="#platforms"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Explore the Music
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
