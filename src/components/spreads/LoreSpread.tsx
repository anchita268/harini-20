// ============================================================================
// SPREAD 3 — THE LORE
// Friendship milestone timeline. Edit/add/remove entries in `loreTimeline`
// inside src/data/content.ts — the layout re-renders automatically.
// ============================================================================

import Polaroid from "@/components/Polaroid";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { loreTimeline } from "@/data/content";

const tapeColors = ["rouge", "moss", "dust", "gold", "denim"] as const;

export default function LoreSpread() {
  return (
    <section
      id="the-lore"
      className="paper-grain relative w-full overflow-hidden bg-paper px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <SectionLabel className="mx-auto">A FRIENDSHIP RETROSPECTIVE</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-7xl">Our Timeline</h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-sm text-ink-soft sm:text-base">
            Eleven-plus years, condensed into a timeline — because somebody had to document this.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-24">
          {/* center spine line on desktop */}
          <div className="absolute left-4 top-0 h-full w-px bg-ink/25 sm:left-1/2 sm:-translate-x-1/2" aria-hidden />

          <div className="space-y-16 sm:space-y-24">
            {loreTimeline.map((entry, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={entry.year}
                  className="relative flex flex-col gap-6 pl-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:pl-0"
                >
                  {/* dot on spine */}
                  <span
                    className="absolute left-[13px] top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper bg-rouge sm:left-1/2"
                    aria-hidden
                  />

                  {isEven ? (
                    <>
                      <Reveal direction="left" className="sm:text-right sm:pr-12">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-rouge">{entry.year}</span>
                        <h3 className="mt-2 font-display text-2xl italic text-ink sm:text-3xl">{entry.title}</h3>
                        <p className="mt-2 font-body text-sm text-ink-soft sm:text-base">{entry.text}</p>
                      </Reveal>
                      <Reveal direction="right" delay={0.1} className="flex sm:pl-12">
                        <Polaroid
                          src={entry.photo}
                          caption={entry.year}
                          rotate={isEven ? -2 : 2}
                          tape={tapeColors[i % tapeColors.length]}
                        />
                      </Reveal>
                    </>
                  ) : (
                    <>
                      <Reveal direction="left" className="order-1 flex sm:order-1 sm:justify-end sm:pr-12">
                        <Polaroid
                          src={entry.photo}
                          caption={entry.year}
                          rotate={2}
                          tape={tapeColors[i % tapeColors.length]}
                        />
                      </Reveal>
                      <Reveal direction="right" delay={0.1} className="order-2 sm:order-2 sm:pl-12">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-rouge">{entry.year}</span>
                        <h3 className="mt-2 font-display text-2xl italic text-ink sm:text-3xl">{entry.title}</h3>
                        <p className="mt-2 font-body text-sm text-ink-soft sm:text-base">{entry.text}</p>
                      </Reveal>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Folio pageNumber="P. 04–05" section="THE TIMELINE" />
    </section>
  );
}
