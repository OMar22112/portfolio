import { CV } from "@/lib/data";
import { Reveal, Stagger, StaggerItem, TextReveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SkillChip } from "@/components/ui/SkillChip";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { GraduationCap } from "lucide-react";

/** Full skill inventory from the résumé, grouped by category, a marquee, and the education line. */
export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-border">
      <div className="container-x pt-16 md:pt-24">
        <Reveal>
          <p className="eyebrow text-muted">Toolkit</p>
        </Reveal>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <TextReveal text="Skills & stack." className="display text-4xl text-fg sm:text-5xl md:text-6xl" />
          <Reveal delay={0.4}>
            <SectionLabel>Everything on the résumé.</SectionLabel>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3 md:mt-14 md:pb-20" stagger={0.1}>
          {CV.skills.map((group) => (
            <StaggerItem key={group.category} as="article" className="card flex flex-col p-5 sm:p-6">
              <h3 className="eyebrow text-accent">{group.category}</h3>
              <Stagger as="ul" className="mt-4 flex flex-wrap gap-2" stagger={0.045} delayChildren={0.2}>
                {group.items.map((item) => (
                  <StaggerItem key={item} as="li" variant="pop">
                    <SkillChip label={item} />
                  </StaggerItem>
                ))}
              </Stagger>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <SkillsMarquee />

      <div className="border-t border-border">
        <Reveal className="container-x flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
          <p className="eyebrow text-muted">Education</p>
          <GraduationCap className="h-4 w-4 text-muted" aria-hidden="true" />
          <p className="text-sm text-fg">
            {CV.education.shortDegree}
            <span className="mx-3 text-border">·</span>
            {CV.education.shortSchool}
            <span className="mx-3 text-border">·</span>
            {CV.education.year}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
