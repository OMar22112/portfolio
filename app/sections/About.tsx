import { CV } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border/60 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-content gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Front-end craft, full-stack delivery.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted text-pretty">
            <p>{CV.about}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="card p-6">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest">Education</span>
            </div>
            <p className="font-display font-semibold text-fg">{CV.education.school}</p>
            <p className="mt-1 text-sm text-muted">{CV.education.degree}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span>{CV.education.dates}</span>
              <span className="h-3 w-px bg-border" />
              <span>GPA {CV.education.gpa}</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest">Now</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Building AI-powered products at{" "}
              <span className="font-semibold text-fg">GRINDA AI</span> (Seoul · remote),
              shipping React &amp; Next.js interfaces used daily by compliance, finance, and
              sales teams.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {CV.location}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
