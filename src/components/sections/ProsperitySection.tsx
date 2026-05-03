import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

interface StoryCardProps {
  name: string;
  titleLine: string;
  image: string;
  date: string;
  excerpt: string;
  href: string;
}

function StoryCard({
  name,
  titleLine,
  image,
  date,
  excerpt,
  href,
}: StoryCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg rounded-[10px] p-0">
        <div className="relative aspect-16/7 max-h-[320px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-base font-bold text-white">{name}</p>
            <p className="text-xs font-semibold text-[#C5A059]">{titleLine}</p>
          </div>
        </div>
        <div className="space-y-3 p-4 pt-0">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            {date}
          </p>
          <p className="text-xs leading-relaxed text-gray-600 line-clamp-4">
            {excerpt}
          </p>
          <div className="flex items-center text-[11px] font-bold uppercase tracking-wide text-[#F26522]">
            Read Success Story{" "}
            <span className="ml-1 text-base leading-none transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

const stories: StoryCardProps[] = [
  {
    name: "Priya Sharma",
    titleLine: "Founder of TechNova",
    image: "/show-2.png",
    date: "March 2024",
    excerpt:
      "The Lions fought over our pitch-deck rewrite. One year later, we scaled across three new markets with the mentorship that came with the deal.",
    href: "/success-stories/priya-sharma",
  },
  {
    name: "Marcus Williams",
    titleLine: "CEO, GreenSpark Foods",
    image: "/show-3.png",
    date: "January 2024",
    excerpt:
      "What started as a nervous walk to the floor became a partnership that doubled our distribution network and sharpened our brand overnight.",
    href: "/success-stories/marcus-williams",
  },
  {
    name: "Sarah Thompson",
    titleLine: "Co-Founder, Loom & Weave",
    image: "/show-4.png",
    date: "November 2023",
    excerpt:
      "We returned with better numbers, a stronger story, and a team that believed — and the Den met us with the conviction we needed to grow.",
    href: "/success-stories/sarah-thompson",
  },
];

export default function ProsperitySection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className={cn(
              playfair.className,
              "mb-3 text-3xl font-semibold tracking-tight text-[#0B1B32] sm:text-4xl",
            )}
          >
            From Pitch to Prosperity
          </h2>
          <p className="mx-auto max-w-lg text-sm text-gray-500">
            Real stories from real entrepreneurs who have transformed their
            businesses.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.href} {...story} />
          ))}
        </div>

        <div className="text-center">
          <Button className="h-11 rounded-[10px] bg-[#C5A059] px-8 text-sm font-bold text-white hover:bg-[#b08d4e]">
            <Link href="/success-stories">Read More Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
