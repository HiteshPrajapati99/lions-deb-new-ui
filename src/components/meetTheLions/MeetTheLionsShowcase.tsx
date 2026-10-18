"use client";

import type { ReactNode } from "react";
// import {
//   BarChart3,
//   Briefcase,
//   IndianRupee,
//   PanelTop,
//   Users,
// } from "lucide-react";
import { cn } from "@/lib/utils";

import lion1 from "@/assets/meet-lions/1.png";
import lion2 from "@/assets/meet-lions/2..png";
import lion3 from "@/assets/meet-lions/3.png";
import lion4 from "@/assets/meet-lions/4.png";
import lion5 from "@/assets/meet-lions/5.png";

const GOLD = "#D4AF37";

/** Copy from src/assets/meet-lions/content,txt — Title, Sub Heading, LOGO, Description only. */
const meetTheLionsContent = [
  {
    title: "Dipak Sanghavi",
    subHeading: "Managing Director and CEO , Nilon's India",
    logoSrc: lion1,
    description: `From 1962, Nilon's Enterprises has come a long way, to be India's fastest growing Processed Food Manufacturer; under the leadership and guidance of a young, dynamic Managing Director and CEO, Mr. Dipak Sanghavi.
Mr. Sanghavi - a Polymer Engineer with a Leadership course from IIM-A took the reins of the company at the mere age of 24 yrs. With his vision, dedication, focus and sharp strategies, he along with his team, led the company from Rs.8 Cr to more than Rs.450 Cr within a decade and a half.
Under his guidance, Nilon's has built itself from a pickle company to a food solution company and is presently placed between Number 1 to 3 on a national scale in almost 8 categories. His passion for food has made him deliver the finest recipes to the consumers not just in India but across the global diaspora. The company now boasts of three large state-of-the-art manufacturing plants on a global scale.
Today, Nilon's has become a professionally driven, data-centric, global scale business, yet carefully bound by the spirit of entrepreneurship along with its spirit to deliver love and passion along with its products.
He strongly believes that "Don't enter the business with the thought that you own it. Learn from those around you. You can turn your ambitions into reality only if you take people along. The most important ingredient for a successful business is to put the right people on top. Once you have that, the rest falls into place."`,
  },
  {
    title: "Dr. Poonam Gupta OBE",
    subHeading: "Founder & CEO, PG Paper Limited, UK.",
    logoSrc: lion2,
    description: `Dr Poonam Gupta OBE is a leading UK entrepreneur and CEO of one of Scotland's most successful export businesses, PG Paper. Her portfolio of companies now has an annual turnover of circa $100 million, operating in over 60 countries, with offices in India, the US, China, Sweden, Turkey, and the United Arab Emirates.
With a career-long interest in strengthening and enabling greater collaboration between Scotland and India; Poonam led a successful Scottish Chambers Task Force to India in 2019. She has been recognised as one of the '100 Most Influential in UK-India Relations' by India Inc Group. Poonam is currently Vice President of the Scottish Chambers of Commerce and Chair of the Manufacturing Sector Committee of the FICCI UK Council, the largest and oldest apex business organisation in India.
Poonam's entrepreneurial and business efforts have also been acknowledged by her peer group and the industry at large; for which she has received several business awards, most recently Ernst & Young's 'Entrepreneur of the Year' in 2019. In recognition for her service to charity and business, she was awarded the Order of the British Empire (OBE) in the Queen's New Year Honours List in 2016.
Poonam is a benefactor of a number of local, national and international charities; with a particular focus on woman-centric issues, disadvantaged children, gender equality and animal conservation. Since January 2021, Poonam has also been an Ambassador for Young Enterprise Scotland.`,
  },
  {
    title: "Gaurav VK Singhvi",
    subHeading: "Founder, GS Ventures",
    logoSrc: lion3,
    description: `Founded by serial entrepreneur and investor Gaurav VK Singhvi, Gaurav Singhvi Ventures emerged from two decades of business networking expertise since 2004.
Beginning his investment journey in 2016 with his first investment in DSYH, Gaurav identified the need to democratise entrepreneurship across India's untapped markets.
Operating as a family office with a sector-agnostic approach, we follow our "From Seed to Success" philosophy. Beyond investing, we've built a complete ecosystem, including co-working spaces, financial advisory services, and a comprehensive business support infrastructure.
Based in Surat with pan-India reach, we support entrepreneurs "from every corner of India," combining investment expertise with hands-on mentorship for sustainable startup success.`,
  },
  {
    title: "Mr. Jay Ukani",
    subHeading: "MD, Ban Labs Pvt Ltd",
    logoSrc: lion4,
    description: `Jay Ukani is the Director and Owner of Ban Labs Private Limited, a prominent Indian pharmaceutical and consumer goods company. Based in Rajkot, Gujarat, he is recognized as a visionary entrepreneur and venture capitalist who has significantly expanded his family's 60-year-old legacy

Professional Role at Ban Labs
● Leadership: Jay joined the company as a Director in 2018 and has since diversified its interests beyond traditional pharmaceuticals into sectors like energy, petroleum, fragrance, and textiles.
● Global Presence: Under his leadership, Ban Labs now impacts lives in over 40 countries, maintaining strict quality standards that blend tradition with science.
● Venture Capital & Investments
Beyond his corporate role, Jay Ukani is a prolific investor:
● Startup Portfolio: He has invested in over 170 startups across 5 continents and 23 countries.`,
  },
  {
    title: "Vinita Surana",
    subHeading: "Executive Director, Surana Group of Companies",
    logoSrc: lion5,
    description: `Vinita Surana is the Executive Director of the Surana Group of Companies, a diversified business empire headquartered in Hyderabad with interests in solar energy, real estate, and copper. She is notably the first woman to take an active board seat in the Surana Group, representing a significant shift in the leadership of the family-run enterprise.
Professional Roles & Ventures
Beyond her leadership at the Surana Group, she is a prominent figure in the Indian startup and investment ecosystem:
Founder of VinSpace: A collaborative co-working hub for startups located in the heart of Hyderabad, designed to foster innovation and provide mentorship.
● Vinvinsituation Venture Fund: As the founding partner, she actively invests in and accelerates the growth of innovative startups.`,
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-[0.2em]"
      style={{ color: GOLD }}
    >
      {children}
    </p>
  );
}

