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
      id="cover"
      className="paper-grain relative flex h-[100vh] min-h-[640px] w-full flex-col overflow-hidden bg-paper"
    >
      {/* Halftone corner accents */}
      <div className="halftone-rouge absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-70" aria-hidden />
      <div className="halftone absolute -bottom-10 -left-10 h-40 w-40 opacity-50" aria-hidden />

      {/* Top masthead row */}
      <motion.div style={{ opacity: fade }} className="relative z-20 flex items-start justify-between px-4 pt-5 sm:px-10 sm:pt-8">
        <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ink/70 leading-snug max-w-[34%] whitespace-pre-line">
          {coverHeadlines.topLeft}
        </div>
        <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ink/70 leading-snug max-w-[34%] whitespace-pre-line text-right">
          {coverHeadlines.topRight}
        </div>
      </motion.div>

      {/* Masthead */}
      <motion.div style={{ y: mastY }} className="relative z-20 mt-2 px-4 text-center sm:mt-4">
        <h1 className="font-display text-[20vw] sm:text-[15vw] md:text-[13vw] leading-[0.82] tracking-tight text-ink">
          HARINI
        </h1>
        <p className="mt-1 font-mono text-[10px] sm:text-sm uppercase tracking-[0.4em] text-rouge">
          {siteMeta.tagline} · {siteMeta.issueLine}
        </p>
      </motion.div>

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

    {/* Light paper overlay so text stays readable */}
    <div className="absolute inset-0 z-[1] bg-paper/35" />

    {/* Giant "20" — keep exactly same styling */}
    <div className="pointer-events-none absolute bottom-[6%] right-[2%] z-0 select-none font-display text-[34vw] sm:text-[24vw] leading-none text-rouge/90 sm:right-[4%]">
      20
    </div>

      {/* Bottom headline row */}
      <motion.div style={{ opacity: fade }} className="relative z-20 flex items-end justify-between gap-4 px-4 pb-16 sm:px-10 sm:pb-10">
        <p className="max-w-[40%] font-display text-sm italic leading-snug text-ink sm:text-xl whitespace-pre-line">
          {coverHeadlines.bottomLeft}
        </p>
        <p className="max-w-[40%] text-right font-mono text-[10px] uppercase leading-snug tracking-[0.2em] text-ink/70 sm:text-xs whitespace-pre-line">
          {coverHeadlines.bottomRight}
        </p>
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-20 border-t border-ink/20 px-4 py-2 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-ink/60 sm:text-[11px]">
        {coverHeadlines.coverLine}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 sm:bottom-5"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        scroll to open ↓
      </motion.div>

      <Folio pageNumber="P. 01" section="COVER" />
    </section>
  );
}
