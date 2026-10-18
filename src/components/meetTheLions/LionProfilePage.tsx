import * as React from "react";
import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Car,
  ChartNoAxesColumnIncreasing,
  Check,
  Clock,
  Cpu,
  Factory,
  Gauge,
  Leaf,
  Lightbulb,
  Play,
  Share2,
  Sun,
  PenTool,
  Glasses,
  Building2,
  Globe,
  Settings,
  Rocket,
  Users,
  ShoppingBasket,
  ShoppingBag,
  Megaphone,
  Truck,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AppLink } from "@/lib/app-link";

const ORANGE = "#F26522";

type Capability = { icon: LucideIcon; label: string };

type LionProfile = {
  /** Used as the section anchor, e.g. /meet-the-lions#kunal-sharma */
  id: string;
  name: string;
  /** Full role shown under the name. Line breaks become <br />. */
  role: string;
  /** Short role for the sidebar card. */
  shortRole: string;
  date: string;
  readTime: string;
  /** Banner image in /public/lions. A placeholder shows if the file is missing. */
  photo: string;
  /**
   * CSS object-position for small crops (sidebar avatar) so the face stays
   * in frame. The banners put the person on the left or right side.
   */
  photoFocus: string;
  bio: string;
  paragraphs: string[];
  capabilities: Capability[];
  /** Omit when no episode link is available yet; the video card is hidden. */
  video?: { href: string; thumbnail: string; caption: string };
};

/** Builds the Featured Video data from a YouTube video id. */
function youtubeVideo(id: string, name: string) {
  return {
    href: `https://www.youtube.com/watch?v=${id}`,
    thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    caption: `${name} on The Lions' Den`,
  };
}

