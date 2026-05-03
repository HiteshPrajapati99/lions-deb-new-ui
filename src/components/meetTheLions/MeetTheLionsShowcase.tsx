"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  BarChart3,
  Briefcase,
  ChevronDown,
  IndianRupee,
  PanelTop,
  Users,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const GOLD = "#D4AF37";

const filterCategories = [
  "All",
  "Technology",
  "SaaS",
  "AI/ML",
  "Fintech",
  "E-commerce",
  "Consumer Brands",
  "D2C",
  "Marketing",
  "Retail",
  "Fashion",
  "Manufacturing",
  "Supply Chain",
  "Logistics",
  "Industrial Tech",
  "Operations",
  "Healthcare",
  "Biotech",
  "MedTech",
  "Social Impact",
  "Web3",
  "Banking",
  "Payments",
  "Blockchain",
  "Investment",
] as const;

type Lion = {
  name: string;
  title: string;
  tags: readonly string[];
  investments: number;
  successRate: string;
  netWorth: string;
  quote: string;
  imageSeed: number;
  /** Verbatim from design (Investment Philosophy → Investment Criteria). */
  investmentCriteria: string;
};

const lions: Lion[] = [
  {
    name: "Rajesh Mehta",
    title: "Tech Visionary & Serial Entrepreneur",
    tags: ["Technology", "SaaS", "AI/ML"],
    investments: 47,
    successRate: "78%",
    netWorth: "₹850 Cr",
    quote:
      "Great businesses are built on solving real problems, not chasing trends.",
    imageSeed: 501,
    investmentCriteria:
      "Focus on scalable tech with strong unit economics and clear profitability path.",
  },
  {
    name: "Priya Sharma",
    title: "Consumer Brand Expert & Marketing Maven",
    tags: ["Consumer Brands", "D2C", "Marketing"],
    investments: 38,
    successRate: "82%",
    netWorth: "₹620 Cr",
    quote:
      "Brands start with hearts, win markets. Authenticity is non-negotiable.",
    imageSeed: 502,
    investmentCriteria:
      "Emotional brand connection, repeat purchase behavior, and authentic storytelling.",
  },
  {
    name: "Vikram Singh",
    title: "Manufacturing Mogul & Operations Specialist",
    tags: ["Manufacturing", "Supply Chain", "Logistics"],
    investments: 32,
    successRate: "75%",
    netWorth: "₹1200 Cr",
    quote: "Excellence in execution beats brilliant ideas every single time.",
    imageSeed: 503,
    investmentCriteria:
      "Operational excellence, efficient supply chains, and manufacturing discipline.",
  },
];

type PhilosophyTabId =
  | "investmentCriteria"
  | "dealBreakers"
  | "founderQualities"
  | "postInvestmentSupport";

const philosophyTabs: { id: PhilosophyTabId; label: string }[] = [
  { id: "investmentCriteria", label: "Investment Criteria" },
  { id: "dealBreakers", label: "Deal Breakers" },
  { id: "founderQualities", label: "Founder Qualities" },
  { id: "postInvestmentSupport", label: "Post-Investment Support" },
];

function matchesFilter(selected: string, tags: readonly string[]) {
  if (selected === "All") return true;
  return tags.some((t) => t === selected);
}

