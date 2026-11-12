"use client";

import type { ReactNode, ButtonHTMLAttributes, MouseEventHandler } from "react";
import Link from "next/link";

type AsType = "a" | "button" | "link";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  innerClassName?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  target?: "_self" | "_blank";
  rel?: string;
  as?: AsType;
  type?: "button" | "submit" | "reset";
}

export default function GlowButton({
  children,
  href = "#",
  onClick,
  className = "",
  innerClassName = "px-6 py-3",
  startIcon,
  endIcon,
  target = "_self",
  rel,
  as = "a",
  type = "button",
  ...rest
}: GlowButtonProps) {
  const baseClass = `group relative inline-flex rounded-lg bg-white/5 p-[2px] font-medium ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 rounded-lg before:absolute before:inset-0 before:content-[''] before:rounded-lg before:bg-[radial-gradient(25%_50%_at_50%_100%,white_0%,transparent_100%)] before:blur-[15px]" />

      <span className="absolute inset-0 rounded-lg overflow-hidden after:absolute after:inset-0 after:content-[''] after:rounded-lg after:bg-[radial-gradient(20.7%_50%_at_50%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] after:origin-bottom after:transition-transform after:duration-500 after:ease-in-out after:scale-x-100 group-hover:after:scale-x-[3]" />

      <span
        className={`w-full relative z-10 flex items-center justify-center gap-2 rounded-lg bg-[#04070d] ${innerClassName} text-white`}
      >
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </span>
    </>
  );

  if (as === "button") {
    return (
      <button type={type} onClick={onClick} className={baseClass} {...rest}>
        {content}
      </button>
    );
  }

  if (as === "link") {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? (rel ?? "noopener noreferrer") : undefined}
        className={baseClass}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : undefined}
      onClick={onClick}
      className={baseClass}
    >
      {content}
    </a>
  );
}
