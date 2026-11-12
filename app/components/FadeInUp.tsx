"use client";

import { motion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

interface FadeInUpProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "li" | "span";
}

export function FadeInUp({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: FadeInUpProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
