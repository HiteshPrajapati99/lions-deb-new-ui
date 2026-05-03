"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  ArrowRight,
  ChevronDown,
  Coins,
  Eye,
  Layers,
  Search,
  ShoppingBag,
  Star,
  TrendingUp,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const stats = [
  { value: "10", label: "Episodes", icon: Layers, iconWrap: "text-[#D4AF37]" },
  { value: "36", label: "Total Pitches", icon: ShoppingBag, iconWrap: "text-[#F2994A]" },
  { value: "58%", label: "Success Rate", icon: TrendingUp, iconWrap: "text-emerald-600" },
  { value: "₹9.15 Cr", label: "Total Investment", icon: Coins, iconWrap: "text-[#D4AF37]" },
  { value: "4.8", label: "Average Rating", icon: Star, iconWrap: "text-[#D4AF37]" },
  { value: "24.3M", label: "Total Views", icon: Eye, iconWrap: "text-neutral-500" },
] as const;

type EpisodeStatus = "funded" | "noDealYellow" | "noDealRed";

type EpisodeItem = {
  title: string;
  description: string;
  status: EpisodeStatus;
  industry: string;
  investmentDisplay: string;
  dateLabel: string;
  epLabel: string;
  ratingLabel: string;
  durationLabel: string;
  imageSeed: number;
};

const episodes: EpisodeItem[] = [
  {
    title: "Revolutionary EdTech Learning Platform",
    description:
      "Bridging classrooms and communities through adaptive curricula, vernacular support, and outcomes that founders can prove on stage.",
    status: "funded",
    industry: "EdTech",
    investmentDisplay: "₹75,00,000",
    dateLabel: "12 Oct 2023",
    epLabel: "Ep 01",
    ratingLabel: "4.6",
    durationLabel: "34:12",
    imageSeed: 201,
  },
  {
    title: "Sustainable Fashion Innovation",
    description:
      "Circular materials, ethical supply chains, and a brand story woven for conscious consumers navigating fast fashion fatigue.",
    status: "noDealYellow",
    industry: "Fashion",
    investmentDisplay: "No Deal",
    dateLabel: "19 Oct 2023",
    epLabel: "Ep 02",
    ratingLabel: "4.3",
    durationLabel: "41:06",
    imageSeed: 202,
  },
  {
    title: "Virtual Reality in Mental Healthcare",
    description:
      "Immersive therapy protocols with clinical guardrails pitched as accessible care for anxiety, stress, and remote counselling.",
    status: "noDealRed",
    industry: "HealthTech",
    investmentDisplay: "No Deal",
    dateLabel: "26 Oct 2023",
    epLabel: "Ep 03",
    ratingLabel: "4.5",
    durationLabel: "36:54",
    imageSeed: 203,
  },
  {
    title: "Farm to Table Food Delivery Network",
    description:
      "Cold-chain freshness, farmer-first pricing, and city kitchens promising traceability from soil to supper in under a day.",
    status: "funded",
    industry: "AgriFood",
    investmentDisplay: "₹1,20,00,000",
    dateLabel: "2 Nov 2023",
    epLabel: "Ep 04",
    ratingLabel: "4.7",
    durationLabel: "38:12",
    imageSeed: 204,
  },
  {
    title: "Smart Home Automation for Indian Households",
    description:
      "Affordable retrofit kits, regional language assistants, and energy insights tuned for Apartments, villas, and growing smart cities.",
    status: "funded",
    industry: "Smart Home",
    investmentDisplay: "₹95,00,000",
    dateLabel: "9 Nov 2023",
    epLabel: "Ep 05",
    ratingLabel: "4.8",
    durationLabel: "39:41",
    imageSeed: 205,
  },
  {
    title: "Artisan Marketplace Platform",
    description:
      "A curator-led storefront celebrating master makers with logistics, storytelling, and transparent payouts for craftsmen.",
    status: "noDealYellow",
    industry: "Marketplace",
    investmentDisplay: "No Deal",
    dateLabel: "16 Nov 2023",
    epLabel: "Ep 06",
    ratingLabel: "4.2",
    durationLabel: "33:27",
    imageSeed: 206,
  },
  {
    title: "Mental Health Counseling App",
    description:
      "Licensed therapists on demand with mood tracking, culturally aware care plans, and B2B routes into enterprises and campuses.",
    status: "funded",
    industry: "Wellness",
    investmentDisplay: "₹82,50,000",
    dateLabel: "23 Nov 2023",
    epLabel: "Ep 07",
    ratingLabel: "4.7",
    durationLabel: "40:03",
    imageSeed: 207,
  },
  {
    title: "Electric Vehicle Charging Network",
    description:
      "Modular chargers, uptime-first operations software, and partnerships aimed at India's next decade of mobility infrastructure.",
    status: "funded",
    industry: "EV Infra",
    investmentDisplay: "₹2,40,00,000",
    dateLabel: "30 Nov 2023",
    epLabel: "Ep 08",
    ratingLabel: "4.9",
    durationLabel: "42:58",
    imageSeed: 208,
  },
  {
    title: "Organic Beauty Products Line",
    description:
      "Farm-sourced botanicals, plastic-light packaging, and science-backed formulations built for discerning Indian skincare routines.",
    status: "noDealRed",
    industry: "Beauty",
    investmentDisplay: "No Deal",
    dateLabel: "7 Dec 2023",
    epLabel: "Ep 09",
    ratingLabel: "4.4",
    durationLabel: "35:49",
    imageSeed: 209,
  },
  {
    title: "Waste Management Innovation",
    description:
      "Segregation-tech, recycler networks, and city pilots promising cleaner landfills with measurable diverted tonnage quarterly.",
    status: "funded",
    industry: "CleanTech",
    investmentDisplay: "₹68,00,000",
    dateLabel: "14 Dec 2023",
    epLabel: "Ep 10",
    ratingLabel: "4.6",
    durationLabel: "37:22",
    imageSeed: 210,
  },
];

