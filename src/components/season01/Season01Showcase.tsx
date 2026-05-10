"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import {
  ArrowRight,
  Coins,
  Eye,
  Layers,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const stats = [
  { value: "13", label: "Episodes", icon: Layers, iconWrap: "text-[#D4AF37]" },
  {
    value: "37",
    label: "Total Pitches",
    icon: ShoppingBag,
    iconWrap: "text-[#F2994A]",
  },
  {
    value: "58%",
    label: "Success Rate",
    icon: TrendingUp,
    iconWrap: "text-emerald-600",
  },
  {
    value: "₹13.65 Cr",
    label: "Total Investment",
    icon: Coins,
    iconWrap: "text-[#D4AF37]",
  },
  {
    value: "20M",
    label: "Total Views",
    icon: Eye,
    iconWrap: "text-neutral-500",
  },
] as const;

const WAVES_WATCH_URL = "https://www.wavespb.com/links/SH15472JGP";

type EpisodeItem = {
  title: string;
  description: string;
  epLabel: string;
  /** Remote placeholder thumbnail (picsum) */
  imageSeed: number;
  /** When set, uses a static asset under `/public` instead of picsum */
  imageSrc?: string;
};

function episodeThumbnailSrc(ep: EpisodeItem) {
  return ep.imageSrc ?? `https://picsum.photos/seed/ld${ep.imageSeed}/800/450`;
}