// Content and images sourced from "Meet The Lions Write up.docx".
const profiles: LionProfile[] = [
  {
    id: "kunal-sharma",
    name: "Kunal Sharma",
    role: "Founder & CEO, Flipspaces",
    shortRole: "Founder & CEO, Flipspaces",
    date: "Oct 06, 2026",
    readTime: "3 Min Reading",
    photo: "/lions/kunal-sharma.png",
    photoFocus: "70% 25%",
    bio: "Kunal Sharma is a serial entrepreneur, angel investor and design-tech visionary. An IIT Bombay alumnus, he founded Flipspaces to make commercial interior design and execution more predictable through technology and innovation.",
    paragraphs: [
      "Kunal Sharma is a serial entrepreneur, angel investor and design-tech visionary transforming the commercial real estate and interior design ecosystem. An alumnus of IIT Bombay, he founded Flipspaces with a vision to revolutionise commercial interior design and execution through technology, innovation and a more predictable approach to building workspaces.",
      "Under his leadership, Flipspaces has developed a technology-driven model that combines design, virtual reality, software and end-to-end execution to simplify the commercial interior design and build process. The company has expanded its presence across India, the United States and the Middle East, helping businesses create functional, high-performance workspaces through a more integrated and transparent approach.",
      "Before founding Flipspaces, Kunal co-founded Mexus Education, an education technology venture that reached over a million students across eight countries. His entrepreneurial journey reflects a strong ability to identify industry inefficiencies, leverage technology to solve real-world problems and build businesses with global ambitions.",
      "Beyond business, Kunal is passionate about innovation, entrepreneurship and supporting emerging founders. His experience across technology, design, business strategy and global expansion brings a valuable perspective to entrepreneurs looking to scale their ventures and build sustainable businesses.",
    ],
    capabilities: [
      { icon: Gauge, label: "Business Strategy" },
      { icon: PenTool, label: "Design Technology" },
      { icon: Glasses, label: "Virtual Reality" },
      { icon: Building2, label: "Commercial Interiors" },
      { icon: Globe, label: "Global Expansion" },
      { icon: Settings, label: "End-to-End Execution" },
      { icon: Rocket, label: "Product Innovation" },
      { icon: Users, label: "Startup Mentorship" },
    ],
    video: youtubeVideo("DtJu-RkgQXU", "Kunal Sharma"),
  },
  {
    id: "dipak-sanghavi",
    name: "Dipak Sanghavi",
    role: "CMD, Nilon’s",
    shortRole: "CMD, Nilon’s",
    date: "Oct 06, 2026",
    readTime: "3 Min Reading",
    photo: "/lions/dipak-sanghavi.png",
    photoFocus: "28% 25%",
    bio: "Dipak Sanghavi is a seasoned entrepreneur who has helped transform Nilon’s into one of India’s recognised processed food brands, combining traditional Indian food preferences with modern manufacturing and brand building.",
    paragraphs: [
      "Dipak Sanghavi is a seasoned entrepreneur and business leader who has played a pivotal role in transforming Nilon’s into one of India’s recognised processed food brands. A Polymer Engineering graduate with a leadership programme from IIM Ahmedabad, he took charge of the family business at the age of 24 and brought a strong focus on strategic growth, consumer preferences and operational excellence.",
      "Under his leadership, Nilon’s evolved from a pickle-focused business into a diversified food solutions company, expanding its presence across multiple product categories and markets. His journey reflects the ability to combine traditional Indian food preferences with modern manufacturing, distribution and brand-building strategies.",
      "With deep experience in FMCG, product innovation, distribution networks and business expansion, Dipak brings a practical understanding of what it takes to build a consumer brand that can scale nationally while remaining relevant to everyday Indian households.",
    ],
    capabilities: [
      { icon: Gauge, label: "Business Strategy" },
      { icon: ShoppingBasket, label: "FMCG" },
      { icon: Megaphone, label: "Brand Building" },
      { icon: Truck, label: "Distribution Networks" },
      { icon: Factory, label: "Modern Manufacturing" },
      { icon: Lightbulb, label: "Product Innovation" },
      { icon: Settings, label: "Operational Excellence" },
      { icon: ChartNoAxesColumnIncreasing, label: "Business Expansion" },
    ],
    video: youtubeVideo("rQ6hrGgeb7s", "Dipak Sanghavi"),
  },
  {
    id: "raman-bhatia",
    name: "Raman Bhatia",
    role: "Founder & Managing Director,\nServotech Renewable Power System Ltd.",
    shortRole: "Founder & Managing Director, Servotech",
    date: "Oct 06, 2026",
    readTime: "3 Min Reading",
    photo: "/lions/raman-bhatia.png",
    photoFocus: "72% 25%",
    bio: "Raman Bhatia is an entrepreneur and clean-energy industry leader. Over more than two decades, he has built Servotech into a publicly listed company spanning renewable energy, solar power and EV charging infrastructure.",
    paragraphs: [
      "Raman Bhatia is an entrepreneur and clean-energy industry leader driving innovation across renewable energy, solar power and electric vehicle charging infrastructure. With more than two decades of business experience, he has built Servotech Renewable Power System Limited into a publicly listed company serving India's evolving energy and mobility needs.",
      "His entrepreneurial journey began in the family’s cable business before he ventured into power solutions and manufacturing. Recognising the growing potential of solar energy and electric mobility, he steered Servotech towards a broader portfolio of renewable energy products, power electronics and EV charging solutions.",
      "Known for his perseverance, strategic vision and ability to identify emerging market opportunities, Raman combines a manufacturing-led business approach with a long-term commitment to sustainable technology. His experience offers valuable insights into building technology-driven businesses in capital-intensive and rapidly evolving industries.",
    ],
    capabilities: [
      { icon: Gauge, label: "Business Strategy" },
      { icon: Leaf, label: "Renewable Energy" },
      { icon: Car, label: "EV Infrastructure" },
      { icon: Cpu, label: "Power Electronics" },
      { icon: Factory, label: "Manufacturing Scale" },
      { icon: Sun, label: "Solar Solutions" },
      { icon: Lightbulb, label: "Product Innovation" },
      { icon: ChartNoAxesColumnIncreasing, label: "Sustainable Growth" },
    ],
    video: youtubeVideo("9LG33pgsOMU", "Raman Bhatia"),
  },
  {
    id: "megha-sabhlok",
    name: "Megha Sabhlok",
    // Role taken from the profile banner image in the doc.
    role: "Co-Founder & COO,\nJust Herbs (acquired by Marico)",
    shortRole: "Co-Founder & COO, Just Herbs",
    date: "Oct 06, 2026",
    readTime: "2 Min Reading",
    photo: "/lions/megha-sabhlok.png",
    photoFocus: "28% 25%",
    bio: "Megha Sabhlok is the Co-Founder and COO of Just Herbs, an Ayurveda-inspired beauty and personal-care brand acquired by Marico. She is a D2C founder and early-stage investor who has backed 5+ start-ups.",
    paragraphs: [
      "Megha Sabhlok is being featured in connection with Just Herbs, a brand operating in India's beauty and personal-care market. Just Herbs is associated with Ayurveda-inspired formulations and a modern approach to skincare, haircare and beauty products.",
      "The brand operates at the intersection of traditional Indian wellness practices and contemporary consumer expectations, where product efficacy, ingredient transparency, customer trust and brand differentiation are central to long-term growth.",
      // TODO: the doc notes that Megha's final profile should describe her
      // individual contribution (leadership, strategy, marketing or business
      // development) once her role and background are confirmed. Add that
      // paragraph here when it's available.
    ],
    capabilities: [
      { icon: ShoppingBag, label: "D2C Brands" },
      { icon: Sparkles, label: "Beauty & Personal Care" },
      { icon: Leaf, label: "Ayurvedic Wellness" },
      { icon: Megaphone, label: "Brand Differentiation" },
      { icon: HeartHandshake, label: "Customer Trust" },
      { icon: Settings, label: "Operations" },
      { icon: Lightbulb, label: "Product Innovation" },
      { icon: Users, label: "Early-Stage Investing" },
    ],
    // No episode link in the doc yet. Add youtubeVideo("<id>", "Megha Sabhlok").
  },
];

