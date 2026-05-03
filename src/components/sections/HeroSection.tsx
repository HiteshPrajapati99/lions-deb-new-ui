"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

type HeroStat = { value: string; label: string };

type HeroSlide = {
  id: string;
  titleLines: string[];
  subtitle: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
};

const slides: HeroSlide[] = [
  {
    id: "beyond-pitch",
    titleLines: ["Beyond the Pitch", "- Building Businesses"],
    subtitle: "Real Stories. Real Impact.",
    description:
      "Discover the untold stories of founders who made it. Learn from their failures, celebrate their victories, and get inspired to take the leap.",
    primaryHref: "/watch",
    primaryLabel: "Explore Stories",
  },
  {
    id: "dreams-investment",
    titleLines: ["Where Dreams Meet Investment"],
    subtitle: "India's Premier Entrepreneurial Reality Show",
    description:
      "Watch passionate entrepreneurs pitch their groundbreaking ideas to seasoned business lions. Every pitch is a story. Every investment is a partnership.",
    primaryHref: "/watch",
    primaryLabel: "Watch Season 01",
  },
  {
    id: "journey",
    titleLines: ["Your Entrepreneurial Journey", "Starts Here"],
    subtitle: "From Pitch to Partnership",
    description:
      "Join thousands of aspiring entrepreneurs who transformed their dreams into reality. Learn from the best, pitch to the lions, and build your empire.",
    primaryHref: "/watch",
    primaryLabel: "Start Your Journey",
  },
];

const slideStats: HeroStat[][] = [
  [
    { value: "24", label: "Episodes" },
    { value: "6", label: "Lions" },
    { value: "100+", label: "Hours" },
  ],
  [
    { value: "150+", label: "Pitches" },
    { value: "₹45 Cr+", label: "Investments" },
    { value: "78%", label: "Success" },
  ],
  [
    { value: "500+", label: "Founders" },
    { value: "50+", label: "Partners" },
    { value: "300%", label: "Growth" },
  ],
];

function VideoHighlightCard({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "relative flex aspect-4/5 max-h-[min(560px,70vh)] w-full max-w-[420px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-white/12 bg-[#0b1428]/90 py-10 text-center shadow-[0_28px_80px_-24px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/6",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,107,53,0.12),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.08),transparent_50%)]"
        aria-hidden
      />
      <Image
        src="/episode-1.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 420px"
        className="object-cover opacity-35"
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#050A18]/90 via-[#050A18]/50 to-[#050A18]/30" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        <button
          type="button"
          aria-label="Play Season 01 highlight reel"
          className="group flex size-20 items-center justify-center rounded-full border-2 border-white/90 bg-white/5 shadow-[0_0_48px_-8px_rgba(255,255,255,0.35)] backdrop-blur-[2px] transition-transform duration-300 hover:scale-[1.06]"
        >
          <Play
            className="ml-1 size-9 text-white"
            strokeWidth={1.5}
            fill="currentColor"
          />
        </button>
        <div className="space-y-2">
          <p className="text-base font-medium tracking-tight text-white sm:text-lg">
            Season 01 Highlight Reel
          </p>
          <p className="max-w-[280px] text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
            24 Episodes • 150+ Pitches • ₹45 Cr+ Invested
          </p>
        </div>
      </div>
    </Card>
  );
}

function HeroSlidePanel({
  slide,
  stats,
  titleHeading: TitleTag = "h2",
}: {
  slide: HeroSlide;
  stats: HeroStat[];
  titleHeading?: "h1" | "h2";
}) {
  return (
    <div className="flex flex-col">
      <Badge
        variant="outline"
        className="mb-7 h-fit w-fit gap-2 rounded-full border-white/35 bg-transparent px-3.5 py-1 text-[11px] font-medium tracking-wide text-[#EAB308]"
      >
        <span className="size-1.5 shrink-0 rounded-full bg-[#FF6B35]" aria-hidden />
        Season 01 Now Streaming
      </Badge>

      <TitleTag
        className={cn(
          playfair.className,
          "mb-4 text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]"
        )}
      >
        {slide.titleLines.map((line, i) => (
          <React.Fragment key={`${slide.id}-t-${i}`}>
            {i > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </TitleTag>

      <p className="mb-4 text-lg font-medium text-[#D4AF37] sm:text-xl">
        {slide.subtitle}
      </p>

      <p className="mb-9 max-w-lg text-sm leading-relaxed text-[#94A3B8] sm:text-base">
        {slide.description}
      </p>

      <div className="mb-11 flex flex-wrap items-center gap-3">
        <Link
          href={slide.primaryHref}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 gap-2 rounded-full border-transparent bg-[#FF6B35] px-7 text-white hover:bg-[#ff5a26]"
          )}
        >
          {slide.primaryLabel}
          <ArrowRight className="size-4" />
        </Link>
        <Link
          href="/episodes"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 gap-2 rounded-full border-white/25 bg-[#0a1629]/90 px-7 text-white hover:bg-[#121f35]"
          )}
        >
          Meet the Lions
          <Sparkles className="size-4 text-white/90" />
        </Link>
      </div>

      <Separator className="mb-8 bg-white/10" />

      <dl className="grid grid-cols-3 gap-4 sm:gap-10">
        {stats.map((s) => (
          <div key={s.label} className="min-w-0">
            <dt
              className={cn(
                playfair.className,
                "mb-1 text-2xl font-semibold tracking-tight text-[#D4AF37] sm:text-3xl"
              )}
            >
              {s.value}
            </dt>
            <dd className="text-xs font-normal text-[#94A3B8] sm:text-sm">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    queueMicrotask(onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-[#050A18] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(255,107,53,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_60%,rgba(212,175,55,0.06),transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
        <div className="grid flex-1 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="min-w-0 lg:translate-y-[2px]"
            aria-label="Hero highlights"
          >
            <CarouselContent className="ml-0">
              {slides.map((slide, index) => (
                <CarouselItem key={slide.id} className="basis-full pl-0">
                  <HeroSlidePanel
                    slide={slide}
                    stats={slideStats[index]}
                    titleHeading={index === 0 ? "h1" : "h2"}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="hidden justify-end lg:flex">
            <VideoHighlightCard />
          </div>

          <div className="-mt-4 flex justify-center lg:hidden">
            <VideoHighlightCard className="max-w-md" />
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2 sm:mt-14">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={current === i}
              className={cn(
                "h-2 shrink-0 rounded-full transition-[width,background-color] duration-300",
                current === i
                  ? "w-8 bg-[#FF6B35]"
                  : "w-2 bg-white/25 hover:bg-white/35"
              )}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