type LionItem = (typeof meetTheLionsContent)[number];

function LionSpotlightCard({ item, index }: { item: LionItem; index: number }) {
  const isEven = index % 2 === 0;
  const order = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.12] shadow-[0_28px_80px_-32px_rgba(0,0,0,0.75)] transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_36px_90px_-28px_rgba(0,0,0,0.82)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/55 to-transparent" />
      <div className="grid lg:grid-cols-12">
        <div
          className={cn(
            "relative flex min-h-[260px] items-center justify-center bg-gradient-to-br from-[#1a2d45] via-[#102038] to-[#0a192f] px-8 py-12 sm:min-h-[300px] sm:px-10 sm:py-14 lg:col-span-5",
            "border-white/10",
            isEven
              ? "border-b lg:border-b-0 lg:border-r"
              : "border-b lg:border-b-0 lg:border-l lg:order-2",
          )}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, #d4af37 0%, transparent 45%), radial-gradient(circle at 80% 70%, #3b82f6 0%, transparent 40%)",
            }}
          />
          <div className="relative w-full max-w-[20rem] sm:max-w-[22rem]">
            <div
              className={cn(
                "rounded-2xl border border-[#d4af37]/25 bg-[#050a14]/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[2px]",
                "transition-[border-color,box-shadow] duration-500 ease-out group-hover:border-[#d4af37]/45 group-hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.15)]",
              )}
            >
              <img
                src={item.logoSrc}
                alt={`${item.title}`}
                className="mx-auto  max-h-[min(320px,52vw)] w-full object-contain object-center transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative bg-white px-6 py-10 sm:px-9 sm:py-11 lg:col-span-7 lg:py-14 lg:pl-11 lg:pr-14",
            !isEven && "lg:order-1",
          )}
        >
          <div
            aria-hidden
            className="absolute left-0 top-12 hidden w-[3px] rounded-full lg:block"
            style={{
              height: "6.5rem",
              background: `linear-gradient(180deg, ${GOLD}, rgba(212,175,55,0.25))`,
            }}
          />

          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex min-h-[2.25rem] min-w-[2.75rem] items-center justify-center rounded-lg border border-neutral-200/90 bg-neutral-50 px-2.5 font-mono text-sm font-bold tabular-nums text-neutral-800"
              style={{ boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.06)" }}
            >
              {order}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400">
              Panel member
            </span>
          </div>

          <h3
            className={cn(
              "font-playfair mt-5 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl",
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "mt-2 max-w-xl text-base font-semibold leading-snug sm:text-lg",
            )}
            style={{ color: GOLD }}
          >
            {item.subHeading}
          </p>

          <div className="mt-8 space-y-4 border-t border-neutral-100 pt-8 text-sm leading-[1.7] text-neutral-600 sm:text-[15px]">
            {item.description.split("\n").map((paragraph, pi) =>
              paragraph.trim() ? (
                <p
                  key={`${item.title}-${pi}`}
                  className="whitespace-pre-wrap first:text-[15px] first:leading-relaxed first:text-neutral-700 sm:first:text-base"
                >
                  {paragraph}
                </p>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MeetTheLionsShowcase() {
  return (
    <>
      {/* <section
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
              "font-playfair mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl",
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
      </section> */}

      <section className="mt-10 relative overflow-hidden border-t border-white/[0.08] pb-[4.75rem] pt-14 sm:pb-28 sm:pt-[4.75rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #050a14 0%, #0a192f 42%, #0d1b2e 72%, #0a1524 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 left-[10%] h-72 w-72 rounded-full bg-[#d4af37]/[0.07] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-[-5%] h-80 w-80 rounded-full bg-[#1e3a5f]/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[46rem] text-center">
            <SectionLabel>Investment panel</SectionLabel>
            <h2
              className={cn(
                "font-playfair mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl",
              )}
            >
              The lions behind the den Season 01
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Founders, operators, and investors who bring capital, networks,
              and decades of building real businesses to every conversation.
            </p>
            <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          <div className="mx-auto mt-14 flex max-w-[1100px] flex-col gap-12 sm:mt-16 sm:gap-14 lg:gap-16">
            {meetTheLionsContent.map((item, index) => (
              <LionSpotlightCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
