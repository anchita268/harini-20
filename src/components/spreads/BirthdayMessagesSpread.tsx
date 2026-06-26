// ============================================================================
// SPREAD 12 — BIRTHDAY MESSAGES
// Postcards from friends. Edit `birthdayMessages` in src/data/content.ts —
// duplicate an object in the array to add another friend's message.
// ============================================================================

import Photo from "@/components/Photo";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { birthdayMessages } from "@/data/content";

export default function BirthdayMessagesSpread() {
  return (
    <section
      id="messages"
      className="paper-grain relative w-full overflow-hidden bg-paper-dark px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center sm:mb-20">
          <SectionLabel className="mx-auto">POSTCARDS, BY AIRMAIL</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-6xl">
            Birthday Messages
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-ink-soft sm:text-base">
            A small stack of notes from the people who love her loudly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
          {birthdayMessages.map((msg, i) => (
            <Reveal key={msg.from + i} delay={(i % 2) * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className="relative mx-auto flex max-w-md flex-col overflow-hidden border border-ink/15 bg-cream shadow-lift sm:flex-row"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
              <div
                className={`relative mx-auto flex flex-col overflow-hidden border border-ink/15 bg-cream shadow-lift sm:flex-row ${
                i === 0 ? "max-w-2xl" : "max-w-md"}`}
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              ></div>
                {/* Photo half */}
                <div className="relative h-40 w-full flex-shrink-0 bg-paper-dark sm:h-auto sm:w-2/5">
                  {/* 🖼️ PHOTO PLACEHOLDER (optional) — replace or remove `photo` in content.ts */}
                  <Photo
                    src={msg.photo}
                    alt={`Postcard photo from ${msg.from}`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-2 top-2 rotate-3 border border-ink/40 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-ink/60">
                    {msg.stamp}
                  </span>
                </div>
                {/* Message half */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <p className="font-hand text-xl leading-snug text-ink-soft sm:text-2xl">
                    {msg.message}
                  </p>
                  <p className="mt-4 text-right font-display text-sm italic text-rouge">
                    — {msg.from}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 22–23" section="MESSAGES" align="right" />
    </section>
  );
}
