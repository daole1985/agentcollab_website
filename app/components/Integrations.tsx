"use client";

import {
  CalendarDays,
  Database,
  Github,
  Instagram,
  Facebook,
  Slack,
  Send,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type { SVGProps, ComponentType } from "react";
import { motion } from "motion/react";
import FadeInUp from "./animations/FadeInUp";

type BrandIcon = ComponentType<SVGProps<SVGSVGElement>>;
type ConnectorIcon = LucideIcon | BrandIcon;

const ZaloIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z"
      fill="white"
    />
  </svg>
);

const MessengerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="m14.69 13.76l3.05-4.48c0.3-0.44-0.27-0.92-0.71-0.61l-3.28 2.31q-0.17 0.11-0.38 0.11-0.21 0-0.37-0.11l-2.44-1.69c-0.72-0.5-1.76-0.32-2.25 0.38l-3.05 4.48c-0.3 0.44 0.27 0.92 0.71 0.6l3.28-2.3q0.17-0.11 0.38-0.11 0.21 0 0.37 0.11l2.44 1.66c0.72 0.53 1.76 0.35 2.25-0.35z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      d="m0.29 11.43c0-6.16 5.02-11.14 11.21-11.14 6.19 0 11.21 4.98 11.21 11.14 0 6.15-5.02 11.14-11.21 11.14q-1.8-0.01-3.43-0.53l-3.2 1.06c-0.26 0.09-0.55 0.04-0.77-0.12-0.23-0.16-0.36-0.42-0.36-0.69v-2.82c-2.13-2.03-3.45-4.88-3.45-8.04zm11.21-9.43c-5.24 0-9.49 4.22-9.49 9.43 0 2.79 1.22 5.3 3.17 7.03 0.18 0.16 0.28 0.39 0.28 0.64v2l2.34-0.78q0.28-0.09 0.56 0.01 1.48 0.52 3.14 0.53c5.24 0 9.49-4.22 9.49-9.43 0-5.21-4.25-9.43-9.49-9.43z"
      fill="white"
    />
  </svg>
);

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
      stroke="white"
      strokeWidth="1"
    />
  </svg>
);

const GmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
      fill="white"
    />
  </svg>
);

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="m19.55 4.69c-1.05-1.05-2.31-1.87-3.69-2.43-1.38-0.57-2.86-0.85-4.36-0.85-2 0-3.96 0.52-5.7 1.5-1.73 0.99-3.17 2.4-4.17 4.1-1 1.7-1.53 3.63-1.53 5.59-0.01 1.96 0.52 3.89 1.51 5.6l-1.61 5.8 6.04-1.55c1.66 0.91 3.54 1.39 5.45 1.41 3.03 0 5.94-1.18 8.09-3.27 2.16-2.1 3.38-4.95 3.41-7.93-0.01-1.48-0.32-2.95-0.91-4.32-0.59-1.37-1.45-2.61-2.53-3.65zm-8.05 17.23c-1.7 0.01-3.37-0.44-4.83-1.29l-0.35-0.22-3.57 0.94 0.94-3.43-0.23-0.36c-1.22-1.94-1.68-4.25-1.28-6.5 0.4-2.24 1.62-4.27 3.44-5.69 1.81-1.42 4.1-2.14 6.41-2.02 2.32 0.12 4.52 1.08 6.17 2.68 1.8 1.73 2.84 4.1 2.87 6.58-0.02 2.48-1.04 4.85-2.83 6.59-1.79 1.75-4.22 2.72-6.74 2.72zm5.19-6.97c-0.29-0.14-1.68-0.82-1.94-0.9-0.26-0.09-0.46-0.14-0.65 0.14q-0.42 0.57-0.9 1.09c-0.16 0.19-0.33 0.21-0.62 0-1.64-0.64-3.01-1.81-3.87-3.32-0.3-0.5 0.29-0.47 0.83-1.53q0.07-0.11 0.07-0.24 0-0.13-0.07-0.25c0-0.14-0.64-1.53-0.87-2.08-0.23-0.55-0.46-0.46-0.65-0.48h-0.56q-0.22 0.01-0.42 0.1-0.2 0.09-0.34 0.26-0.49 0.46-0.74 1.09-0.25 0.62-0.21 1.29c0.09 1.06 0.5 2.07 1.16 2.9 1.23 1.8 2.91 3.26 4.88 4.23 1.03 0.59 2.23 0.84 3.42 0.71q0.6-0.12 1.1-0.47 0.5-0.34 0.81-0.86 0.29-0.64 0.17-1.33c-0.13-0.14-0.31-0.21-0.6-0.35z"
      fill="white"
    />
  </svg>
);

const rows: ConnectorIcon[][] = [
  [ZaloIcon, MessengerIcon, TikTokIcon, Instagram],
  [GmailIcon, CalendarDays, WhatsAppIcon, Send],
  [Slack, Github, Facebook, Database],
];

function IconCard({ Icon }: { Icon: ConnectorIcon }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
      <Icon className="h-8 w-8 text-[#d5dbe6]" strokeWidth={1.5} />
    </div>
  );
}

function MarqueeRow({
  icons,
  direction,
}: {
  icons: ConnectorIcon[];
  direction: "left" | "right";
}) {
  // duplicate the icon set so the loop is seamless
  const items = [...icons, ...icons, ...icons, ...icons];
  return (
    <div className="px-3 py-4 marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-10 sm:gap-[60px] ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {items.map((Icon, i) => (
          <IconCard key={i} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-2xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <Layers className="h-3.5 w-3.5" />
              Integrations
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Multi-Platform{" "}
                <span className="font-serif-italic">Integrations</span>
              </span>
            </h2>
          </div>
          <p>
            Seamlessly connect with 100+ leading platforms and communication
            channels to centralize data, automate workflows, and enhance
            operational efficiency
          </p>
        </FadeInUp>
        <div className="mt-10 lg:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto flex max-w-[600px] flex-col gap-5 p-5 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden">
              <MarqueeRow icons={rows[0]} direction="right" />
              <MarqueeRow icons={rows[1]} direction="left" />
              <MarqueeRow icons={rows[2]} direction="right" />
            </div>
          </motion.div>
          <FadeInUp delay={0.3}>
            <div className="text-center mt-6">
              <span className="text-gradient-hero">
                Engage with customers through TikTok, Instagram, Facebook
                Messenger, WhatsApp, Zalo, and Telegram...
                <br /> Extend your agents' capabilities by connecting to Gmail,
                Slack, GitHub, and other business applications
                <br /> to handle conversations, access information, and interact
                with external services.
              </span>
            </div>
          </FadeInUp>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
