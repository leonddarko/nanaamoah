"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, Music2, Megaphone } from "lucide-react";

const highlights = [
  {
    id: "events",
    category: "Upcoming Events",
    title: "Praise Waiting Live - November 1st",
    description: "Explore upcoming gatherings and ministry engagements.",
    href: "/events",
    icon: CalendarDays,
  },
  {
    id: "release",
    category: "Latest Release",
    title: "Nobody Greater",
    description:
      "Listen to the latest EP featuring Philip Adzale and Kwaku Kwame.",
    href: "https://music.apple.com/gh/album/nobody-greater-feat-philip-adzale-kwaku-kwame-ep/6807652673",
    icon: Music2,
    external: true,
  },
  {
    id: "announcement",
    category: "Ministry Updates",
    title: "Invite Minister Nana Amoah",
    description: "For invitations, bookings and ministry enquiries.",
    href: "/contact",
    icon: Megaphone,
  },
];

export default function MinistryHighlights() {
  // Duplicate items to create a seamless scrolling loop.
  // const items = [...highlights, ...highlights];

  return (
    <section
      aria-label="Ministry Highlights"
      className="relative overflow-hidden bg-[#050505]] py-5 sm:py-6"
    >
      <div className="mx-auto mb-5 flex max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-white/40" />
          <h2 className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/65">
            Ministry Highlights
          </h2>
        </div>

        <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/25 sm:block">
          Events · Music · Updates
        </span>
      </div>

      <div className="ministry-highlights-viewport">
        <div className="ministry-highlights-track">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="ministry-highlights-group"
              aria-hidden={group === 1}
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    tabIndex={group === 1 ? -1 : 0}
                    className="group flex min-h-[108px] w-[290px] shrink-0 items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.045] sm:w-[350px] sm:p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/55">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                        {item.category}
                      </p>
                      <h3 className="mt-1.5 truncate text-sm font-medium text-white/85">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/40">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-white/35 transition group-hover:text-white/80"
                    />
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
