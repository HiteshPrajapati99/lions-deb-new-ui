import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { ChevronRight, Globe, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/social-links";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const columns = [
  {
    title: "The Show",
    links: [
      { label: "Season 01", href: "/season-01" },
      { label: "Meet the Lions", href: "/meet-the-lions" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Pitch Your Idea", href: "/start-your-journey" },
      { label: "Behind the Scenes", href: "/behind-the-scenes" },
      { label: "Application Guide", href: "/apply/guide" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Press & Media", href: "/press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#C5A059]">
                <span
                  className={cn(
                    playfair.className,
                    "text-sm font-semibold text-[#0B1B32]",
                  )}
                >
                  LD
                </span>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[15px] font-semibold text-[#C5A059]">
                  Lions Den
                </span>
                <span className="text-xs font-medium text-gray-300">
                  Where Dreams Meet Investment
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed">
              India&apos;s premier entrepreneurial reality show connecting
              passionate founders with seasoned business lions. Transform your
              startup dreams into reality.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#1e1e1e] text-gray-400 transition-colors hover:bg-[#2a2a2a] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <ChevronRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500"
                        strokeWidth={1.5}
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#2a2a2a] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
            <p>© 2026 Lions Den. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-gray-500" />
                Made in India
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5 text-[#F26522]" fill="#F26522" />
                For Entrepreneurs
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
