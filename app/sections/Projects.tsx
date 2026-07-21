import { CV } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowUpRight, Sparkles } from "lucide-react";

const featured = CV.projects.filter((p) => p.featured);
const rest = CV.projects.filter((p) => !p.featured);

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-muted text-pretty">{description}</p>}
    </Reveal>
  );
}

function TechPills({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-bg/60 px-2.5 py-1 font-mono text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-content">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that shipped."
          description="Production-grade, AI-powered web apps — built end to end, from design fidelity to hardened deploys."
        />

        {/* Featured case studies */}
        <div className="space-y-6">
          {featured.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <article className="card group grid overflow-hidden lg:grid-cols-[1.1fr_1fr]">
                {/* Text side */}
                <div className="order-2 flex flex-col p-7 md:p-10 lg:order-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Featured
                    </span>
                    <span className="font-mono text-xs text-muted">{project.date}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-fg md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-lg text-muted text-pretty">{project.tagline}</p>

                  <ul className="mt-6 space-y-2.5">
                    {project.bullets.slice(0, 3).map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex-1" />
                  <div className="mt-6 border-t border-border pt-6">
                    <TechPills tech={project.tech} />
                  </div>

                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-fg"
                    >
                      {project.preview.includes("drive.google") ? "View preview" : "Visit live site"}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                {/* Visual side — highlight tiles */}
                <div className="relative order-1 overflow-hidden border-b border-border bg-gradient-to-br from-surface to-bg p-7 md:p-10 lg:order-2 lg:border-b-0 lg:border-l">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent-2/10 blur-3xl" />

                  <p className="relative mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                    Highlights
                  </p>
                  <div className="relative grid grid-cols-2 gap-3">
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        className="rounded-xl border border-border bg-bg/50 p-4 text-sm font-medium text-fg backdrop-blur"
                      >
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* More projects — bento grid */}
        <Reveal className="mb-8 mt-16">
          <h3 className="font-display text-xl font-semibold text-fg">More projects</h3>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => {
            const Wrapper = project.preview ? "a" : "div";
            return (
              <StaggerItem key={project.name} as="article">
                <Wrapper
                  {...(project.preview
                    ? {
                        href: project.preview,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="card group flex h-full flex-col p-6"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h4 className="font-display text-lg font-bold text-fg">
                      {project.name}
                    </h4>
                    {project.preview && (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    )}
                  </div>
                  <p className="mb-5 text-sm text-muted text-pretty">{project.tagline}</p>
                  <div className="mt-auto">
                    <TechPills tech={project.tech.slice(0, 4)} />
                    <p className="mt-4 font-mono text-xs text-muted">{project.date}</p>
                  </div>
                </Wrapper>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
