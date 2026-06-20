// ============================================================================
// SPREAD 9 — 20 THINGS WE LOVE ABOUT HARINI
// Edit the `twentyThings` array in src/data/content.ts. Numbering is
// generated automatically from array position.
// ============================================================================

import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { twentyThings } from "@/data/content";

export default function TwentyThingsSpread() {
  return (
    <section
      id="twenty-things"
      className="paper-grain relative w-full overflow-hidden bg-paper px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 text-center sm:mb-20">
          <SectionLabel className="mx-auto">THE DEFINITIVE LIST</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic leading-tight text-ink sm:text-6xl">
            20 Things We Love<br className="hidden sm:block" /> About Harini
          </h2>
        </Reveal>

        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {twentyThings.map((thing, i) => (
            <Reveal key={i} delay={(i % 6) * 0.04} className="flex items-start gap-5 py-5 sm:items-center sm:gap-8 sm:py-6">
              <span className="flex-shrink-0 font-display text-4xl italic text-rouge sm:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-body text-base leading-snug text-ink-soft sm:text-xl">
                {thing}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 16–17" section="20 THINGS" />
    </section>
  );
}
