"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Lightbulb,
  GraduationCap,
  PieChart,
  Landmark,
  ScrollText,
  Handshake,
  XIcon,
  ArrowRight,
} from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AppLink } from "@/lib/app-link";

interface ShowCardProps {
  title: string;
  description: string;
  image: string;
  /** Used when `image` is YouTube maxres (may 404); falls back to `hqdefault`. */
  imageFallback?: string;
  badge: string | null;
  href: string;
  icon: LucideIcon;
  /** When set, the card opens a dialog or action instead of navigating. */
  onActivate?: () => void;
}

function ShowCard({
  title,
  description,
  image,
  imageFallback,
  badge,
  href,
  icon: Icon,
  onActivate,
}: ShowCardProps) {
  const [imgSrc, setImgSrc] = React.useState(image);

  const card = (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/15 bg-[#15181D] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-[#E8B04F]/50 group-hover:shadow-[0_24px_50px_-24px_rgba(232,176,79,0.35)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
      <div className="relative aspect-[16/6.5] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          onError={() => {
            if (imageFallback && imgSrc !== imageFallback) {
              setImgSrc(imageFallback);
            }
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#15181D]/70 to-transparent"
          aria-hidden
        />
        {badge && (
          <div className="absolute top-4 right-4">
            <Badge className="rounded-full border border-[#E8B04F]/50 bg-[#0B0D10]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F5C97A] backdrop-blur-sm">
              {badge}
            </Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-5 py-4 md:px-6 md:py-5">
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[#E8B04F]/60 bg-[#E8B04F]/5 transition-colors duration-300 group-hover:bg-[#E8B04F]/15">
            <Icon className="size-5 text-[#E8B04F]" strokeWidth={1.5} />
          </div>
          <h3 className="font-playfair text-xl font-semibold text-white md:text-2xl">
            {title}
          </h3>
        </div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.12em] text-[#F5C97A] md:text-sm">
          Learn More
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );

  if (onActivate) {
    return (
      <button
        type="button"
        onClick={onActivate}
        className="group block h-full w-full cursor-pointer rounded-xl text-left outline-none focus-visible:ring-2 focus-visible:ring-[#E8B04F]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1115]"
      >
        {card}
      </button>
    );
  }

  return (
    <AppLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#E8B04F]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1115]"
    >
      {card}
    </AppLink>
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
          <img
            src={option.coverImage}
            alt={option.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
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
        <img
          src={option.coverImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
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
              "font-playfair text-2xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-[1.65rem]",
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

const TYPE_OF_DEALS_ID = "type-of-deals";

const shows: (ShowCardProps & { id?: string })[] = [
  {
    title: "Innovative Ideas",
    description:
      "See the most creative and disruptive business ideas from across the continent.",
    image: "https://i.ytimg.com/vi/iTXELrScEW4/maxresdefault.jpg",
    imageFallback: "https://i.ytimg.com/vi/iTXELrScEW4/hqdefault.jpg",
    badge: null,
    href: "https://www.youtube.com/@thelionsdenshow/videos",
    icon: Lightbulb,
  },
  {
    id: TYPE_OF_DEALS_ID,
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
  const [fundingListOpen, setFundingListOpen] = React.useState(false);
  const [activeFunding, setActiveFunding] =
    React.useState<FundingOption | null>(null);

  return (
    <section className="bg-[#0F1115] py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center md:mb-8">
          <div className="mb-2 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#E8B04F]/70" aria-hidden />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#E8B04F] md:text-xs">
              The Lion&rsquo;s Den
            </span>
            <span className="h-px w-12 bg-[#E8B04F]/70" aria-hidden />
          </div>
          <h2
            className={cn(
              "font-playfair text-3xl font-semibold tracking-tight text-white md:text-4xl",
            )}
          >
            Explore the Lion&rsquo;s Den Universe
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-300 md:text-base">
            Dive into the various aspects of the show and see how we&rsquo;re
            making an impact
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {shows.map(({ id, ...show }) => (
            <ShowCard
              key={(id ?? show.href) || show.title}
              {...show}
              onActivate={
                id === TYPE_OF_DEALS_ID
                  ? () => setFundingListOpen(true)
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      <Dialog.Root
        open={fundingListOpen}
        onOpenChange={(open) => {
          if (!open) setFundingListOpen(false);
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-[#0B1B32]/60 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm" />
          <Dialog.Viewport className="fixed inset-0 z-50 grid max-h-dvh place-items-center overflow-y-auto p-4 sm:p-6">
            <Dialog.Popup className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-left shadow-[0_25px_80px_-12px_rgba(11,27,50,0.35)] ring-1 ring-[#0B1B32]/8 outline-none transition duration-200 ease-out data-ending-style:translate-y-3 data-ending-style:opacity-0 data-starting-style:translate-y-3 data-starting-style:opacity-0">
              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
                <div className="flex items-start justify-between gap-4 pr-12">
                  <div>
                    <Dialog.Title className="font-playfair text-xl font-semibold tracking-tight text-[#0B1B32] sm:text-2xl">
                      Type of Deals
                    </Dialog.Title>
                    <Dialog.Description className="mt-1 text-sm text-gray-500">
                      Explore funding types and how each deal structure works.
                    </Dialog.Description>
                  </div>
                </div>
              </div>
              <div className="max-h-[min(70vh,720px)] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {fundingOptions.map((option) => (
                    <FundingCard
                      key={option.id}
                      option={option}
                      onOpen={() => {
                        setFundingListOpen(false);
                        setActiveFunding(option);
                      }}
                    />
                  ))}
                </div>
              </div>
              <Dialog.Close className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-[#0B1B32]/10 text-[#0B1B32] shadow-sm transition-colors hover:bg-[#0B1B32]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5BD1E]">
                <XIcon className="size-5 shrink-0" aria-hidden />
                <span className="sr-only">Close</span>
              </Dialog.Close>
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>

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
