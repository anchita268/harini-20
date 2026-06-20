"use client";

// ============================================================================
// Reveal — a small wrapper that fades/slides content in as it scrolls into
// view. Used throughout the magazine for the "page turning" feel.
// ============================================================================

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  direction = "up",
}: RevealProps) {
  const offset =
    direction === "up"
      ? { y }
      : direction === "down"
      ? { y: -y }
      : direction === "left"
      ? { x: y }
      : { x: -y };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
