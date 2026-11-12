"use client";

import Image from "next/image";
import { FadeInUp } from "./FadeInUp";
import { GitCompare, X, Check, Layers } from "lucide-react";

const traditional = [
  "Answer-only chatbots",
  "Fragmented customer journeys",
  "Disconnected team tools",
  "Complex technical setup",
  "No actions beyond conversations",
  "Generic AI responses",
  "Limited business insights",
];

const aiPlatform = [
  "Autonomous AI agents",
  "Unified omnichannel experiences",
  "One platform for every team",
  "Fast no-code deployment",
  "Action-driven workflows",
  "Knowledge-powered responses",
  "Real-time business insights",
];

export default function WhyChooseUs() {
  return (
    <section className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <GitCompare className="h-3.5 w-3.5" />
              COMPARISON
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Why Choose Us{" "}
                <span className="font-serif-italic">Over Others</span>
              </span>
            </h2>
          </div>
          <p>See how we compare against others in performance, growth</p>
        </FadeInUp>
        <div className="mt-10 lg:mt-14 grid md:grid-cols-2 gap-6">
          <FadeInUp className="flex flex-col gap-5">
            <div className="w-full h-10 flex items-center justify-center gap-2">
              <Image
                src="/images/logo-icon.png"
                alt="agentcollab"
                width={48}
                height={32}
                style={{
                  height: "24px",
                  width: "auto",
                }}
              />
              <Image
                src="/images/logo.png"
                alt="agentcollab"
                width={150}
                height={24}
                style={{
                  height: "20px",
                  width: "auto",
                }}
              />
            </div>
            <div className="relative h-full p-6 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden">
              <div className="absolute inset-0 transition-opacity duration-300 pointer-events-none select-none bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)] group-hover:opacity-30 opacity-30"></div>
              <ul className="space-y-3 md:space-y-4 opacity-70">
                {aiPlatform.map((t, i) => (
                  <li key={t} className="relative flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      <Check size={16} color="#03a9f4" />
                      <span className="text-white">{t}</span>
                    </div>
                    {i !== traditional.length - 1 && (
                      <span className="block w-full h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15} className="flex flex-col gap-5">
            <div className="w-full h-10 flex items-center justify-center gap-2">
              <Layers size={24} />
              <span className="pr-1 font-serif-italic text-2xl font-medium text-gradient-section">
                Others
              </span>
            </div>
            <div className="h-full p-6 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden">
              <ul className="space-y-3 md:space-y-4 opacity-70">
                {traditional.map((t, i) => (
                  <li key={t} className="relative flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      <X size={16} />
                      <span>{t}</span>
                    </div>
                    {i !== traditional.length - 1 && (
                      <span className="block w-full h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
