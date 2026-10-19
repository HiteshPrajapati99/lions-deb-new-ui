"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AppLink } from "@/lib/app-link";
import { useNavigate } from "react-router-dom";

type NavLink = { label: string; href: string };
/** An entry that opens a dropdown of links instead of navigating directly. */
type NavGroup = { label: string; items: readonly NavLink[] };
type NavEntry = NavLink | NavGroup;

/** Shared by the desktop bar and the mobile sheet, rendered in this order. */
const navEntries: readonly NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "Seasons",
    items: [
      { label: "Season 01", href: "/season" },
      { label: "Season 02", href: "/season-02" },
    ],
  },
  // { label: "Founder Stories", href: "/founder-stories" },
  { label: "Meet the Lions", href: "/meet-the-lions" },
  {
    label: "More",
    items: [
      { label: "Partner Network", href: "/partner-network" },
      { label: "Pitch Your Idea", href: "/start-your-journey" },
    ],
  },
];

const NAV_LINK_CLASS =
  "text-black font-medium px-3 py-2 rounded-md transition-colors hover:bg-white/10";

function BrandMark({
  showTaglineOnMobile = false,
}: {
  showTaglineOnMobile?: boolean;
}) {
  const textVisible = showTaglineOnMobile
    ? "flex flex-col pt-0.5"
    : "hidden sm:flex flex-col pt-0.5";

  return (
    <AppLink href="/" className="flex items-start gap-3 min-w-0">
      <div
        className={cn(
          "shrink-0 w-10 h-10 rounded-md bg-[#d4af37] flex items-center justify-center",
          "font-playfair",
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
            "font-playfair",
          )}
        >
          Lions Den
        </span>
        <span className="text-[#94a3b8] text-xs font-normal leading-snug mt-0.5 block">
          Where Dreams Meet Investment
        </span>
      </div>
    </AppLink>
  );
}

/** Desktop dropdown: toggles on click; closes on outside click, Escape, or picking a link. */
function DesktopNavDropdown({ label, items }: NavGroup) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative flex items-center">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          NAV_LINK_CLASS,
          "inline-flex items-center gap-1 bg-transparent cursor-pointer",
          open && "bg-white/10",
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-black transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      <div
        id={menuId}
        hidden={!open}
        className="absolute left-1/2 top-full mt-2 -translate-x-1/2 min-w-[12.5rem] rounded-lg bg-white py-2 px-1 shadow-lg ring-1 ring-black/5 z-[60]"
      >
        {items.map((item) => (
          <AppLink
            key={item.href}
            href={item.href}
            className="block px-3 py-2.5 text-sm text-[#1f2937] rounded-md hover:bg-gray-100 transition-colors font-sans font-medium"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </AppLink>
        ))}
      </div>
    </div>
  );
}

/** Mobile sheet group: expands in place to reveal its links. */
function MobileNavGroup({
  label,
  items,
  onNavigate,
}: NavGroup & { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-gray-700/35">
      <button
        type="button"
        className="flex w-full items-center justify-between text-white py-3.5 px-3 text-base font-medium hover:bg-white/5 rounded-md transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {label}
        <ChevronDown
          className={cn("size-5 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <div id={panelId} hidden={!open} className="pb-3 pl-2 space-y-1">
        {items.map((item) => (
          <AppLink
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="block py-2.5 px-3 text-[#94a3b8] text-sm font-medium rounded-md hover:text-white hover:bg-white/10"
          >
            {item.label}
          </AppLink>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-700/35">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4 min-h-[4.25rem] py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-normal">
          <div className="lg:justify-self-start shrink-0 min-w-0">
            {/* <BrandMark /> */}
            <img
              src={"/logo.jpeg"}
              alt="Lions Den"
              className="object-cover object-center w-28 h-16"
              
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5 lg:justify-self-center">
            {navEntries.map((entry) =>
              "items" in entry ? (
                <DesktopNavDropdown
                  key={entry.label}
                  label={entry.label}
                  items={entry.items}
                />
              ) : (
                <AppLink
                  key={entry.href}
                  href={entry.href}
                  className={NAV_LINK_CLASS}
                >
                  {entry.label}
                </AppLink>
              ),
            )}
          </nav>

          <div className="lg:justify-self-end flex items-center gap-3">
            <div className="hidden lg:flex">
              <AppLink
                href="/start-your-journey"
                 className="group inline-flex h-13 items-center gap-3 rounded-full bg-linear-to-r from-[#F5C97A] to-[#E8A548] px-8 text-base font-semibold text-[#1A1206] shadow-[0_10px_30px_-10px_rgba(232,176,79,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(232,176,79,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B04F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050A18]"
              >
                Apply for season 2
              </AppLink>
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
                    {navEntries.map((entry) =>
                      "items" in entry ? (
                        <MobileNavGroup
                          key={entry.label}
                          label={entry.label}
                          items={entry.items}
                          onNavigate={() => setMobileOpen(false)}
                        />
                      ) : (
                        <AppLink
                          key={entry.href}
                          href={entry.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-white py-3.5 px-3 text-base font-medium border-b border-gray-700/35 hover:bg-white/5 rounded-md transition-colors"
                        >
                          {entry.label}
                        </AppLink>
                      ),
                    )}
                  </nav>
                  <AppLink
                    href="/start-your-journey"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-lg bg-[#ff7043] hover:bg-[#f4511e] text-white font-bold w-full py-4 text-base whitespace-nowrap transition-colors"
                  >
                    Start Your Journey
                  </AppLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
