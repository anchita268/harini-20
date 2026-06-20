"use client";

// ============================================================================
// SPREAD 14 — BACK COVER
// Final elegant photo and closing message. Edit `backCover` in
// src/data/content.ts.
// ============================================================================

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { backCover, siteMeta } from "@/data/content";

export default function BackCoverSpread() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      id="back-cover"
      className="paper-grain relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ink px-4 py-24 text-center sm:px-10"
    >
      <div className="halftone absolute inset-0 opacity-[0.04]" aria-hidden />

      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
          {siteMeta.issueLine} — FINAL PAGE
        </p>
      </Reveal>

      <div className="relative mt-8 h-[42vh] w-[68vw] max-w-md overflow-hidden sm:h-[52vh] sm:w-[36vw]">
        <motion.div style={{ y: photoY }} className="absolute inset-[-10%]">
          {/* 🖼️ PHOTO PLACEHOLDER — final elegant closing photo. Edit backCover.photo in content.ts */}
          <Photo
            src={backCover.photo}
            alt="Harini, closing photo"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <Reveal delay={0.15} className="mt-10 max-w-xl">
        <p className="font-display text-2xl italic leading-snug text-paper sm:text-4xl">
          “{backCover.closingLine}”
        </p>
      </Reveal>

      <Reveal delay={0.25} className="mt-8">
        <p className="font-hand text-3xl text-rouge sm:text-4xl">{backCover.signOff}</p>
      </Reveal>

      <Reveal delay={0.35} className="mt-16 border-t border-paper/20 pt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 sm:text-xs">
          {backCover.issueFooter}
        </p>
      </Reveal>
    </section>
  );
}
