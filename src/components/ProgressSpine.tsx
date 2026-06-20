"use client";

// ============================================================================
// ProgressSpine — a fixed vertical "spine" on the edge of the screen that
// fills in as you scroll, like flipping through a real magazine. Also acts
// as a quick jump-to-section index on desktop.
// ============================================================================

import { motion, useScroll } from "framer-motion";
import { useState } from "react";

const sections = [
  { id: "cover", label: "Cover" },
  { id: "editors-letter", label: "Editor's Letter" },
  { id: "the-lore", label: "The Lore" },
  { id: "diary-polaroids", label: "Diary I" },
  { id: "diary-film", label: "Diary II" },
  { id: "diary-collage", label: "Diary III" },
  { id: "diary-editorial", label: "Diary IV" },
  { id: "diary-scrapbook", label: "Diary V" },
  { id: "twenty-things", label: "20 Things" },
  { id: "harini-awards", label: "Awards" },
  { id: "interview", label: "Interview" },
  { id: "messages", label: "Messages" },
  { id: "memory-wall", label: "Memory Wall" },
  { id: "back-cover", label: "Back Cover" },
];

export default function ProgressSpine() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Top progress rule */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-ink/10">
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
          className="h-full w-full bg-rouge"
        />
      </div>

      {/* Toggle tab */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open table of contents"
        aria-expanded={open}
        className="fixed right-0 top-1/2 z-50 -translate-y-1/2 rounded-l-md border border-ink/20 bg-cream px-2 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink shadow-tape sm:px-3 sm:py-4"
        style={{ writingMode: "vertical-rl" }}
      >
        Contents
      </button>

      {/* Slide-out index */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed right-0 top-0 z-50 h-full w-64 max-w-[80vw] border-l border-ink/15 bg-cream px-6 py-16 shadow-lift sm:w-72"
      >
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-rouge">
          Table of Contents
        </p>
        <nav className="space-y-3">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="flex w-full items-center gap-3 text-left font-display text-base italic text-ink-soft transition-colors hover:text-rouge"
            >
              <span className="font-mono text-xs text-ink/40">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setOpen(false)}
          className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 hover:text-ink"
        >
          ✕ Close
        </button>
      </motion.div>

      {/* Backdrop when open */}
      {open && (
        <button
          aria-label="Close table of contents"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-ink/30"
        />
      )}
    </>
  );
}
