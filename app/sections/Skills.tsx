import { CV } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

// Flat list for the marquee ribbon.
const marquee = Array.from(
  new Set(CV.skills.flatMap((g) => g.items))
).filter((s) => !s.includes("("));

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border/60 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Toolkit
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Skills &amp; stack
          </h2>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CV.skills.map((group) => (
            <StaggerItem key={group.category} className="card p-6">
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-bg/50 px-2.5 py-1 text-sm text-fg/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Full-bleed marquee ribbon */}
      <div className="marquee-group relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {[...marquee, ...marquee].map((skill, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-muted/40 transition-colors hover:text-accent md:text-3xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
