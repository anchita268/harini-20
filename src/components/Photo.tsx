"use client";

// ============================================================================
// Photo — base image component used across editorial layouts (not framed
// like a polaroid). Falls back to a clearly labelled placeholder box if the
// file is missing from /public/photos/.
//
// 🖼️ TO REPLACE: change the `src` prop wherever this component is used,
// pointing to a file inside /public/photos/.
// ============================================================================

import { useState } from "react";

interface PhotoProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function Photo({ src, alt = "Memory photo", className = "" }: PhotoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-1 border border-dashed border-ink/30 bg-paper-dark text-center ${className}`}
      >
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
          Photo missing
        </span>
        <span className="font-mono text-[9px] text-ink/40 break-all px-2">{src}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
