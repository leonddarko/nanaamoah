import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Dome,
  Images,
  ImagesIcon,
  MailBadge,
  MapPin,
  MicSignal,
  Play,
  Watch,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
const upcomingEvents = [
  {
    date: "1",
    month: "NOV",
    year: "2026",
    title: "Praise Waiting Live",
    venue: "Victory Bible Church, Higher Heights Sanctuary",
    location: "Ashale Botwe",
    time: "4:30pm",
    type: "Praise Concert",
    image: "/images/events/praise-waiting-live-2026.jpg",
    registerlink: "https://forms.gle/gk7UZgNYkD36PQo48",
    livestreamUrl: "https://www.youtube.com/@nanaamoahh/streams",
  },
  //   {
  //     date: "—",
  //     month: "—",
  //     year: "2027",
  //     title: "Live in Concert",
  //     venue: "To Be Announced",
  //     location: "Ghana",
  //     time: "_",
  //     type: "Concert",
  //     image: "/images/events/event-02.jpg",
  //   },
  //   {
  //     date: "—",
  //     month: "—",
  //     year: "2027",
  //     title: "Worship Gathering",
  //     venue: "To Be Announced",
  //     location: "Ghana",
  //     time: "_",
  //     type: "Ministry",
  //     image: "/images/events/event-03.jpg",
  //   },
];

const praiseWaitingPrograms = [
  {
    title: "Praise Waiting — September Edition 2026",
    description: "A Praise Waiting worship programme.",
    href: "https://www.youtube.com/watch?v=B4R8Oe_Kdww",
    image: "/images/events/praise-waiting-september-2026.png",
  },
  {
    title: "Praise Waiting — August Edition 2026",
    description: "A Praise Waiting programme",
    href: "https://www.youtube.com/watch?v=RyBrsfcRXVE",
    image: "/images/events/praise-waiting-august-2026.png",
  },
];

const ministrationArchive = {
  title: "Minister Nana Amoah — Ministrations",
  description:
    "Revisit selected worship sessions, praise moments and ministrations.",
  // href: "https://www.youtube.com/results?search_query=Nana+Amoah+Gospel+Ministration+Worship",
  href: "https://www.youtube.com/@nanaamoahh/videos",
};