function LionCard({ L }: { L: Lion }) {
  const [open, setOpen] = React.useState(false);

  return (
    <article
      className={cn(
        "flex w-full max-w-[380px] flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_12px_40px_-18px_rgba(15,23,42,0.15)]",
        "mx-auto sm:max-w-none",
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
        <Image
          src={`https://picsum.photos/seed/ldlion${L.imageSeed}/640/800`}
          alt={`${L.name}, investor portrait`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 pt-12">
          <h3
            className={cn(
              playfair.className,
              "text-xl font-bold text-white sm:text-2xl",
            )}
          >
            {L.name}
          </h3>
          <p className="mt-1 text-sm font-semibold" style={{ color: GOLD }}>
            {L.title}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {L.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-neutral-100 py-4 text-center">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
              Investments
            </dt>
            <dd
              className="mt-1 text-lg font-bold tabular-nums"
              style={{ color: GOLD }}
            >
              {L.investments}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
              Success Rate
            </dt>
            <dd
              className="mt-1 text-lg font-bold tabular-nums"
              style={{ color: GOLD }}
            >
              {L.successRate}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
              Net Worth
            </dt>
            <dd
              className="mt-1 text-lg font-bold tabular-nums"
              style={{ color: GOLD }}
            >
              {L.netWorth}
            </dd>
          </div>
        </dl>
        <p className="mt-4 flex-1 text-sm italic leading-relaxed text-neutral-600">
          &ldquo;{L.quote}&rdquo;
        </p>
        <div className="mt-5 space-y-3">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-center justify-center gap-1 rounded-lg border border-neutral-200 bg-white py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-50"
            aria-expanded={open}
          >
            Show More
            <ChevronDown
              className={cn(
                "size-4 transition-transform",
                open && "rotate-180",
              )}
            />
          </button>
          {open ? (
            <p className="rounded-lg bg-neutral-50 px-3 py-2 text-xs leading-relaxed text-neutral-600">
              {L.investmentCriteria}
            </p>
          ) : null}
          <Link
            href="/pitch-your-idea"
            className="flex w-full items-center justify-center rounded-lg py-3 text-sm font-bold text-[#1a1a1a] transition-opacity hover:opacity-90"
            style={{ backgroundColor: GOLD }}
          >
            View Full Profile
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function MeetTheLionsShowcase() {
  const [filter, setFilter] = React.useState<string>("All");
  const [philosophyTab, setPhilosophyTab] =
    React.useState<PhilosophyTabId>("investmentCriteria");

  const filteredLions = React.useMemo(
    () => lions.filter((L) => matchesFilter(filter, L.tags)),
    [filter],
  );

  const row1 = filteredLions.slice(0, 3);
  const row2 = filteredLions.slice(3);

  return (
    <>
      <section
        className="relative overflow-hidden pb-28 pt-24 sm:pt-28"
        style={{
          background: "linear-gradient(180deg, #0a192f 0%, #050a14 100%)",
        }}
      >
        <div className="relative z-10 mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-10">
          <p
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: GOLD }}
          >
            <PanelTop className="size-4" aria-hidden />
            Investment Panel
          </p>
          <h1
            className={cn(
              playfair.className,
              "mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl",
            )}
          >
            Meet the Lions
          </h1>
          <p className="mx-auto mt-5 max-w-[40rem] text-base leading-relaxed text-white/90 sm:text-lg">
            India&apos;s most successful entrepreneurs and investors who
            transform dreams into thriving businesses
          </p>
        </div>

        <div className="relative z-20 mx-auto mt-14 grid max-w-[1200px] gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
          <div className="relative rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
            <span className="absolute right-3 top-3 text-xs font-bold text-emerald-600">
              +22%
            </span>
            <div className="mb-3 inline-flex rounded-xl bg-neutral-50 p-2.5 text-neutral-700">
              <IndianRupee className="size-5" strokeWidth={1.85} aria-hidden />
            </div>
            <p className="text-2xl font-bold tabular-nums text-neutral-900">
              ₹2,450 Cr
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900">
              Total Invested
            </p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Cumulative investment across all lions.
            </p>
          </div>
          <div className="relative rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
            <span className="absolute right-3 top-3 text-xs font-bold text-emerald-600">
              +15%
            </span>
            <div className="mb-3 inline-flex rounded-xl bg-neutral-50 p-2.5 text-neutral-700">
              <Briefcase className="size-5" strokeWidth={1.85} aria-hidden />
            </div>
            <p className="text-2xl font-bold tabular-nums text-neutral-900">
              187
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900">
              Portfolio Companies
            </p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Active investments across sectors.
            </p>
          </div>
          <div className="relative rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
            <span className="absolute right-3 top-3 text-xs font-bold text-emerald-600">
              +5.5%
            </span>
            <div className="mb-3 inline-flex rounded-xl bg-neutral-50 p-2.5 text-neutral-700">
              <BarChart3 className="size-5" strokeWidth={1.85} aria-hidden />
            </div>
            <p className="text-2xl font-bold tabular-nums text-neutral-900">
              78.2%
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900">
              Average Success Rate
            </p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Successful exits and growth.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
            <div className="mb-3 inline-flex rounded-xl bg-neutral-50 p-2.5 text-neutral-700">
              <Users className="size-5" strokeWidth={1.85} aria-hidden />
            </div>
            <p className="text-2xl font-bold tabular-nums text-neutral-900">
              45,000+
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900">
              Jobs Created
            </p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Employment through portfolio companies.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2
            className={cn(
              playfair.className,
              "text-3xl font-semibold text-neutral-900 sm:text-4xl",
            )}
          >
            Our Investment Panel
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-600">
            Filter by expertise to find the right lion for your venture.
          </p>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-2 sm:gap-2.5">
          {filterCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200/80",
                )}
                style={active ? { backgroundColor: GOLD } : undefined}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filteredLions.length === 0 ? (
          <p className="mx-auto mt-12 text-center text-neutral-600">
            No lions match this filter. Try &quot;All&quot; or another
            expertise.
          </p>
        ) : (
          <>
            <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {row1.map((L) => (
                <LionCard key={L.name} L={L} />
              ))}
            </div>
            {row2.length > 0 ? (
              <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-8 lg:gap-10">
                {row2.map((L) => (
                  <LionCard key={L.name} L={L} />
                ))}
              </div>
            ) : null}
          </>
        )}
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.2)]">
          <div
            className="px-6 py-8 text-center sm:px-10"
            style={{ backgroundColor: GOLD }}
          >
            <h2
              className={cn(
                playfair.className,
                "text-2xl font-semibold text-white sm:text-3xl",
              )}
            >
              Investment Philosophy Comparison
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/95 sm:text-base">
              Compare investment approaches across our panel of lions.
            </p>
          </div>
          <div className="border-b border-neutral-100 bg-white px-4 py-4 sm:px-6">
            <div
              className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-2"
              role="tablist"
              aria-label="Philosophy comparison"
            >
              {philosophyTabs.map((tab) => {
                const active = philosophyTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setPhilosophyTab(tab.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-bold transition-colors sm:text-sm",
                      active
                        ? "shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80",
                    )}
                    style={
                      active
                        ? { backgroundColor: GOLD, color: "#fff" }
                        : undefined
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 bg-white p-6 sm:grid-cols-2 lg:grid-cols-3 sm:p-8 lg:gap-6">
            {lions.map((L) => (
              <div
                key={L.name}
                className="flex gap-3 rounded-xl border border-sky-100 bg-sky-50/80 p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                  <User className="size-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-neutral-900">{L.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                    {philosophyTab === "investmentCriteria"
                      ? L.investmentCriteria
                      : "Full details for this lens are provided during the founder application process."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 text-center sm:px-6 lg:px-10"
        style={{
          background:
            "linear-gradient(135deg, #d4af37 0%, #c9a227 50%, #b8860b 100%)",
        }}
      >
        <h2
          className={cn(
            playfair.className,
            "text-3xl font-semibold text-white sm:text-4xl",
          )}
        >
          Ready to Pitch to Our Lions?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
          Join hundreds of entrepreneurs who have transformed their ideas into
          successful businesses with our support.
        </p>
        <Link
          href="/pitch-your-idea"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-neutral-900 shadow-md transition-opacity hover:opacity-95"
        >
          Start Your Application →
        </Link>
      </section>
    </>
  );
}