/** How many capabilities show before "View All" expands the list. */
const CAPABILITIES_PREVIEW = 8;

/* ------------------------------------------------------------------ */

/** Image that falls back to a navy panel with initials if the file is missing. */
function PhotoOrPlaceholder({
  src,
  alt,
  name,
  className,
  imgClassName,
  imgStyle,
  initialsClassName,
}: {
  src: string;
  alt: string;
  name: string;
  className?: string;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
  initialsClassName?: string;
}) {
  const [failed, setFailed] = React.useState(false);
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("relative overflow-hidden bg-[#0B1B32]", className)}>
      {failed ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(242,101,34,0.25),transparent_55%),linear-gradient(135deg,#13294a,#0B1B32)]"
          role="img"
          aria-label={alt}
        >
          <span
            className={cn(
              "font-playfair font-semibold text-white/80",
              initialsClassName,
            )}
          >
            {initials}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={imgStyle}
          className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}

function CardTitle({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <div>
        <h2 className="font-playfair text-lg font-semibold text-[#0B1B32]">
          {children}
        </h2>
        <span
          className="mt-1 block h-0.5 w-7 rounded-full"
          style={{ backgroundColor: ORANGE }}
          aria-hidden
        />
      </div>
      {action}
    </div>
  );
}

function SidebarCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-gray-200/80 bg-white/80 p-5 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)] backdrop-blur-sm">
      {children}
    </section>
  );
}

function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = React.useState(false);

  const onShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // User cancelled the share sheet or clipboard is unavailable.
    }
  };

  return (
    <button
      type="button"
      onClick={onShare}
      className="inline-flex items-center gap-1.5 rounded transition-colors hover:text-[#F26522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522]/50"
    >
      {copied ? (
        <Check className="size-4" aria-hidden />
      ) : (
        <Share2 className="size-4" aria-hidden />
      )}
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */

export default function LionProfilePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF8F4]">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.06)_0%,rgba(250,248,244,0)_70%)]"
        aria-hidden
      />

      <div className="relative z-10 divide-y divide-gray-200/80">
        {profiles.map((p, i) => (
          <LionProfileSection key={p.id} profile={p} isFirst={i === 0} />
        ))}
      </div>
    </main>
  );
}

