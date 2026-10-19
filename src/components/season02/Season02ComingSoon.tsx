/** Placeholder for the Season 02 page until episodes and details are announced. */
export default function Season02ComingSoon() {
  return (
    <main className="relative isolate flex min-h-[calc(100svh-4.25rem)] items-center justify-center overflow-hidden bg-[#050A18] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
      {/* Soft gold glow behind the heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8B04F]/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-3xl">
        <h1 className="font-playfair text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Season 02{" "}
          <span className="mt-2 block bg-linear-to-r from-[#F5C97A] via-[#E8B04F] to-[#D99A3A] bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <div
          className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-[#E8B04F] to-transparent"
          aria-hidden
        />

        <p className="mt-8 text-base leading-relaxed text-gray-200 sm:text-lg">
          Production to begin from{" "}
          <time dateTime="2026-12-07" className="font-semibold text-[#F5C97A]">
            7th December, 2026
          </time>{" "}
          onwards.
        </p>
      </div>
    </main>
  );
}
