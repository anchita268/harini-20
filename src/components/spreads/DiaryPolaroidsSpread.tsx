// ============================================================================
// SPREAD 4 — PHOTO DIARY: POLAROID WALL
// Edit `diaryPolaroids` in src/data/content.ts to add/remove photos.
// ============================================================================

import Polaroid from "@/components/Polaroid";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { diaryPolaroids } from "@/data/content";

export default function DiaryPolaroidsSpread() {
  return (
    <section
      id="diary-polaroids"
      className="paper-grain relative w-full overflow-hidden bg-paper-dark px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 sm:mb-20">
          <SectionLabel>PHOTO DIARY — PAGE ONE</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-6xl">
            The Polaroid Wall
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-ink-soft sm:text-base">
            INCASE YOU FORGOT ANY OF THESE..
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-16">
          {diaryPolaroids.map((p, i) => (
            <div
              key={p.src + i}
              className={`flex justify-center ${i % 3 === 1 ? "sm:translate-y-6" : ""} ${
                i % 4 === 2 ? "sm:translate-y-10" : ""
              }`}
            >
              <Polaroid
                src={p.src}
                caption={p.caption}
                rotate={p.rotate}
                tape={p.tape as "rouge" | "moss" | "dust" | "gold" | "denim"}
                size="md"
              />
            </div>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 06–07" section="PHOTO DIARY" align="right" />
    </section>
  );
}
