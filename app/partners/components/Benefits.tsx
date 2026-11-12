"use client";

import FadeInUp from "@/app/components/animations/FadeInUp";
import { Gem, Zap, Handshake, Percent } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Easy to Launch",
    desc: "Launch AI solutions quickly with minimal setup and start scaling your business faster.",
  },
  {
    icon: Handshake,
    title: "Comprehensive Support",
    desc: "Access training, technical guidance, and ongoing support for long-term growth.",
  },
  {
    icon: Percent,
    title: "Transparent Commission Policy",
    desc: "Benefit from a clear and flexible revenue-sharing model designed for mutual success.",
  },
];

const cardClass =
  "group relative p-8 flex flex-col items-center bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden text-center";

export default function Benefits() {
  return (
    <section
      id="benefit"
      className="section-glow overflow-hidden py-16 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-2xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <Gem className="h-3.5 w-3.5" />
              BENEFITS
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Why Affiliate with{" "}
                <span className="font-serif-italic">Agentcollab</span>?
              </span>
            </h2>
          </div>
          <p>
            Turn your engaged communities and social audiences into revenue with
            Agentcollab while building a sustainable, value-driven ecosystem.
          </p>
        </FadeInUp>
        <div className="mt-10 lg:mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <FadeInUp key={b.title} delay={i * 0.1}>
                <div className={cardClass + " h-full"}>
                  <div className="flex items-center gap-2.5 bg-[#10131c] rounded-lg p-3 shadow-[inset_0_1px_1px_rgba(207,231,255,0.2)] z-10 transition-all duration-500 ease-in-out group-hover:scale-[1.1]">
                    <Icon className="h-8 w-8 text-[#d5dbe6] opacity-50 transition-all duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="relative z-10 pt-6 flex w-full flex-col items-center gap-2">
                    <h3 className="text-xl font-medium text-white">
                      {b.title}
                    </h3>
                    <p className="leading-relaxed tracking-[-0.02em] opacity-60">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
