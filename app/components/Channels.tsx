"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import FadeInUp from "./animations/FadeInUp";

const channels = [
  {
    name: "Messenger",
    type: "messenger",
    image: "/images/channel/messenger.svg",
  },
  { name: "Slack", type: "slack", image: "/images/slack-color.svg" },
  {
    name: "Instagram",
    type: "instagram",
    image: "/images/channel/instagram.svg",
  },
  {
    name: "WhatsApp",
    type: "whatsapp",
    image: "/images/channel/whatsapp.svg",
  },
  {
    name: "Telegram",
    type: "telegram",
    image: "/images/channel/telegram.svg",
  },
  { name: "TikTok", type: "tiktok", image: "/images/channel/tiktok.svg" },
  { name: "Zalo", type: "zalo", image: "/images/channel/zalo.svg" },
];

function ChannelImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <Image
        src={image}
        alt={name}
        fill
        sizes="40px"
        className="object-contain"
      />
    </div>
  );
}

export default function Integrations() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [showNavigation, setShowNavigation] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;

      const hasOverflow = scrollWidth > clientWidth + 1;

      setShowNavigation(hasOverflow);
      setCanScrollPrev(scrollLeft > 1);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1);
    };

    const observer = new ResizeObserver(checkScroll);

    observer.observe(slider);
    slider.addEventListener("scroll", checkScroll);

    checkScroll();

    return () => {
      observer.disconnect();
      slider.removeEventListener("scroll", checkScroll);
    };
  }, [channels]);

  const scroll = (direction: number) => {
    sliderRef.current?.scrollBy({
      left: direction * 180,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-2.5 lg:max-w-full lg:mx-0 lg:grid-cols-2 lg:gap-12">
          <FadeInUp className="flex flex-col text-center gap-2.5 lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
                <Share2 className="h-3.5 w-3.5" />
                Channels
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
                <span className="inline-block bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                  Chat with your{" "}
                  <span className="font-serif-italic">customers</span>
                  <br /> wherever they are
                </span>
              </h2>
            </div>
          </FadeInUp>
          <FadeInUp className="space-y-3 leading-[1.65] text-center lg:text-left">
            <p>
              Our conversational agents meet your customers where they are —
              whether on your website, mobile app, customer portal, or popular
              messaging and social media platforms such as{" "}
              <span className="font-semibold">
                Messenger, Instagram, WhatsApp, Telegram, TikTok, Zalo...
              </span>
              . Customers can get instant answers and support through their
              preferred channels.
            </p>
            <p>
              Connect our solution with your existing business tools to
              personalize conversations, automate responses, and qualify
              customer inquiries. We seamlessly integrate with{" "}
              <span className="font-semibold">
                CMS platforms, CRM systems, booking platforms,
              </span>{" "}
              and more.
            </p>
          </FadeInUp>
        </div>
        <div className="mt-10 lg:mt-14" id="integrations">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div
              ref={sliderRef}
              className={`-mx-6 px-6 scroll-px-6 xl:mx-0 xl:px-0 xl:scroll-px-0 flex snap-x snap-proximity gap-3 overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                showNavigation ? "" : "justify-between"
              }`}
            >
              {channels.map((channel) => (
                <div
                  key={channel.type}
                  className={`flex h-[130px] min-w-[154px] snap-start flex-col items-center justify-center gap-4 rounded-lg bg-[#10131c] px-3 shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] ${
                    showNavigation ? "w-[154px] shrink-0" : "flex-1"
                  }`}
                >
                  <ChannelImage image={channel.image} name={channel.name} />
                  <span className="text-sm font-medium">{channel.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {showNavigation && (
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                aria-label="Previous"
                disabled={!canScrollPrev}
                onClick={() => scroll(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8b95a7]/40 transition hover:bg-[#5785b3] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-[#8b95a7]/40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Next"
                disabled={!canScrollNext}
                onClick={() => scroll(1)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8b95a7]/40 transition hover:bg-[#5785b3] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-[#8b95a7]/40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
