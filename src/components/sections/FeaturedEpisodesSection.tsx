import * as React from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { pickFeaturedVideos, type YoutubeFeedVideo } from "@/lib/youtube-feed";
import { AppLink } from "@/lib/app-link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const CHANNEL_VIDEOS_URL = "https://www.youtube.com/@thelionsdenshow/videos";
const ALL_EPISODES_URL = "https://www.wavespb.com/links/SH15472JGP";

type Episode = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageFallback: string;
  href: string;
};

/** Title from the feed minus the trailing "| The Lions' Den …" parts. */
function cleanTitle(raw: string): string {
  const first = raw.split("|")[0]?.trim();
  return first || raw.trim();
}

/** Drops the "WATCH FULL EPISODES ON WAVES OTT [link] . ." promo prefix. */
function cleanDescription(raw: string): string {
  const text = raw
    .replace(/^\s*WATCH FULL EPISODES[^\]]*\]\s*/i, "")
    .replace(/^(\s*\.)+\s*/, "")
    .trim();
  return text || "Watch this pitch from The Lions' Den on YouTube.";
}

function toEpisode(v: YoutubeFeedVideo, index: number): Episode {
  return {
    id: v.videoId,
    number: String(index + 1).padStart(2, "0"),
    title: cleanTitle(v.title),
    description: cleanDescription(v.description),
    image: `https://i.ytimg.com/vi/${v.videoId}/maxresdefault.jpg`,
    imageFallback: `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,
    href: v.watchUrl,
  };
}

function Thumb({
  episode,
  className,
  playSize = "md",
}: {
  episode: Episode;
  className?: string;
  playSize?: "md" | "lg";
}) {
  const [src, setSrc] = React.useState(episode.image);

  return (
    <div className={cn("relative overflow-hidden bg-[#0B1B32]", className)}>
      <img
        src={src}
        alt=""
        loading="lazy"
        onError={() => {
          if (src !== episode.imageFallback) setSrc(episode.imageFallback);
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            "flex items-center justify-center rounded-full border border-white/80 bg-black/40 text-white backdrop-blur-[2px] transition-all duration-300 group-hover:scale-110 group-hover:border-[#E8B04F] group-hover:bg-[#E8B04F] group-hover:text-[#0B1B32]",
            playSize === "lg" ? "size-14" : "size-10",
          )}
        >
          <Play
            className={cn("ml-0.5", playSize === "lg" ? "size-5" : "size-4")}
            fill="currentColor"
            aria-hidden
          />
        </span>
      </div>
    </div>
  );
}

function EpisodeLabel({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
        Episode {number}
      </span>
      <span className="h-px w-10 bg-[#C5A059]/70" aria-hidden />
    </div>
  );
}

function FeaturedEpisode({ episode }: { episode: Episode }) {
  return (
    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
      <AppLink
        href={episode.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch episode ${episode.number}: ${episode.title}`}
        className="group block overflow-hidden rounded-lg shadow-[0_20px_50px_-25px_rgba(11,27,50,0.55)] outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"
      >
        <Thumb episode={episode} playSize="lg" className="aspect-video" />
      </AppLink>

      <div>
        <EpisodeLabel number={episode.number} />
        <h3 className="mt-3 line-clamp-3 font-playfair text-2xl font-semibold leading-tight text-[#0B1B32] md:text-3xl">
          {episode.title}
        </h3>
        <p className="mt-3 line-clamp-3 max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
          {episode.description}
        </p>
        <div className="mt-5 flex items-center gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500 md:text-sm">
            Season 01
          </span>
          <span className="h-8 w-px bg-gray-300" aria-hidden />
          <AppLink
            href={episode.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF8F4]"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[#0B1B32] text-white transition-colors duration-300 group-hover:bg-[#C5A059]">
              <Play className="ml-0.5 size-4" fill="currentColor" aria-hidden />
            </span>
            <span className="border-b border-[#0B1B32]/60 pb-1 text-sm font-semibold md:text-base text-[#0B1B32] transition-colors group-hover:border-[#C5A059] group-hover:text-[#B08A4F]">
              Watch Episode
            </span>
            <ArrowRight
              className="size-4 text-[#0B1B32] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </AppLink>
        </div>
      </div>
    </div>
  );
}

