"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const filters = ["All", "Season 1", "Season 2"] as const;

interface EpisodeCardProps {
  title: string;
  tag: string;
  tagClass: string;
  cornerTag?: string;
  cornerTagClass?: string;
  image: string;
  description: string;
  href: string;
}

function EpisodeCard({
  title,
  tag,
  tagClass,
  cornerTag,
  cornerTagClass,
  image,
  description,
  href,
}: EpisodeCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-[10px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute left-3 top-3 z-10">
            <span
              className={cn(
                "rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm",
                tagClass,
              )}
            >
              {tag}
            </span>
          </div>
          {cornerTag && (
            <div className="absolute right-3 top-3 z-10">
              <span
                className={cn(
                  "rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm",
                  cornerTagClass,
                )}
              >
                {cornerTag}
              </span>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-0.5 h-5 w-5 fill-[#0B1B32] text-[#0B1B32]" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#F26522]">
            {title}
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

const episodes: EpisodeCardProps[] = [
  {
    title: "The Breakthrough Pitch That Changed Everything",
    tag: "S1 E1",
    tagClass: "bg-emerald-600",
    cornerTag: "Season 1",
    cornerTagClass: "bg-emerald-700/90",
    image: "/episode-1.png",
    description:
      "Watch the season opener as bold founders take the stage for the first time.",
    href: "/episodes/s1e01",
  },
  {
    title: "When Two Lions Fight for the Same Deal",
    tag: "S1 E2",
    tagClass: "bg-blue-600",
    image: "/episode-2.png",
    description:
      "Tensions run high as investors compete for a breakthrough opportunity.",
    href: "/episodes/s1e02",
  },
  {
    title: "From Side Hustle to National Brand",
    tag: "S1 E3",
    tagClass: "bg-amber-500",
    cornerTag: "New",
    cornerTagClass: "bg-red-600",
    image: "/episode-3.png",
    description:
      "The emotional journey of a founder who risked it all on national television.",
    href: "/episodes/s1e03",
  },
  {
    title: "The Deal That Almost Walked Away",
    tag: "S1 E4",
    tagClass: "bg-red-600",
    image: "/show-1.png",
    description:
      "Last-minute negotiations prove that every second on the floor matters.",
    href: "/episodes/s1e04",
  },
];

export default function FeaturedEpisodesSection() {
  const [activeFilter, setActiveFilter] =
    React.useState<(typeof filters)[number]>("All");

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              className={cn(
                playfair.className,
                "mb-3 text-3xl font-semibold tracking-tight text-[#0B1B32] sm:text-4xl",
              )}
            >
              Featured Episodes
            </h2>
            <p className="max-w-md text-sm text-gray-500">
              Catch up on the latest pitches from the current season and witness
              the drama unfold.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "rounded-lg px-4 py-2 text-xs font-bold transition-colors",
                  activeFilter === f
                    ? "bg-[#C5A059] text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.href} {...ep} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="h-11 rounded-[10px] bg-[#1a1a1a] px-8 text-sm font-bold text-white hover:bg-black">
            <Link href="/episodes">View All Episodes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
