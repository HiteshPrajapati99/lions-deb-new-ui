"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import {
  Lightbulb,
  GraduationCap,
  PieChart,
  Landmark,
  ScrollText,
  Handshake,
  XIcon,
} from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
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
  /** Used when `image` is YouTube maxres (may 404); falls back to `hqdefault`. */
  imageFallback?: string;
  badge: string | null;
  href: string;
  icon: LucideIcon;
}

function ShowCard({
  title,
  description,
  image,
  imageFallback,
  badge,
  href,
  icon: Icon,
}: ShowCardProps) {
  const [imgSrc, setImgSrc] = React.useState(image);

  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden border border-gray-100/80 bg-white shadow-md transition-all duration-300 hover:shadow-lg rounded-[10px] p-0">
        <div className="relative aspect-16/7 overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => {
              if (imageFallback && imgSrc !== imageFallback) {
                setImgSrc(imageFallback);
              }
            }}
          />
          <div className="absolute top-3 right-3">
            {badge && (
              <Badge className="rounded-full border-0 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-900 shadow-sm">
                {badge}
              </Badge>
            )}
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

interface FundingOption {
  id: string;
  title: string;
  teaser: string;
  detail: string;
  icon: LucideIcon;
  /** Hero image for the card and funding detail dialog */
  coverImage: string;
}