function statusBadge(status: EpisodeStatus) {
  if (status === "funded") {
    return { label: "Funded", className: "bg-emerald-600 text-white" };
  }
  if (status === "noDealYellow") {
    return { label: "No Deal", className: "bg-amber-400 text-[#1a1a1a]" };
  }
  return { label: "No Deal", className: "bg-red-600 text-white" };
}

const industries = ["All Industries", ...Array.from(new Set(episodes.map((e) => e.industry)))];

const investmentRanges = [
  "All Investment Ranges",
  "Funded deals only",
  "No Deal",
  "Under ₹1 Cr",
  "₹1 Cr and above",
] as const;

const sortOptions = ["Latest to Oldest", "Oldest to Latest", "Highest Rated"] as const;

type ExclusiveCat = "all" | "interviews" | "behind" | "expert";

const exclusiveTabs: { key: ExclusiveCat; label: string }[] = [
  { key: "all", label: "All Content" },
  { key: "interviews", label: "Interviews" },
  { key: "behind", label: "Behind the Scenes" },
  { key: "expert", label: "Expert Analysis" },
];

const exclusiveItems: {
  title: string;
  excerpt: string;
  badge: string;
  badgeClass: string;
  cat: ExclusiveCat | ExclusiveCat[];
  seed: number;
}[] = [
  {
    title: "Core Investment Philosophy Inside the Room",
    excerpt: "Why conviction, founder-market fit, and discipline matter before any term sheet lands on the table.",
    badge: "Expert Analysis",
    badgeClass: "bg-[#F2994A] text-white",
    cat: "expert",
    seed: 301,
  },
  {
    title: "The Pitch That Almost Wasn't",
    excerpt: "The late-night rehearsals, nerves in the wings, and the last-minute tweaks that reshaped the final story.",
    badge: "Interviews",
    badgeClass: "bg-[#D4AF37] text-[#1a1a1a]",
    cat: "interviews",
    seed: 302,
  },
  {
    title: "Setting Up the Live Show Studio",
    excerpt: "Lighting grids, lion seating, sonic balance, and the choreography hiding behind seamless broadcasts.",
    badge: "Behind the Scenes",
    badgeClass: "bg-neutral-600 text-white",
    cat: "behind",
    seed: 303,
  },
  {
    title: "Founder's Journey: From Idea to Proposal",
    excerpt: "How decks evolve, mentors intervene, and raw ideas become numbers the room can argue about with clarity.",
    badge: "Interviews",
    badgeClass: "bg-[#D4AF37] text-[#1a1a1a]",
    cat: "interviews",
    seed: 304,
  },
  {
    title: "The Emotional Moment That Made the Interest",
    excerpt: "When silence breaks, convictions align, and a split-second tells you the deal emotionally turned.",
    badge: "Behind the Scenes",
    badgeClass: "bg-neutral-600 text-white",
    cat: "behind",
    seed: 305,
  },
  {
    title: "A Day in the Life of Production",
    excerpt: "Call times, countdowns, and the crew sprint between segments that viewers never notice on camera.",
    badge: "Behind the Scenes",
    badgeClass: "bg-neutral-600 text-white",
    cat: "behind",
    seed: 306,
  },
];

