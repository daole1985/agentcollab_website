"use client";

import { motion } from "motion/react";
import {
  Blocks,
  Sparkles,
  Settings,
  MessageCircle,
  Headphones,
  Spline,
  Zap,
  Globe,
  Share2,
  Database,
  BookOpen,
  TrendingUp,
  PieChart,
  type LucideIcon,
} from "lucide-react";
import FadeInUp from "./animations/FadeInUp";

const features: {
  title: string;
  desc: string;
  left: LucideIcon;
  right: LucideIcon;
}[] = [
  {
    title: "AI Agent Builder",
    desc: "Create, customize, and manage AI agents with flexible roles, behaviors, and workflows.",
    left: Sparkles,
    right: Settings,
  },
  {
    title: "Omnichannel AI Chat",
    desc: "Deliver instant, human-like conversations across web, mobile, and messaging platforms.",
    left: MessageCircle,
    right: Headphones,
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks, approvals, and business processes with intelligent workflows.",
    left: Spline,
    right: Zap,
  },
  {
    title: "Ecosystem Connected",
    desc: "Bridge your favorite applications to automate tasks and boost daily productivity.",
    left: Globe,
    right: Share2,
  },
  {
    title: "AI Knowledge Hub",
    desc: "Centralize documents, FAQs, and company data to power accurate AI responses.",
    left: Database,
    right: BookOpen,
  },
  {
    title: "Analytics & Insights",
    desc: "Track conversations, agent performance, and business outcomes with real-time analytics.",
    left: TrendingUp,
    right: PieChart,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-glow overflow-hidden py-16 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <Blocks className="h-3.5 w-3.5" />
              FEATURES
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                All features in{" "}
                <span className="font-serif-italic">one place</span>
              </span>
            </h2>
          </div>
          <p>
            Build intelligent AI agents that automate support, sales, and
            operations across every customer touchpoint
          </p>
        </FadeInUp>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Left = f.left;
            const Right = f.right;

            return (
              <FadeInUp key={f.title} delay={i * 0.1}>
                <div className="group relative w-full max-w-xl mx-auto md:max-w-none md:mx-0 p-8 flex flex-col items-center bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden text-center">
                  {/* Icon pair area */}
                  <div className="relative w-full h-40 flex items-center justify-center bg-[#04070d] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] overflow-hidden">
                    {/* Light Effect */}
                    <div className="absolute top-0 right-0 z-[1] h-[306px] w-[437px] overflow-hidden pointer-events-none select-none opacity-10 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)]"></div>

                    {/* Icon Container */}
                    <div className="flex items-center gap-2.5 bg-[#10131c] rounded-lg p-3 shadow-[inset_0_1px_1px_rgba(207,231,255,0.2)] z-10 transition-all duration-500 ease-in-out group-hover:scale-[1.1]">
                      <Left
                        className="h-8 w-8 text-[#d5dbe6] opacity-50 transition-all duration-300 group-hover:opacity-100"
                        strokeWidth={1.5}
                      />

                      <div className="h-10 w-px bg-[rgba(216,231,242,0.07)]" />

                      <Right
                        className="h-8 w-8 text-[#d5dbe6] opacity-50 transition-all duration-300 group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-6 flex w-full flex-col items-center gap-2">
                    <h3 className="text-xl font-medium text-white">
                      {f.title}
                    </h3>
                    <p className="leading-relaxed tracking-[-0.02em] opacity-60">
                      {f.desc}
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