function FundingCard({
  option,
  onOpen,
}: {
  option: FundingOption;
  onOpen: () => void;
}) {
  const Icon = option.icon;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full cursor-pointer rounded-[10px] text-left outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[#C5A059]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <Card className="overflow-hidden border border-gray-100/80 bg-white shadow-md transition-all duration-300 hover:shadow-lg rounded-[10px] p-0">
        <div className="relative aspect-16/7 overflow-hidden bg-[#0B1B32]">
          <Image
            src={option.coverImage}
            alt={option.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0B1B32]/85 via-[#0B1B32]/25 to-transparent"
            aria-hidden
          />
          <div className="absolute top-3 right-3">
            <Badge className="rounded-full border-0 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-900 shadow-sm">
              Funding types
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
              {option.title}
            </h3>
          </div>
          <p className="text-xs leading-relaxed text-gray-500 line-clamp-3">
            {option.teaser}
          </p>
          <div className="mt-0.5 flex items-center text-[11px] font-bold uppercase tracking-wide text-[#C5A059]">
            Learn More{" "}
            <span className="ml-1 text-base leading-none transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

function FundingDetailDialogContent({ option }: { option: FundingOption }) {
  const Icon = option.icon;

  return (
    <>
      <div className="relative h-44 shrink-0 sm:h-56">
        <Image
          src={option.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#0B1B32] via-[#0B1B32]/45 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#F5BD1E]/90 to-transparent" />
        <div className="absolute bottom-5 left-6 right-20 flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 shadow-inner backdrop-blur-md ring-1 ring-white/25">
            <Icon className="h-5 w-5 text-[#F5BD1E]" strokeWidth={2} />
          </div>
          <Dialog.Title
            className={cn(
              playfair.className,
              "text-2xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-[1.65rem]",
            )}
          >
            {option.title}
          </Dialog.Title>
        </div>
      </div>

      <div className="relative border-t border-[#C5A059]/25 bg-linear-to-b from-gray-50/80 to-white px-6 py-6 sm:px-8 sm:py-7">
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#B57D1E] to-[#F5BD1E]" />
        <Dialog.Description className="pl-4 text-[15px] leading-[1.65] text-gray-600 sm:text-base sm:leading-relaxed">
          {option.detail}
        </Dialog.Description>
      </div>

      <Dialog.Close className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-[#0B1B32]/55 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-[#0B1B32]/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5BD1E]">
        <XIcon className="size-5 shrink-0" aria-hidden />
        <span className="sr-only">Close</span>
      </Dialog.Close>
    </>
  );
}

const fundingOptions: FundingOption[] = [
  {
    id: "equity-funding",
    title: "Equity Funding",
    teaser:
      "Equity Funding refers to a method of raising capital for a business or project by selling shares or ownership stakes in the company to investors.",
    detail:
      "Equity Funding refers to a method of raising capital for a business or project by selling shares or ownership stakes in the company to investors. In exchange for their investment, these investors become partial owners of the business and share in its profits and losses. Equity funding is often used by startups and growing businesses to secure the financial resources needed for expansion, development, or other initiatives without incurring debt.",
    icon: PieChart,
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "debt-financing",
    title: "Debt Financing",
    teaser:
      "Debt Financing is a financial strategy in which a company raises capital by borrowing funds from external sources, such as banks, bondholders, or other lenders.",
    detail:
      "Debt Financing is a financial strategy in which a company raises capital by borrowing funds from external sources, such as banks, bondholders, or other lenders. These borrowed funds are typically repaid over a specified period, often with interest, making it a form of loan. Debt financing allows businesses to access capital for various purposes, such as expansion, operations, or investments, with the obligation to repay the borrowed amount in the future.",
    icon: Landmark,
    coverImage:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "convertible-notes",
    title: "Convertible Notes",
    teaser:
      "Convertible notes are a type of short-term debt instrument commonly used in startup financing.",
    detail:
      "Convertible notes are a type of short-term debt instrument commonly used in startup financing. They are essentially loans that can be converted into equity (usually company shares) at a later date, typically when a specified trigger event, such as a future funding round, occurs. This allows early-stage investors to provide capital to startups with the expectation of converting their debt into ownership stakes, making convertible notes a flexible and popular instrument in the world of venture capital.",
    icon: ScrollText,
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "strategic-partnership",
    title: "Strategic Partnership",
    teaser:
      "Strategic Partnership is a collaborative alliance between two or more organizations that work together with a shared purpose to achieve specific strategic goals.",
    detail:
      "Strategic Partnership is a collaborative alliance between two or more organizations that work together with a shared purpose to achieve specific strategic goals, such as expanding market reach, leveraging complementary strengths, or pursuing common objectives. These partnerships are often long-term and mutually beneficial, aiming to create value and competitive advantages for all parties involved.",
    icon: Handshake,
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80",
  },
];

const shows: ShowCardProps[] = [
  {
    title: "Innovative Ideas",
    description:
      "See the most creative and disruptive business ideas from across the continent.",
    image: "https://i.ytimg.com/vi/iTXELrScEW4/maxresdefault.jpg",
    imageFallback: "https://i.ytimg.com/vi/iTXELrScEW4/hqdefault.jpg",
    badge: "The Pitch",
    href: "https://youtu.be/iTXELrScEW4?si=TI1n2sNNSNpGpYL1",
    icon: Lightbulb,
  },
  {
    title: "Type of Deals",
    description:
      "Learn from the best in the business as our Lions share their wisdom and experience.",
    image: "/show-2.png",
    badge: null,
    href: "",
    icon: GraduationCap,
  },
];

export default function ExploreSection() {
  const [activeFunding, setActiveFunding] =
    React.useState<FundingOption | null>(null);

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
          {fundingOptions.map((option) => (
            <FundingCard
              key={option.id}
              option={option}
              onOpen={() => setActiveFunding(option)}
            />
          ))}
        </div>
      </div>

      <Dialog.Root
        open={activeFunding !== null}
        onOpenChange={(open) => {
          if (!open) setActiveFunding(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-[#0B1B32]/60 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm" />
          <Dialog.Viewport className="fixed inset-0 z-50 grid max-h-dvh place-items-center overflow-y-auto p-4 sm:p-6">
            <Dialog.Popup className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white text-left shadow-[0_25px_80px_-12px_rgba(11,27,50,0.35)] ring-1 ring-[#0B1B32]/8 outline-none transition duration-200 ease-out data-ending-style:translate-y-3 data-ending-style:opacity-0 data-starting-style:translate-y-3 data-starting-style:opacity-0">
              {activeFunding ? (
                <FundingDetailDialogContent option={activeFunding} />
              ) : null}
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
