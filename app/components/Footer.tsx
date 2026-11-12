"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  // Back to top
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative overflow-hidden py-16 text-sm">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="w-36 relative">
              <Image
                src="/images/logo.png"
                alt="agentcollab"
                width={187}
                height={30}
                className="w-auto h-auto max-w-full"
              />
            </Link>

            <div>
              <a
                target="_blank"
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 gap-3 hover:text-primary"
                href="https://www.facebook.com/groups/aivn.dev"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 46 86"
                  width="20"
                  height="20"
                >
                  <path d="m14 85.8v-39h-13.2v-15.2h13.1v-11.3c0-13 8-20.1 19.6-20.1q1.5 0 2.9 0 1.5 0 3 0.1 1.4 0.1 2.9 0.2 1.5 0.1 2.9 0.3v13.6h-8c-6.4 0-7.6 3-7.6 7.4v9.7h15.1l-2 15.2h-13v39.1z"></path>
                </svg>
                <span className="flex items-center gap-0.5">
                  Join now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    className="transition-transform duration-300 transform group-hover:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.66675 6.51191L7.84175 5.33691L12.8417 10.3369L7.84175 15.3369L6.66675 14.1619L10.4834 10.3369L6.66675 6.51191Z"
                      fill="#FFF"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-8 flex flex-col lg:flex-row items-start justify-between gap-4">
            <div>
              <p>© 2026 Agentcollab. All rights reserved.</p>
              <p className="mt-1 text-xs leading-relaxed opacity-70">
                Business Registration Certificate: No. 0311782776
                <br className="hidden lg:block" /> issued by Ho Chi Minh
                Business Registration Office on 12/05/2012
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-center gap-x-4 gap-y-2 md:gap-6 mb-1">
              <Link
                className="transition-colors duration-200 whitespace-nowrap"
                href="/terms-and-conditions"
              >
                Terms and Conditions
              </Link>
              <Link
                className="transition-colors duration-200 whitespace-nowrap"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="transition-colors duration-200 whitespace-nowrap"
                href="/terms-of-delivery"
              >
                Terms of Delivery
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-28 right-2 z-50 group transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <span className="w-10 h-10 flex items-center justify-center overflow-hidden bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]">
          <ChevronUp className="w-5 h-5" />
        </span>
      </button>
    </>
  );
}
