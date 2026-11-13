"use client";

import {
  CalendarDays,
  Database,
  Instagram,
  Facebook,
  Send,
  Layers,
  SlackIcon,
  GithubIcon,
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
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
      stroke="white"
      strokeWidth="0.8"
    />
  </svg>
);
const GmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 668 668" fill="none" {...props}>
    <path
      d="m25.7 169.6v353.1c0 23 18.6 41.6 41.6 41.6h100v-237.2l166.7 126.1 166.7-126.1v237.2h100c23 0 41.6-18.6 41.6-41.6v-353.1c0-55.1-63.1-86.4-107-53.1l-201.3 153.1-201.3-153.1c-43.9-33.3-107-2-107 53.1z"
      stroke="white"
      strokeWidth={30}
    />
  </svg>
);
const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fill="white"
      d="M8.886 7.17c.183.005.386.015.579.443c.128.285.343.81.519 1.238c.137.333.249.607.277.663c.064.128.104.275.02.448l-.028.058a1.4 1.4 0 0 1-.23.37l-.143.17c-.085.104-.17.206-.242.278c-.129.128-.262.266-.114.522s.668 1.098 1.435 1.777a6.6 6.6 0 0 0 1.903 1.2q.105.045.17.076c.257.128.41.108.558-.064c.149-.173.643-.749.817-1.005c.168-.256.34-.216.578-.128c.238.089 1.504.71 1.761.837l.143.07c.179.085.3.144.352.23c.064.109.064.62-.148 1.222c-.218.6-1.267 1.176-1.742 1.22l-.135.016c-.436.052-.988.12-2.956-.655c-2.426-.954-4.027-3.32-4.35-3.799l-.053-.076l-.006-.008c-.147-.197-1.048-1.402-1.048-2.646c0-1.19.587-1.81.854-2.092l.047-.05a.95.95 0 0 1 .687-.32c.173 0 .347 0 .495.005"
    />
    <path
      fill="white"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.184 21.331a.4.4 0 0 0 .487.494l4.607-1.204a10 10 0 0 0 4.76 1.207h.004c5.486 0 9.958-4.446 9.958-9.912a9.83 9.83 0 0 0-2.914-7.011A9.92 9.92 0 0 0 12.042 2c-5.486 0-9.958 4.446-9.958 9.911c0 1.739.458 3.447 1.33 4.954zm2.677-4.068a1.5 1.5 0 0 0-.148-1.15a8.4 8.4 0 0 1-1.129-4.202c0-4.63 3.793-8.411 8.458-8.411c2.27 0 4.388.877 5.986 2.468a8.33 8.33 0 0 1 2.472 5.948c0 4.63-3.793 8.412-8.458 8.412h-.005a8.5 8.5 0 0 1-4.044-1.026a1.5 1.5 0 0 0-1.094-.132l-2.762.721z"
    />
  </svg>
);

const GoogleDriveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" {...props}>
    <path
      fillRule="evenodd"
      d="m5 33.3l-3.9-7.1 13-23h11.7l13.1 23-5.9 10.6h-25.9l6.1-10.6h13.9l-7-12.3-4.9 8.4"
      stroke="white"
    />
  </svg>
);
const OutlookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path
      stroke="white"
      strokeWidth="1.5"
      d="M41.92,25.3V20.53h0V6.5a1,1,0,0,0-1-1H14.55a1,1,0,0,0-1,1V14"
    />
    <path
      stroke="white"
      strokeWidth="1.5"
      d="M18.19,22.19a3.68,3.68,0,0,0-3.89-3.68,3.83,3.83,0,0,0-3.49,3.89v3.41A3.69,3.69,0,0,0,14.5,29.5h0a3.69,3.69,0,0,0,3.69-3.69V22.19"
    />
    <path
      stroke="white"
      strokeWidth="1.5"
      d="M4.5,16V32a2,2,0,0,0,2,2h16a2,2,0,0,0,2-2V16a2,2,0,0,0-2-2H6.5A2,2,0,0,0,4.5,16Z"
    />
    <line
      stroke="white"
      strokeWidth="1.5"
      x1="43.5"
      y1="42.5"
      x2="24.5"
      y2="31.82"
    />
    <polyline
      stroke="white"
      strokeWidth="1.5"
      points="11.67 34 11.67 42.5 43.5 42.5 43.5 24.39 27.59 33.56"
    />
  </svg>
);
const HubSpotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" {...props}>
    <path
      d="m37.6 23.4c0 5.1-4.1 9.3-9.2 9.3-5.1 0-9.3-4.2-9.3-9.3 0-5 4.2-9.2 9.3-9.2 5.1 0 9.2 4.2 9.2 9.2zm-6.5-17.9c0 1.5-1.2 2.7-2.7 2.7-1.4 0-2.6-1.2-2.6-2.7 0-1.5 1.2-2.7 2.6-2.7 1.5 0 2.7 1.2 2.7 2.7zm-22.1-0.7c0 1.8-1.5 3.2-3.3 3.2-1.8 0-3.3-1.4-3.3-3.2 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3zm9.1 31.2c0 1.4-1.2 2.5-2.6 2.5-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.6 2.5-2.6 1.4 0 2.6 1.2 2.6 2.6zm-0.6-2l4-4m-13.2-23.2l13.1 10.2m7-8.6v5.5"
      stroke="white"
    />
  </svg>
);
const NotionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      stroke="white"
      strokeWidth="1"
      d="m16.71 9.36v9.15l-1.08 0.11-5.18-8.99-0.96 0.09v12.57l11.65-0.82v-16.25l-5.32-3.51-14.11 1.26v14.9l3.8 4.42v-15.88l11.2-0.9"
    />
  </svg>
);
const AirtableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 634 634" fill="none" {...props}>
    <path
      stroke="white"
      strokeWidth={28}
      fillRule="evenodd"
      d="m70.12 259.19l216.11 80.67-269.23 127.86v-285.99l300-131.4 300 123.67v293.72l-277.5 115.95v-285.99l210.83-85.6"
    />
  </svg>
);
const SalesforceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fill="white"
      d="M9.01,20.5c-1.804,0-3.438-1.042-4.191-2.632c-0.172,0.016-0.334,0.019-0.48,0.019C1.946,17.887,0,15.932,0,13.529c0-1.4,0.685-2.721,1.812-3.538C1.642,9.493,1.553,8.96,1.553,8.428c0-2.717,2.224-4.928,4.956-4.928c1.374,0,2.665,0.547,3.613,1.516c0.802-0.66,1.827-1.031,2.886-1.031c1.48,0,2.875,0.748,3.733,1.978c0.559-0.2,1.178-0.306,1.815-0.306c3.002,0,5.443,2.455,5.443,5.472c0,3.018-2.449,5.472-5.46,5.472c-0.227,0-0.463-0.017-0.727-0.053c-1.004,1.489-2.932,2.199-4.749,1.587C12.252,19.586,10.709,20.5,9.01,20.5z M5.129,16.815c0.206,0,0.396,0.128,0.47,0.328C6.113,18.553,7.484,19.5,9.01,19.5c1.463,0,2.777-0.862,3.35-2.196c0.054-0.123,0.153-0.22,0.279-0.269c0.123-0.049,0.264-0.046,0.387,0.01c1.612,0.73,3.335,0.094,4.1-1.286c0.104-0.188,0.317-0.283,0.525-0.25c0.348,0.062,0.63,0.091,0.89,0.091c2.459,0,4.46-2.006,4.46-4.472s-1.993-4.472-4.443-4.472c-0.652,0-1.274,0.132-1.8,0.381c-0.233,0.109-0.52,0.023-0.649-0.206c-0.645-1.139-1.833-1.847-3.1-1.847c-0.969,0-1.9,0.396-2.557,1.088C10.268,6.267,9.962,6.281,9.76,6.104C9.737,6.085,9.701,6.05,9.683,6.027C8.907,5.057,7.751,4.5,6.509,4.5c-2.182,0-3.956,1.762-3.956,3.928c0,0.538,0.114,1.075,0.329,1.554c0.104,0.233,0.017,0.508-0.204,0.637C1.643,11.223,1,12.338,1,13.529c0,1.852,1.497,3.357,3.338,3.357c0.291,0,0.495-0.018,0.683-0.06C5.057,16.819,5.093,16.815,5.129,16.815z"
    ></path>
  </svg>
);
const ZoomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 162 162" fill="none" {...props}>
    <path
      fill="white"
      d="m156.15 123.36c-1.2 0-2.75-0.43-4.61-1.86l-33.33-24.36v-32.48l33.39-24.41c2.88-2.36 5.12-2.1 6.48-1.46 1.34 0.64 2.96 2.23 2.96 6.18v71.85q-0.01 4.66-2.88 6.08c-0.46 0.23-1.14 0.46-2.01 0.46zm-32.32-29.08l31.09 22.73q0.26 0.2 0.48 0.34 0.01-0.23 0.01-0.53v-71.85q0.01-0.31-0.02-0.55-0.16 0.12-0.36 0.28l-31.2 22.81z"
    />
    <path
      fill="white"
      d="m25.43 123.34c-13.6 0-24.69-11.03-24.75-24.64v-53.58c0.08-3.71 3.05-6.68 6.76-6.77h78.19q0.05 0 0.1 0c13.6 0 24.7 11.03 24.76 24.64v53.57c-0.09 3.77-3.16 6.78-6.84 6.78h-78.11q-0.06 0-0.11 0zm-19.13-78.12v53.47c0.04 10.5 8.63 19.03 19.14 19.03q0.05 0 0.09 0h78.13c0.65 0 1.2-0.55 1.21-1.23v-53.49c-0.04-10.5-8.62-19.03-19.14-19.03q-0.04 0-0.09 0h-78.13c-0.65 0.02-1.18 0.54-1.21 1.25z"
    />
  </svg>
);

