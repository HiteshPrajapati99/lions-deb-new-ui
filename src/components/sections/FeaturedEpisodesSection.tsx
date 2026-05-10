import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  fetchLionsDenRecentVideos,
  type YoutubeFeedVideo,
} from "@/lib/youtube-feed";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const CHANNEL_VIDEOS_URL = "https://www.youtube.com/@thelionsdenshow/videos";

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
    <Link
      href={href}
      className="group block"
      target="_blank"
      rel="noopener noreferrer"
    >
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

function feedVideoToCardProps(
  v: YoutubeFeedVideo,
  index: number,
): EpisodeCardProps {
  const published =
    v.publishedAt && !Number.isNaN(Date.parse(v.publishedAt))
      ? new Intl.DateTimeFormat("en-IN", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(new Date(v.publishedAt))
      : undefined;

  const palette = [
    "bg-emerald-600",
    "bg-blue-600",
    "bg-amber-500",
    "bg-red-600",
    "bg-violet-600",
    "bg-teal-600",
    "bg-rose-600",
    "bg-sky-600",
  ] as const;

  return {
    title: v.title,
    tag: published !== undefined ? published : "New",
    tagClass: palette[index % palette.length],
    image: `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,
    description:
      v.description || "Watch this pitch from The Lions' Den on YouTube.",
    href: v.watchUrl,
  };
}

export function FeaturedEpisodesSkeleton() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="h-9 w-64 animate-pulse rounded-lg bg-gray-200 sm:h-10 sm:w-72" />
            <div className="h-4 max-w-md animate-pulse rounded bg-gray-200" />
            <div className="h-4 max-w-sm animate-pulse rounded bg-gray-100" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[10px] border border-gray-100 bg-white shadow-md"
            >
              <div className="aspect-16/10 animate-pulse bg-gray-200" />
              <div className="space-y-2 p-4">
                <div className="h-4 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function FeaturedEpisodesSection() {
  const videos = await fetchLionsDenRecentVideos(4, { excludeShorts: true });
  const episodes = videos.map(feedVideoToCardProps);

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
            <p className="max-w-lg text-sm text-gray-500">
              Latest uploads from{" "}
              <span className="font-medium text-gray-700">
                The Lions&apos; Den on YouTube
              </span>
              — full episodes, clips, and Shorts from the channel.
            </p>
          </div>
        </div>

        {episodes.length === 0 ? (
          <div className="rounded-[10px] border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
            <p className="mb-4 text-sm text-gray-600">
              We couldn&apos;t load the latest videos right now. Open the
              channel on YouTube to watch recent uploads.
            </p>
            <Link
              href={CHANNEL_VIDEOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#1a1a1a] px-8 text-sm font-bold text-white transition-colors hover:bg-black"
            >
              Watch on YouTube
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {episodes.map((ep, i) => (
              <EpisodeCard key={videos[i]!.videoId} {...ep} />
            ))}
          </div>
        )}

        {episodes.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              href={"https://www.wavespb.com/links/SH15472JGP"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#1a1a1a] px-8 text-sm font-bold text-white transition-colors hover:bg-black"
            >
              View All Episodes
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
