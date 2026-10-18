import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Handshake,
  Play,
  Users,
} from "lucide-react";
import { AppLink } from "@/lib/app-link";

type HeroStat = { icon: LucideIcon; value: string; label: string };

const stats: HeroStat[] = [
  { icon: Users, value: "500+", label: "Founders Empowered" },
  { icon: Handshake, value: "50+", label: "Partners & Mentors" },
  {
    icon: ChartNoAxesColumnIncreasing,
    value: "300%",
    label: "Average Growth",
  },
];

export default function HomeHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.25rem)] items-center overflow-hidden bg-[#050A18] text-white">
      {/* Background image */}
      <img
        src="/home.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      {/* Dark fade on the left so the text stays readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#050A18]/95 via-[#050A18]/70 to-transparent lg:via-[#050A18]/55 lg:to-[#050A18]/0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#050A18]/80 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#E8B04F]/60 bg-[#050A18]/40 px-3.5 py-1 text-xs font-medium sm:text-sm text-[#F5D58A] backdrop-blur-sm">
            <span
              className="size-2 shrink-0 rounded-full bg-[#E8B04F]"
              aria-hidden
            />
            Season 02 Coming Soon
          </span>

          {/* Title */}
          <h1 className="font-playfair text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Your Entrepreneurial
            <br className="hidden sm:block" /> Journey
            <span className="mt-1 block bg-linear-to-r from-[#F5C97A] via-[#E8B04F] to-[#D99A3A] bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-200 sm:text-base">
            Join thousands of aspiring entrepreneurs who transformed their
            dreams into reality. Learn from the best, pitch to the lions, and
            build your empire.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <AppLink
              href="/meet-the-lions"
              className="group inline-flex h-11 items-center gap-2.5 rounded-full bg-linear-to-r from-[#F5C97A] to-[#E8A548] px-6 text-sm font-semibold text-[#1A1206] shadow-[0_10px_30px_-10px_rgba(232,176,79,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(232,176,79,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B04F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050A18]"
            >
              Meet the Lions
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </AppLink>
            <AppLink
              href="/season"
              className="group inline-flex h-11 items-center gap-2.5 rounded-full border border-white/40 bg-[#050A18]/40 pl-1.5 pr-5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#E8B04F] hover:bg-[#050A18]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B04F]"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#050A18] transition-colors duration-300 group-hover:bg-[#E8B04F]">
                <Play
                  className="ml-0.5 size-4"
                  fill="currentColor"
                  aria-hidden
                />
              </span>
              Watch Season 2
            </AppLink>
          </div>

          {/* Stats */}
          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={
                  i > 0
                    ? "flex items-center gap-3 sm:border-l sm:border-[#E8B04F]/35 sm:pl-5"
                    : "flex items-center gap-3 sm:pr-5"
                }
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#E8B04F]/60 bg-[#050A18]/50 shadow-[0_0_20px_-6px_rgba(232,176,79,0.6)]">
                  <Icon
                    className="size-5 text-[#F5C97A]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-xs text-gray-200 sm:text-sm">{label}</dt>
                  <dd className="font-playfair text-2xl font-semibold leading-tight text-[#F5C97A]">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