/** Content sourced from `episode.txt` */
const episodes: EpisodeItem[] = [
  {
    epLabel: "Ep 01",
    title: "The First Roar: Startups, SuperAngels & Sustainability",
    description:
      "The premiere episode introduces the five Lions — top business leaders from across India and the UK — and unveils the show's unique format featuring SuperAngels investing in smaller ticket sizes (₹1–5 lakhs). Two innovative startups pitch: Tractor Wala, revolutionizing second-hand tractor access for farmers in Gwalior, and Strawonderz, offering eco-friendly, affordable alternatives to plastic straws made from rice and reed.",
    imageSeed: 201,
  },
  {
    epLabel: "Ep 02",
    title: "Driven by Purpose: Delivering Change, Empowering Minds",
    description:
      "Episode 2 features two powerful startups solving real-world problems. Shippin, a tech-first last-mile logistics company, showcases its rapid growth and success across Eastern India, with over 18 lakh deliveries and major clients like Amazon and Reliance Jiomart. GAV Square Edu. Healthcare, founded by psychologist Manasi who lives with a learning disability herself, presents a pioneering digital platform and app to identify and support children with learning disabilities like dyslexia, aiming to bridge the education gap through multisensory, gamified learning and therapy.",
    imageSeed: 202,
  },
  {
    epLabel: "Ep 03",
    title: "Smart Play & Smart Waste: A Greener, Brighter Bharat",
    description:
      "Episode 3 features two startups tackling educational and environmental gaps. MakenBreak offers DIY STEM building toys that bridge classroom learning with real-world engineering, promote family bonding, and prepare kids for future careers through hands-on play. Scrapji simplifies waste recycling by providing doorstep scrap pickup at fair market rates, using tech to make sustainability seamless and accessible for every household.",
    imageSeed: 203,
  },
  {
    epLabel: "Ep 04",
    title: "Stories & Simulations: The Future Goes Digital",
    description:
      "Episode 4 brings two innovative digital ventures to the Den. Monkey Science presents cutting-edge simulation technology, using mixed reality and holography to revolutionize experiential learning across industries. Writeroo showcases a fast-growing global platform for readers and writers, offering a freemium model, monetization for creators, and a thriving literary community in over 75 countries.",
    imageSeed: 204,
  },
  {
    epLabel: "Ep 05",
    title: "Sugar & Surveillance: Innovation for Taste and Tech",
    description:
      "Episode 5 showcases two dynamic ventures. Yumeatd's Sweet Delights Confectionery brings indulgence to the table with its premium chocolates, wafer rolls, and candies, backed by state-of-the-art production, retail presence, and a strong R&D pipeline. SIS (Smart Investigation System) introduces a breakthrough tech tool for cybersecurity and law enforcement, automating data analysis and cutting investigation time by 80% through its powerful, intuitive dashboard.",
    imageSeed: 205,
  },
  {
    epLabel: "Ep 06",
    title: "Protect & Preserve: Powering Safety and Spirituality",
    description:
      "Episode 6 presents two purpose-driven startups blending safety and spirituality. Shakti Wearables, India's first street-smart personal defense company, introduces a cutting-edge wearable for women's safety, combining electrocution capability with real-time SOS alerts. Easykiya, India's first and fastest-growing online daily subscription platform for fresh farm puja flowers and garlands, offers doorstep delivery through a strong local sourcing and logistics network—making daily rituals effortless for homes and offices while preserving cultural traditions.",
    imageSeed: 206,
  },
  {
    epLabel: "Ep 07",
    title: "Code & Care: Innovating Health and Learning",
    description:
      "Episode 7 features two transformative startups using technology to uplift lives. SETV introduces its AI-driven healthcare platform, SETV.W AI, aiming to redefine global medical care by minimizing diagnostic errors, enabling early detection, and providing real-time, personalized treatment—even in remote areas. On the education front, NAVKRITI presents a revolutionary peer-learning app designed by a duo of tech experts. With features like quizzes, games, video content, a translator, and a custom search engine, it turns idle screen time into engaging, productive learning experiences. Together, these ventures demonstrate how innovation in health and education can create meaningful impact at scale.",
    imageSeed: 207,
  },
  {
    epLabel: "Ep 08",
    title: "Sweet Traditions, Smart Innovations",
    description:
      "Episode 8 presents two ventures blending tradition with innovation. Honeyman, founded by the third-generation of a beekeeping legacy, is transforming how India consumes honey with the world's largest range of bee-based products—from FMCG items and wellness supplements to café experiences. Their model not only promotes healthier alternatives but also supports sustainable beekeeping and rural livelihoods. On the other hand, Epanipurii Kartz reinvents India's most loved street snack with a high-tech twist—offering a touchless Panipuri vending experience via mobile app and e-nose technology, ensuring hygiene, real-time ingredient quality checks, and a unique flavor experience. Together, these startups represent the fusion of heritage and cutting-edge technology for a healthier, safer tomorrow.",
    imageSeed: 208,
  },
  {
    epLabel: "Ep 09",
    title: "Smart Audits and Sustainable Packaging",
    description:
      "Episode 9 features two forward-thinking startups focused on technology and sustainability. Infilytics Private Limited's iAudit is an AI-powered analytics automation platform that helps companies accelerate their journey from data to decisions by automating audits, compliance, and financial controls. Trusted by major organizations like RBI and KPMG, iAudit is redefining how businesses handle complex financial processes. Meanwhile, Paprap by TheFuture.Green pioneers eco-friendly innovations in packaging by offering sustainable, upcycled alternatives to paper and plastic products. From office stationery to food packaging, Paprap's creative solutions address the growing demand for responsible consumer products, promoting a greener planet through smart design and recycling efforts.",
    imageSeed: 209,
  },
  {
    epLabel: "Ep 10",
    title: "Smart Inspections, Fitness Innovation & Better Travel Comfort",
    description:
      'Episode 10 introduces three startups transforming their industries with innovative solutions. Checkkardo.com offers expert new car pre-delivery inspection (PDI) and used car inspection services, providing detailed reports to help customers make informed buying decisions. Gymshim WorkoutPlus Kiosk (WPK) by Fitlyberty delivers interactive, AI-powered fitness training solutions with gamification features through touchscreen kiosks, designed for commercial, residential, and corporate gyms. Their gym management software is trusted by over 1500 gyms nationwide. Addressing a critical need in public sanitation, Lootel launched the "Take a Break" concept to improve transit experiences by providing premium facilities such as restrooms with showers, lockers, and a cafeteria. Operating on a pay-and-redeem system, Lootel\'s outlets are making travel more comfortable and hygienic for millions across India.',
    imageSeed: 210,
  },
  {
    epLabel: "Ep 11",
    title: "Innovating Agriculture & Empowering Street Vendors",
    description:
      "Episode 11 features two startups revolutionizing traditional sectors with cutting-edge solutions. AVN Agrobharat Pvt Ltd excels in agriculture, animal husbandry, and dairy technology, offering wholesale trading, breeding, dairy farm setup, and product processing. Their focus on innovation and consultancy helps farmers and businesses improve productivity and quality. Meanwhile, Heva Electric introduces the ElectroCart, a special-purpose electric vehicle designed specifically for street vendors. This eco-friendly, motorized cart enhances vendor productivity and customer interaction by allowing vendors to serve while seated, reducing physical strain. With a durable design and sustainable focus, Heva Electric aims to scale their impact across metro cities, transforming urban mobility for small businesses.",
    imageSeed: 211,
  },
  {
    epLabel: "Ep 12",
    title: "Plugged In and Powered Up: EVs and Early Learning",
    description:
      "Episode 12 introduces two forward-thinking startups shaping different aspects of the future. Nikol EV is building one of India's largest EV charging networks, manufacturing chargers and setting up fast charging stations. Their mobile app helps EV owners easily locate, book, pay, and charge at over 3,000 chargers, making electric vehicle adoption more accessible. On the education front, Respond Right Smart School offers the world's first in-school program focused on right brain development through engaging, multidisciplinary activities. Designed for children aged 2 to 8, the program promotes balanced intellectual and emotional growth using interactive lessons, technology integration, and teacher training. Compliant with NEP 2020, it aims to unlock each child's full potential for lifelong success.",
    imageSeed: 212,
  },
  {
    epLabel: "Ep 13",
    title: "Property, Sustainability & Coffee: Innovations Brewing",
    description:
      "Episode 13 features three promising ventures transforming their industries. Rentofy offers a comprehensive property management platform that simplifies rental listings, maintenance, and financial tracking, helping homeowners and real estate investors manage their properties effortlessly. Rcube Recycling innovates in environmental sustainability by recycling used printer toner cartridges and converting the waste toner powder into reusable material, reducing dependency on imported toners. Kettleberry Coffee, a homegrown flavored instant coffee brand launched in 2022, combines quality and convenience through its quick-service restaurants and cafes, aiming to expand its footprint as a leading coffee takeaway chain.",
    imageSeed: 213,
    imageSrc: "/season-01/ep-13.png",
  },
];

