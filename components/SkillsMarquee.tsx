import { CV } from "@/lib/data";
import { brandColor, getSkillIcon } from "@/lib/skillIcons";

const EXCLUDED = new Set(["Soft Skills", "Languages"]);

function Track({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-x-12 pr-12 sm:gap-x-16 sm:pr-16"
      aria-hidden={hidden || undefined}
    >
      {items.map((label) => {
        const icon = getSkillIcon(label);
        return (
          <li
            key={label}
            className="flex items-center gap-3 whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-muted/70 transition-colors duration-300 hover:text-fg sm:text-3xl"
          >
            {icon.kind === "brand" ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 opacity-70 sm:h-7 sm:w-7"
                fill={brandColor(icon.icon.hex)}
                aria-hidden="true"
              >
                <path d={icon.icon.path} />
              </svg>
            ) : (
              <icon.icon className="h-6 w-6 shrink-0 text-muted sm:h-7 sm:w-7" strokeWidth={1.6} aria-hidden="true" />
            )}
            {label}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Infinite right-to-left marquee of the technical skills.
 * Two identical tracks sit side by side; the wrapper translates exactly one track
 * width (-50%) per loop, so the restart lands on identical pixels and never jumps.
 * Pauses on hover; under reduced-motion it becomes a static, horizontally scrollable row.
 */
export function SkillsMarquee() {
  const items = Array.from(
    new Set(CV.skills.filter((g) => !EXCLUDED.has(g.category)).flatMap((g) => g.items))
  );

  return (
    <div className="marquee relative overflow-hidden border-t border-border py-8 sm:py-10">
      <div className="marquee-track flex w-max">
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </div>
  );
}
