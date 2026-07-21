"use client";

import { useEffect, useState } from "react";
import { CV } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FileDown, Menu, X } from "lucide-react";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...LINKS.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "container-x flex items-center justify-between rounded-full transition-all duration-300",
          scrolled &&
            "glass border border-border/80 !px-4 py-2 shadow-lg shadow-black/20 md:!px-5"
        )}
      >
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-fg"
          aria-label="Back to top"
        >
          Omar<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-fg"
                    : "text-muted hover:text-fg"
                )}
              >
                {active === link.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-fg/5 ring-1 ring-border" />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CV.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-sm font-medium text-fg transition-all hover:border-accent/50 hover:text-accent sm:inline-flex"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/40 text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="container-x mt-2 md:hidden">
          <ul className="glass flex flex-col gap-1 rounded-2xl border border-border p-2">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active === link.id
                      ? "bg-fg/5 text-fg"
                      : "text-muted hover:bg-fg/5 hover:text-fg"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CV.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-accent"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Download Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
