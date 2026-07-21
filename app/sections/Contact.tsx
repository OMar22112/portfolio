import { CV } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Mail, Github, Linkedin, Phone, FileDown, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface/80 to-bg p-8 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />

          <p className="relative mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-fg text-balance md:text-5xl">
            Let&apos;s build something great together.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted text-pretty">
            I&apos;m open to front-end and full-stack opportunities. Have a project or a role
            in mind? My inbox is always open.
          </p>

          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <Button href={CV.contact.emailHref} external icon={Mail}>
              {CV.contact.email}
            </Button>
            <Button href={CV.resume} external download variant="outline" icon={FileDown}>
              Download Résumé
            </Button>
          </div>

          <div className="relative mx-auto mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { href: CV.contact.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: CV.contact.github, label: "GitHub", icon: Github },
              { href: CV.contact.phoneHref, label: CV.contact.phone, icon: Phone },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg/50 px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {CV.name}
          </p>
          <p className="font-mono text-xs">Built with Next.js, Tailwind &amp; Framer Motion</p>
        </footer>
      </div>
    </section>
  );
}