export default function Season01Showcase() {
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
              "mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[2.75rem] lg:leading-[1.15]",
            )}
          >
            Relive Every Pitch, Every Deal
          </h1>
          <p className="mx-auto mt-5 max-w-[52rem] text-base leading-relaxed text-[#4F4F4F]">
            Watch all 13 episodes of Season 01, featuring passionate
            entrepreneurs and countless inspiring stories of ambition meeting
            opportunity.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
              >
                <div
                  className={cn(
                    "mx-auto mb-3 inline-flex rounded-lg bg-neutral-50 p-2.5",
                    s.iconWrap,
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.85} aria-hidden />
                </div>
                <p className="text-2xl font-bold tabular-nums text-black">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium text-[#4F4F4F]">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Episodes grid */}
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1200px] items-end justify-between gap-4">
          <h2 className="text-xl font-bold text-black">All Episodes</h2>
          <p className="text-sm font-medium text-[#4F4F4F]">13 episodes</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep) => (
            <article
              key={ep.epLabel}
              className="flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_12px_40px_-18px_rgba(15,23,42,0.18)]"
            >
              <a
                href={WAVES_WATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video w-full overflow-hidden bg-neutral-100 outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <Image
                  src={episodeThumbnailSrc(ep)}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
                <span className="absolute left-3 top-3 rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {ep.epLabel}
                </span>
              </a>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold leading-snug text-black">
                  {ep.title}
                </h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[#4F4F4F]">
                  {ep.description}
                </p>
                <a
                  href={WAVES_WATCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4AF37] hover:underline"
                >
                  Watch on Waves
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