function LionProfileSection({
  profile,
  isFirst,
}: {
  profile: LionProfile;
  isFirst: boolean;
}) {
  const [showAll, setShowAll] = React.useState(false);
  const hasMore = profile.capabilities.length > CAPABILITIES_PREVIEW;
  const capabilities = showAll
    ? profile.capabilities
    : profile.capabilities.slice(0, CAPABILITIES_PREVIEW);
  // Only the first lion's name is the page's <h1>.
  const NameTag = isFirst ? "h1" : "h2";

  return (
    <section id={profile.id} className="scroll-mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-8 lg:px-8 lg:py-10 xl:grid-cols-[minmax(0,1fr)_20rem]">
        {/* ---------------- Main column ---------------- */}
        <article>
          <AppLink
            href="/meet-the-lions"
            className="text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: ORANGE }}
          >
            Lions
          </AppLink>

          <NameTag className="mt-2 font-playfair text-4xl font-bold tracking-tight text-[#0B1B32] md:text-5xl">
            {profile.name}
          </NameTag>
          <p className="mt-3 text-base leading-snug text-[#1E3A5F] md:text-lg">
            {profile.role.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" aria-hidden />
              <time>{profile.date}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden />
              {profile.readTime}
            </span>
            <ShareButton title={profile.name} />
          </div>

          <PhotoOrPlaceholder
            src={profile.photo}
            alt={`${profile.name}, ${profile.shortRole}`}
            name={profile.name}
            // The doc banners are ~16:9 with the name baked in, so show them uncropped.
            className="mt-5 aspect-video w-full rounded-xl shadow-[0_20px_50px_-28px_rgba(11,27,50,0.55)]"
            imgClassName="object-center"
            initialsClassName="text-7xl md:text-8xl"
          />

          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-[#1E3A5F] md:text-base">
            {profile.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        {/* ---------------- Sidebar ---------------- */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <SidebarCard>
            <CardTitle>About the Lion</CardTitle>
            <div className="flex items-center gap-4">
              <PhotoOrPlaceholder
                src={profile.photo}
                alt=""
                name={profile.name}
                className="size-[4.5rem] shrink-0 rounded-md"
                imgStyle={{ objectPosition: profile.photoFocus }}
                initialsClassName="text-xl"
              />
              <div className="min-w-0">
                <p className="font-playfair text-lg font-semibold text-[#0B1B32]">
                  {profile.name}
                </p>
                <p className="mt-0.5 text-sm leading-snug text-[#1E3A5F]">
                  {profile.shortRole}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#1E3A5F]">
              {profile.bio}
            </p>
          </SidebarCard>

          <SidebarCard>
            <CardTitle
              action={
                hasMore ? (
                  <button
                    type="button"
                    onClick={() => setShowAll((v) => !v)}
                    aria-expanded={showAll}
                    className="border-b pb-0.5 text-xs font-medium transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522]/50"
                    style={{ color: ORANGE, borderColor: ORANGE }}
                  >
                    {showAll ? "Show Less" : "View All"}
                  </button>
                ) : null
              }
            >
              Capabilities
            </CardTitle>
            <ul className="grid grid-cols-2 gap-2">
              {capabilities.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-2 text-xs text-[#0B1B32] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F26522]/50 hover:shadow-[0_6px_16px_-10px_rgba(242,101,34,0.6)]"
                >
                  <Icon
                    className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: ORANGE }}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="leading-tight">{label}</span>
                </li>
              ))}
            </ul>
          </SidebarCard>

          {profile.video && (
          <SidebarCard>
            <CardTitle>Featured Video</CardTitle>
            <AppLink
              href={profile.video.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch: ${profile.video.caption}`}
              className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#F26522]/60 focus-visible:ring-offset-2"
            >
              <div className="relative overflow-hidden rounded-lg">
                <PhotoOrPlaceholder
                  src={profile.video.thumbnail}
                  alt=""
                  name={profile.name}
                  className="aspect-video w-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  initialsClassName="text-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/25">
                  <span
                    className="flex size-11 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <Play className="ml-0.5 size-4" fill="currentColor" aria-hidden />
                  </span>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500 transition-colors group-hover:text-[#0B1B32]">
                {profile.video.caption}
              </p>
            </AppLink>
          </SidebarCard>
          )}
        </aside>
      </div>
    </section>
  );
}
