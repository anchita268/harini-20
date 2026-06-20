"use client";

// ============================================================================
// Polaroid — a single instant-photo frame with a handwritten-style caption.
//
// 🖼️ TO REPLACE A PHOTO: pass a different `src` from /public/photos/.
// If the image file is missing, a clearly labelled placeholder box is shown
// instead so you always know exactly what's missing.
// ============================================================================

import { useState } from "react";
import { motion } from "framer-motion";

interface PolaroidProps {
  src: string;
  caption?: string;
  rotate?: number;
  tape?: "rouge" | "moss" | "dust" | "gold" | "denim";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-32 sm:w-40",
  md: "w-44 sm:w-56",
  lg: "w-60 sm:w-72",
};

export default function Polaroid({
  src,
  caption,
  rotate = 0,
  tape,
  className = "",
  size = "md",
}: PolaroidProps) {
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotate * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
      className={`polaroid relative ${sizeMap[size]} ${className}`}
      style={{ transformOrigin: "center" }}
    >
      {tape && (
        <div
          className={`tape tape-${tape} w-14 -top-3 left-1/2 -translate-x-1/2 rotate-2`}
          aria-hidden
        />
      )}
      <div className="relative aspect-[4/5] w-full bg-paper-dark overflow-hidden">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={caption || "Memory photo"}
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 border border-dashed border-ink/30 bg-paper-dark px-2 text-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
              Photo missing
            </span>
            <span className="font-mono text-[9px] text-ink/40 break-all">{src}</span>
          </div>
        )}
      </div>
      {caption && (
        <p className="absolute bottom-2 left-0 right-0 px-3 text-center font-hand text-base sm:text-lg leading-tight text-ink-soft">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
