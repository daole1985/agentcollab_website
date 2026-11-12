"use client";

import FadeInUp from "@/app/components/animations/FadeInUp";
import GlowButton from "@/app/components/GlowButton";
import { Rocket, ArrowUpRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center">
          <FadeInUp className="max-w-xl mx-auto flex flex-col items-center gap-2.5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
                <Rocket className="h-3.5 w-3.5" />
                OPPORTUNITY
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
                <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                  Ready to{" "}
                  <span className="font-serif-italic">Start Earning</span> ?
                </span>
              </h2>
            </div>
            <p>
              Don't miss the chance to become an Agentcollab affiliate and grow
              your income with a platform trusted by thousands of users.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2} className="mt-6">
            <GlowButton
              target="_blank"
              href="https://ai.cibot-sandbox.byte.vn/app/affiliate/register"
              endIcon={<ArrowUpRight size={18} />}
            >
              Join Now
            </GlowButton>
          </FadeInUp>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