const pastEvents = [
  // Keep your existing event records and add these optional fields:
  {
    title: "Paise Waiting - July Edition",
    year: "2026",
    location: "",
    photos: [
      "/images/events/praise-waiting-july-2026-01.jpg",
      "/images/events/praise-waiting-july-2026-02.jpg",
      "/images/events/praise-waiting-july-2026-03.jpg",
      "/images/events/praise-waiting-july-2026-04.jpg",
      "/images/events/praise-waiting-july-2026-05.jpg",
    ],
    livestreamUrl: "",
    youtubeUrl: "",
    morephotosUrl: "https://goldenlensproduction.ourpixo.com/0TRO",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[150px]" />
          <div className="absolute right-[-180px] top-1/3 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[160px]" />
          <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[150px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Events
              </span>
            </div>

            <h1 className="text-6xl font-light leading-[0.92] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              Moments of
              <br />
              <span className="text-white/30">worship.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Join Nana Amoah for worship, music and moments that bring people
              together in the presence of God.
            </p>
          </div>
        </div>
      </section>
      {/* =========================================================
          UPCOMING EVENTS
      ========================================================== */}
      <section id="upcoming" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                What&apos;s next
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
                Upcoming Events
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/25">
              <CalendarDays size={14} />
              <span>2026 — 2027</span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={`${event.title}-${event.year}`}
                className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:border-white/[0.15]"
              >
                {/* Event Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Date */}
                  <div className="absolute left-5 top-5 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
                    <span className="text-xl font-light leading-none">
                      {event.date}
                    </span>

                    <span className="mt-1 text-[8px] tracking-[0.2em] text-white/45">
                      {event.month}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-light tracking-tight">
                    {event.title}
                  </h3>

                  <div className="mt-5 space-y-2.5 text-xs text-white/30">
                    <div className="flex items-center gap-2">
                      <Dome size={13} />
                      <span>{event.venue}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={13} />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Watch size={13} />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div className="flex justify-around items-center gap-2">
                    {event.livestreamUrl && (
                      <Link href={event.livestreamUrl} target="_blank">
                        <button
                          type="button"
                          className="mt-7 flex items-center gap-2 text-xs text-white/55 transition hover:text-white cursor-pointer"
                        >
                          <MicSignal
                            className="text-red-800 animate-pulse"
                            size={13}
                          />
                          Live
                        </button>
                      </Link>
                    )}

                    {event.registerlink && (
                      <Link href={event.registerlink} target="_blank">
                        <button
                        type="button"
                        className="mt-7 flex items-center gap-2 text-xs text-white/55 transition hover:text-white cursor-pointer"
                      >
                        Register
                        <MailBadge size={13} />
                      </button>
                      </Link>
                      
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================
          FEATURED EVENT
      ========================================================== */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025]">
          <div className="relative min-h-[520px]">
            <Image
              src="/images/events/praise-waiting-live-2026.jpg"
              alt="Nana Amoah performing live"
              fill
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

            <div className="absolute inset-0 flex items-end">
              <div className="max-w-2xl p-8 sm:p-12 lg:p-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                  Featured Event
                </p>

                <h2 className="mt-4 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                  Praise Waiting Live
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
                  Theme: Whoever offers praise glorifies ME. Psalm 50:23
                </p>

                <Link
                  href="#upcoming"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90"
                >
                  View Events
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
      PAST EVENTS — MINISTRY ARCHIVE
      ========================================================== */}
      <section
        id="past-events"
        className="relative overflow-hidden border-t border-white/[0.07]"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/[0.08] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          {/* Section heading */}
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                The archive
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
                Past Events
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/35 lg:justify-self-end">
              Moments of worship, shared faith and ministry. Revisit selected
              gatherings through audience photographs and available recordings.
            </p>
          </div>

          {/* Event archive */}
          <div className="space-y-14">
            {pastEvents.map((event) => (
              <article
                key={`${event.title}-${event.year}`}
                className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02]"
              >
                <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                  {/* Event information */}
                  <div className="flex flex-col justify-center p-7 sm:p-9">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                      {event.year} {event.location ? `• ${event.location}` : ""}
                    </p>

                    <h3 className="mt-4 text-2xl font-light tracking-tight sm:text-3xl">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="mt-4 text-sm leading-7 text-white/35">
                        {event.description}
                      </p>
                    )}

                    {/* Recording links */}
                    {(event.livestreamUrl || event.youtubeUrl || event.morephotosUrl) && (
                      <div className="mt-7 flex flex-wrap gap-3">
                        {event.livestreamUrl && (
                          <a
                            href={event.livestreamUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-medium text-black transition hover:bg-white/90"
                          >
                            <Play size={13} fill="currentColor" />
                            Watch Recording
                            <ArrowUpRight size={13} />
                          </a>
                        )}

                        {event.youtubeUrl && (
                          <a
                            href={event.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-xs text-white/60 transition hover:border-white/25 hover:text-white"
                          >
                            <FaYoutube size={15} />
                            Watch on YouTube
                            <ArrowUpRight size={13} />
                          </a>
                        )}

                        {event.morephotosUrl && (
                          <a
                            href={event.morephotosUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-xs text-white/60 transition hover:border-white/25 hover:text-white"
                          >
                            <ImagesIcon size={15} />
                            More Photos
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Selected audience photographs */}
                  {event.photos?.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3">
                      {event.photos.slice(0, 5).map((photo, index) => (
                        <div
                          key={photo}
                          className={`relative overflow-hidden rounded-xl bg-white/[0.04] ${
                            index === 0
                              ? "col-span-2 aspect-[5/3] sm:col-span-2 sm:aspect-auto sm:min-h-[300px]"
                              : "aspect-[4/5] sm:min-h-[300px]"
                          }`}
                        >
                          <img
                            src={photo}
                            alt={`${event.title} — audience and event moment ${index + 1}`}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex min-h-56 items-center justify-center border-t border-white/[0.06] bg-white/[0.015] p-8 text-center lg:border-l lg:border-t-0">
                      <p className="text-xs leading-6 text-white/25">
                        Event photographs will be added here.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}

            {pastEvents.length === 0 && (
              <p className="rounded-2xl border border-white/[0.08] p-8 text-sm text-white/35">
                Past event highlights will be added soon.
              </p>
            )}
          </div>

          {/* Praise Waiting archive */}
          <div className="mt-24">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                  Praise Waiting
                </p>

                <h3 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                  Set apart for worship and praise.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/35">
                  Explore selected editions of Nana Amoah’s Praise Waiting
                  programme and revisit the messages and music shared through
                  it.
                </p>
              </div>

              <a
                href="https://www.youtube.com/@nanaamoahh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start text-xs text-white/50 transition hover:text-white sm:self-auto"
              >
                Visit YouTube Channel
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {praiseWaitingPrograms.map((program) => (
                <a
                  key={program.title}
                  href={program.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                    <img
                      src={program.image}
                      alt={`${program.title} artwork`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl">
                      <Play size={14} fill="currentColor" />
                    </div>

                    <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
                      YouTube
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-medium transition group-hover:text-white/75">
                    {program.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    {program.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 transition group-hover:text-white">
                    Find programme
                    <ArrowUpRight size={13} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Ministrations */}
          <div className="mt-20 flex flex-col justify-between gap-6 rounded-[1.75rem] border border-white/[0.08] bg-yellow-900/[0.05] p-7 sm:flex-row sm:items-center sm:p-10">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                Worship & ministry
              </p>

              <h3 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                Minister Nana Amoah
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/35">
                Watch selected ministrations, worship sessions and praise
                moments from previous gatherings.
              </p>
            </div>

            <a
              href={ministrationArchive.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-xs text-white/75 transition hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
            >
              <FaYoutube size={15} />
              Explore Ministrations
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
      {/* =========================================================
          BOOKING CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.05]">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-yellow-900/30 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            Bring Nana to your event
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">
            Let&apos;s create a moment of worship.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/30">
            For churches, conferences, concerts and worship gatherings, connect
            with Nana Amoah&apos;s team for bookings and invitations.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Booking Enquiries
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
