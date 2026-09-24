import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Dome, MapPin, Music2, Watch } from "lucide-react";

const upcomingEvents = [
  {
    date: "1",
    month: "NOV",
    year: "2026",
    title: "Praise Waiting Live",
    venue: "Victory Bible Church, Higher Heights Sanctuary",
    location: "Ashale Botwe",
    time: "4:30pm",
    type: "Worship Session",
    image: "/images/events/praise-waiting-live.jpg",
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

const pastEvents = [
  {
    year: "2026",
    title: "Praise Waiting August Edition 2026",
    location: "Accra, Ghana",
  },
//   {
//     year: "2025",
//     title: "Gospel Celebration",
//     location: "Accra, Ghana",
//   },
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
                className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:border-white/[0.14]"
              >
                {/* Event Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
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

                  {/* <button
                    type="button"
                    className="mt-7 flex items-center gap-2 text-xs text-white/55 transition hover:text-white"
                  >
                    Event Details
                    <ArrowUpRight size={13} />
                  </button> */}
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
              src="/images/events/praise-waiting-live.jpg"
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
                  Experience an atmosphere of worship, music and fellowship with
                  Nana Amoah.
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
          PAST EVENTS
      ========================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                The archive
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
                Past Events
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/30">
                A look back at moments shared through music, worship and
                ministry.
              </p>
            </div>

            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {pastEvents.map((event) => (
                <div
                  key={`${event.title}-${event.year}`}
                  className="flex items-center justify-between gap-6 py-6"
                >
                  <div>
                    <p className="text-xs text-white/25">{event.year}</p>

                    <h3 className="mt-1 text-base font-light text-white/80">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/25">
                    <MapPin size={13} />
                    {event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOKING CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.07]">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

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
