
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const suggestedLinks = [
  { label: "Music", href: "/music" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85svh] w-full items-center justify-center overflow-hidden bg-[#070709] px-6 py-24 text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-violet-700/[0.09] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-500/[0.05] blur-[120px]"
      />

      <section className="relative mx-auto w-full max-w-2xl text-center">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
            Lost your way?
          </span>
        </div>

        {/* 404 */}
        <div
          aria-hidden="true"
          className="select-none font-serif text-[clamp(8rem,25vw,15rem)] leading-[0.8] tracking-[-0.09em] text-white/[0.08]"
        >
          404
        </div>

        <h1 className="mt-8 text-3xl font-medium tracking-tight sm:text-5xl">
          This page missed its cue.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
          The page you’re looking for may have moved, or the link may no longer
          be available. Let’s get you back on track.
        </p>

        {/* Primary action */}
        <Link
          href="/"
          className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070709]"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to homepage
        </Link>

        {/* Secondary navigation */}
        <div className="mx-auto mt-16 max-w-md border-t border-white/[0.08] pt-7">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
            Or explore
          </p>

          <nav
            aria-label="Suggested pages"
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            {suggestedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                {item.label}
                <ArrowUpRight
                  size={13}
                  aria-hidden="true"
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-16 text-[9px] uppercase tracking-[0.3em] text-white/25">
          Nana Amoah
        </p>
      </section>
    </main>
  );
}
