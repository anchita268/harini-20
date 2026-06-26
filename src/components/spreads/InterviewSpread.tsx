// ============================================================================
// SPREAD 11 — FRIENDSHIP INTERVIEW
// Magazine Q&A format. Edit `interview` in src/data/content.ts.
// ============================================================================

import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { interview } from "@/data/content";

export default function InterviewSpread() {
  return (
    <section
      id="interview"
      className="paper-grain relative w-full overflow-hidden bg-cream px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 sm:mb-16">
          <SectionLabel>THE EXIT INTERVIEW (NOT REALLY)</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-6xl">
            BIRTHDAY MESSAGES
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm text-ink-soft sm:text-base">
            {interview.intro}
          </p>
        </Reveal>

        <div className="space-y-10 sm:space-y-14">
          {interview.qa.map((item, i) => (
            <Reveal key={item.q} delay={(i % 4) * 0.05} className="border-b border-ink/15 pb-8 sm:pb-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-rouge">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl italic leading-snug text-ink sm:text-3xl">
                {item.q}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-ink-soft sm:text-lg">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 20–21" section="INTERVIEW" />
    </section>
  );
}
