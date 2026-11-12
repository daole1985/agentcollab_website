"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";
import GlassButton from "./GlassButton";
import GlowButton from "./GlowButton";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { label: "About Us", id: "about" },
  { label: "Pricing", id: "pricing" },
  { label: "Affiliate", href: "/partners" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lắng nghe section active
  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setActiveSection(customEvent.detail);
    };

    window.addEventListener("section-change", handler);

    return () => {
      window.removeEventListener("section-change", handler);
    };
  }, []);

  // reset section khi sang page khác
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
    }
  }, [pathname]);

  const scrollTo = (id: string) => {
    setOpen(false);
    setActiveSection(id);

    if (pathname === "/") {
      const element = document.getElementById(id);
      if (!element) return;

      const headerHeight = 68;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      return;
    }

    router.push(`/?section=${id}`);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-300 ${scrolled || open ? "bg-[rgba(8, 9, 10, 0.75)] [box-shadow:0_1px_0_rgba(216,231,242,0.07)] backdrop-blur-xl" : "lg:py-4"}`}
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <nav className="flex items-center justify-between py-2.5">
              {/* Logo */}
              <Link
                href="/"
                className="w-12 h-12 md:w-52 md:h-16 flex items-center gap-2"
              >
                <Image
                  src="/images/logo-icon.png"
                  alt="agentcollab"
                  width={48}
                  height={32}
                  priority
                  className="block h-8 w-auto"
                />

                <Image
                  src="/images/logo.png"
                  alt="agentcollab"
                  width={150}
                  height={24}
                  priority
                  className="hidden md:block h-6 w-auto"
                />
              </Link>

              <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-xl">
                {links.map((link) => {
                  const isActive = link.href
                    ? pathname === link.href
                    : activeSection === link.id;

                  return link.href ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => link.id && scrollTo(link.id)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-3">
                  <GlassButton
                    href="https://cibot.agentcollab.ai/login"
                    target="_blank"
                  >
                    Sign in
                  </GlassButton>
                  <GlassButton
                    className="!border-[#a6daff]/50 !bg-[radial-gradient(circle_at_25%_15%,#a6daff_0%,#7daed2_35%,#5785b3_100%)] !text-white !shadow-[0_0_20px_rgba(166,218,255,0.2)] !transition-all !duration-300 !ease-out hover:!bg-[radial-gradient(circle_at_25%_15%,#bde5ff_0%,#94c5e8_35%,#6f9bc5_100%)] hover:!shadow-[0_0_24px_rgba(166,218,255,0.28)] hover:!brightness-[1.03]"
                    href="https://cibot.agentcollab.ai/register"
                    target="_blank"
                    startIcon={<Sparkles className="h-4 w-4" />}
                  >
                    Free Trial
                  </GlassButton>
                </div>
                <div className="flex items-center gap-0.5 lg:hidden">
                  <a
                    href="https://cibot.agentcollab.ai/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="p-2 text-sm text-left text-[#d5dbe6] transition-colors hover:text-white"
                  >
                    Sign in
                  </a>
                  <span className="h-3.5 w-px bg-white/20" />
                  <a
                    href="https://cibot.agentcollab.ai/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="p-2 text-sm text-left text-[#d5dbe6] transition-colors hover:text-white"
                  >
                    Free Trial
                  </a>
                </div>
                <button
                  ref={buttonRef}
                  onClick={() => setOpen((v) => !v)}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
                >
                  {open ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </nav>

            {open && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative pb-5 flex flex-col items-center gap-1 text-left lg:hidden"
              >
                {links.map((link) => {
                  const isActive = link.href
                    ? pathname === link.href
                    : activeSection === link.id;

                  return link.href ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-2.5 font-medium transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => link.id && scrollTo(link.id)}
                      className={`px-4 py-2.5 font-medium transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <div className="pointer-events-none absolute bottom-[-249px] left-1/2 z-[4] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] flex-none rounded-[10px] opacity-[0.35] blur-[36px] bg-[radial-gradient(50%_50%_at_50%_50%,#d5dbe6_0%,rgba(166,218,255,0.4)_40%,rgba(4,7,13,0)_100%)]"></div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>
    </>
  );
}
