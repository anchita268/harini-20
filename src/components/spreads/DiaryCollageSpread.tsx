// ============================================================================
// SPREAD 6 — PHOTO DIARY: LAYERED COLLAGE
// Edit `diaryCollage` in src/data/content.ts. Each item has a `top`/`left`
// percentage position, a `size` (sm/md/lg), and a `rotate` angle, so you can
// freely rearrange the cluster without touching this component.
// ============================================================================

import Photo from "@/components/Photo";
import Folio from "@/components/Folio";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { diaryCollage } from "@/data/content";

const sizeMap: Record<string, string> = {
  sm: "w-28 sm:w-40 aspect-[4/5]",
  md: "w-36 sm:w-52 aspect-[4/5]",
  lg: "w-48 sm:w-64 aspect-[4/5]",
};

export default function DiaryCollageSpread() {
  return (
    <section
      id="diary-collage"
      className="paper-grain relative w-full overflow-hidden bg-paper px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 sm:mb-14">
          <SectionLabel>PHOTO DIARY — PAGE THREE</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic text-ink sm:text-6xl">
            DRUUUUUUUUUUUUUV
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-ink-soft sm:text-base">
            Some of your cutest pictures
          </p>
        </Reveal>

        {/* Collage canvas — relative positioning container */}
        <div className="relative mx-auto h-[640px] w-full max-w-4xl sm:h-[760px]">
          {diaryCollage.map((item, i) => (
            <div
              key={item.src + i}
              className="absolute"
              style={{ top: item.top, left: item.left }}
            >
              <Reveal delay={i * 0.06} y={20}>
                <div
                  className={`polaroid relative ${sizeMap[item.size]} transition-transform duration-300 hover:z-30 hover:scale-105 hover:rotate-0`}
                  style={{ transform: `rotate(${item.rotate}deg)`, zIndex: 10 + i }}
                >
                  <div className="relative h-[calc(100%-32px)] w-full overflow-hidden bg-paper-dark">
                    <Photo
                      src={item.src}
                      alt={`Memory collage photo ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <Folio pageNumber="P. 10–11" section="PHOTO DIARY" align="right" />
    </section>
  );
}
