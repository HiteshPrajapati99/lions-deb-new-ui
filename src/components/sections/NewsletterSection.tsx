"use client";

import { Playfair_Display } from "next/font/google";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const features = [
  "Weekly Newsletter",
  "Exclusive Content",
  "Early Access",
  "Behind the Scenes",
];

const stats = [
  { value: "100k+", label: "Subscribers" },
  { value: "50k+", label: "Followers" },
  { value: "10k+", label: "Members" },
];

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-amber-300 via-[#F26522] to-orange-700 py-20">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.25rem] border border-white/25 bg-white/15 p-8 shadow-2xl backdrop-blur-md md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/25 ring-2 ring-white/30">
            <span className={cn(playfair.className, "text-xl font-semibold text-white")}>LD</span>
          </div>

          <h2
            className={cn(
              playfair.className,
              "mb-6 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
            )}
          >
            Stay in the Loop
          </h2>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5"
              >
                <Check className="h-4 w-4 shrink-0 text-white" strokeWidth={3} />
                <span className="text-xs font-semibold text-white">{f}</span>
              </div>
            ))}
          </div>

          <form
            className="mx-auto mb-6 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              required
              placeholder="Enter your email address"
              className="h-12 flex-1 rounded-[10px] border-white/30 bg-white/95 text-gray-900 placeholder:text-gray-500 focus-visible:ring-[#C5A059]"
            />
            <Button
              type="submit"
              className="h-12 shrink-0 rounded-[10px] bg-[#1a1a1a] px-8 text-sm font-bold text-white hover:bg-black"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-lg font-black text-white">{s.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
