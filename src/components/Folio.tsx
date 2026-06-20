// ============================================================================
// Folio — the running footer/header strip you'd find on a real magazine page
// (issue name, page number, section name). This is the signature element
// that repeats across every spread to tie the whole magazine together.
// ============================================================================

interface FolioProps {
  pageNumber: string;
  section: string;
  align?: "left" | "right";
  dark?: boolean;
}

export default function Folio({ pageNumber, section, align = "left", dark = false }: FolioProps) {
  const colorClass = dark ? "text-paper/70 border-paper/30" : "text-ink/60 border-ink/30";
  return (
    <div
      className={`absolute bottom-4 sm:bottom-6 ${
        align === "left" ? "left-4 sm:left-8" : "right-4 sm:right-8"
      } flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] ${colorClass} z-30`}
    >
      {align === "left" ? (
        <>
          <span className={`border-r pr-2 ${colorClass}`}>HARINI — THE TWENTY ISSUE</span>
          <span>{pageNumber}</span>
        </>
      ) : (
        <>
          <span>{section}</span>
          <span className={`border-l pl-2 ${colorClass}`}>{pageNumber}</span>
        </>
      )}
    </div>
  );
}
