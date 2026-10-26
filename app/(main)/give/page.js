"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownLeft,
  ArrowRight,
  Building2,
  Check,
  Copy,
  Heart,
  Handshake,
  Landmark,
  Smartphone,
  Globe,
} from "lucide-react";

const bankDetails = [
  { label: "Account Name", value: "Nana Kwadwo Amoah" },
  { label: "Bank", value: "Fidelity Bank" },
  { label: "Branch", value: "Madina Market" },
];

export default function GivePage() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText("2100767348216");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#08080b] text-white">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-amber-500/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
            <Heart size={14} className="text-amber-300" />
            Partner With the Ministry
          </span>

          <h1 className="mt-7 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Be part of the
            <span className="block bg-gradient-to-r from-amber-200 via-white to-purple-200 bg-clip-text text-transparent">
              greater purpose.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Your generosity helps support the music, ministry, and outreach
            through which the message of Jesus Christ is shared. Thank you
            for standing with Nana Amoah in this work.
          </p>

          <a
            href="#give"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-100"
          >
            Ways to Give
            <ArrowDownLeft size={16} />
          </a>
        </div>
      </section>

      {/* Giving methods */}
      <section id="give" className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-200/70">
              Giving Options
            </p>
            <h2 className="mt-3 text-2xl font-medium sm:text-3xl">
              Support the work
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
              Choose the option that works best for you. For now, bank
              transfers and direct partnership enquiries are available.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Bank transfer */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-amber-200">
                <Landmark size={22} />
              </div>

              <h3 className="mt-6 text-xl font-medium">Bank Transfer</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Send your support directly to Nana Amoah&apos;s bank account.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-5">
                <p className="text-xs text-white/45">Account Number</p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="break-all font-mono text-xl tracking-wide sm:text-2xl">
                    2100767348216
                  </span>

                  <button
                    type="button"
                    onClick={copyAccountNumber}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs transition hover:border-white/30 hover:bg-white/[0.06]"
                    aria-label="Copy account number"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="my-5 h-px bg-white/[0.08]" />

                <div className="space-y-4">
                  {bankDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                    >
                      <span className="text-xs text-white/40">
                        {detail.label}
                      </span>
                      <span className="text-sm text-white/85 sm:text-right">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-white/40">
                Please verify the account details before transferring.
                Keep your transaction reference for your records.
              </p>
            </div>

            {/* Partnership */}
            <div className="relative overflow-hidden rounded-3xl border border-purple-300/15 bg-gradient-to-br from-purple-950/40 via-white/[0.035] to-white/[0.02] p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-200/15 bg-purple-300/[0.08] text-purple-200">
                  <Handshake size={22} />
                </div>

                <h3 className="mt-6 text-xl font-medium">
                  Partnerships & Sponsorships
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Are you a church, business, organization, or individual
                  interested in supporting music projects, ministry
                  initiatives, events, or outreach? Let&apos;s explore how
                  we can work together.
                </p>

                <div className="mt-7 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-white/65">
                    <Check size={16} className="mt-0.5 shrink-0 text-amber-200" />
                    <span>Music production and related projects</span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-white/65">
                    <Check size={16} className="mt-0.5 shrink-0 text-amber-200" />
                    <span>Ministry events and outreach initiatives</span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-white/65">
                    <Check size={16} className="mt-0.5 shrink-0 text-amber-200" />
                    <span>Long-term ministry and corporate partnerships</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-white/30 hover:bg-white/[0.06]"
                >
                  Discuss a Partnership
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Future payment methods */}
          {/* <div className="mt-12">
            <h3 className="text-lg font-medium">More ways to give</h3>
            <p className="mt-2 text-sm leading-6 text-white/45">
              Additional payment options are being considered to make
              supporting the ministry easier.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <Smartphone
                  size={21}
                  className="mt-1 shrink-0 text-white/50"
                />
                <div>
                  <h4 className="text-sm font-medium">Mobile Money</h4>
                  <p className="mt-1 text-xs leading-6 text-white/45">
                    Ghanaian mobile money support will be added once the
                    official payment details are confirmed.
                  </p>
                  <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Coming soon
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <Globe size={21} className="mt-1 shrink-0 text-white/50" />
                <div>
                  <h4 className="text-sm font-medium">Online Giving</h4>
                  <p className="mt-1 text-xs leading-6 text-white/45">
                    Secure online payments for eligible local and
                    international supporters.
                  </p>
                  <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Closing message */}
          <div className="mt-16 border-t border-white/[0.08] pt-8 text-center">
            <Heart size={20} className="mx-auto text-amber-200/70" />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55">
              Every act of generosity is appreciated. Thank you for your
              prayers, encouragement, and support as we continue the work
              to the glory of God.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}