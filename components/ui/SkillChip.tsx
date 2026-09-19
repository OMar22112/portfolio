import { brandColor, getSkillIcon } from "@/lib/skillIcons";

/** A skill label with its brand logo (or a neutral glyph when no logo exists). Renders inline content; wrap in an <li>. */
export function SkillChip({ label }: { label: string }) {
  const icon = getSkillIcon(label);

  return (
    <span className="group/chip inline-flex items-center gap-2 rounded-md border border-border bg-bg/40 py-1.5 pl-2.5 pr-3 text-sm text-fg/90 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-muted/60 hover:bg-surface-2">
      {icon.kind === "brand" ? (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0 opacity-80 transition-opacity group-hover/chip:opacity-100"
          fill={brandColor(icon.icon.hex)}
          aria-hidden="true"
        >
          <path d={icon.icon.path} />
        </svg>
      ) : (
        <icon.icon
          className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover/chip:text-accent"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  );
}
