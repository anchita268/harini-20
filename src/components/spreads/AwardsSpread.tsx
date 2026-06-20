// ============================================================================
// SPREAD 10 — THE HARINI AWARDS
// Edit `harinAwards` in src/data/content.ts to add/remove award categories.
// ============================================================================

import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { harinAwards } from "@/data/content";

export default function AwardsSpread() {
  return (
    <section
      id="harini-awards"
      className="paper-grain halftone-rouge relative w-full overflow-hidden bg-ink px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="absolute inset-0 bg-ink/90" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center sm:mb-20">
          <SectionLabel variant="paper" className="mx-auto">
            THE CEREMONY
          </SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-paper sm:text-7xl">
            The Harini Awards
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-sm text-paper/70 sm:text-base">
            Categories created specifically because no existing award show could contain her.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {harinAwards.map((award, i) => (
            <Reveal key={award.title} delay={(i % 4) * 0.06}>
              <div className="group relative border border-paper/25 p-6 transition-colors hover:border-gold sm:p-8">
                <span className="absolute -top-3 left-6 bg-ink px-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  CATEGORY {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl italic leading-tight text-paper sm:text-3xl">
                  {award.title}
                </h3>
                <p className="mt-3 font-body text-sm text-paper/70 sm:text-base">{award.blurb}</p>
                <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                  🏆 AWARDED TO: HARINI
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 18–19" section="THE AWARDS" align="right" dark />
    </section>
  );
}
