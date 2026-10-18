import { Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

import { pressArticles } from "./pressArticles";

const GOLD = "#D4AF37";

export default function PressShowcase() {
  return (
    <>
      <section
        className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28"
        style={{
          background: "linear-gradient(180deg, #0a192f 0%, #050a14 100%)",
        }}
      >
        <div className="relative z-10 mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-10">
          <p
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: GOLD }}
          >
            <Newspaper className="size-4" aria-hidden />
            Coverage & stories
          </p>
          <h1
            className={cn(
              "font-playfair mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl",
            )}
          >
            Press &amp; Media
          </h1>
          <p className="mx-auto mt-5 max-w-176 text-base leading-relaxed text-white/90 sm:text-lg">
            Highlights from outlets covering The Lions&apos; Den — open any item to read the full
            piece in a new tab.
          </p>
        </div>
      </section>

      <section
        className="border-t border-white/10 pb-24 pt-12"
        style={{
          background:
            "linear-gradient(180deg, #050a14 0%, #0a192f 55%, #0d1b2e 100%)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {pressArticles.map((item) => (
              <li key={item.id} className="min-w-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b2e]/80 shadow-lg shadow-black/20 transition-colors ring-offset-[#0a192f]",
                    "hover:border-[#D4AF37]/35 hover:bg-[#0f2135]/90",
                    "focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[#D4AF37]",
                  )}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#071018]">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-3 p-6 sm:p-7">
                    <h2 className="font-playfair text-lg leading-snug font-semibold text-white transition-colors group-hover:text-white sm:text-xl">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-400 line-clamp-4 sm:text-base sm:leading-relaxed">
                      {item.description}
                    </p>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#e8c96b]"
                      style={{ color: GOLD }}
                    >
                      Read full article →
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
