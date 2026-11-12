"use client";

import { useState, useRef, useEffect } from "react";
import { motion, type Variants } from "motion/react";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import { ArrowUpRight, ChevronDown, Check } from "lucide-react";
import GlowButton from "@/app/components/GlowButton";
import PricingSlider from "./PricingSlider";

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

type Currency = "VND" | "USD" | "EUR";
const currencies: Currency[] = ["USD", "EUR", "VND"];

const EXCHANGE_RATE: Record<Currency, number> = {
  USD: 1,
  VND: 25750,
  EUR: 0.88,
};

const cardClass =
  "group relative p-8 flex flex-col items-center bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden text-center";

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
  const scrollNext = () => scrollTo("benefit");

  // Income Simulator
  const [branchesPro, setBranchesPro] = useState(1);
  const [branchesBusiness, setBranchesBusiness] = useState(1);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const proBasePrice = billing === "monthly" ? 54 : 49;
  const businessBasePrice = billing === "monthly" ? 164 : 149;

  const pricePerBranchPro = proBasePrice * 0.3;
  const pricePerBranchBusiness = businessBasePrice * 0.3;

  const totalPricePro = branchesPro * pricePerBranchPro;
  const totalPriceBusiness = branchesBusiness * pricePerBranchBusiness;

  const totalAll = totalPricePro + totalPriceBusiness;
  // const isMillion = totalAll >= 1_000_000;

  const [currency, setCurrency] = useState<Currency>("USD");
  const [openCurrency, setOpenCurrency] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setOpenCurrency(false); // Đóng popup
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatPrice = (price: number | null) => {
    if (price === null) return null;

    const converted = price * EXCHANGE_RATE[currency];

    return new Intl.NumberFormat(currency === "VND" ? "vi-VN" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "VND" ? 0 : 0,
    }).format(converted);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 lg:py-32"
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
            NEW GEN AI AUTOMATION AFFILIATE
          </div>
        </motion.div>

        <motion.h1
          variants={zoomIn}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-7 max-w-4xl text-5xl !leading-[1.15] sm:text-6xl md:text-7xl"
        >
          <span className="font-semibold text-gradient-hero">
            Earn 30%
            <br />
            <span className="font-serif-italic">
              On Your Customer’s First Payment
            </span>
          </span>
        </motion.h1>
        <motion.div
          variants={zoomIn}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto mt-9"
        >
          <div className={cardClass + " !items-stretch"}>
            <div className="flex flex-col items-center gap-3 -mt-2 mb-4">
              <div className="relative inline-flex p-1 items-center bg-[#10131c] rounded-lg border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] overflow-hidden whitespace-nowrap">
                <span
                  className={`absolute top-1 bottom-1 w-24 ${billing === "monthly" ? "left-1" : "left-[calc(6rem+4px)]"} rounded-[6px] bg-[rgba(255,255,255,0.1)] transition-all duration-300`}
                />
                {(["monthly", "yearly"] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBilling(b)}
                    className={`relative z-10 w-24 px-4 py-1.5 text-sm font-medium transition-colors ${
                      billing === b ? "text-white" : ""
                    }`}
                  >
                    {b === "monthly" ? "Monthly" : "Yearly"}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-4 mb-8">
              <span>Total Earnings</span>
              {/* <div className="relative text-xs font-medium uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setOpenCurrency((prev) => !prev)}
                  className="flex h-5 items-center gap-1 font-semibold text-white"
                >
                  <span>{currency}</span>

                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openCurrency ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openCurrency && (
                  <>
                    <div
                      ref={popupRef}
                      className="absolute right-0 top-6 z-20 w-32 p-2 overflow-hidden rounded-2xl border border-solid border-[#4078a820] bg-[#04070d] shadow-[rgba(166,218,255,0.15)_0px_1px_1px_0px_inset] flex flex-col gap-1"
                    >
                      {currencies.map((item) => {
                        const active = item === currency;

                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setCurrency(item);
                              setOpenCurrency(false);
                            }}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-1 transition ${active ? "backdrop-blur-[5px] border border-[rgba(216,231,242,0.1)] bg-[linear-gradient(180deg,#10131c_0%,rgba(255,255,255,0.07)_100%)] shadow-[inset_0_-0.48px_0.48px_-1.25px_rgba(0,0,0,.68),inset_0_-1.83px_1.83px_-2.5px_rgba(0,0,0,.6),inset_0_-8px_8px_-3.75px_rgba(0,0,0,.24)]" : "hover:text-white"}`}
                          >
                            <span>{item}</span>

                            {active && <Check className="h-4 w-4" />}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div> */}
              <div className="w-full flex items-baseline justify-center gap-1 sm:w-auto sm:ms-auto sm:justify-end">
                <span className="text-4xl text-white font-medium">
                  {formatPrice(totalAll)}
                </span>
                <span className="text-sm">/month</span>
              </div>
            </div>
            <div className="space-y-10">
              <PricingSlider
                label="Pro Plan"
                value={branchesPro}
                setValue={setBranchesPro}
                basePriceFormatted={formatPrice(proBasePrice) || ""}
              />
              <PricingSlider
                label="Business Plan"
                value={branchesBusiness}
                setValue={setBranchesBusiness}
                basePriceFormatted={formatPrice(businessBasePrice) || ""}
              />
            </div>

            <motion.div
              variants={zoomIn}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-12 flex justify-center"
            >
              <GlowButton
                as="a"
                href="https://cibot.agentcollab.ai/app/affiliate"
                target="_blank"
                endIcon={<ArrowUpRight size={18} />}
              >
                Become a Affiliate
              </GlowButton>
            </motion.div>
          </div>
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