function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <AppLink
      href={episode.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-[#C5A059]/50 group-hover:shadow-[0_18px_40px_-20px_rgba(176,138,79,0.45)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <Thumb episode={episode} className="aspect-video" />
        <div className="flex-1 px-4 py-3">
          <EpisodeLabel number={episode.number} />
          <h3 className="mt-1.5 line-clamp-2 font-playfair text-base font-semibold leading-snug text-[#0B1B32] transition-colors duration-300 group-hover:text-[#B08A4F] md:text-lg">
            {episode.title}
          </h3>
        </div>
      </div>
    </AppLink>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#F6F6F1] bg-[url('/background.png')] bg-cover bg-right bg-no-repeat py-10 md:py-12">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-start md:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-gray-500 md:text-xs">
            Featured Episodes
          </span>
          <span className="h-px w-24 bg-[#C5A059]/70" aria-hidden />
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-6">
          <h2 className="font-playfair text-3xl font-bold leading-[1.1] tracking-tight text-[#0B1B32] md:text-4xl lg:text-[2.75rem]">
            Stories. Pitches.
            <br />
            Breakthroughs.
          </h2>
          <p className="max-w-[15rem] text-sm leading-relaxed text-gray-500 md:text-base lg:pb-1">
            Real founders. Real conversations. Real possibilities.
          </p>
        </div>
      </div>

      <AppLink
        href={ALL_EPISODES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF8F4] md:mt-1"
      >
        <span className="border-b border-[#0B1B32]/60 pb-1 text-sm font-semibold text-[#0B1B32] transition-colors group-hover:border-[#C5A059] group-hover:text-[#B08A4F] md:text-base">
          View All Episodes
        </span>
        <ArrowRight
          className="size-5 text-[#0B1B32] transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </AppLink>
    </div>
  );
}

export function FeaturedEpisodesSkeleton() {
  return (
    <SectionShell>
      <div className="mb-8 space-y-3">
        <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
        <div className="h-12 w-80 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-12 w-72 animate-pulse rounded-lg bg-gray-200" />
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="aspect-video animate-pulse rounded-lg bg-gray-200" />
        <div className="space-y-4 self-center">
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
          <div className="h-10 w-4/5 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-video animate-pulse bg-gray-200" />
            <div className="space-y-2 p-5">
              <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default function FeaturedEpisodesSection() {
  const [videos, setVideos] = React.useState<YoutubeFeedVideo[] | null>(null);
  const [api, setApi] = React.useState<CarouselApi>();
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const url = `${import.meta.env.BASE_URL}youtube-feed.json`;
    fetch(url)
      .then((r) => (r.ok ? r.json() : []))
      .then((data: YoutubeFeedVideo[]) => {
        if (cancelled) return;
        // Long-form videos come first, Shorts after (see pickFeaturedVideos).
        setVideos(pickFeaturedVideos(Array.isArray(data) ? data : [], 8));
      })
      .catch(() => {
        if (!cancelled) setVideos([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  if (videos === null) return <FeaturedEpisodesSkeleton />;

  const episodes = videos.map(toEpisode);
  const [featured, ...rest] = episodes;

  return (
    <SectionShell>
      <SectionHeader />

      {!featured ? (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
          <p className="mb-4 text-base text-gray-600">
            We couldn&apos;t load the latest videos right now. Open the channel
            on YouTube to watch recent uploads.
          </p>
          <AppLink
            href={CHANNEL_VIDEOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0B1B32] px-8 text-base font-semibold text-white transition-colors hover:bg-[#13294a]"
          >
            Watch on YouTube
          </AppLink>
        </div>
      ) : (
        <>
          <FeaturedEpisode episode={featured} />

          {rest.length > 0 && (
            <div className="mt-6 flex items-center gap-4 md:mt-8 lg:gap-6">
              <Carousel
                setApi={setApi}
                opts={{ align: "start" }}
                className="min-w-0 flex-1"
                aria-label="More episodes"
              >
                <CarouselContent className="-ml-5">
                  {rest.map((ep) => (
                    <CarouselItem
                      key={ep.id}
                      className="basis-[85%] pl-5 sm:basis-1/2 lg:basis-1/4"
                    >
                      <EpisodeCard episode={ep} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="hidden shrink-0 flex-col gap-4 sm:flex">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  disabled={!canPrev}
                  aria-label="Previous episodes"
                  className="flex size-11 items-center justify-center rounded-full border border-gray-300 bg-white text-[#0B1B32] transition-colors hover:border-[#C5A059] hover:text-[#B08A4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-[#0B1B32]"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  disabled={!canNext}
                  aria-label="Next episodes"
                  className="flex size-11 items-center justify-center rounded-full bg-[#0B1B32] text-white transition-colors hover:bg-[#C5A059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#0B1B32]"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </SectionShell>
  );
}
