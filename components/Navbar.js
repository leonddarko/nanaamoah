"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Music2, X } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaDeezer,
} from "react-icons/fa";

const navItems = [
  { label: "Music", href: "/music" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "px-4 pt-3 sm:px-6" : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between transition-all duration-500 ${
            scrolled
              ? "max-w-6xl rounded-full border border-white/10 bg-black/60 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-6"
              : "max-w-7xl px-6 py-6 lg:px-10"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group relative z-[60] flex items-center gap-3"
          >
            <div
              className={`flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 ${
                scrolled ? "h-8 w-8" : "h-9 w-9"
              }`}
            >
              <Music2 size={scrolled ? 14 : 16} strokeWidth={1.5} />
            </div>

            <span className="text-sm font-semibold tracking-[0.2em]">
              NANA AMOAH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Listen Button */}
          <Link
            href="/music"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-xs font-medium tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:flex"
          >
            Listen Now
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================== */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Purple */}
          <div
            className={`absolute -left-32 top-10 h-80 w-80 rounded-full bg-purple-700/20 blur-[130px] transition-transform duration-1000 ${
              mobileMenuOpen ? "scale-100" : "scale-75"
            }`}
          />

          {/* Blue */}
          <div
            className={`absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px] transition-transform duration-1000 ${
              mobileMenuOpen ? "scale-100" : "scale-75"
            }`}
          />

          {/* Green */}
          <div
            className={`absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px] transition-transform duration-1000 ${
              mobileMenuOpen ? "scale-100" : "scale-75"
            }`}
          />

          {/* Gold */}
          <div
            className={`absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-amber-500/10 blur-[130px] transition-transform duration-1000 ${
              mobileMenuOpen ? "scale-100" : "scale-75"
            }`}
          />
        </div>

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:70px_70px]" />

        {/* Menu content */}
        <div className="relative flex h-full flex-col px-7 pb-8 pt-32">
          {/* Label */}
          <div
            className={`mb-10 flex items-center gap-3 transition-all delay-100 duration-500 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-px w-8 bg-white/30" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Navigation
            </span>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className={`group flex items-center justify-between border-b border-white/[0.07] py-5 transition-all duration-500 ${
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${150 + index * 70}ms`,
                }}
              >
                <span className="text-4xl font-light tracking-tight text-white/85 transition group-hover:text-white">
                  {item.label}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-white/25 transition group-hover:text-white"
                />
              </Link>
            ))}
          </nav>

          {/* Listen CTA */}
          <div
            className={`mt-8 transition-all delay-[450ms] duration-500 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <Link
              href="/music"
              onClick={closeMobileMenu}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                <Music2 size={13} strokeWidth={1.5} />
              </span>
              Listen Now
              <span className="flex items-center gap-2 border-l border-black/10 pl-3">
                <FaYoutube size={13} />
                <FaSpotify size={13} />
                <FaApple size={13} />
                <FaDeezer size={14} />
              </span>
            </Link>
          </div>

          {/* Bottom */}
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-5 text-white/30">
              <a
                href="https://www.instagram.com/nanaamoahh/"
                aria-label="Instagram"
                className="transition-colors duration-300 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://www.youtube.com/@nanaamoahh"
                aria-label="YouTube"
                className="transition-colors duration-300 hover:text-white"
              >
                <FaYoutube size={17} />
              </a>

              <a
                href="https://facebook.com/nanakwadwo.amoah"
                aria-label="Facebook"
                className="transition-colors duration-300 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
              Faith • Music • Purpose
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
