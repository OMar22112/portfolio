import { CV } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** Three-column capability summary. Anchored as "About" in the nav. */
export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="container-x py-16 md:py-20">
        <Reveal>
          <div className="flex items-center justify-between gap-6">
            <p className="eyebrow text-muted">Capabilities</p>
            <SectionLabel>Tools for real-world problems.</SectionLabel>
          </div>
        </Reveal>

        <Stagger className="mt-6 grid gap-8 md:grid-cols-3 md:gap-0" stagger={0.14}>
          {CV.capabilities.map((cap, i) => (
            <StaggerItem
              key={cap.title}
              className={
                i > 0
                  ? "group md:border-l md:border-border md:pl-8 lg:pl-10"
                  : "group md:pr-8 lg:pr-10"
              }
            >
              <h3 className="font-display text-2xl font-semibold text-fg">{cap.title}</h3>
              <Stagger as="ul" className="mt-3 flex flex-wrap items-center gap-x-2 text-xs text-muted" stagger={0.08} delayChildren={0.25}>
                {cap.tools.map((t, j) => (
                  <StaggerItem key={t} as="li" variant="pop" className="flex items-center gap-2">
                    {j > 0 && <span aria-hidden="true">/</span>}
                    {t}
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.35} blur>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted text-pretty">
                  {cap.body}
                </p>
              </Reveal>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
