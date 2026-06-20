// ============================================================================
// SPREAD 8 — PHOTO DIARY: SCRAPBOOK STRIP
// A horizontal "evidence wall" feel. Edit `diaryScrapbook` in
// src/data/content.ts to add/remove photos.
// ============================================================================

import Polaroid from "@/components/Polaroid";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { diaryScrapbook } from "@/data/content";

export default function DiaryScrapbookSpread() {
  return (
    <section
      id="diary-scrapbook"
      className="paper-grain relative w-full overflow-hidden bg-paper-dark px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 sm:mb-20">
          <SectionLabel>PHOTO DIARY — PAGE FIVE</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-6xl">
            Exhibit A Through F
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-ink-soft sm:text-base">
            The evidence wall. Presented without further comment.
          </p>
        </Reveal>

        <div className="-mx-4 overflow-x-auto px-4 pb-6 sm:overflow-visible">
          <div className="flex min-w-max gap-8 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-10">
            {diaryScrapbook.map((item, i) => (
              <Reveal key={item.src + i} delay={i * 0.06}>
                <Polaroid src={item.src} caption={item.caption} rotate={item.rotate} size="md" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Folio pageNumber="P. 14–15" section="PHOTO DIARY" align="right" />
    </section>
  );
}
