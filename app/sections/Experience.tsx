import { CV } from "@/lib/data";
import { Reveal, Stagger, StaggerItem, TextReveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center justify-between gap-6">
            <p className="eyebrow text-muted">Experience</p>
            <SectionLabel>Real experience. Real context.</SectionLabel>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <TextReveal
              text={`Building at ${CV.company}.`}
              className="display text-4xl text-fg text-balance sm:text-5xl md:text-6xl"
            />
            <Reveal delay={0.35} blur>
              <p className="mt-6 max-w-md leading-relaxed text-muted text-pretty">{CV.about}</p>
            </Reveal>
          </div>

          <Stagger as="ol" className="divide-y divide-border border-y border-border" stagger={0.15} delayChildren={0.2}>
            {CV.experience.map((job) => (
              <StaggerItem key={job.title} as="li" className="py-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-semibold text-fg">{job.title}</h3>
                  <span aria-hidden="true" className="text-border">|</span>
                  <p className="text-sm text-muted">{job.dates}</p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {job.company}
                  <span className="mx-2 text-border">·</span>
                  {job.location}
                </p>
                <Stagger as="ul" className="mt-4 space-y-2" stagger={0.06} delayChildren={0.15}>
                  {job.bullets.slice(0, job.current ? 4 : 2).map((b) => (
                    <StaggerItem key={b} as="li" className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-[0.6rem] h-px w-3 shrink-0 bg-muted/60" />
                      <span className="text-pretty">{b}</span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
