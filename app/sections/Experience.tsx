import { CV } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border/60 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Career
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Experience
          </h2>
        </Reveal>

        <Stagger className="relative ml-1 border-l border-border pl-8 md:pl-10">
          {CV.experience.map((job, index) => (
            <StaggerItem key={index} as="div" className="relative mb-14 last:mb-0">
              <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center md:-left-[49px]">
                <span
                  className={`h-3 w-3 rounded-full ring-4 ring-bg ${
                    job.current ? "bg-accent" : "bg-muted"
                  }`}
                />
                {job.current && (
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-60" />
                )}
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-bold text-fg">{job.title}</h3>
                <span className="font-mono text-sm text-accent">{job.dates}</span>
              </div>
              <p className="mb-5 mt-1 text-muted">
                {job.company} · {job.location}
              </p>
              <ul className="space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
