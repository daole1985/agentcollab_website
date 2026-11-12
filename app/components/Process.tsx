"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import FadeInUp from "./animations/FadeInUp";
import {
  Route,
  Search,
  ShieldCheck,
  Cpu,
  MessageSquare,
  Gauge,
  ClipboardCheck,
  FileText,
  Repeat,
  Cloud,
  ArrowLeft,
  ArrowRight,
  FolderOpen,
  Minus,
  X,
  Settings,
  Filter,
  ArrowUp,
  Check,
} from "lucide-react";

function ConsultationVisual() {
  const items = [
    {
      icon: ShieldCheck,
      label: "System check",
    },
    {
      icon: Cpu,
      label: "Process check",
    },
    {
      icon: Gauge,
      label: "Speed check",
    },
    {
      icon: ClipboardCheck,
      label: "Manual work",
    },
    {
      icon: Repeat,
      label: "Repetitive task",
    },
  ];
  return (
    <div className="w-full h-full grid grid-cols-2 gap-2">
      {/* Radar */}
      <div className="relative overflow-hidden bg-[#04070d] border border-[rgba(216,231,242,0.07)]">
        <div className="relative h-full flex flex-col items-center justify-center gap-4 text-center">
          <div className="absolute top-0 right-0 z-[1] h-[306px] w-[437px] overflow-hidden pointer-events-none select-none opacity-10 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)]"></div>
          {/* Radar rings */}
          <div className="relative h-[110px] w-[110px] overflow-hidden rounded-full border border-[#4078a830]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 origin-center"
            >
              <div
                className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(166,218,255,0)_329.73deg,rgba(64,120,168,0.45)_337.076deg,rgba(166,218,255,0.95)_360deg)]"
                style={{
                  clipPath: "polygon(50% 50%, 0 0, 100% 0)",
                  filter: "blur(1px)",
                }}
              />
            </motion.div>
          </div>
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-xs text-white"
          >
            Analyzing current workflow...
          </motion.div>
        </div>
      </div>

      {/* Checklist */}
      <div className="flex flex-col gap-2 p-2 bg-[#04070d] border border-[rgba(216,231,242,0.07)]">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              animate={{ opacity: [0.45, 1, 0.45], x: [0, 4, 0] }}
              transition={{
                duration: 2.5,
                delay: index * 0.2,
                repeat: Infinity,
              }}
              className="flex h-6 items-center gap-2 border border-[#4078a830] bg-[#10131c]/95 px-1.5 shadow-[0_0_20px_rgba(64,120,168,0.12)] backdrop-blur-sm"
            >
              <Icon size={14} style={{ color: "#a6daff" }} />
              <span className="text-[10px] lg:text-xs">{item.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function DevelopmentVisual() {
  const codeContent = (
    <div className="flex flex-col select-none">
      <div>
        <span className="text-[#4078a8]">class</span>{" "}
        <span className="text-white">AIAssistant</span>:
      </div>

      <div className="pl-6">
        <span className="text-[#4078a8]">def</span> __init__(self, model):
      </div>

      <div className="pl-12">self.model = model</div>

      <div className="pl-12">self.confidence = 0.0</div>

      <br />

      <div className="pl-6">
        <span className="text-[#4078a8]">def</span> analyze(self, data):
      </div>

      <div className="pl-12">features = extract_features(data)</div>

      <div className="pl-12">prediction = self.model.predict(features)</div>

      <div className="pl-12">self.confidence = prediction.score</div>

      <div className="pl-12">return prediction.label</div>

      <br />

      <div>
        <span className="text-[#4078a8]">class</span>{" "}
        <span className="text-white">WorkflowEngine</span>:
      </div>

      <div className="pl-6">
        <span className="text-[#4078a8]">def</span> automate(self, result):
      </div>

      <div className="pl-12">if result == "approve":</div>

      <div className="pl-16">dispatch_task()</div>

      <div className="pl-12">else:</div>

      <div className="pl-16">request_review()</div>

      <br />

      <div>
        <span className="text-[#4078a8]">def</span> run_pipeline():
      </div>

      <div className="pl-6">assistant = AIAssistant(ai_model)</div>

      <div className="pl-6">result = assistant.analyze(customer_data)</div>

      <div className="pl-6">WorkflowEngine().automate(result)</div>

      <br />

      <div>
        <span className="text-[#a6daff]">return</span>{" "}
        <span className="text-white">"AI workflow completed"</span>
      </div>

      <br />
    </div>
  );

  return (
    <div className="relative w-full h-full overflow-hidden border border-[rgba(216,231,242,0.07)] flex flex-col">
      {/* Browser Header */}
      <div className="flex h-6 shrink-0 items-center justify-between bg-[#10131c] border-b border-[rgba(216,231,242,0.07)] px-3">
        <div className="flex items-center gap-1">
          <ArrowLeft className="h-3 w-3" strokeWidth={1.75} />
          <ArrowRight className="h-3 w-3" strokeWidth={1.75} />
        </div>

        <div className="h-2.5 w-24 rounded-full bg-white/[0.06]" />

        <div className="flex items-center gap-1.5">
          <FolderOpen className="h-2.5 w-2.5" strokeWidth={1.75} />
          <Minus className="h-3.5 w-3.5" strokeWidth={1.75} />
          <X className="h-3.5 w-3.5" strokeWidth={1.75} />
        </div>
      </div>

      {/* Content */}
      <div className="relative grow-1 flex">
        {/* Sidebar */}
        <div className="flex w-10 flex-col items-center gap-4 bg-[#10131c] border-r border-[rgba(216,231,242,0.07)] pt-4">
          <FileText size={17} strokeWidth={1.7} />
          <Search size={17} strokeWidth={1.7} />
          <Cloud size={17} strokeWidth={1.7} />
        </div>

        {/* Code */}
        <div className="relative flex-1 overflow-hidden px-4 py-4 font-mono text-xs leading-6">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col"
          >
            {codeContent}
            {codeContent}
          </motion.div>

          {/* Top Fade */}
          <div
            className="absolute left-0 top-0 h-12 w-full pointer-events-none z-10"
            style={{
              background: "linear-gradient(to bottom, #04070d, rgba(4,7,13,0))",
            }}
          />

          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 h-12 w-full pointer-events-none z-10"
            style={{
              background: "linear-gradient(to top, #04070d, rgba(4,7,13,0))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function IntegrationVisual() {
  const channels = [
    {
      name: "Gmail",
      image: "/images/gmail.svg",
    },
    {
      name: "Slack",
      image: "/images/slack.svg",
    },
    {
      name: "Zalo",
      image: "/images/zalo.svg",
    },
    {
      name: "Telegram",
      image: "/images/telegram.svg",
    },
    {
      name: "Zoho",
      image: "/images/zoho.svg",
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % channels.length);
    }, 4000); // đổi logo mỗi 4 giây

    return () => clearInterval(interval);
  }, [channels.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
      <div className="absolute top-0 right-0 z-[1] h-[306px] w-[437px] overflow-hidden pointer-events-none select-none opacity-10 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)]"></div>
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-40 blur-3xl"
        animate={{
          x: ["-15%", "15%", "-15%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(circle at 30% 50%, rgba(166,218,255,0.10) 0%, transparent 45%),
            radial-gradient(circle at 70% 50%, rgba(64,120,168,0.12) 0%, transparent 45%)
          `,
        }}
      />

      <div className="w-full max-w-[220px] mx-auto h-full flex items-center justify-between">
        {/* Left */}
        <div className="w-16 h-16 shrink-0">
          <div className="flex h-16 w-16 items-center justify-center bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
            <motion.img
              src="/images/logo-icon.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.75, 1],
              }}
            />
          </div>

          <p className="mt-2 text-center text-[10px]">Our solution</p>
        </div>
        {/* Connection Lines */}
        <div className="grow h-7 flex flex-col justify-between">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative h-[2px] overflow-hidden">
              {/* Line nền */}
              <div className="absolute inset-0 bg-[rgba(216,231,242,0.07)]" />

              {/* Vệt sáng chạy */}
              <motion.div
                className="absolute top-0 h-[2px] w-5"
                style={{
                  background: `linear-gradient(90deg, rgba(216,231,242,0.07) 0%, rgb(166, 218, 255, 0.7) 100%)`,
                  boxShadow: `0 0 6px rgba(166,218,255,0.35), 0 0 12px rgba(166,218,255,0.15)`,
                }}
                initial={{ x: "-50px" }}
                animate={{ x: "calc(100% + 100px)" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="w-16 h-16 shrink-0">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
            <div className="relative h-10 w-10 overflow-hidden">
              <AnimatePresence initial={false} mode="sync">
                <motion.img
                  key={active}
                  src={channels[active].image}
                  alt={channels[active].name}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-10 w-10 object-contain"
                />
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-2 text-center text-[10px]">Your stack</p>
        </div>
      </div>
    </div>
  );
}

function OptimizationVisual() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] p-3">
      <div className="absolute top-0 right-0 z-[1] h-[306px] w-[437px] overflow-hidden pointer-events-none select-none opacity-10 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)]"></div>
      <div className="space-y-[9px]">
        {/* Item 1 */}
        <div className="flex items-center justify-between bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] px-2 py-1.5">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
              <MessageSquare className="h-4 w-4" />
            </div>

            <div className="text-white">
              <p className="text-xs font-medium">Chatbot system</p>
              <p className="text-[10px]">Efficiency will increase by 20%</p>
            </div>
          </div>

          {/* vòng tròn quay liên tục */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative flex h-4 w-4 items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#a6daff] border-r-[#a6daff] border-b-[#a6daff]" />
          </motion.div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-between bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] px-2 py-1.5">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
              <Settings className="h-4 w-4" />
            </div>

            <div className="text-white">
              <p className="text-xs font-medium">Workflow system</p>
              <p className="text-[10px]">Update available...</p>
            </div>
          </div>

          {/* mũi tên chạy từ dưới lên mỗi 2s */}
          <div className="relative flex h-6 w-6 items-center justify-center">
            <motion.div
              animate={{
                y: [8, 0, -8],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="h-4 w-4 text-[#a6daff]" />
            </motion.div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-between bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] px-2 py-1.5">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
              <Filter className="h-4 w-4" />
            </div>

            <div className="text-white">
              <p className="text-xs font-medium">Sales system</p>
              <p className="text-[10px]">Up to date</p>
            </div>
          </div>

          {/* check hiện lại mỗi 2s */}
          <motion.div
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Check className="h-5 w-5 text-[#a6daff]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    no: "Step 1",
    visual: <ConsultationVisual />,
    title: "Smart Analyzing",
    desc: "We assess your needs and identify AI solutions to streamline workflows and improve efficiency.",
  },
  {
    no: "Step 2",
    visual: <DevelopmentVisual />,
    title: "AI Development",
    desc: "Our team builds intelligent automation systems tailored to your business processes.",
  },
  {
    no: "Step 3",
    visual: <IntegrationVisual />,
    title: "Seamless Integration",
    desc: "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
  },
  {
    no: "Step 4",
    visual: <OptimizationVisual />,
    title: "Continuous Optimization",
    desc: "We refine performance, analyze insights, and enhance automation for long-term growth.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-glow overflow-hidden py-16 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <Route className="h-3.5 w-3.5" />
              PROCESS
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Our Simple &{" "}
                <span className="font-serif-italic">Smart Process</span>
              </span>
            </h2>
          </div>
          <p>Build your AI agent system in 4 simple steps</p>
        </FadeInUp>
        <div className="mt-10 lg:mt-14 w-full max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.no}
                className="p-5 lg:p-8 bg-[#04070d] rounded-2xl border border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset]"
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
