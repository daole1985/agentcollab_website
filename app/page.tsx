"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Process from "./components/Process";
import OurClients from "./components/OurClients";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sections = ["about", "pricing", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (!visibleEntries.length) return;

        const current = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];

        window.dispatchEvent(
          new CustomEvent("section-change", {
            detail: current.target.id,
          }),
        );
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = searchParams.get("section");

    if (!section) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(section);

      if (!element) return;

      const headerHeight = 68;

      const y =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      window.dispatchEvent(
        new CustomEvent("section-change", {
          detail: section,
        }),
      );

      router.replace("/", { scroll: false });
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams, router]);

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Process />
      <OurClients />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <WhyChooseUs />
      <CTA />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
