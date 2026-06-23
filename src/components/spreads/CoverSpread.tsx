"use client";

// ============================================================================
// SPREAD 1 — COVER
// Full-screen magazine cover with cutout photo, masthead, and fake headlines.
// Content (headlines, photo) comes from `coverHeadlines` in src/data/content.ts
// ============================================================================

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Photo from "@/components/Photo";
import Folio from "@/components/Folio";
import { coverHeadlines, siteMeta } from "@/data/content";

export default function CoverSpread() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  const mastY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id ="cover"
      className="paper-grain relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-paper"
    >
      {/* Full-page background photo */}
      <motion.div
        style={{ y: photoY, scale: photoScale }}
        className="absolute inset-0 z-0"
      >
        <Photo
          src={coverHeadlines.coverPhoto}
          alt="Harini, cover photo"
          className="h-full w-full object-cover object-center opacity-55"
        />
      </motion.div>

      {/* Soft editorial wash over the image */}
      <div className="absolute inset-0 z-10 bg-paper/55" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-paper/70 via-paper/35 to-paper/65" />

      {/* Halftone corner accents */}
      <div className="halftone-rouge absolute -right-16 -top-16 z-20 h-56 w-56 rounded-full opacity-70" aria-hidden />
      <div className="halftone absolute -bottom-10 -left-10 z-20 h-40 w-40 opacity-50" aria-hidden />

      {/* Top small headlines */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-30 flex items-start justify-between px-4 pt-5 sm:px-10 sm:pt-8"
      >
        <div className="max-w-[34%] whitespace-pre-line font-mono text-[10px] uppercase leading-snug tracking-[0.25em] text-ink/75 sm:text-xs">
          {coverHeadlines.topLeft}
        </div>

        <div className="max-w-[34%] whitespace-pre-line text-right font-mono text-[10px] uppercase leading-snug tracking-[0.25em] text-ink/75 sm:text-xs">
          {coverHeadlines.topRight}
        </div>
      </motion.div>

      {/* Main masthead */}
      <motion.div
        style={{ y: mastY }}
        className="relative z-30 mt-4 px-4 text-center sm:mt-8"
      >
        <h1 className="font-display text-[22vw] leading-[0.78] tracking-tight text-ink sm:text-[16vw] md:text-[13vw]">
          HARINI JAY JONNADA
        </h1>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.45em] text-rouge sm:text-sm">
          {siteMeta.tagline} · {siteMeta.issueLine}
        </p>
      </motion.div>

      {/* Giant age number */}
      <div className="pointer-events-none absolute right-[2vw] top-[42%] z-20 -translate-y-1/2 select-none font-display text-[42vw] leading-none text-rouge/90 sm:right-[5vw] sm:text-[28vw]">
        20
      </div>

      {/* Bottom cover text */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-12 left-0 right-0 z-30 flex items-end justify-between gap-4 px-4 sm:px-10"
      >
        <p className="max-w-[48%] whitespace-pre-line font-display text-sm italic leading-snug text-ink sm:text-2xl">
          {coverHeadlines.bottomLeft}
        </p>

        <p className="max-w-[36%] whitespace-pre-line text-right font-mono text-[10px] uppercase leading-snug tracking-[0.2em] text-ink/75 sm:text-xs">
          {coverHeadlines.bottomRight}
        </p>
      </motion.div>

      {/* Bottom cover line */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-0 left-0 right-0 z-30 border-t border-ink/20 px-4 py-2 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-ink/65 sm:text-[11px]"
      >
        {coverHeadlines.coverLine}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 z-40 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        scroll to open ↓
      </motion.div>

      <Folio pageNumber="P. 01" section="COVER" />
    </section>
  );
}
