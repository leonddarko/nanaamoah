
export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#070709] px-6 py-24 text-white sm:min-h-[80vh]"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.09] blur-[100px] sm:h-96 sm:w-96"
      />

      <div className="relative flex flex-col items-center text-center">
        {/* Animated brand mark */}
        <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-white/[0.08]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-violet-400/80"
            style={{ animationDuration: "2.5s" }}
          />

          <span className="font-serif text-2xl tracking-[-0.08em] text-white">
            NA
          </span>

          <span
            aria-hidden="true"
            className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.55)]"
          />
        </div>

        <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/45">
          Nana Amoah
        </p>

        <p className="mt-3 text-sm text-white/70">
          Preparing something meaningful
        </p>

        {/* Loading indicator */}
        <div
          aria-hidden="true"
          className="mt-8 h-px w-32 overflow-hidden bg-white/[0.08]"
        >
          <div
            className="h-full w-1/2 animate-[loading-slide_1.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-violet-300 to-amber-200"
          />
        </div>

        <style>{`
          @keyframes loading-slide {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(200%); }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-spin,
            .animate-\\[loading-slide_1\\.8s_ease-in-out_infinite\\] {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </main>
  );
}
