
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(currentProgress);
      setVisible(scrollTop > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-purple-500/[0.08] hover:text-white sm:bottom-8 sm:right-8 cursor-pointer ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      {/* Progress Ring */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
        fill="none"
      >
        {/* Track */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* Progress */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={100 - progress}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>

      <ArrowUp
        size={16}
        strokeWidth={1.5}
        className="relative transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}

