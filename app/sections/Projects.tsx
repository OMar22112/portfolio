import Image from "next/image";
import { cardProjects, featuredProject, listProjects, type Project } from "@/lib/data";
import { ClipReveal, Reveal, Stagger, StaggerItem, TextReveal } from "@/components/motion/Reveal";
import { ExcelSmartMock } from "@/components/mocks/ExcelSmartMock";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Activity, ArrowRight, ArrowUpRight, ShieldCheck, TriangleAlert } from "lucide-react";

const FEATURE_ICONS = {
  activity: Activity,
  alert: TriangleAlert,
  shield: ShieldCheck,
} as const;

function TechRow({ tech, className = "" }: { tech: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted ${className}`}>
      {tech.map((t, i) => (
        <li key={t} className="flex items-center gap-2.5">
          {i > 0 && <span aria-hidden="true" className="text-border">·</span>}
          {t}
        </li>
      ))}
    </ul>
  );
}

function Shot({ project, sizes, delay = 0 }: { project: Project; sizes: string; delay?: number }) {
  return (
    <ClipReveal delay={delay}>
      {project.image ? (
        <div className="shot aspect-[16/10] w-full">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes={sizes}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="shot-zoom">
          <ExcelSmartMock />
        </div>
      )}
    </ClipReveal>
  );
}

function previewLabel(url?: string) {
  if (!url) return null;
  return url.includes("drive.google") ? "Watch demo" : "Visit live site";
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="card group overflow-hidden">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:gap-10 lg:p-10">
        <Stagger className="flex flex-col" stagger={0.1}>
          <StaggerItem>
            <span className="eyebrow inline-flex w-fit items-center rounded-sm border border-accent/50 px-2.5 py-1.5 text-accent">
              Featured case study
            </span>
          </StaggerItem>
          <StaggerItem>
            <h3 className="display mt-7 text-4xl text-fg md:text-5xl">{project.name}</h3>
            <p className="mt-2 text-xl text-fg/85">{project.kicker}</p>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-sm leading-relaxed text-muted text-pretty">{project.tagline}</p>
          </StaggerItem>
          <StaggerItem className="mt-auto pt-8">
            <TechRow tech={project.techShort} />
            {project.preview && (
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg"
              >
                {previewLabel(project.preview)}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </StaggerItem>
        </Stagger>
        <Shot project={project} sizes="(min-width: 1024px) 720px, 100vw" delay={0.15} />
      </div>

      {project.features && (
        <Stagger as="ul" className="grid border-t border-border sm:grid-cols-3" stagger={0.12}>
          {project.features.map((f) => {
            const Icon = FEATURE_ICONS[f.icon];
            return (
              <StaggerItem
                key={f.title}
                as="li"
                className="flex gap-4 border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:px-8"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-fg transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-fg">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted text-pretty">{f.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </article>
  );
}

function GridCard({ project }: { project: Project }) {
  const Wrapper = project.preview ? "a" : "div";
  return (
    <Wrapper
      {...(project.preview
        ? { href: project.preview, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="card card-link group flex h-full flex-col p-4 sm:p-5"
    >
      <Shot project={project} sizes="(min-width: 1024px) 560px, 100vw" />
      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="font-display text-xl font-semibold text-fg">{project.name}</h3>
        <p className="mt-1.5 text-muted text-pretty">{project.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <TechRow tech={project.techShort} />
          {project.preview && (
            <ArrowRight
              className="h-5 w-5 text-fg transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function WideCard({ project }: { project: Project }) {
  return (
    <article className="card group grid gap-6 p-4 sm:p-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)] lg:gap-10">
      <Shot project={project} sizes="(min-width: 1024px) 760px, 100vw" />
      <Stagger className="flex flex-col px-1 py-2 lg:py-4 lg:pr-4" delayChildren={0.2}>
        <StaggerItem>
          <h3 className="display text-3xl text-fg">{project.name}</h3>
          <p className="mt-2 text-muted text-pretty">{project.tagline}</p>
        </StaggerItem>
        <StaggerItem>
          <TechRow tech={project.techShort} className="mt-6" />
        </StaggerItem>
        {project.preview && (
          <StaggerItem>
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg"
            >
              View case study
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </StaggerItem>
        )}
      </Stagger>
    </article>
  );
}

export function Projects() {
  const [cardA, cardB, wide] = cardProjects;
  const total = 1 + cardProjects.length;

  return (
    <section id="work" className="scroll-mt-16 border-b border-border py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-muted">01 — {String(total).padStart(2, "0")}</p>
        </Reveal>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <TextReveal
            text="Selected engineering work."
            className="display text-4xl text-fg sm:text-5xl md:text-6xl"
          />
          <Reveal delay={0.4}>
            <SectionLabel>Real ideas. Real products.</SectionLabel>
          </Reveal>
        </div>

        <div className="mt-10 space-y-5 md:mt-14">
          <Reveal>
            <FeaturedCard project={featuredProject} />
          </Reveal>

          <Stagger className="grid gap-5 lg:grid-cols-2" stagger={0.15}>
            {[cardA, cardB].map((p) => (
              <StaggerItem key={p.slug} as="article" className="h-full">
                <GridCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>

          {wide && (
            <Reveal>
              <WideCard project={wide} />
            </Reveal>
          )}
        </div>

        {/* Compact list of earlier work */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="flex items-center justify-between gap-6">
              <p className="eyebrow text-muted">More projects</p>
              <SectionLabel>A few more things I&rsquo;ve built.</SectionLabel>
            </div>
          </Reveal>
          <Stagger as="ul" className="mt-5 border-t border-border" stagger={0.07}>
            {listProjects.map((project) => {
              const Row = project.preview ? "a" : "div";
              return (
                <StaggerItem key={project.slug} as="li" className="border-b border-border">
                  <Row
                    {...(project.preview
                      ? { href: project.preview, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group -mx-3 grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 rounded-md px-3 py-4 transition-colors duration-300 hover:bg-surface sm:grid-cols-[13rem_1fr_auto] md:grid-cols-[16rem_1fr_auto]"
                  >
                    <span className="font-medium text-fg">{project.name}</span>
                    <span className="col-span-2 text-sm text-muted sm:col-span-1">
                      {project.summary}
                    </span>
                    <span className="col-start-2 row-start-1 flex items-center gap-3 sm:col-start-3">
                      <span className="hidden font-mono text-xs text-muted md:inline">{project.date}</span>
                      {project.preview ? (
                        <ArrowRight
                          className="h-4 w-4 text-fg transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="w-4" />
                      )}
                    </span>
                  </Row>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
