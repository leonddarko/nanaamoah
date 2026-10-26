import Link from "next/link";
import {
  ArrowUpRight,
  Users,
  UserPlus,
  FileText,
  Images,
  Settings,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  ChevronRight,
  LockKeyhole,
  MessageCircleHeart,
  MessageSquareQuote,
} from "lucide-react";
import { FaPray, FaPrayingHands } from "react-icons/fa";

const managementItems = [
  {
    title: "Prayer Requests",
    description: "Manage the prayer requests sent.",
    href: "/admin/prayer-requests",
    icon: MessageCircleHeart,
    label: "Manage prayer requests",
  },
  {
    title: "Testimonies",
    description: "Manage testimonies sent.",
    href: "/admin/testimonies",
    icon: MessageSquareQuote,
    label: "Manage users",
  },
  {
    title: "User management",
    description: "Manage administrator accounts and user access.",
    href: "/admin/users",
    icon: Users,
    label: "Manage users",
  },
  //   {
  //     title: "Media library",
  //     description: "Access and organize website media assets.",
  //     href: "/admin/media",
  //     icon: Images,
  //     label: "Browse media",
  //   },
  //   {
  //     title: "Settings",
  //     description: "Configure website management preferences.",
  //     href: "/admin/settings",
  //     icon: Settings,
  //     label: "View settings",
  //   },
];

const quickActions = [
  //   {
  //     title: "Create administrator",
  //     description: "Give an authorized person management access.",
  //     href: "/admin/users/new",
  //     icon: UserPlus,
  //   },
  {
    title: "Manage users",
    description: "Review and manage existing accounts.",
    href: "/admin/users",
    icon: Users,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-9">
      {/* Welcome section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0e0e12] p-6 sm:p-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/[0.12] blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 right-1/3 h-64 w-64 rounded-full bg-blue-600/[0.06] blur-[90px]"
        />

        <div className="relative z-10 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-3 py-1.5">
            <LayoutDashboard size={13} className="text-violet-300" />
            <span className="text-[10px] font-medium tracking-wide text-violet-200/80">
              ADMINISTRATION OVERVIEW
            </span>
          </div>

          <h1 className="text-2xl font-medium tracking-tight sm:text-4xl">
            Welcome to your workspace.
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-7 text-white/45">
            Manage Nana Amoah&apos;s website, oversee user access, and keep
            everything organized from one place.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/admin/prayer-requests"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              <MessageCircleHeart size={15} />
              Manage Prayer Requests
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/admin/testimonies"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              <MessageSquareQuote size={15} />
              Manage Testimonies
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 text-xs font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              View website
              <ArrowUpRight size={14} />
            </Link>

            {/* <Link
              href="/admin/users/new"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              <UserPlus size={15} />
              Create administrator
              <ArrowUpRight size={14} />
            </Link> */}
          </div>
        </div>
      </section>

      {/* Workspace status */}
      <section>
        <div className="mb-4">
          <h2 className="text-sm font-medium">Workspace</h2>
          <p className="mt-1 text-xs text-white/35">
            Your website management areas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {managementItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-violet-400/20 hover:bg-white/[0.035]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition group-hover:border-violet-400/20 group-hover:bg-violet-500/[0.08]">
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="text-white/65 transition group-hover:text-violet-200"
                    />
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                  />
                </div>

                <h3 className="text-sm font-medium">{item.title}</h3>

                <p className="mt-2 min-h-10 text-xs leading-5 text-white/40">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-[11px] font-medium text-white/55 transition group-hover:text-violet-200">
                  {item.label}
                  <ChevronRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick actions and security */}
      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-sm font-medium">Quick actions</h2>
            <p className="mt-1 text-xs text-white/35">
              Common administrative tasks.
            </p>
          </div>

          <div className="space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition hover:border-white/[0.12] hover:bg-white/[0.035]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/[0.08] text-violet-200">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-medium">{action.title}</h3>
                    <p className="mt-1 text-[11px] leading-5 text-white/40">
                      {action.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="shrink-0 text-white/25 transition group-hover:translate-x-0.5 group-hover:text-white/70"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.06]">
              <ShieldCheck size={19} className="text-emerald-300/80" />
            </div>

            <div>
              <h2 className="text-sm font-medium">Access & security</h2>
              <p className="mt-1 text-[11px] text-white/35">
                Administrator workspace
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-start gap-3">
              <LockKeyhole
                size={15}
                className="mt-0.5 shrink-0 text-white/40"
              />
              <div>
                <p className="text-xs font-medium text-white/75">
                  Protected administration
                </p>
                <p className="mt-1 text-[11px] leading-5 text-white/40">
                  Access is restricted to authenticated administrators.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Activity size={15} className="mt-0.5 shrink-0 text-white/40" />
              <div>
                <p className="text-xs font-medium text-white/75">
                  Activity monitoring
                </p>
                <p className="mt-1 text-[11px] leading-5 text-white/40">
                  An activity feed can be added when administrative event
                  logging is implemented.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/[0.08] pt-4">
            <p className="text-[10px] leading-5 text-white/30">
              Keep administrator accounts limited to trusted, authorized
              personnel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
