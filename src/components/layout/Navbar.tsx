"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "Season 01", href: "/season-01" },
  // { label: "Founder Stories", href: "/founder-stories" },
  { label: "Meet the Lions", href: "/meet-the-lions" },
] as const;

const moreLinks = [
  { label: "Partner Network", href: "/partner-network" },
  { label: "Pitch Your Idea", href: "/start-your-journey" },
] as const;

const NAV_LINK_CLASS =
  "text-white text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-white/10";

function BrandMark({
  showTaglineOnMobile = false,
}: {
  showTaglineOnMobile?: boolean;
}) {
  const textVisible = showTaglineOnMobile
    ? "flex flex-col pt-0.5"
    : "hidden sm:flex flex-col pt-0.5";

  return (
    <Link href="/" className="flex items-start gap-3 min-w-0">
      <div
        className={cn(
          "shrink-0 w-10 h-10 rounded-md bg-[#d4af37] flex items-center justify-center",
          playfair.className,
        )}
      >
        <span className="text-white text-sm font-bold leading-none tracking-tight">
          LD
        </span>
      </div>
      <div className={cn("min-w-0", textVisible)}>
        <span
          className={cn(
            "text-white text-lg font-bold leading-tight block",
            playfair.className,
          )}
        >
          Lions Den
        </span>
        <span className="text-[#94a3b8] text-xs font-normal leading-snug mt-0.5 block">
          Where Dreams Meet Investment
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const moreWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moreOpen) return;
    const onDown = (e: MouseEvent) => {
      if (
        moreWrapRef.current &&
        !moreWrapRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [moreOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f] border-b border-gray-700/35">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4 min-h-[4.25rem] py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-normal">
          <div className="lg:justify-self-start shrink-0 min-w-0">
            <BrandMark />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5 lg:justify-self-center">
            {mainNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className={NAV_LINK_CLASS}>
                {link.label}
              </Link>
            ))}
            <div ref={moreWrapRef} className="relative flex items-center">
              <button
                type="button"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                onClick={() => setMoreOpen((o) => !o)}
                className={cn(
                  NAV_LINK_CLASS,
                  "inline-flex items-center gap-1 bg-transparent cursor-pointer",
                  moreOpen && "bg-white/10",
                )}
              >
                More
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-white transition-transform duration-200",
                    moreOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
              {moreOpen ? (
                <div
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 min-w-[12.5rem] rounded-lg bg-white py-2 px-1 shadow-lg ring-1 ring-black/5 z-[60]"
                  role="menu"
                >
                  {moreLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="block px-3 py-2.5 text-sm text-[#1f2937] rounded-md hover:bg-gray-100 transition-colors font-sans font-medium"
                      onClick={() => setMoreOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>

          <div className="lg:justify-self-end flex items-center gap-3">
            <div className="hidden lg:flex">
              <Link
                href="/start-your-journey"
                className="inline-flex items-center justify-center rounded-lg bg-[#ff7043] hover:bg-[#f4511e] text-white font-bold text-sm px-6 py-2.5 whitespace-nowrap transition-colors duration-200"
              >
                Start Your Journey
              </Link>
            </div>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="lg:hidden"
                render={(props) => (
                  <button
                    type="button"
                    {...props}
                    aria-label="Open menu"
                    className={cn(
                      props.className,
                      "lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 transition-colors",
                    )}
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                )}
              />
              <SheetContent
                side="right"
                className="bg-[#0a192f] border-gray-700/35 text-white w-[min(100vw-2rem,20rem)]"
              >
                <div className="flex flex-col gap-8 mt-6">
                  <BrandMark showTaglineOnMobile />
                  <nav className="flex flex-col gap-0 border-t border-gray-700/50 pt-6">
                    {mainNavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-white py-3.5 px-3 text-base font-medium border-b border-gray-700/35 hover:bg-white/5 rounded-md transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-b border-gray-700/35">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-white py-3.5 px-3 text-base font-medium hover:bg-white/5 rounded-md transition-colors"
                        onClick={() => setMobileMoreOpen((v) => !v)}
                        aria-expanded={mobileMoreOpen}
                      >
                        More
                        <ChevronDown
                          className={cn(
                            "size-5 transition-transform",
                            mobileMoreOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileMoreOpen ? (
                        <div className="pb-3 pl-2 space-y-1">
                          {moreLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 px-3 text-[#94a3b8] text-sm font-medium rounded-md hover:text-white hover:bg-white/10"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </nav>
                  <Link
                    href="/start-your-journey"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-lg bg-[#ff7043] hover:bg-[#f4511e] text-white font-bold w-full py-4 text-base whitespace-nowrap transition-colors"
                  >
                    Start Your Journey
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
