// ============================================================================
// SPREAD 13 — MEMORY WALL
// Large scrapbook collage. Edit `memoryWall` in src/data/content.ts — add or
// remove image paths freely, the grid adjusts automatically.
// ============================================================================

import Photo from "@/components/Photo";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { memoryWall } from "@/data/content";

// Slight rotation pattern so the wall doesn't look like a sterile grid
const rotations = [-2, 1, -1, 2, 0, -3, 1, 2, -2, 0, 3, -1, 1, -2, 2, 0, -1, 3, -2, 1];

export default function MemoryWallSpread() {
  return (
    <section
      id="memory-wall"
      className="paper-grain relative w-full overflow-hidden bg-paper px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center sm:mb-20">
          <SectionLabel className="mx-auto">THE FULL ARCHIVE</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-7xl">
            The Memory Wall
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-sm text-ink-soft sm:text-base">
            Everything that didn&apos;t fit anywhere else, pinned up together. As it should be.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4 md:grid-cols-6">
          {memoryWall.map((src, i) => (
            <Reveal key={src + i} delay={(i % 12) * 0.03} y={16}>
              <div
                className="relative aspect-square overflow-hidden border-4 border-cream bg-paper-dark shadow-polaroid transition-transform duration-300 hover:z-20 hover:scale-110 hover:rotate-0"
                style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
              >
                <Photo
                  src={src}
                  alt={`Memory wall photo ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 24–25" section="MEMORY WALL" />
    </section>
  );
}
