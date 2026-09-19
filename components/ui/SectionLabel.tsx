import type { ReactNode } from "react";

/** Right-aligned mono caption with a short rule, used beside section titles. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-4 text-right text-muted">
      <span aria-hidden="true" className="hidden h-px w-10 bg-border sm:block" />
      <span className="max-w-[9rem] leading-relaxed sm:max-w-none">{children}</span>
    </p>
  );
}
