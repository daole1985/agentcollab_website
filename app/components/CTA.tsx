"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeInUp from "./animations/FadeInUp";
import ParticlesBackground from "./ParticlesBackground";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section
      id="contact"
      className="section-glow overflow-hidden py-16 lg:py-24 relative"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="mx-auto max-w-3xl text-center flex flex-col gap-2.5">
          <div className="flex items-center justify-center gap-4 text-sm italic">
            <span className="h-px w-12 bg-white/20" />
            Get in touch
            <span className="h-px w-12 bg-white/20" />
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Reach Us <span className="font-serif-italic">Anytime</span>
              </span>
            </h2>
          </div>
          <p className="max-w-xl mx-auto">
            Every great collaboration starts with a conversation.
            <br /> Let’s connect and explore what we can build together.
          </p>
        </FadeInUp>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:mt-14"
        >
          <div className="mx-auto max-w-xl p-5 lg:p-10 space-y-6 text-left bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden">
            {/* <FadeInUp delay={0.2}>
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
                    <MapPin className="size-8" />
                  </span>
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-sm text-[#8b95a7] mt-1 leading-relaxed">
                      <p className="flex gap-2 mb-1">
                        <span className="w-6 text-center">
                          <Image
                            src="/images/vn-flag.gif"
                            alt="Vietnam"
                            width={22}
                            height={16}
                            className="inline-block"
                          />
                        </span>
                        181, Cao Thang, Ho Chi Minh City, Viet Nam
                      </p>
                      <p className="flex gap-2">
                        <span className="w-6 text-center">
                          <Image
                            src="/images/fr-flag.gif"
                            alt="France"
                            width={22}
                            height={16}
                            className="inline-block"
                          />
                        </span>
                        9, quai Aulagnier, 92600 Asnières sur Seine, France
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.25}>
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
                    <Mail className="size-8" />
                  </span>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a
                      href="mailto:info@agentcollab.ai"
                      className="text-sm text-[#8b95a7] hover:text-white transition-colors mt-1 inline-block"
                    >
                      info@agentcollab.ai
                    </a>
                  </div>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.3} className="pt-2 text-center">
                <GlowButton
                  as="button"
                  endIcon={<ArrowUpRight size={18} />}
                  onClick={() => setOpenModal(true)}
                >
                  Contact Us
                </GlowButton>
              </FadeInUp> */}

            <FadeInUp delay={0.2}>
              <ContactForm />
            </FadeInUp>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full overflow-hidden transform translate-z-0 rounded-none relative">
          <ParticlesBackground id="footer-particles" />
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
