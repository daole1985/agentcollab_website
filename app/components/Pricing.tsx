"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Tag,
  Check,
  ArrowUpRight,
  ChevronDown,
  Flame,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import GlowButton from "./GlowButton";
import GlassButton from "./GlassButton";
import FadeInUp, { fadeInUpVariant } from "./animations/FadeInUp";

type Currency = "VND" | "USD" | "EUR";
const currencies: Currency[] = ["USD", "EUR", "VND"];

const EXCHANGE_RATE: Record<Currency, number> = {
  USD: 1,
  VND: 25750,
  EUR: 0.88,
};

type Billing = "month" | "year";

type Plan = {
  name: string;
  badge?: string;
  description: string;
  monthly: number | null;
  yearly: number | null;
  originalMonthly?: number;
  originalYearly?: number;
  customLabel?: string;
  cta: string;
  // channels?: {
  //   src: string;
  //   alt: string;
  // }[];
  includesNote?: string;
  features: string[];
  links?: {
    monthly: string;
    yearly: string;
  };
};

const plans: Plan[] = [
  {
    name: "Starter",
    description:
      "Launch your AI chatbot effortlessly to engage users, answer questions, and improve everyday customer interactions.",
    monthly: 10,
    yearly: 9,
    originalMonthly: 0,
    originalYearly: 0,
    cta: "Free Trial",
    features: [
      '<span class="font-medium text-white">1</span> communication channel - Messenger, Zalo, WhatsApp, Instagram, and more',
      '<span class="font-medium text-white">1</span> AI chatbot agent and <span class="font-medium text-white">1</span> AI task agent',
      '<span class="font-medium text-white">2</span> automated Trigger Tasks',
      '<span class="font-medium text-white">2.000.000</span> tokens per month',
      '<span class="font-medium text-white">100MB</span> data storage',
      'Up to <span class="font-medium text-white">50</span> files, with a maximum size of <span class="font-medium text-white">4MB</span> per file',
      '<span class="font-medium text-white">1</span> integration - Connect with Gmail, Google Calendar, Brevo, Airtable, Facebook, and more.',
      '<span class="font-medium text-white">Knowledge base</span> with File, Text, and URL',
      '<span class="font-medium text-white">Quick Reply Buttons</span> for guided conversation',
    ],
    links: {
      monthly: "https://app.agentcollab.ai/register",
      yearly: "https://app.agentcollab.ai/register",
    },
  },
  {
    name: "Pro",
    badge: "Popular",
    description:
      "Automate repetitive tasks and connect AI with your business workflows to boost team productivity and efficiency.",
    monthly: 54,
    yearly: 49,
    originalMonthly: 0,
    originalYearly: 0,
    cta: "Subscribe Now",
    // channels: [
    //   {
    //     src: "/images/website.svg",
    //     alt: "Website",
    //   },
    //   {
    //     src: "/images/messenger.svg",
    //     alt: "Messenger",
    //   },
    // ],
    features: [
      '<span class="font-medium text-white">3</span> communication channels - Messenger, Zalo, WhatsApp, Instagram, and more',
      '<span class="font-medium text-white">4</span> AI chatbot agents and <span class="font-medium text-white">4</span> AI task agents',
      '<span class="font-medium text-white">5</span> automated Trigger Tasks',
      '<span class="font-medium text-white">5.000.000</span> tokens per month',
      '<span class="font-medium text-white">200MB</span> data storage',
      'Up to <span class="font-medium text-white">100</span> files, with a maximum size of <span class="font-medium text-white">6MB</span> per file',
      '<span class="font-medium text-white">6</span> integrations - Connect with Gmail, Google Calendar, Brevo, Airtable, Facebook, and more.',
      '<span class="font-medium text-white">Knowledge base</span> with File, Text, URL, and <span class="font-medium text-white">Google Drive</span>',
      '<span class="font-medium text-white">Quick Reply Buttons</span> for guided conversation',
      '<span class="font-medium text-white">Support</span> within <span class="font-medium text-white">4</span> business hours',
    ],
    links: {
      monthly: "https://app.agentcollab.ai/register",
      yearly: "https://app.agentcollab.ai/register",
      // Nếu là Free Trial
      // monthly: "https://cibot.agentcollab.ai/app/payment?plan=1&months=1",
      // yearly: "https://cibot.agentcollab.ai/app/payment?plan=1&months=12",
    },
  },
  {
    name: "Business",
    description:
      "Deploy AI agents across your business to automate conversations, streamline operations, and scale your growth.",
    monthly: 164,
    yearly: 149,
    originalMonthly: 0,
    originalYearly: 0,
    cta: "Subscribe Now",
    // channels: [
    //   {
    //     src: "/images/website.svg",
    //     alt: "Website",
    //   },
    //   {
    //     src: "/images/messenger.svg",
    //     alt: "Messenger",
    //   },
    //   {
    //     src: "/images/zalo.webp",
    //     alt: "Zalo",
    //   },
    //   {
    //     src: "/images/telegram-color.svg",
    //     alt: "Telegram",
    //   },
    //   {
    //     src: "/images/whatsapp.svg",
    //     alt: "WhatsApp",
    //   },
    //   {
    //     src: "/images/slack-color.svg",
    //     alt: "Slack",
    //   },
    // ],
    features: [
      '<span class="font-medium text-white">6</span> communication channels - Messenger, Zalo, WhatsApp, Instagram, and more',
      '<span class="font-medium text-white">9</span> AI chatbot agents and <span class="font-medium text-white">9</span> AI task agents',
      '<span class="font-medium text-white">9</span> automated Trigger Tasks',
      '<span class="font-medium text-white">10.000.000</span> tokens per month',
      '<span class="font-medium text-white">500MB</span> data storage',
      'Up to <span class="font-medium text-white">200</span> files, with a maximum size of <span class="font-medium text-white">8MB</span> per file',
      '<span class="font-medium text-white">12</span> integrations - Connect with Gmail, Google Calendar, Brevo, Airtable, Facebook, and more.',
      '<span class="font-medium text-white">Knowledge base</span> with Files, Text, URLs, and <span class="font-medium text-white">Google Drive</span>',
      '<span class="font-medium text-white">Quick Reply Buttons</span> for guided conversations',
      '<span class="font-medium text-white">Human support</span> within <span class="font-medium text-white">2</span> business hours',
      '<span class="font-medium text-white">Lead Forms</span> for collecting customer information from chatbots and other channels.',
    ],
    links: {
      monthly: "https://app.agentcollab.ai/register",
      yearly: "https://app.agentcollab.ai/register",
      // Nếu là Free Trial
      // monthly: "https://cibot.agentcollab.ai/app/payment?plan=2&months=1",
      // yearly: "https://cibot.agentcollab.ai/app/payment?plan=2&months=12",
    },
  },
  {
    name: "Enterprise Scale",
    description:
      "Build a tailored AI agent workforce designed around your unique goals, systems, workflows, and business needs.",
    monthly: null,
    yearly: null,
    originalMonthly: 0,
    originalYearly: 0,
    customLabel: "Custom",
    cta: "Contact Us",
    features: [
      "Custom AI agents",
      "Omnichannel deployment",
      "CRM, ERP & system integrations",
      "Department AI workflows",
      "Unlimited automations",
      "Enterprise Knowledge Base",
      "Advanced roles & permissions",
      "Custom dashboards & reports",
      "Enterprise infrastructure & SLA",
      "Implementation & consulting",
      "Flexible AI interactions & integrations",
      "Dedicated Success Manager",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("year");
  const [activeIndex, setActiveIndex] = useState(0);

  const plansRef = useRef<HTMLDivElement | null>(null);

  const scrollToPlan = (index: number) => {
    if (!plansRef.current) return;
    const container = plansRef.current;
    const targetCard = container.children[index] as HTMLElement;
    const firstCard = container.children[0] as HTMLElement;

    if (targetCard && firstCard) {
      const targetLeft = targetCard.offsetLeft - firstCard.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToPlan(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < plans.length - 1) {
      scrollToPlan(activeIndex + 1);
    }
  };

  useEffect(() => {
    const container = plansRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const children = Array.from(container.children) as HTMLElement[];
      if (!children.length) return;
      const firstCard = children[0];

      let closestIndex = 0;
      let minDiff = Infinity;
      children.forEach((child, idx) => {
        const cardLeft = child.offsetLeft - firstCard.offsetLeft;
        const diff = Math.abs(cardLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = idx;
        }
      });
      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const prevIsMobileRef = useRef<boolean | null>(null);

  useEffect(() => {
    const scrollToTarget = (
      planName: "Starter" | "Pro",
      behavior: ScrollBehavior = "auto",
    ) => {
      if (!plansRef.current) return;
      const container = plansRef.current;
      const firstCard = container.children[0] as HTMLElement | undefined;
      if (!firstCard) return;

      if (planName === "Starter") {
        container.scrollTo({ left: 0, behavior });
        setActiveIndex(0);
        return;
      }

      const businessIndex = plans.findIndex((p) => p.name === "Pro");
      const businessCard = container.children[businessIndex] as
        | HTMLElement
        | undefined;

      if (businessCard) {
        const targetLeft = businessCard.offsetLeft - firstCard.offsetLeft;
        container.scrollTo({
          left: targetLeft,
          behavior,
        });
        setActiveIndex(businessIndex);
      }
    };

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile !== prevIsMobileRef.current) {
        prevIsMobileRef.current = isMobile;
        scrollToTarget(isMobile ? "Pro" : "Starter", "auto");
        requestAnimationFrame(() => {
          scrollToTarget(isMobile ? "Pro" : "Starter", "auto");
        });
      }
    };

    const initialIsMobile = window.innerWidth < 768;
    prevIsMobileRef.current = initialIsMobile;
    scrollToTarget(initialIsMobile ? "Pro" : "Starter", "auto");

    const timer1 = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      scrollToTarget(isMobile ? "Pro" : "Starter", "auto");
    }, 100);

    const timer2 = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      scrollToTarget(isMobile ? "Pro" : "Starter", "auto");
    }, 300);

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [billing]);

  const [currency, setCurrency] = useState<Currency>("USD");
  const [openCurrency, setOpenCurrency] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (!element) return;

    const headerHeight = 80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

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

  const getPriceInfo = (p: Plan) => {
    const price = billing === "month" ? p.monthly : p.yearly;

    const original =
      billing === "month"
        ? (p.originalMonthly ?? null)
        : (p.originalYearly ?? null);

    const hasDiscount =
      price !== null &&
      price !== undefined &&
      original !== null &&
      original !== undefined &&
      original > price;

    return { price, original, hasDiscount };
  };

  const hasAnyDiscount = plans
    .filter((p) => !p.customLabel)
    .some((p) => {
      const price = billing === "month" ? p.monthly : p.yearly;

      const original =
        billing === "month"
          ? (p.originalMonthly ?? null)
          : (p.originalYearly ?? null);

      return (
        price !== null &&
        price !== undefined &&
        original !== null &&
        original !== undefined &&
        original > price
      );
    });

  return (
    <>
      <section
        id="pricing"
        className="section-glow overflow-hidden py-16 lg:py-24"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 relative z-10">
          <FadeInUp className="max-w-xl mx-auto text-center flex flex-col gap-2.5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
                <Tag className="h-3.5 w-3.5" />
                Pricing
                {/* in
                <div className="relative">
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
                <span className="text-[11px]">(Exclusive of VAT)</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
                <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                  Flexible Plans for{" "}
                  <span className="font-serif-italic">Everyone</span>
                </span>
              </h2>
            </div>
            <p>
              Choose a plan that fits your goals
              <br className="sm:hidden" /> and scale as you grow
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="relative inline-flex p-1 items-center bg-[#10131c] rounded-lg border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] overflow-hidden whitespace-nowrap">
                <span
                  className={`absolute top-1 bottom-1 ${billing === "month" ? "left-1 w-28" : "left-[calc(7rem+4px)] w-44"} rounded-[6px] bg-[rgba(255,255,255,0.1)] transition-all duration-300`}
                />
                {(["month", "year"] as Billing[]).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBilling(b)}
                    className={`relative z-10 ${b === "month" ? "w-28" : "w-44"} px-6 py-2 text-sm font-medium transition-colors ${
                      billing === b ? "text-white" : ""
                    }`}
                  >
                    {b === "month" ? "Monthly" : "Yearly"}
                    {b === "year" && (
                      <span
                        className={`ml-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                          billing === "year" ? "bg-[#10131c]" : "bg-[#04070d]"
                        }`}
                      >
                        Save 10%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </FadeInUp>
          <motion.div
            ref={plansRef}
            className="-mx-6 mt-10 xl:mt-14 xl:mx-0 px-6 scroll-px-6 xl:px-0 xl:scroll-px-0 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none xl:grid xl:grid-cols-4 xl:overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {plans.map((p, i) => {
              const { price, original, hasDiscount } = getPriceInfo(p);

              return (
                <motion.div
                  key={p.name}
                  variants={fadeInUpVariant}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  className="snap-start flex-shrink-0 xl:w-auto xl:flex-shrink"
                >
                  <div className="group relative w-[300px] snap-start xl:w-auto h-full p-5 xl:p-6 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 pointer-events-none select-none bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,rgba(4,7,13,0)_100%)] group-hover:opacity-30 ${p.badge ? "opacity-30" : "opacity-0"}`}
                    />
                    <div className="flex items-center gap-2 mb-6">
                      <h3 className="text-xl font-semibold text-white">
                        {p.name}
                      </h3>
                      {p.badge && (
                        <span className="flex items-center gap-2 px-2.5 py-0.5 bg-[#6f9bc5] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] text-sm text-white">
                          <Flame size={14} />
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      {p.customLabel ? (
                        <div
                          className={`flex items-center ${hasAnyDiscount ? "h-[74px]" : ""}`}
                        >
                          <span className="text-4xl font-medium leading-none">
                            {p.customLabel}
                          </span>
                        </div>
                      ) : price !== null && price !== undefined ? (
                        <div
                          className={`flex flex-col ${hasAnyDiscount ? "h-[74px] justify-end" : ""}`}
                        >
                          {hasDiscount && original && (
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-base text-white/40 line-through">
                                {formatPrice(original)}
                              </span>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#4078a830] bg-[#10131c]/95">
                                Save{" "}
                                {Math.round(
                                  ((original - price) / original) * 100,
                                )}
                                %
                              </span>
                            </div>
                          )}

                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-medium leading-none">
                              {formatPrice(price)}
                            </span>
                            <span className="text-sm opacity-60">/month</span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-5 text-[10px] opacity-80 leading-[18px]">
                      {p.description}
                    </div>
                    <div className="mb-6">
                      {p.badge ? (
                        <GlowButton
                          className="w-full"
                          as={!p.links ? "button" : "a"}
                          href={
                            !p.links
                              ? undefined
                              : billing === "month"
                                ? p.links?.monthly
                                : p.links?.yearly
                          }
                          target={!p.links ? undefined : "_blank"}
                          onClick={!p.links ? scrollToContact : undefined}
                          endIcon={<ArrowUpRight size={18} />}
                        >
                          {p.cta}
                        </GlowButton>
                      ) : (
                        <div className="py-0.5">
                          <GlassButton
                            className="w-full py-[13px]"
                            disabled={p.monthly === 0}
                            as={!p.links ? "button" : "a"}
                            href={
                              !p.links
                                ? undefined
                                : billing === "month"
                                  ? p.links?.monthly
                                  : p.links?.yearly
                            }
                            target={!p.links ? undefined : "_blank"}
                            onClick={!p.links ? scrollToContact : undefined}
                            endIcon={<ArrowUpRight size={18} />}
                          >
                            {p.cta}
                          </GlassButton>
                        </div>
                      )}
                    </div>
                    {p.includesNote && (
                      <p className="mb-4 h-6 flex items-center gap-1 text-xs opacity-80">
                        {p.includesNote.split("Pro")[0]}
                        <span className="font-semibold text-white">Pro</span>
                        {p.includesNote.split("Pro")[1]}
                      </p>
                    )}

                    <ul className="space-y-3 text-[15px] opacity-80">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <Check
                            size={16}
                            color="#03a9f4"
                            className="shrink-0 mt-0.5"
                          />
                          <span dangerouslySetInnerHTML={{ __html: f }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
      </section>
    </>
  );
}
