"use client";

import { motion, type Variants } from "motion/react";
import ParticlesBackground from "./ParticlesBackground";
import { Sparkles, ChevronDown, ArrowUpRight } from "lucide-react";
import GlowButton from "./GlowButton";

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = 80;

    const y =
      element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  const scrollNext = () => scrollTo("about");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-32"
    >
      {/* Video background */}
      <div className="absolute inset-[0px_0px_-140px] grayscale opacity-40 pointer-events-none">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/video/hero.mp4"
        />
      </div>
      {/* Overlays */}
      <div className="absolute bottom-[-249px] left-1/2 z-[4] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] flex-none rounded-[10px] opacity-[0.15] bg-[radial-gradient(50%_50%_at_50%_50%,#d5dbe6_0%,rgba(4,7,13,0)_100%)]" />
      <div className="absolute top-0 inset-x-0 opacity-80 pointer-events-none overflow-hidden pointer-events-none">
        <div className="gradient-container">
          <div className="gradient-shape animate-gradient1"></div>
          <div className="gradient-shape animate-gradient2"></div>
          <div className="gradient-shape animate-gradient3"></div>
          <div className="gradient-shape animate-gradient4"></div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full overflow-hidden transform translate-z-0 rounded-none relative">
          <ParticlesBackground id="tsparticles" />
        </div>
      </div>

      <motion.div
        className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.2 },
          },
        }}
      >
        <motion.div
          variants={zoomIn}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 text-sm">
            <div className="relative flex items-center justify-center">
              <span className="absolute h-3 w-3 animate-[ripple_2.5s_ease-out_infinite] rounded-full bg-[#a6daff] opacity-50" />
              <span className="h-2 w-2 rounded-full bg-[#a6daff] shadow-[0_0_20px_0_rgba(168,209,255,0.5)]" />
            </div>
            A COMPLETE PLATFORM FOR ENTERPRISE
          </div>
        </motion.div>

        <motion.h1
          variants={zoomIn}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-7 max-w-4xl xl:max-w-6xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl !leading-tight tracking-tight"
        >
          <span className="font-semibold text-gradient-hero">
            Automate, Integrate, Communicate –{" "}
            <span className="font-serif-italic">AI‑Powered</span> Efficiency
          </span>
        </motion.h1>

        <motion.p
          variants={zoomIn}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base text-[#8b95a7] sm:text-lg"
        >
          Free up your time for what matters most
        </motion.p>

        <motion.div
          variants={zoomIn}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-9 flex justify-center"
        >
          <GlowButton
            as="a"
            href="https://cibot.agentcollab.ai/register"
            target="_blank"
            endIcon={<ArrowUpRight size={18} />}
          >
            Get Started
          </GlowButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollNext}
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#B8C0D4]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-5" />
      </motion.button>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
