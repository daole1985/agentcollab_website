"use client";

import { FadeInUp } from "./FadeInUp";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const items = [
  {
    n: "Nguyễn Minh Anh",
    r: "Business Development Manager",
    avatar: "/images/avatar1.jpg",
    q: "The platform helped us automate customer inquiries and streamline vehicle listing management. Response times improved significantly, and our team can now focus o…",
  },
  {
    n: "James Carter",
    r: "Operations Manager",
    avatar: "/images/avatar2.jpg",
    q: "Managing orders and customer communications has become much easier. The automation workflows save hours of manual work every week and help us serve…",
  },
  {
    n: "Lê Quốc Hưng",
    r: "Sales Director",
    avatar: "/images/avatar3.jpg",
    q: "A seamless solution for yacht sales and charter operations. Client requests are organized efficiently, and our sales process is now more structured and scalable.",
  },
  {
    n: "Sophia Martinez",
    r: "Commercial Manager",
    avatar: "/images/avatar4.jpg",
    q: "The centralized system improved how we manage inquiries, quotations, and customer information. It has enhanced both productivity and service quality.",
  },
  {
    n: "Phạm Thanh Hương",
    r: "Digital Marketing Manager",
    avatar: "/images/avatar5.jpg",
    q: "The platform provides valuable insights and automation capabilities that help us engage customers more effectively while maintaining a consistent experience across channels.",
  },
  {
    n: "Lars Petersen",
    r: "General Manager",
    avatar: "/images/avatar6.jpg",
    q: "Guest communications, booking inquiries, and internal workflows are now handled much more efficiently. The solution has contributed to a smoother customer …",
  },
];

const brands = [
  { name: "Caready", src: "/images/logo-caready.png" },
  { name: "Saigon Charlie's", src: "/images/logo-saigon-charlies.png" },
  { name: "HAZ", src: "/images/logo-haz.png" },
  { name: "Change Interaction", src: "/images/logo-CI.svg" },
  { name: "Lotus Hotel", src: "/images/logo-lotus.png" },
];

function MarqueeRow({
  brands,
  direction,
}: {
  brands: { name: string; src: string }[];
  direction: "left" | "right";
}) {
  const items = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="px-3 py-4 marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-10 sm:gap-[60px] ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {items.map((brand, i) => (
          <div key={i} className="relative w-24 h-12 sm:w-28 sm:h-14 shrink-0">
            <Image
              src={brand.src}
              alt={brand.name}
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-contain filter brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <FadeInUp className="max-w-xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <MessageCircle className="h-3.5 w-3.5" />
              REVIEWS
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Trusted by{" "}
                <span className="font-serif-italic">Visionaries</span>
              </span>
            </h2>
          </div>
          <p>Hear from real users who achieved success with our automation</p>
        </FadeInUp>
        <div className="mt-10 lg:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <FadeInUp key={t.n} delay={(i % 3) * 0.1}>
              <div className="group relative h-full bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] text-left shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden">
                <div className="p-4 flex items-center gap-3 bg-[#04070d] rounded-2xl shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset,rgba(207,231,255,0.1)_0px_-1px_1px_0px_inset]">
                  <Image
                    src={t.avatar}
                    width={50}
                    height={50}
                    alt={t.n}
                    className="w-[50px] h-[50px] rounded-lg object-cover border border-white/10"
                  />
                  <div className="min-w-0">
                    <div className="leading-relaxed truncate mb-0.5">{t.n}</div>
                    <div className="text-xs opacity-50 truncate">{t.r}</div>
                  </div>
                </div>
                <div className="p-6">"{t.q}"</div>
              </div>
            </FadeInUp>
          ))}
        </div>
        <div className="mt-10 lg:mt-14">
          <FadeInUp delay={0.2}>
            <MarqueeRow brands={brands} direction="right" />
          </FadeInUp>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