const rows: ConnectorIcon[][] = [
  [Facebook, ZaloIcon, TikTokIcon, Instagram, WhatsAppIcon, Send],
  [GmailIcon, SlackIcon, GithubIcon, HubSpotIcon, OutlookIcon, NotionIcon],
  [
    GoogleDriveIcon,
    CalendarDays,
    AirtableIcon,
    SalesforceIcon,
    ZoomIcon,
    Database,
  ],
];

function IconCard({ Icon }: { Icon: ConnectorIcon }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
      <Icon className="h-8 w-8 text-[#d5dbe6]" strokeWidth={1.25} />
    </div>
  );
}

// function MarqueeRow({
//   icons,
//   direction,
// }: {
//   icons: ConnectorIcon[];
//   direction: "left" | "right";
// }) {
//   // duplicate the icon set so the loop is seamless
//   const items = [...icons, ...icons, ...icons, ...icons];
//   return (
//     <div className="px-3 py-4 marquee-mask overflow-hidden">
//       <div
//         className={`flex w-max gap-10 sm:gap-[60px] ${
//           direction === "left"
//             ? "animate-marquee-left"
//             : "animate-marquee-right"
//         }`}
//       >
//         {items.map((Icon, i) => (
//           <IconCard key={i} Icon={Icon} />
//         ))}
//       </div>
//     </div>
//   );
// }
function MarqueeRow({
  icons,
  direction,
}: {
  icons: ConnectorIcon[];
  direction: "left" | "right";
}) {
  return (
    <div className="px-3 py-4 marquee-mask overflow-hidden">
      <div
        className={`marquee-track flex w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-10 sm:gap-[60px] pr-10 sm:pr-[60px]"
          >
            {icons.map((Icon, i) => (
              <IconCard key={`${group}-${i}`} Icon={Icon} />
            ))}
          </div>
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
            <div className="w-full max-w-xl mx-auto text-center mt-6">
              Extend your agents' capabilities by connecting to{" "}
              <span className="font-semibold">
                Gmail, Hubspot and other business applications
              </span>{" "}
              to handle conversations, access information, and interact with
              external services.
            </div>
          </FadeInUp>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
