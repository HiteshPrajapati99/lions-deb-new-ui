import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  Users,
  MapPin,
  TrendingUp,
  Handshake,
  GraduationCap,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const impactStats = [
  {
    icon: Users,
    iconBg: "bg-[#C5A059]/25",
    iconColor: "text-[#C5A059]",
    value: "500+",
    label: "Entrepreneurs",
  },
  {
    icon: MapPin,
    iconBg: "bg-[#F26522]/25",
    iconColor: "text-[#F26522]",
    value: "30+",
    label: "Cities",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-500/25",
    iconColor: "text-emerald-400",
    value: "68%",
    label: "Success Rate",
  },
  {
    icon: Handshake,
    iconBg: "bg-[#C5A059]/25",
    iconColor: "text-[#C5A059]",
    value: "20+",
    label: "Deals Closed",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-[#F26522]/25",
    iconColor: "text-[#F26522]",
    value: "10+",
    label: "Mentors",
  },
  {
    icon: Eye,
    iconBg: "bg-emerald-500/25",
    iconColor: "text-emerald-400",
    value: "5M+",
    label: "Overall Views",
  },
];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B32] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className={cn(
              playfair.className,
              "mb-3 text-3xl font-semibold tracking-tight sm:text-4xl",
            )}
          >
            Impact That Speaks Volumes
          </h2>
          <p className="mx-auto max-w-lg text-sm text-[#94A3B8]">
            Our reach and influence across the continent and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map(
            ({ icon: Icon, iconBg, iconColor, value, label }) => (
              <div
                key={label}
                className="rounded-[10px] border border-white/10 bg-[#0d233f]/80 px-6 py-6 backdrop-blur-sm"
              >
                <div
                  className={cn(
                    "mb-4 flex h-11 w-11 items-center justify-center rounded-lg",
                    iconBg,
                  )}
                >
                  <Icon className={cn("h-5 w-5", iconColor)} strokeWidth={2} />
                </div>
                <p
                  className={cn(
                    playfair.className,
                    "text-3xl font-semibold tracking-tight text-white",
                  )}
                >
                  {value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
                  {label}
                </p>
              </div>
            ),
          )}
        </div>

        {/* <div className="mt-12 flex flex-col items-stretch justify-between gap-4 rounded-[10px] border border-white/10 bg-[#061020] px-6 py-6 sm:flex-row sm:items-center sm:px-10">
          <p className="text-center text-sm font-medium text-white sm:text-left">
            Ready to take your business to the next level?
          </p>
          <Button className="h-11 shrink-0 rounded-[10px] bg-[#F26522] px-8 text-sm font-bold text-white hover:bg-[#e05518]">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
