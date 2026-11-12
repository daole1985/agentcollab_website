"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import FadeInUp from "./animations/FadeInUp";

export default function About() {
  return (
    <section id="about" className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10 flex flex-col items-center text-center">
        <div className="w-full max-w-[940px] mx-auto">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <Star className="h-3.5 w-3.5" />
              LET'S ELEVATE YOUR PERFORMANCE
            </div>

            {/* Quote */}
            <div>
              <h2 className="mt-8 tracking-[-0.03em] leading-[1.25] text-[rgb(184_199_217_/_50%)] text-2xl md:text-[32px] md:leading-[1.25]">
                We develop self‑driving{" "}
                <span className="font-serif-italic text-[#d5dbe6]">
                  AI agents
                </span>{" "}
                that perceive, act, and continuously fine‑tune your business
                processes in{" "}
                <span className="font-serif-italic text-[#d5dbe6]">
                  real time
                </span>
                , transforming complex operations into intelligent,{" "}
                <span className="font-serif-italic text-[#d5dbe6]">
                  scalable automation
                </span>
                .
              </h2>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Image
                src="/images/ceo.png"
                alt="Founder of agentcollab.ai"
                loading="lazy"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-white/15 object-cover"
              />
              <span>Founder of agentcollab.ai</span>
            </div>
          </FadeInUp>

          {/* Media container */}
          <FadeInUp delay={0.3} className="mt-12 w-full hidden">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative aspect-video overflow-hidden rounded-[28px] border border-white/10"
            >
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="/video/grad-hero.mp4"
              />
            </motion.div>
          </FadeInUp>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
