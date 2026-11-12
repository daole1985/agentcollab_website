"use client";

import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";

type AsType = "link" | "a" | "button";

interface GlassButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  target?: "_self" | "_blank";
  rel?: string;
  as?: AsType;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

export default function GlassButton({
  href = "#",
  children,
  className,
  startIcon,
  endIcon,
  target = "_self",
  rel,
  as = "link",
  onClick,
  disabled = false,
  ...rest
}: GlassButtonProps) {
  const baseClass = clsx(
    "relative flex w-fit items-center justify-center gap-1.5 overflow-hidden rounded-lg",
    "text-sm font-medium px-5 py-2",
    "no-underline",
    disabled
      ? "opacity-50 select-none"
      : "cursor-pointer hover:text-white hover:border-[rgba(216,231,242,0.18)] hover:brightness-125",
    "backdrop-blur-[5px]",
    "border border-[rgba(216,231,242,0.1)]",
    "bg-[linear-gradient(180deg,#10131c_0%,rgba(255,255,255,0.07)_100%)]",
    "shadow-[inset_0_-0.48px_0.48px_-1.25px_rgba(0,0,0,.68),inset_0_-1.83px_1.83px_-2.5px_rgba(0,0,0,.6),inset_0_-8px_8px_-3.75px_rgba(0,0,0,.24)]",
    "transition-all duration-300",
    className,
  );

  const content = (
    <>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </>
  );

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  // When disabled, always render as disabled button so link cannot be triggered
  if (disabled) {
    return (
      <button
        type="button"
        disabled
        className={baseClass}
        aria-disabled="true"
        {...rest}
      >
        {content}
      </button>
    );
  }

  // BUTTON (for actions)
  if (as === "button") {
    return (
      <button
        type="button"
        className={baseClass}
        onClick={handleClick}
        {...rest}
      >
        {content}
      </button>
    );
  }

  // NORMAL anchor
  if (as === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? (rel ?? "noopener noreferrer") : undefined}
        className={baseClass}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  // NEXT LINK (default)
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : undefined}
      className={baseClass}
      onClick={handleClick}
      {...rest}
    >
      {content}
    </Link>
  );
}
