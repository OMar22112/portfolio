"use client";

import { CV } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-16 pt-28 md:px-10"
    >
      {/* Aurora glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora absolute -left-40 top-0 h-[38rem] w-[38rem] rounded-full bg-accent/20 blur-[120px]" />
        <div
          className="aurora absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-accent-2/20 blur-[120px]"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <motion.div
        className="mx-auto w-full max-w-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Availability badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-sm text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {CV.availability}
            <span className="mx-1 h-3 w-px bg-border" />
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {CV.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="text-fg">{CV.name}</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-2xl font-semibold sm:text-3xl md:text-4xl"
        >
          <span className="text-accent-gradient">{CV.title}</span>
          <span className="hidden text-muted sm:inline">—</span>
          <span className="text-muted">front-end focused, building with AI</span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted text-pretty"
        >
          {CV.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#work" iconRight={ArrowUpRight}>
            View my work
          </Button>
          <Button href={CV.contact.linkedin} external variant="outline" icon={Linkedin}>
            LinkedIn
          </Button>
          <Button href={CV.contact.github} external variant="outline" icon={Github}>
            GitHub
          </Button>
        </motion.div>

        {/* Inline stat row */}
        <motion.dl
          variants={item}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4"
        >
          {CV.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-fg md:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
