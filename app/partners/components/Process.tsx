"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import FadeInUp from "@/app/components/animations/FadeInUp";
import GlowButton from "@/app/components/GlowButton";
import {
  Route,
  CircleDollarSign,
  ArrowUpRight,
  Sparkles,
  Link2,
  Copy,
  Globe,
  MessageCircle,
  Users,
  FileText,
  BarChart3,
  TrendingUp,
  DollarSign,
  UserPlus,
  ShieldCheck,
  BadgeCheck,
  Share2,
  CheckCircle2,
} from "lucide-react";

function AffiliateAccountVisual() {
  const steps = [
    { title: "Create Affiliate Account", icon: UserPlus, done: true },
    { title: "Complete Affiliate Profile", icon: BadgeCheck, done: true },
    { title: "Get Approved", icon: ShieldCheck, done: true },
    { title: "Start Earning Commissions", icon: DollarSign, done: false },
  ];

  const items = [...steps, ...steps];

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] p-3">
      <div className="absolute top-0 right-0 z-[1] h-[306px] w-[437px] overflow-hidden pointer-events-none select-none opacity-10 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)]"></div>

      <div
        className="relative max-h-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <motion.div
          className="space-y-3"
          animate={{ y: ["0rem", "-14rem"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="h-11 flex items-center justify-between bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] px-2"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
                    <Icon size={16} />
                  </div>

                  <span className="text-xs font-medium text-[#d5dbe6]">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-md border ${item.done ? "border-[#4078a840]" : "border-[#a6daff30]"}`}
                >
                  {item.done ? (
                    <svg
                      className="h-3.5 w-3.5 text-[#a6daff]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-2.5 w-2.5 rounded-full bg-[#a6daff] shadow-[0_0_12px_rgba(64,120,168,0.8)]"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

function ReferralIllustration() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] p-3">
      <div className="absolute top-0 right-0 z-[1] h-[306px] w-[437px] overflow-hidden pointer-events-none select-none opacity-10 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)]" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full"
      >
        <div className="group relative">
          {/* Link Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative rounded-lg px-3 py-4 border border-[rgba(216,231,242,0.07)] shadow-[inset_0_1px_1px_rgba(207,231,255,0.2)]"
          >
            <div className="flex items-center justify-between gap-3">
              <motion.div
                className="flex h-8 w-8 items-center justify-center"
                animate={{
                  rotate: [0, -8, 8, -4, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Link2 className="h-5 w-5 text-[#a6daff]" />
              </motion.div>

              <span className="block truncate text-sm text-[#a6daff]">
                https://agentcollab.ai/register?ref=AF45VSIRL9
              </span>

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-[#10131c] rounded-lg p-3 shadow-[inset_0_1px_1px_rgba(207,231,255,0.2)]"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://agentcollab.ai/register?ref=AF45VSIRL9",
                  )
                }
              >
                <Copy className="h-4 w-4 text-[#d5dbe6]" />
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Cards */}
          <motion.div
            className="mt-3 grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.35,
                },
              },
            }}
          >
            {/* Marketing Kit */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="rounded-lg p-3 border border-[rgba(216,231,242,0.07)] text-[10px] lg:text-xs"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#a6daff]" />
                <p className="text-[#a6daff]/60">Marketing Kit</p>
              </div>

              <div className="mt-2 ml-0.5 flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-[#a6daff]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <span className="text-[#d5dbe6]">Ready to Use</span>
              </div>
            </motion.div>

            {/* Referral Status */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="rounded-lg p-3 border border-[rgba(216,231,242,0.07)] text-[10px] lg:text-xs"
            >
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-[#a6daff]" />
                <p className="text-[#a6daff]/60">Referral Status</p>
              </div>

              <div className="mt-2 ml-0.5 flex items-center gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <CheckCircle2 className="h-4 w-4 text-[#6ee7b7]" />
                </motion.div>

                <span className="text-[#d5dbe6]">Active Link</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function ReferCustomersIllustration() {
  const channels = [
    { icon: MessageCircle, label: "Social", side: "left", top: "top-0", y: 42 },
    { icon: FileText, label: "Blog", side: "left", top: "bottom-0", y: 138 },
    { icon: Globe, label: "Website", side: "right", top: "top-0", y: 42 },
    { icon: Users, label: "Community", side: "right", top: "bottom-0", y: 138 },
  ];

  return (
    <motion.div className="relative w-full h-full overflow-hidden bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] p-3">
      <div className="absolute top-0 right-0 z-[1] h-[306px] w-[437px] overflow-hidden pointer-events-none select-none opacity-10 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)]" />
      <div className="absolute z-10 top-[10%] left-1/2 -translate-x-1/2 h-[80%] w-[90%] max-w-[300px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 340 180"
          fill="none"
        >
          {[
            // Left
            "M36 26 L152 90",
            "M36 154 L152 90",

            // Right
            "M304 26 L188 90",
            "M304 154 L188 90",
          ].map((d, i) => (
            <g key={i}>
              {/* Running light */}
              <motion.path
                d={d}
                stroke="#A6DAFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="70 180"
                strokeOpacity={0.45}
                initial={{
                  strokeDashoffset: 250,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(166,218,255,0.35))",
                }}
              />
            </g>
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 z-20 w-40 -translate-x-1/2 -translate-y-1/2 z-0">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="rounded-2xl border border-[#4078a830] bg-gradient-to-br from-[#4078a8]/15 to-[#a6daff]/5 p-3 backdrop-blur-xl shadow-[0_0_30px_rgba(166,218,255,.08)]">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center">
                  <Link2 className="h-5 w-5 text-[#a6daff]" />
                </div>
                <div className="text-xs uppercase tracking-wider">
                  Referral Link
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {channels.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.label}
              className={`absolute ${c.side === "left" ? "left-0" : "right-0"} ${c.top} z-5`}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-[#10131c] rounded-lg p-3 shadow-[inset_0_1px_1px_rgba(207,231,255,0.2)]">
                  <Icon className="h-5 w-5 text-[#a6daff]" />
                </div>
                <span className="mt-1 text-[10px] text-[#a6daff]/65">
                  {c.label}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function TrackPerformanceIllustration() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] p-3">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(50%_50%_at_90%_10%,rgba(166,218,255,0.25)_0%,rgba(4,7,13,0)_100%)] opacity-40" />

      <div className="w-full h-full flex flex-col justify-center pb-3 lg:pt-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2">
          {["Live Performance", "Recurring Rewards", "Referral Analytics"].map(
            (item) => (
              <div
                key={item}
                className="relative overflow-hidden text-xs px-3 py-2 no-underline bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]"
              >
                {item}
              </div>
            ),
          )}
        </div>

        {/* Chart */}
        <div className="flex-1 pt-3 h-24">
          <svg viewBox="0 0 600 180" className="h-full w-full" fill="none">
            <motion.path
              d="M0 150
                 C80 120,100 60,160 80
                 C220 100,260 30,320 60
                 C380 90,430 20,500 50
                 C540 70,570 30,600 10"
              stroke="#a6daff"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
              }}
            />

            <motion.circle
              r="8"
              fill="#a6daff"
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M0 150 C80 120,100 60,160 80 C220 100,260 30,320 60 C380 90,430 20,500 50 C540 70,570 30,600 10"
              />
            </motion.circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    no: "Step 1",
    visual: <AffiliateAccountVisual />,
    title: "Create Your Affiliate Account",
    desc: "Sign up as an Agentcollab affiliate and complete your profile to get started within minutes.",
  },
  {
    no: "Step 2",
    visual: <ReferralIllustration />,
    title: "Get Your Referral Link",
    desc: "Receive your unique referral link and access marketing resources to promote Agentcollab effectively.",
  },
  {
    no: "Step 3",
    visual: <ReferCustomersIllustration />,
    title: "Refer New Customers",
    desc: "Share your referral link through social media, websites, blogs, communities, and other channels.",
  },
  {
    no: "Step 4",
    visual: <TrackPerformanceIllustration />,
    title: "Track Performance & Earn",
    desc: "Monitor referrals in real time and earn a 30% lifetime commission for every successful customer.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-glow overflow-hidden py-16 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-lg mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <Route className="h-3.5 w-3.5" />
              PROCESS
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                How to Join{" "}
                <span className="font-serif-italic">Agentcollab</span>
              </span>
            </h2>
          </div>
          <p>
            A streamlined process designed to help affiliates get started
            quickly and build a stable income.
          </p>
        </FadeInUp>
        <div className="mt-10 lg:mt-14 w-full max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.no}
                className="p-5 lg:p-8 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset]"
              >
                {/* Header */}
                <div className="inline-flex px-3 py-1 text-sm text-white bg-[#10131c] rounded-lg p-3 shadow-[inset_0_1px_1px_rgba(207,231,255,0.2)]">
                  {step.no}
                </div>

                <h3 className="mt-3 text-xl font-medium text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed tracking-[-0.02em] opacity-60">
                  {step.desc}
                </p>

                {/* Visual */}
                <div className="mt-8 h-[180px]">
                  <FadeInUp delay={index * 0.15} className="h-full w-full">
                    {step.visual}
                  </FadeInUp>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
