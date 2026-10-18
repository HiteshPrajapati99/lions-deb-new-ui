"use client";

import * as React from "react";
import {
  Building2,
  ChevronDown,
  IndianRupee,
  MapPin,
  PenLine,
  Search,
  Send,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const heroStats = [
  { value: "6 Success Stories", label: "Total Founders", icon: Users, iconWrap: "text-[#D4AF37]" },
  {
    value: "₹4.7 Cr+ Invested Capital",
    label: "Total Funding",
    icon: IndianRupee,
    iconWrap: "text-[#D4AF37]",
  },
  { value: "460% Revenue Increase", label: "Avg Growth", icon: TrendingUp, iconWrap: "text-[#F2994A]" },
  { value: "92% Business Growth", label: "Success Rate", icon: Trophy, iconWrap: "text-[#D4AF37]" },
] as const;

type Founder = {
  name: string;
  company: string;
  quote: string;
  industry: string;
  location: string;
  funding: string;
  revenue: string;
  teamSize: string;
  growth: string;
  imageSeed: number;
};

const founders: Founder[] = [
  {
    name: "Priya Sharma",
    company: "EcoWrap Solutions",
    quote: "Sustainable packaging for a greener tomorrow",
    industry: "E-commerce",
    location: "Mumbai",
    funding: "₹50,00,000",
    revenue: "₹2.5 Cr/year",
    teamSize: "45 employees",
    growth: "400% Growth",
    imageSeed: 401,
  },
  {
    name: "Rajesh Kumar",
    company: "HealthTech India",
    quote: "Making quality healthcare accessible to every Indian",
    industry: "Healthcare",
    location: "Bangalore",
    funding: "₹75,00,000",
    revenue: "₹4.2 Cr/year",
    teamSize: "68 employees",
    growth: "550% Growth",
    imageSeed: 402,
  },
  {
    name: "Ananya Reddy",
    company: "EduLearn Platform",
    quote: "Personalized learning for every student's unique journey",
    industry: "Education",
    location: "Hyderabad",
    funding: "₹60,00,000",
    revenue: "₹3.8 Cr/year",
    teamSize: "52 employees",
    growth: "460% Growth",
    imageSeed: 403,
  },
  {
    name: "Vikram Singh",
    company: "FarmFresh Connect",
    quote: "Connecting farmers directly to consumers for fair prices",
    industry: "Agriculture",
    location: "Pune",
    funding: "₹45,00,000",
    revenue: "₹2.1 Cr/year",
    teamSize: "38 employees",
    growth: "380% Growth",
    imageSeed: 404,
  },
  {
    name: "Meera Patel",
    company: "StyleCraft Boutique",
    quote: "Reviving traditional Indian crafts with contemporary designs",
    industry: "Fashion",
    location: "Ahmedabad",
    funding: "₹40,00,000",
    revenue: "₹1.8 Cr/year",
    teamSize: "32 employees",
    growth: "360% Growth",
    imageSeed: 405,
  },
  {
    name: "Arjun Malhotra",
    company: "PaySecure Fintech",
    quote: "Secure digital payments for small businesses",
    industry: "Fintech",
    location: "Delhi",
    funding: "₹1,00,00,000",
    revenue: "₹6.5 Cr/year",
    teamSize: "85 employees",
    growth: "620% Growth",
    imageSeed: 406,
  },
];

const industryOptions = ["All Industries", ...Array.from(new Set(founders.map((f) => f.industry)))] as const;
const locationOptions = ["All Locations", ...Array.from(new Set(founders.map((f) => f.location)))] as const;

function IconSelect({
  icon: Icon,
  value,
  onChange,
  options,
  ariaLabel,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  ariaLabel: string;
}) {
  const id = React.useId();
  return (
    <div className="relative">
      <Icon
        className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-neutral-400"
        aria-hidden
      />
      <select
        id={id}
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-12 w-full cursor-pointer appearance-none rounded-xl border border-neutral-200 bg-white py-0 pl-10 pr-10 text-sm text-[#4F4F4F]",
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
  );
}

export default function FounderStoriesShowcase() {
  const [query, setQuery] = React.useState("");
  const [industry, setIndustry] = React.useState<string>("All Industries");
  const [location, setLocation] = React.useState<string>("All Locations");

  const filtered = React.useMemo(() => {
    let list = [...founders];
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.company.toLowerCase().includes(q) ||
          f.quote.toLowerCase().includes(q)
      );
    }
    if (industry !== "All Industries") {
      list = list.filter((f) => f.industry === industry);
    }
    if (location !== "All Locations") {
      list = list.filter((f) => f.location === location);
    }
    return list;
  }, [query, industry, location]);

  return (
    <main className="bg-white pb-20 pt-24 sm:pt-28">
      <section className="border-b border-neutral-100 bg-white px-4 pb-14 pt-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <h1
            className={cn(
              "font-playfair text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[2.75rem] lg:leading-[1.15]",
            )}
          >
            Founder Success Stories
          </h1>
          <p className="mx-auto mt-5 max-w-[52rem] text-base leading-relaxed text-[#4F4F4F]">
            Discover the inspiring journeys of entrepreneurs who transformed their dreams into thriving businesses
            with Lions Den.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {heroStats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
              >
                <div className={cn("mx-auto mb-3 inline-flex rounded-lg bg-neutral-50 p-2.5", s.iconWrap)}>
                  <Icon className="size-5" strokeWidth={1.85} aria-hidden />
                </div>
                <p className="text-xl font-bold tabular-nums leading-tight text-black sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-[#4F4F4F]">{s.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F9F9F9] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative md:col-span-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-neutral-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or business..."
              aria-label="Search founders"
              className={cn(
                "h-12 w-full rounded-xl border-neutral-200 bg-white pl-10 pr-4 text-[#4F4F4F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
                "placeholder:text-neutral-400 focus-visible:border-[#F2994A] focus-visible:ring-[#F2994A]/25"
              )}
            />
          </div>
          <IconSelect
            icon={Building2}
            value={industry}
            onChange={setIndustry}
            options={industryOptions}
            ariaLabel="Filter by industry"
          />
          <IconSelect
            icon={MapPin}
            value={location}
            onChange={setLocation}
            options={locationOptions}
            ariaLabel="Filter by location"
          />
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <article
              key={f.name}
              className="relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_12px_40px_-18px_rgba(15,23,42,0.18)]"
            >
              <span className="absolute right-3 top-3 z-10 rounded-md bg-[#D4AF37] px-2.5 py-1 text-[11px] font-bold text-[#1a1a1a]">
                Season 01
              </span>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={`https://picsum.photos/seed/ldfounder${f.imageSeed}/800/600`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold text-black">{f.name}</h2>
                <p className="mt-1 text-sm font-semibold text-[#D4AF37]">{f.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4F4F4F]">&ldquo;{f.quote}&rdquo;</p>
                <dl className="mt-4 grid gap-2 text-sm text-[#4F4F4F]">
                  <div className="flex justify-between gap-2 border-b border-neutral-100 pb-2">
                    <dt className="text-neutral-500">Industry</dt>
                    <dd className="font-semibold text-black">{f.industry}</dd>
                  </div>
                  <div className="flex justify-between gap-2 border-b border-neutral-100 pb-2">
                    <dt className="text-neutral-500">Location</dt>
                    <dd className="font-semibold text-black">{f.location}</dd>
                  </div>
                  <div className="flex justify-between gap-2 border-b border-neutral-100 pb-2">
                    <dt className="text-neutral-500">Funding</dt>
                    <dd className="font-semibold text-black">{f.funding}</dd>
                  </div>
                  <div className="flex justify-between gap-2 border-b border-neutral-100 pb-2">
                    <dt className="text-neutral-500">Revenue</dt>
                    <dd className="font-semibold text-black">{f.revenue}</dd>
                  </div>
                  <div className="flex justify-between gap-2 border-b border-neutral-100 pb-2">
                    <dt className="text-neutral-500">Team Size</dt>
                    <dd className="font-semibold text-black">{f.teamSize}</dd>
                  </div>
                  <div className="flex justify-between gap-2 pt-1">
                    <dt className="text-neutral-500">Success Metric</dt>
                    <dd className="font-bold text-[#F2994A]">{f.growth}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  className={cn(
                    "mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#D4AF37] px-4 py-3 text-sm font-bold text-[#1a1a1a]",
                    "transition-colors hover:bg-[#c9a432] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50"
                  )}
                >
                  View Full Journey →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[800px] rounded-2xl border border-neutral-200 bg-[#F9F9F9] p-8 sm:p-10">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-5 inline-flex rounded-xl bg-[#D4AF37]/15 p-3 text-[#D4AF37]">
              <PenLine className="size-7" strokeWidth={1.75} aria-hidden />
            </div>
            <h2 className={cn("font-playfair text-2xl font-semibold text-black sm:text-3xl")}>
              Share Your Success Story
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4F4F4F] sm:text-base">
              Inspire the next generation of entrepreneurs by sharing your journey with the Lions Den community
            </p>
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-1">
                <label htmlFor="founder-story-name" className="text-sm font-semibold text-black">
                  Your Name <span className="text-[#F2994A]">*</span>
                </label>
                <Input
                  id="founder-story-name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className={cn(
                    "h-11 rounded-xl border-neutral-200 bg-white px-3.5 text-[#4F4F4F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
                    "placeholder:text-neutral-400 focus-visible:border-[#F2994A] focus-visible:ring-[#F2994A]/25"
                  )}
                />
              </div>
              <div className="space-y-2 sm:col-span-1">
                <label htmlFor="founder-story-email" className="text-sm font-semibold text-black">
                  Email Address <span className="text-[#F2994A]">*</span>
                </label>
                <Input
                  id="founder-story-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className={cn(
                    "h-11 rounded-xl border-neutral-200 bg-white px-3.5 text-[#4F4F4F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
                    "placeholder:text-neutral-400 focus-visible:border-[#F2994A] focus-visible:ring-[#F2994A]/25"
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="founder-story-business" className="text-sm font-semibold text-black">
                Business Name <span className="text-[#F2994A]">*</span>
              </label>
              <Input
                id="founder-story-business"
                name="business"
                required
                placeholder="Your company or startup name"
                className={cn(
                  "h-11 rounded-xl border-neutral-200 bg-white px-3.5 text-[#4F4F4F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
                  "placeholder:text-neutral-400 focus-visible:border-[#F2994A] focus-visible:ring-[#F2994A]/25"
                )}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="founder-story-body" className="text-sm font-semibold text-black">
                Your Success Story <span className="text-[#F2994A]">*</span>
              </label>
              <textarea
                id="founder-story-body"
                name="story"
                required
                rows={6}
                placeholder="Share your entrepreneurial journey, challenges overcome, and achievements..."
                className={cn(
                  "w-full resize-y rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-sm text-[#4F4F4F] shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
                  "placeholder:text-neutral-400 outline-none transition-colors focus-visible:border-[#F2994A] focus-visible:ring-2 focus-visible:ring-[#F2994A]/25"
                )}
              />
              <p className="text-xs text-neutral-500">Minimum 100 words recommended for a compelling story</p>
            </div>
            <button
              type="submit"
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-4 text-base font-bold text-[#1a1a1a] sm:w-auto",
                "transition-colors hover:bg-[#c9a432] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50"
              )}
            >
              <Send className="size-5" aria-hidden />
              Submit Your Story
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
