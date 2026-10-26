"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  FileText,
  Images,
  Settings,
  ShieldCheck,
  Menu,
  X,
  LogOut,
  ChevronDown,
  ExternalLink,
  Users,
  MessageCircleHeart,
  MessageSquareQuote,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    items: [
      {
        name: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        name: "Prayer Requests",
        href: "/admin/prayer-requests",
        icon: MessageCircleHeart,
      },
      {
        name: "Testimonies",
        href: "/admin/testimonies",
        icon: MessageSquareQuote,
      },
      {
        name: "Manage Users",
        href: "/admin/users",
        icon: Users,
      },
      // {
      //   name: "Media Library",
      //   href: "/admin/media",
      //   icon: Images,
      // },
    ],
  },
  // {
  //   label: "Preferences",
  //   items: [
  //     {
  //       name: "Settings",
  //       href: "/admin/settings",
  //       icon: Settings,
  //     },
  //   ],
  // },
];

export default function AdminShell({ children, user }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const initials =
    user?.name
      ?.split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "NA";

  const currentPage =
    navigation
      .flatMap((section) => section.items)
      .find((item) =>
        item.href === "/admin"
          ? pathname === "/admin"
          : pathname === item.href || pathname.startsWith(`${item.href}/`),
      )?.name || "Administration";

  function SidebarContent() {
    return (
      <>
        <div className="flex h-[76px] items-center gap-3 border-b border-white/[0.08] px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs font-semibold">
            NA
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.2em]">NANA AMOAH</p>
            <p className="mt-1 text-[10px] text-white/35">Management Portal</p>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
            className="ml-auto rounded-lg p-2 text-white/50 hover:bg-white/5 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          {navigation.map((section) => (
            <div key={section.label} className="mb-7">
              <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                {section.label}
              </p>

              <nav className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active =
                    item.href === "/admin"
                      ? pathname === "/admin"
                      : pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] transition ${
                        active
                          ? "border border-violet-400/15 bg-violet-500/[0.10] text-white"
                          : "border border-transparent text-white/45 hover:bg-white/[0.04] hover:text-white/80"
                      }`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                        className={active ? "text-violet-300" : "text-white/40"}
                      />

                      <span>{item.name}</span>

                      {active && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-300" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.08] p-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-xs text-white/40 transition hover:bg-white/[0.04] hover:text-white/80"
          >
            <ExternalLink size={16} />
            View public website
          </Link>

          <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-semibold text-violet-200">
              {initials}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-white/85">
                {user?.name || "Administrator"}
              </p>
              <p className="mt-1 truncate text-[10px] text-white/35">
                {user?.email}
              </p>
            </div>

            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/na-console-7x" })}
              aria-label="Sign out"
              title="Sign out"
              className="rounded-lg p-2 text-white/35 transition hover:bg-white/[0.06] hover:text-white"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] flex-col border-r border-white/[0.08] bg-[#0b0b0d] lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <aside className="relative flex h-full w-[280px] max-w-[85vw] flex-col border-r border-white/10 bg-[#0b0b0d]">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="min-h-screen lg:pl-[260px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-white/[0.08] bg-[#080808]/90 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="rounded-lg border border-white/10 p-2 text-white/65 hover:bg-white/[0.05] lg:hidden"
            >
              <Menu size={19} />
            </button>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{currentPage}</p>
              <p className="mt-1 hidden text-[10px] text-white/35 sm:block">
                Nana Amoah / Administration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 sm:flex">
              <ShieldCheck size={14} className="text-violet-300" />
              <span className="text-[10px] text-white/55">Secure session</span>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileOpen((open) => !open)}
                aria-expanded={profileOpen}
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] p-1.5 pr-2.5 transition hover:bg-white/[0.04]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-[11px] font-semibold text-violet-200">
                  {initials}
                </span>
                <ChevronDown size={14} className="text-white/40" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-white/10 bg-[#111113] p-2 shadow-2xl">
                  <div className="border-b border-white/[0.08] px-3 py-2">
                    <p className="truncate text-xs font-medium">
                      {user?.name || "Administrator"}
                    </p>
                    <p className="mt-1 truncate text-[10px] text-white/40">
                      {user?.email}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/na-console-7x" })}
                    className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-xs text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    <LogOut size={15} />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1600px] p-5 sm:p-8 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
