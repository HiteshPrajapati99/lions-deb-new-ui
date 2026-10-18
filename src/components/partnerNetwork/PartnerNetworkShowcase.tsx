import { Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

import offbeetLogo from "@/assets/partner-network/1.png";
import ddNationalLogo from "@/assets/partner-network/2.png";
import wavesLogo from "@/assets/partner-network/2.1.png";
import exclusiveRadioLogo from "@/assets/partner-network/3.png";
import usaRadioLogo from "@/assets/partner-network/4.png";
import arthayanLogo6 from "@/assets/partner-network/6.png";
import ipLogo from "@/assets/partner-network/ip.png";

const GOLD = "#D4AF37";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-[0.2em]"
      style={{ color: GOLD }}
    >
      {children}
    </p>
  );
}

function PartnerLogoBox({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-30 w-full items-center justify-center px-6 py-8",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-20 w-auto max-w-full object-contain"
      />
    </div>
  );
}

export default function PartnerNetworkShowcase() {
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
            <Handshake className="size-4" aria-hidden />
            Collaborations
          </p>
          <h1
            className={cn(
              "font-playfair mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl",
            )}
          >
            Partner Network
          </h1>
          <p className="mx-auto mt-5 max-w-176 text-base leading-relaxed text-white/90 sm:text-lg">
            The organisations and platforms amplifying Lions Den — from
            production and distribution to ecosystem and broadcast partners.
          </p>
        </div>
      </section>

      <section
        className="border-t border-white/10 pb-20 pt-12"
        style={{
          background:
            "linear-gradient(180deg, #050a14 0%, #0a192f 55%, #0d1b2e 100%)",
        }}
      >
        <div className="mx-auto max-w-[1200px] space-y-14 px-4 sm:px-6 lg:px-10">
          <div>
            <SectionLabel>Strategic partners</SectionLabel>
            <h2
              className={cn(
                "font-playfair mt-2 text-2xl font-semibold text-white sm:text-3xl",
              )}
            >
              Production, ecosystem & media
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Core partners helping us bring the show to audiences and support
              founders beyond the screen.
            </p>

            <div className="mt-10 space-y-6">
              <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                <div className="border-b border-neutral-100 bg-neutral-50/80 px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#64748b]">
                    Production &amp; distribution partner
                  </p>
                  <h3
                    className={cn(
                      "font-playfair mt-1 text-xl font-semibold text-neutral-900",
                    )}
                  >
                    Offbeet Media
                  </h3>
                </div>
                <PartnerLogoBox src={offbeetLogo} alt="Offbeet Media logo" />
                <div className="border-t border-neutral-100 px-6 py-6">
                  <p className="text-sm leading-relaxed text-neutral-600">
                    A Next-Gen Media and Entertainment company on a mission to
                    tell riveting stories through its media brands portfolio and
                    cutting-edge marcom solutions. Companies media brand
                    portfolio has — 101India, US Premier League and Offbeet
                    Studios.
                  </p>
                </div>
              </article>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#64748b]">
                  Season 01 Distribution Channels
                </p>
                <div className="mt-4 grid gap-6 lg:grid-cols-2">
                  <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                    <PartnerLogoBox
                      src={ddNationalLogo}
                      alt="DD National logo"
                    />
                    <div className="border-t border-neutral-100 px-6 py-6">
                      <p className="text-sm leading-relaxed text-neutral-600">
                        DD National (formerly DD1) is India&apos;s state-owned
                        flagship public service entertainment television
                        channel. Launched on September 15, 1959, it is the
                        oldest and most widely available television channel in
                        the country, reaching approximately 92% of the Indian
                        population
                      </p>
                    </div>
                  </article>
                  <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                    <PartnerLogoBox src={wavesLogo} alt="Waves logo" />
                    <div className="border-t border-neutral-100 px-6 py-6">
                      <p className="text-sm leading-relaxed text-neutral-600">
                        Waves is the official Over-The-Top (OTT) streaming
                        platform launched by Prasar Bharati, India&apos;s
                        national public broadcaster. Introduced in November
                        2024, it is designed as a &quot;one-stop
                        destination&quot; for clean, family-oriented
                        entertainment, including live TV, movies, and a large
                        archive of classic Doordarshan content.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                <div className="border-b border-neutral-100 bg-neutral-50/80 px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#64748b]">
                    Startup ecosystem partners
                  </p>
                  {/* <h3
                    className={cn(
                      "font-playfair mt-1 text-xl font-semibold text-neutral-900",
                    )}
                  >
                    Arthayan
                  </h3> */}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-8">
                  <img
                    src={arthayanLogo6}
                    alt="Arthayan logo"
                    className="w-44 max-h-44 object-contain"
                  />
                  <img
                    src={ipLogo}
                    alt="IP logo"
                    className="w-44 max-h-44 object-contain"
                  />
                </div>

                {/* <div className="border-t border-neutral-100 px-6 py-6">
                  <p className="text-sm leading-relaxed text-neutral-600">
                    Arthayan is an entrepreneurship ecosystem enabler with a
                    powerful network of investors, incubators, mentors, and
                    corporates, helping promising founders and companies access
                    capital, mentorship, and growth programmes.
                  </p>
                </div> */}
              </article>
            </div>
          </div>

          <div>
            <SectionLabel>Broadcast</SectionLabel>
            <h2
              className={cn(
                "font-playfair mt-2 text-2xl font-semibold text-white sm:text-3xl",
              )}
            >
              Radio partners
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <article className="flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                <div className="border-b border-neutral-100 bg-neutral-50/80 px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#64748b]">
                    Exclusive radio partner
                  </p>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-6 py-10">
                  <PartnerLogoBox
                    src={exclusiveRadioLogo}
                    alt="Exclusive radio partner logo"
                    className="min-h-0 py-4"
                  />
                </div>
              </article>

              <article className="flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                <div className="border-b border-neutral-100 bg-neutral-50/80 px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#64748b]">
                    USA radio partner
                  </p>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-6 py-10">
                  <PartnerLogoBox
                    src={usaRadioLogo}
                    alt="USA radio partner logo"
                    className="min-h-0 py-4"
                  />
                </div>
              </article>
            </div>
          </div>

          {/* <div>
            <SectionLabel>Season 01</SectionLabel>
            <h2
              className={cn(
                "font-playfair mt-2 text-2xl font-semibold text-white sm:text-3xl",
              )}
            >
              Our Startups
            </h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Startups Featured in Season 01 :
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}
