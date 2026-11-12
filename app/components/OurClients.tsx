"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UsersRound, UserRoundCheck } from "lucide-react";
import FadeInUp from "./animations/FadeInUp";

const clients = [
  {
    title: "Boosted Conversion Rate and 24/7 Personal Shopping Assistant",
    desc: "Our generative AI assistant delivers personalized shopping support 24/7, from size recommendations and style suggestions to order tracking. It reduces cart abandonment while freeing our sales team to focus on high-value customers.",
    image: "/images/customer1.jpg",
    metrics: [
      { value: "35%", label: "increase in Conversion Rate" },
      { value: "$42", label: "increase in Average Order Value" },
    ],
    quote: (
      <>
        The AI transformed our{" "}
        <span className="font-serif-italic text-white">customer journey</span>{" "}
        and made every interaction feel personal and effortless.
      </>
    ),
  },
  {
    title: "Optimized Patient Scheduling and Reduced No-Shows",
    desc: "Our AI-powered scheduling system predicts patient behavior, automates appointment reminders, and fills cancellation gaps in real-time. This keeps doctors fully booked while reducing the administrative workload for our team.",
    image: "/images/customer2.jpg",
    metrics: [
      { value: "40%", label: "reduction in No-Show Rate" },
      { value: "$120K", label: "additional Annual Revenue" },
    ],
    quote: (
      <>
        Their <span className="font-serif-italic text-white">AI workflows</span>{" "}
        helped us scale our operations efficiently without adding administrative
        staff.
      </>
    ),
  },
  {
    title: "Accelerated Property Matching and Lead Qualification",
    desc: "Our AI Agent captures, qualifies, and segments buyer leads within seconds, then matches them with properties based on budget and lifestyle. Agents can focus on qualified prospects instead of manual lead screening.",
    image: "/images/customer3.jpg",
    metrics: [
      { value: "2.4K", label: "qualified leads generated" },
      { value: "12 hrs", label: "saved per week on lead screening" },
    ],
    quote: (
      <>
        We turned complex lead management into a{" "}
        <span className="font-serif-italic text-white">smooth, automated</span>{" "}
        process with clear measurable results.
      </>
    ),
  },
];

export default function OurClients() {
  const [active, setActive] = useState(0);
  const [maxCardHeight, setMaxCardHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const total = clients.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => {
        if (isMobile) {
          return Math.min(p + 1, total - 1);
        }
        return (p + 1) % total;
      });
    }, 10000);
    return () => clearInterval(id);
  }, [total, isMobile]);

  useEffect(() => {
    const update = () => {
      const heights = cardContentRefs.current
        .filter(Boolean)
        .map((el) => el!.offsetHeight);

      const nextHeight = Math.max(...heights, 0);

      setMaxCardHeight((prev) => (prev !== nextHeight ? nextHeight : prev));
    };

    update();

    const observers = cardContentRefs.current.filter(Boolean).map((el) => {
      const observer = new ResizeObserver(update);
      observer.observe(el!);
      return observer;
    });

    window.addEventListener("resize", update);

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      setActive((prev) =>
        isMobile ? Math.min(prev + 1, total - 1) : (prev + 1) % total,
      );
    } else if (distance < -minSwipeDistance) {
      setActive((prev) =>
        isMobile ? Math.max(prev - 1, 0) : (prev - 1 + total) % total,
      );
    }
  };

  return (
    <section className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <UsersRound className="h-3.5 w-3.5" />
              OUR CLIENTS
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Success Stories to{" "}
                <span className="font-serif-italic">Inspire</span>
              </span>
            </h2>
          </div>
          <p>Discover how businesses and creators achieve results</p>
        </FadeInUp>
        {/* Stacked cards for desktop / Horizontal slider for mobile */}
        <FadeInUp>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative mx-auto mt-12 lg:mt-32 max-w-[1000px]"
            style={{ minHeight: maxCardHeight || undefined }}
          >
            {clients.map((c, i) => {
              const offset = (i - active + total) % total;
              const diff = i - active;
              const isActive = isMobile ? i === active : offset === 0;

              return (
                <motion.div
                  key={c.title}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${c.title}`}
                  animate={
                    isMobile
                      ? {
                          x: `${diff * 105}%`,
                          y: 0,
                          scale: 1,
                          filter: "blur(0px)",
                          zIndex: isActive ? 10 : 1,
                          opacity: Math.abs(diff) <= 1 ? 1 : 0,
                        }
                      : {
                          x: "0%",
                          y: offset * -70,
                          scale: 1 - offset * 0.06,
                          filter: `blur(${offset > 2 ? 4 : offset * 1.33}px)`,
                          zIndex: total - offset,
                          opacity: 1,
                        }
                  }
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-0 mx-auto flex flex-col cursor-pointer"
                  style={{
                    pointerEvents: isMobile
                      ? isActive
                        ? "auto"
                        : "none"
                      : "auto",
                    minHeight: maxCardHeight || undefined,
                  }}
                >
                  <div
                    ref={(el) => {
                      cardContentRefs.current[i] = el;
                    }}
                  >
                    <div className="w-full flex flex-col justify-between bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] text-left shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden">
                      {/* Browser top bar */}
                      <div className="flex items-center justify-between border-b border-[rgba(216,231,242,0.07)] px-6 py-[18px]">
                        <UserRoundCheck className="h-7 w-7 text-[#8b95a7]" />
                        <div className="flex gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8b95a7]/60" />
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8b95a7]/60" />
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8b95a7]/60" />
                        </div>
                      </div>

                      {/* Body */}
                      <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-[#d5dbe6] sm:text-[28px]">
                            {c.title}
                          </h3>
                          <p className="mt-4 text-sm leading-relaxed text-[#8b95a7]">
                            {c.desc}
                          </p>
                          <div className="mt-7 grid grid-cols-2 gap-4">
                            {c.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="rounded-xl border border-[rgba(216,231,242,0.07)] bg-[#04070d] p-5 text-center shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]"
                              >
                                <div className="text-3xl font-semibold text-[#d5dbe6]">
                                  {m.value}
                                </div>
                                <div className="mt-1 text-xs text-[#8b95a7]">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-[rgba(216,231,242,0.07)] aspect-[4/3]">
                          <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            width={896}
                            height={768}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Testimonial quote */}
                    <div
                      className={`relative mx-auto max-w-[820px] my-8 text-center min-h-[80px] sm:min-h-[72px] flex items-center justify-center transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <motion.p
                        key={i}
                        className="text-2xl sm:text-3xl font-medium leading-snug text-[#5b6571] tracking-[-0.005em]"
                      >
                        {c.quote}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2">
            {clients.map((c, i) => (
              <button
                key={c.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to case ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[#d5dbe6]"
                    : "w-2 bg-[#8b95a7]/40 hover:bg-[#8b95a7]/70"
                }`}
              />
            ))}
          </div>
        </FadeInUp>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
