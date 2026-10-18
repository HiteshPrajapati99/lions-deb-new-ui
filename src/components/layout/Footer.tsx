import { ChevronRight, Globe, Heart } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/social-links";
import { AppLink } from "@/lib/app-link";

const columns = [
  {
    title: "The Show",
    links: [
      { label: "Season 01", href: "/season" },
      { label: "Meet the Lions", href: "/meet-the-lions" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Pitch Your Idea", href: "/start-your-journey" },
      // { label: "Behind the Scenes", href: "/behind-the-scenes" },
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
    <footer className="text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <AppLink href="/" className="mb-4 flex items-center gap-3">
              <img
                src={"/logo.jpeg"}
                alt="Lions Den"
                className="object-cover object-center w-32 h-16"
              />
            </AppLink>
              <img
                src={"/Offbeet_Media.png"}
                alt="Lions Den"
                className="object-cover object-center w-32 ml-2"
              />
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
                  className="flex h-9 w-9 items-center justify-center rounded-[8px]  text-black transition-colors hover:bg-gray-200 hover:text-gray-600"
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
                    <AppLink
                      href={link.href}
                      className="group flex items-start gap-1.5 text-sm text-gray-400 transition-colors"
                    >
                      <ChevronRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500"
                        strokeWidth={1.5}
                      />
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#2a2a2a] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
            <p>© 2026 Aadvik Management LLP. All rights reserved.</p>
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