function matchesExclusive(cat: ExclusiveCat, item: (typeof exclusiveItems)[number]) {
  if (cat === "all") return true;
  const tags = Array.isArray(item.cat) ? item.cat : [item.cat];
  return tags.includes(cat);
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  const id = React.useId();
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-black">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "h-11 w-full cursor-pointer appearance-none rounded-xl border border-neutral-200 bg-white px-3.5 pr-10 text-sm text-[#4F4F4F]",
            "shadow-[0_1px_2px_rgba(0,0,0,0.04)] outline-none transition-colors focus-visible:border-[#F2994A] focus-visible:ring-2 focus-visible:ring-[#F2994A]/25"
          )}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function Season01Showcase() {
  const [query, setQuery] = React.useState("");
  const [epFilter, setEpFilter] = React.useState("All Episodes");
  const [industryFilter, setIndustryFilter] = React.useState("All Industries");
  const [investmentFilter, setInvestmentFilter] =
    React.useState<(typeof investmentRanges)[number]>("All Investment Ranges");
  const [sortBy, setSortBy] = React.useState<(typeof sortOptions)[number]>("Latest to Oldest");
  const [exclusiveTab, setExclusiveTab] = React.useState<ExclusiveCat>("all");

  const filteredEpisodes = React.useMemo(() => {
    let list = [...episodes];

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.industry.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)
      );
    }

    if (industryFilter !== "All Industries") {
      list = list.filter((e) => e.industry === industryFilter);
    }

    if (investmentFilter === "Funded deals only") {
      list = list.filter((e) => e.status === "funded");
    }
    if (investmentFilter === "No Deal") {
      list = list.filter((e) => e.status !== "funded");
    }
    if (investmentFilter === "Under ₹1 Cr") {
      list = list.filter((e) => {
        const n = episodeInvestmentNumber(e.investmentDisplay);
        return n !== null && n < 1e7;
      });
    }
    if (investmentFilter === "₹1 Cr and above") {
      list = list.filter((e) => {
        const n = episodeInvestmentNumber(e.investmentDisplay);
        return n !== null && n >= 1e7;
      });
    }

    if (epFilter !== "All Episodes") {
      const num = epFilter.replace(/\D/g, "");
      list = list.filter((e) => e.epLabel.replace(/\D/g, "") === num);
    }

    if (sortBy === "Highest Rated") {
      list.sort((a, b) => parseFloat(b.ratingLabel) - parseFloat(a.ratingLabel));
    } else if (sortBy === "Latest to Oldest") {
      list.reverse();
    }

    return list;
  }, [query, industryFilter, investmentFilter, sortBy, epFilter]);

  return (
    <main className="bg-white pb-20 pt-24 sm:pt-28">
      {/* Hero */}
      <section className="border-b border-neutral-100 bg-white px-4 pb-14 pt-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-sm font-semibold tracking-wide text-[#D4AF37]">
            Season 01 Recap &amp; Insights
          </p>
          <h1
            className={cn(
              playfair.className,
              "mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[2.75rem] lg:leading-[1.15]"
            )}
          >
            Relive Every Pitch, Every Deal
          </h1>
          <p className="mx-auto mt-5 max-w-[52rem] text-base leading-relaxed text-[#4F4F4F]">
            Watch all 10 episodes of Season 01, featuring 36 passionate entrepreneurs, ₹9.15 Cr in investments,
            and countless inspiring stories of ambition meeting opportunity.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
              >
                <div className={cn("mx-auto mb-3 inline-flex rounded-lg bg-neutral-50 p-2.5", s.iconWrap)}>
                  <Icon className="size-5" strokeWidth={1.85} aria-hidden />
                </div>
                <p className="text-2xl font-bold tabular-nums text-black">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-[#4F4F4F]">{s.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Filter */}
      <section className="bg-[#F9F9F9] px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xl font-bold text-black">Filter Episodes</h2>
          <p className="mt-1 text-sm text-[#4F4F4F]">Search and filter through the season.</p>

          <div className="relative mt-6">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-neutral-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by episode name, industry, or entrepreneur..."
              className={cn(
                "h-12 w-full rounded-xl border-neutral-200 bg-white pl-10 pr-4 text-[#4F4F4F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
                "placeholder:text-neutral-400 focus-visible:border-[#F2994A] focus-visible:ring-[#F2994A]/25"
              )}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <SelectField
              label="Episode"
              value={epFilter}
              onChange={setEpFilter}
              options={[
                "All Episodes",
                ...episodes.map((_, i) => `Episode ${String(i + 1).padStart(2, "0")}`),
              ]}
            />
            <SelectField label="Industry" value={industryFilter} onChange={setIndustryFilter} options={industries} />
            <SelectField
              label="Investment Range"
              value={investmentFilter}
              onChange={(v) => setInvestmentFilter(v as (typeof investmentRanges)[number])}
              options={investmentRanges as unknown as readonly string[]}
            />
            <SelectField
              label="Sort By"
              value={sortBy}
              onChange={(v) => setSortBy(v as (typeof sortOptions)[number])}
              options={sortOptions}
            />
          </div>
        </div>
      </section>

      {/* Episodes grid */}
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1200px] items-end justify-between gap-4">
          <h2 className="text-xl font-bold text-black">All Episodes</h2>
          <p className="text-sm font-medium text-[#4F4F4F]">10 episodes</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEpisodes.map((ep) => {
            const badge = statusBadge(ep.status);
            return (
              <article
                key={ep.epLabel}
                className="flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_12px_40px_-18px_rgba(15,23,42,0.18)]"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={`https://picsum.photos/seed/ld${ep.imageSeed}/800/450`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className="absolute left-3 top-3 z-10">
                    <span className={cn("rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide", badge.className)}>
                      {badge.label}
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-[11px] font-semibold text-white">
                    {ep.durationLabel}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold leading-snug text-black">{ep.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#4F4F4F]">{ep.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#4F4F4F]">
                    <span>{ep.dateLabel}</span>
                    <span className="text-neutral-300">|</span>
                    <span>{ep.epLabel}</span>
                    <span className="text-neutral-300">|</span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3.5 text-[#D4AF37]" fill="#D4AF37" aria-hidden /> {ep.ratingLabel}
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-neutral-100 pt-4 text-xs">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-400">Industry</p>
                      <p className="mt-0.5 font-semibold text-black">{ep.industry}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                        Investment
                      </p>
                      <p
                        className={cn(
                          "mt-0.5 font-semibold",
                          ep.status === "funded" ? "text-[#D4AF37]" : "text-[#4F4F4F]"
                        )}
                      >
                        {ep.investmentDisplay}
                      </p>
                    </div>
                    <div className="flex items-end justify-end">
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#D4AF37] transition-colors hover:text-[#c49b2f]"
                      >
                        Watch Episode
                        <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Exclusive */}
      <section className="bg-neutral-100/90 px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className={cn(playfair.className, "text-2xl font-semibold tracking-tight text-black sm:text-3xl")}>
            Exclusive Content
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#4F4F4F]">
            Deep dive into the behind-the-scenes and expert analysis.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {exclusiveTabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setExclusiveTab(t.key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                  exclusiveTab === t.key
                    ? "bg-[#D4AF37] text-white shadow-sm"
                    : "bg-white text-[#4F4F4F] ring-1 ring-neutral-200 hover:bg-neutral-50"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {exclusiveItems.filter((item) => matchesExclusive(exclusiveTab, item)).map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_10px_35px_-20px_rgba(15,23,42,0.2)]"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={`https://picsum.photos/seed/ex${item.seed}/800/450`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <span className={cn("absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide", item.badgeClass)}>
                    {item.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold leading-snug text-black">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#4F4F4F]">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function episodeInvestmentNumber(s: string): number | null {
  if (!s.includes("₹")) return null;
  const normalized = s.replace(/₹|,/g, "").trim();
  const n = Number.parseInt(normalized, 10);
  return Number.isFinite(n) ? n : null;
}
