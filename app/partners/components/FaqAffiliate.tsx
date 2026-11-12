"use client";

import { MessagesSquare, HelpCircle, ArrowUpRight } from "lucide-react";
import FadeInUp from "@/app/components/animations/FadeInUp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GlassButton from "@/app/components/GlassButton";

const faqData = [
  {
    question:
      "Do I need a website or blog to join the AgentCollab affiliate program?",
    answer:
      "No, you don't need a website or blog. You can drive traffic through YouTube, social media, or any other channel of your choice.",
  },
  {
    question:
      "Does the AgentCollab affiliate program offer recurring commissions?",
    answer:
      "Yes. You will receive a 30% lifetime recurring commission on all revenue from your referrals, for as long as they continue using the service.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We pay via bank transfer and also support PayPal for added flexibility.",
  },
  {
    question: "When will I receive my payouts?",
    answer:
      "You will receive your payment one month after your referral completes their transaction.",
  },
  {
    question:
      "What happens if a customer visits through my link but later purchases directly?",
    answer:
      "We use a 30-day tracking cookie. If the customer makes a purchase within this window, you will still receive the commission, even if they return to the site directly.",
  },
  {
    question:
      "Do you provide resources to promote the AgentCollab affiliate program?",
    answer:
      "Yes. We provide a full suite of marketing resources, including images, content templates, guides, sales pitches, and more to help you promote effectively.",
  },
  {
    question: "How can I sign up for the affiliate program?",
    answer:
      "Simply create an affiliate account, get your personal link, share it with your audience, and start earning a 30% lifetime commission.",
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer:
      "There is no limit. The more people you refer, the more commissions you can earn.",
  },
  {
    question: "Can I track my performance?",
    answer:
      "Yes. You will have a dashboard to track clicks, sign-ups, conversions, and commissions in real time.",
  },
];

export default function FAQ() {
  const scrollToContact = () => {
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

  return (
    <section id="faq" className="section-glow overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <FadeInUp className="max-w-xl mx-auto text-center flex flex-col gap-2.5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,231,242,0.07)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-xl">
              <MessagesSquare className="h-3.5 w-3.5" />
              FAQ
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-[44px] leading-[1.25] font-medium">
              <span className="inline-block px-3 bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Frequently Asked{" "}
                <span className="font-serif-italic">Questions</span>
              </span>
            </h2>
          </div>
          <p>
            Got questions? We’ve compiled quick fixes to the most common issues
            so you can confidently become an Agentcollab affiliate.
          </p>
        </FadeInUp>
        <div className="w-full max-w-2xl lg:max-w-[1000px] mx-auto mt-10 lg:mt-14 space-y-4">
          <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
            <FadeInUp className="lg:order-2">
              <Accordion
                type="single"
                collapsible
                defaultValue="i-0"
                className="space-y-3"
              >
                {faqData.map((item, i) => (
                  <AccordionItem
                    key={`i-${i}`}
                    value={`i-${i}`}
                    className="px-6 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5 text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInUp>
            <FadeInUp className="lg:order-1">
              <div className="sticky top-28 p-8 rounded-2xl border border-white/10 bg-[#04070D] shadow-[inset_0px_2px_1px_rgba(207,231,255,0.2)] text-center">
                <div className="mx-auto mb-5 h-12 w-12 flex items-center justify-center bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset,0px_0.796192px_0.796192px_-0.875px_rgba(87,133,179,0.48),0px_2.41451px_2.41451px_-1.75px_rgba(87,133,179,0.455),0px_6.38265px_6.38265px_-2.625px_rgba(87,133,179,0.4),0px_20px_20px_-3.5px_rgba(87,133,179,0.21)]">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium">Still have questions?</h3>
                <p className="mt-2 text-sm">
                  Feel free to get in touch with us today!
                </p>
                <div className="mt-6 inline-block">
                  <GlassButton
                    className="w-full"
                    as="button"
                    startIcon={<ArrowUpRight size={18} />}
                    onClick={scrollToContact}
                  >
                    Contact Us
                  </GlassButton>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[4px] z-[4] bg-gradient-to-r from-[#04070d] via-[rgba(216,231,242,0.07)] to-[#04070d]"></div>
    </section>
  );
}
