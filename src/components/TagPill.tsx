import { cn } from "@/lib/utils";

interface TagPillProps {
  children: React.ReactNode;
  className?: string;
}

export function TagPill({ children, className }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-navy/15 bg-white px-3 py-1 text-xs font-medium text-navy/70",
        className
      )}
    >
      {children}
    </span>
  );
}
