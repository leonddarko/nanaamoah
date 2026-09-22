"use client";

import Link from "next/link";
import {
    FaInstagram,
    FaYoutube,
    FaFacebookF,
    FaSpotify,
} from "react-icons/fa";

const footerLinks = [
    { label: "Music", href: "/music" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (<footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505]">
        {/* Ambient glow */} <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-0 py-12 ">
            {/* Main footer */}
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                {/* Brand */}
                <div>
                    <Link
                        href="/"
                        className="text-sm font-semibold tracking-[0.25em] text-white"
                    >
                        NANA AMOAH
                    </Link>

                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/30">
                        Music, faith and purpose — creating from a place of worship.
                    </p>
                </div>

                {/* Links */}
                <nav className="flex flex-wrap gap-x-7 gap-y-3">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-xs text-white/35 transition-colors duration-300 hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Socials */}
                <div className="flex items-center gap-5 text-white/30">
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        <FaInstagram size={16} />
                    </a>

                    <a
                        href="#"
                        aria-label="YouTube"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        <FaYoutube size={17} />
                    </a>

                    <a
                        href="#"
                        aria-label="Facebook"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        <FaFacebookF size={15} />
                    </a>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] tracking-wide text-white/20">
                    © {new Date().getFullYear()} Nana Amoah. All rights reserved.
                </p>

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/15">
                    Faith • Music • Purpose
                </p>
            </div>
        </div>
    </footer>

    );
}
