import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import { Lightbulb, GraduationCap, Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

interface ShowCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  href: string;
  icon: LucideIcon;
}

function ShowCard({
  title,
  description,
  image,
  badge,
  href,
  icon: Icon,
}: ShowCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden border border-gray-100/80 bg-white shadow-md transition-all duration-300 hover:shadow-lg rounded-[10px] p-0">
        <div className="relative aspect-16/7 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute top-3 right-3">
            <Badge className="rounded-full border-0 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-900 shadow-sm">
              {badge}
            </Badge>
          </div>
        </div>
        <CardContent className="flex flex-col gap-3 p-4 pt-0">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C5A059]/15">
              <Icon
                className="h-[18px] w-[18px] text-[#C5A059]"
                strokeWidth={2}
              />
            </div>
            <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-[#0B1B32]">
              {title}
            </h3>
          </div>
          <p className="text-xs leading-relaxed text-gray-500 line-clamp-3">
            {description}
          </p>
          <div className="mt-0.5 flex items-center text-[11px] font-bold uppercase tracking-wide text-[#C5A059]">
            Learn More{" "}
            <span className="ml-1 text-base leading-none transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

const shows: ShowCardProps[] = [
  {
    title: "Innovative Ideas",
    description:
      "See the most creative and disruptive business ideas from across the continent.",
    image: "/show-1.png",
    badge: "The Pitch",
    href: "/explore/innovative-ideas",
    icon: Lightbulb,
  },
  {
    title: "Expert Insights",
    description:
      "Learn from the best in the business as our Lions share their wisdom and experience.",
    image: "/show-2.png",
    badge: "The Lions",
    href: "/explore/expert-insights",
    icon: GraduationCap,
  },
  {
    title: "Success Stories",
    description:
      "Follow the journey of entrepreneurs who have turned their dreams into reality.",
    image: "/show-3.png",
    badge: "Stories",
    href: "/explore/success-stories",
    icon: Trophy,
  },
  {
    title: "Economic Growth",
    description:
      "Discover how Lions Den is contributing to the economic development of the region.",
    image: "/show-4.png",
    badge: "Impact",
    href: "/explore/economic-growth",
    icon: TrendingUp,
  },
];

export default function ExploreSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2
            className={cn(
              playfair.className,
              "mb-3 text-3xl font-semibold tracking-tight text-[#0B1B32] sm:text-4xl",
            )}
          >
            Explore the Lions Den Universe
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            Dive into the various aspects of the show and see how we&apos;re
            making an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10 max-w-6xl mx-auto">
          {shows.map((show) => (
            <ShowCard key={show.href} {...show} />
          ))}
        </div>
      </div>
    </section>
  );
}
