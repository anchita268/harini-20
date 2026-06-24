// ============================================================================
// SPREAD 2 — EDITOR'S LETTER
// Magazine article layout with a handwritten scrapbook annotation.
// Edit text in `editorsLetter` inside src/data/content.ts
// ============================================================================

import Photo from "@/components/Photo";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { editorsLetter } from "@/data/content";

export default function EditorsLetterSpread() {
  return (
    <section
      id="editors-letter"
      className="paper-grain relative w-full overflow-hidden bg-cream px-4 py-20 sm:px-10 sm:py-28 md:py-32"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.8fr] md:gap-16">
        <div>
          <Reveal>
            <SectionLabel>{editorsLetter.kicker}</SectionLabel>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl italic leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              {editorsLetter.headline}
            </h2>
          </Reveal>

          {/* Drop cap first paragraph */}
          <Reveal delay={0.2} className="mt-8 space-y-5">
            {editorsLetter.body.map((para, i) => (
              <p
                key={i}
                className="font-body text-base leading-relaxed text-ink-soft sm:text-lg first:first-letter:float-left first:first-letter:mr-2 first:first-letter:font-display first:first-letter:text-6xl first:first-letter:leading-[0.8] first:first-letter:text-rouge sm:first:first-letter:text-7xl"
              >
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.3} className="mt-10 border-t border-ink/20 pt-6">
            <p className="font-hand text-2xl text-rouge sm:text-3xl">
              {editorsLetter.handwrittenNote}
            </p>
          </Reveal>
        </div>

        {/* Sidebar: signature photo + tape, like a magazine masthead photo */}
        <Reveal delay={0.25} direction="right" className="relative mx-auto w-full max-w-xs md:mx-0">
          <div className="relative rotate-2">
            <div className="tape tape-dust w-16 -top-3 left-1/2 -translate-x-1/2 rotate-1" aria-hidden />
            <div className="polaroid">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-dark">
                {/* 🖼️ PHOTO PLACEHOLDER — small candid near the letter. Edit signaturePhoto in content.ts */}
                <Photo
                  src={editorsLetter.signaturePhoto}
                  alt="Candid photo of Harini and the editor"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="absolute bottom-2 left-0 right-0 px-3 text-center font-hand text-lg text-ink-soft">
                us
              </p>
            </div>
          </div>
          <p className="mt-8 text-right font-display text-sm italic text-ink/60">
            — The incredibly smart, amazing, phenomenal Editors
          </p>
        </Reveal>
      </div>

      <Folio pageNumber="P. 02–03" section="EDITOR'S LETTER" align="right" />
    </section>
  );
}
