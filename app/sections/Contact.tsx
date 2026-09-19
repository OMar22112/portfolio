import { CV } from "@/lib/data";
import { Reveal, Stagger, StaggerItem, TextReveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "GitHub", href: CV.contact.github },
  { label: "LinkedIn", href: CV.contact.linkedin },
  { label: "Resume", href: CV.resume },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="container-x grid gap-10 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <TextReveal
          text="Have a challenging product to build?"
          className="display text-4xl text-fg text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          stagger={0.06}
        />

        <Stagger delayChildren={0.4} stagger={0.12}>
          <StaggerItem>
            <p className="text-muted">Let&rsquo;s talk.</p>
          </StaggerItem>
          <StaggerItem>
            <a
              href={CV.contact.emailHref}
              className="link-underline group mt-1 inline-flex items-center gap-2 text-lg font-medium text-fg sm:text-xl"
            >
              {CV.contact.email}
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </StaggerItem>
          <StaggerItem>
            <ul className="mt-8 flex flex-wrap items-center gap-x-2 text-sm">
              {LINKS.map((l, i) => (
                <li key={l.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-border">|</span>}
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-1 text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>
      </div>

      <footer className="border-t border-border">
        <Reveal className="container-x flex items-center justify-between gap-6 py-6">
          <p className="text-sm text-fg">{CV.name}</p>
          <p className="eyebrow max-w-[11rem] text-right leading-relaxed text-muted">
            {CV.footerLine}
          </p>
        </Reveal>
      </footer>
    </section>
  );
}
