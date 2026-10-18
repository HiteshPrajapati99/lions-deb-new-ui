import {
  Users,
  MapPin,
  TrendingUp,
  Handshake,
  GraduationCap,
  Eye,
} from "lucide-react";

const impactStats = [
  {
    icon: Users,
    value: "500+",
    label: "Entrepreneurs",
    description: "Ambitious founders from across India and beyond",
  },
  {
    icon: MapPin,
    value: "30+",
    label: "Cities",
    description: "Discovering innovation nationwide",
  },
  {
    icon: TrendingUp,
    value: "68%",
    label: "Success Rate",
    description: "Startups that secure funding or strategic support",
  },
  {
    icon: Handshake,
    value: "20+",
    label: "Deals Closed",
    description: "Turning ideas into real opportunities",
  },
  {
    icon: GraduationCap,
    value: "10+",
    label: "Mentors",
    description: "Industry leaders guiding the next generation",
  },
  {
    icon: Eye,
    value: "20M+",
    label: "Overall Views",
    description: "Stories that inspire across platforms",
  },
];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F6F1] bg-[url('/background.png')] bg-cover bg-right bg-no-repeat py-10 md:py-12">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center md:mb-8">
          <div className="mb-2 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#C5A059]/60" aria-hidden />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#5B6472] md:text-xs">
              Our Impact
            </span>
            <span className="h-px w-12 bg-[#C5A059]/60" aria-hidden />
          </div>
          <h2 className="font-playfair text-3xl font-bold tracking-tight text-[#0B1B32] md:text-4xl">
            Impact That Speaks Volumes
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500 md:text-base">
            Our reach and influence across the continent and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              tabIndex={0}
              className="group relative isolate overflow-hidden rounded-lg border border-gray-200/90 bg-white px-5 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)] outline-none transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#0B1726] hover:shadow-[0_22px_45px_-20px_rgba(11,23,38,0.7)] focus-visible:-translate-y-1 focus-visible:border-[#0B1726] focus-visible:ring-2 focus-visible:ring-[#C5A059]/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* Navy fill that rises from the bottom on hover */}
              <span
                className="pointer-events-none absolute inset-0 -z-10 origin-bottom scale-y-0 bg-[#0B1726] transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
                aria-hidden
              />

              <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-[#F3EADB] transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white/15 group-focus-visible:bg-white/15">
                <Icon
                  className="size-5 text-[#B08A4F] transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:text-[#E9DCC4] group-focus-visible:text-[#E9DCC4]"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <p className="font-playfair text-3xl font-medium leading-tight text-[#0B1B32] transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:text-[2.5rem]">
                {value}
              </p>
              <p className="text-sm uppercase tracking-[0.08em] text-[#4B5563] transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:text-base">
                {label}
              </p>
              <span
                className="mt-1.5 block h-px w-7 bg-[#C5A059] transition-all duration-500 ease-out group-hover:w-14 group-focus-visible:w-14"
                aria-hidden
              />
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-gray-300 group-focus-visible:text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
