// ============================================================================
// SPREAD 5 — PHOTO DIARY: FILM STRIPS
// Edit `diaryFilmStrips` in src/data/content.ts. Each roll can have any
// number of frames — the strip will just get longer/shorter.
// ============================================================================

import Photo from "@/components/Photo";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { diaryFilmStrips } from "@/data/content";

export default function DiaryFilmStripsSpread() {
  return (
    <section
      id="diary-film"
      className="paper-grain relative w-full overflow-hidden bg-ink px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 sm:mb-20">
          <SectionLabel variant="paper">PHOTO DIARY — PAGE TWO</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-paper sm:text-6xl">
            Develop the Film
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-paper/70 sm:text-base">
            Three rolls, never quite chronological, always worth the wait.
          </p>
        </Reveal>

        <div className="space-y-14 sm:space-y-20">
          {diaryFilmStrips.map((roll, ri) => (
            <Reveal key={roll.rollTitle} delay={ri * 0.05}>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-paper/60">
                {roll.rollTitle}
              </p>
              <div className="film-strip overflow-x-auto py-6">
                <div className="flex min-w-max gap-1 px-4">
                  {roll.frames.map((frame, fi) => (
                    <div key={frame + fi} className="relative h-40 w-32 flex-shrink-0 sm:h-52 sm:w-40">
                      <Photo
                        src={frame}
                        alt={`${roll.rollTitle} frame ${fi + 1}`}
                        className="h-full w-full object-cover sepia contrast-125"
                      />
                      <span className="absolute bottom-1 right-1 rounded-sm bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-paper/80">
                        {String(fi + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 08–09" section="PHOTO DIARY" dark />
    </section>
  );
}
