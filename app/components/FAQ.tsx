"use client";

import { useState } from "react";
import { MessagesSquare, HelpCircle, ArrowUpRight } from "lucide-react";
import FadeInUp from "./animations/FadeInUp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GlassButton from "./GlassButton";

const faqData = {
  miscellaneous: [
    {
      question: "What makes Agentcollab unique?",
      answer:
        "Agentcollab stands out with intelligent data management and annotation capabilities, AI-powered workflow automation, and support for multiple annotation methods, helping teams save time and improve accuracy.",
    },
    {
      question: "Is Agentcollab free to use?",
      answer:
        "Agentcollab offers a free plan with essential features, making it ideal for individuals and small teams looking to explore and manage data efficiently.",
    },
    {
      question: "Can I use Agentcollab on mobile devices?",
      answer:
        "Yes, Agentcollab is available on mobile devices. However, we believe the best experience is on desktop, where you can manage conversations, enter data, and navigate more efficiently with a keyboard and mouse.",
    },
    {
      question: "What types of data can Agentcollab handle?",
      answer:
        "Agentcollab supports various data types, including text, images, audio, and video, enabling businesses to manage and analyze data according to their needs.",
    },
    {
      question: "Can Agentcollab integrate with my existing business systems?",
      answer:
        "Yes. Agentcollab provides APIs that allow seamless integration with your existing systems, helping streamline workflows and maximize the value of your data.",
    },
    {
      question: "How much does AI usage cost?",
      answer:
        "AI usage costs depend on the plan you choose. The free plan includes limited AI capabilities, while premium plans provide more advanced automation and AI-powered features.",
    },
    {
      question: "How can I contact support if I encounter an issue?",
      answer:
        "You can reach the Agentcollab support team through email, live chat, or our community channels for prompt assistance.",
    },
  ],

  functioning: [
    {
      question: "How does Agentcollab process user requests?",
      answer:
        "User input is routed through a central orchestration layer that directs requests to the most appropriate AI models, tools, and data sources.",
    },
    {
      question: "How does the AI chatbot understand user intent?",
      answer:
        "The chatbot uses Natural Language Understanding (NLU) to analyze user intent and extract relevant entities from messages in real time.",
    },
    {
      question: "Can the chatbot handle multi-turn conversations?",
      answer:
        "Yes. The system maintains conversation context through memory and session tracking, enabling coherent responses across multi-step interactions.",
    },
    {
      question: "What happens if the chatbot doesn't know the answer?",
      answer:
        "When confidence is low, the chatbot can escalate the conversation to a human agent or ask follow-up questions for clarification.",
    },
    {
      question: "How does the chatbot deliver fast responses?",
      answer:
        "The platform is optimized for speed through caching, lightweight APIs, and intelligent model selection to minimize latency.",
    },
    {
      question: "Does the chatbot support multiple languages?",
      answer:
        "Yes. The chatbot supports multiple languages through real-time translation and native language understanding capabilities.",
    },
    {
      question: "Can the chatbot connect to other platforms?",
      answer:
        "Absolutely. It can integrate with CRMs, customer support systems, databases, and third-party APIs through secure connections.",
    },
  ],

  integrations: [
    {
      question: "Which systems can the AI chatbot integrate with?",
      answer:
        "The chatbot can integrate with CRMs, order management systems, customer support software, email platforms, and messaging services such as Facebook, Zalo, and Slack.",
    },
    {
      question: "How does the integration process work?",
      answer:
        "Through APIs and webhooks, the chatbot can connect with existing systems and exchange data in real time.",
    },
    {
      question: "Can the chatbot connect to internal databases?",
      answer:
        "Yes. The chatbot supports querying and writing data directly to databases such as MySQL, PostgreSQL, MongoDB, and Google Sheets.",
    },
    {
      question: "Can the chatbot work with e-commerce platforms?",
      answer:
        "Absolutely. The chatbot integrates with platforms such as Shopify, WooCommerce, and Haravan to assist with product recommendations and order management.",
    },
    {
      question: "Can I integrate the chatbot with project management tools?",
      answer:
        "Yes. The chatbot can connect with tools like Trello, Notion, ClickUp, and Asana to create, update, and manage tasks automatically.",
    },
    {
      question: "Can the chatbot send automated notifications?",
      answer:
        "Yes. The chatbot can automatically send notifications through email, SMS, Telegram, Messenger, and other communication channels.",
    },
    {
      question: "Are integrations secure?",
      answer:
        "We use industry-standard security measures, including HTTPS, OAuth 2.0, and role-based access controls, to ensure your data remains protected during integrations.",
    },
  ],
} as const;

type Category = keyof typeof faqData;

const categories: { id: Category; label: string }[] = [
  { id: "miscellaneous", label: "General" },
  { id: "functioning", label: "How It Works" },
  { id: "integrations", label: "Integrations" },
];

export default function FAQ() {
  const [active, setActive] = useState<Category>("miscellaneous");
  const items = faqData[active];
  const activeIndex = categories.findIndex((c) => c.id === active);

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
            A collection of commonly asked questions to help you save time and
            feel more confident when using our service.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="inline-flex p-1 items-center bg-[#10131c] rounded-lg border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset] overflow-hidden whitespace-nowrap">
              <div className="w-full relative flex items-center">
                <span
                  className="absolute top-0 bottom-0 rounded-[6px] bg-[#04070d] transition-all duration-300"
                  style={{
                    width: `${100 / categories.length}%`,
                    left: `${(100 / categories.length) * activeIndex}%`,
                  }}
                />
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`relative z-10 w-28 px-3 py-2 text-sm font-medium transition-colors ${
                      active === c.id ? "text-white" : ""
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
        <div className="w-full max-w-2xl lg:max-w-[1000px] mx-auto mt-10 lg:mt-14 space-y-4">
          <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
            <FadeInUp className="lg:order-2">
              <Accordion
                type="single"
                collapsible
                defaultValue="i-0"
                key={active}
                className="space-y-3"
              >
                {items.map((item, i) => (
                  <AccordionItem
                    key={i}
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
                    as="button"
                    onClick={scrollToContact}
                    startIcon={<ArrowUpRight size={18} />}
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
