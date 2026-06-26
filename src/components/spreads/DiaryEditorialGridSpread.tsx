// ============================================================================
// SPREAD 7 — PHOTO DIARY: EDITORIAL GRID
// Styled like a fashion magazine "looks" spread. Edit `diaryEditorialGrid`
// in src/data/content.ts to add/remove looks.
// ============================================================================

import Photo from "@/components/Photo";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { diaryEditorialGrid } from "@/data/content";

export default function DiaryEditorialGridSpread() {
  return (
    <section
      id="diary-editorial"
      className="paper-grain relative w-full overflow-hidden bg-cream px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 flex flex-col gap-2 border-b border-ink/20 pb-8 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>PHOTO DIARY — PAGE FOUR</SectionLabel>
            <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-6xl">
              The Lookbook
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm text-ink-soft sm:text-right">
            EVEN MORE PICTURES
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 lg:grid-cols-3">
          {diaryEditorialGrid.map((look, i) => (
            <Reveal key={look.src + i} delay={(i % 3) * 0.08}>
              <div className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-dark">
                  <Photo
                    src={look.src}
                    alt={look.caption}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 font-display text-lg italic text-ink">{look.caption}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/50">
                  {look.credit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 12–13" section="PHOTO DIARY" />
    </section>
  );
}
