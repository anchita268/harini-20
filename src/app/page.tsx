import ProgressSpine from "@/components/ProgressSpine";
import CoverSpread from "@/components/spreads/CoverSpread";
import EditorsLetterSpread from "@/components/spreads/EditorsLetterSpread";
import LoreSpread from "@/components/spreads/LoreSpread";
import DiaryPolaroidsSpread from "@/components/spreads/DiaryPolaroidsSpread";
import DiaryFilmStripsSpread from "@/components/spreads/DiaryFilmStripsSpread";
import DiaryCollageSpread from "@/components/spreads/DiaryCollageSpread";
import DiaryEditorialGridSpread from "@/components/spreads/DiaryEditorialGridSpread";
import DiaryScrapbookSpread from "@/components/spreads/DiaryScrapbookSpread";
import TwentyThingsSpread from "@/components/spreads/TwentyThingsSpread";
import InterviewSpread from "@/components/spreads/InterviewSpread";
import BirthdayMessagesSpread from "@/components/spreads/BirthdayMessagesSpread";
import MemoryWallSpread from "@/components/spreads/MemoryWallSpread";
import BackCoverSpread from "@/components/spreads/BackCoverSpread";

// ============================================================================
// MAIN PAGE
// This file just lays out the 14 spreads in order. To reorder spreads, move
// the components around. To edit content, go to src/data/content.ts instead
// — you should rarely need to touch this file.
// ============================================================================

export default function Home() {
  return (
    <main className="relative">
      <ProgressSpine />
      <CoverSpread />
      <EditorsLetterSpread />
      <LoreSpread />
      <DiaryPolaroidsSpread />
      <DiaryFilmStripsSpread />
      <DiaryCollageSpread />
      <DiaryEditorialGridSpread />
      <DiaryScrapbookSpread />
      <TwentyThingsSpread />
      <InterviewSpread />
      <BirthdayMessagesSpread />
      <MemoryWallSpread />
      <BackCoverSpread />
    </main>
  );
}
