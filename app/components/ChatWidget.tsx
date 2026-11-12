"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          backgroundColor: "#f9f9f9",
        }}
      >
        <chat-widget id="w-hft-nfn-64fb" lang="vie"></chat-widget>
      </div>
      <Script
        src="https://ai.cibot-sandbox.byte.vn/embed/app/utils/embed-widget.js"
        type="module"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}
