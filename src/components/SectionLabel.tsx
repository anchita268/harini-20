interface SectionLabelProps {
  children: React.ReactNode;
  variant?: "rouge" | "ink" | "paper";
  className?: string;
}

export default function SectionLabel({ children, variant = "rouge", className = "" }: SectionLabelProps) {
  const colorMap = {
    rouge: "text-rouge border-rouge",
    ink: "text-ink border-ink",
    paper: "text-paper border-paper",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 border-y px-0 py-1 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] ${colorMap[variant]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
