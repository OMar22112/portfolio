"use client";

import Image from "next/image";
import { useRef } from "react";
import { CV } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { EASE, TextReveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Gentle parallax: monogram drifts down, portrait drifts up as the hero scrolls away.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const monogramY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  const noteLines = CV.motto.split(", ");

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden border-b border-border pt-28 md:pt-32"
    >
      <div className="container-x grid items-end gap-12 pb-16 md:pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10">
          <motion.p {...fadeUp(0.1)} className="eyebrow text-accent">
            {CV.title} <span className="mx-1 text-muted">/</span> {CV.focus}
          </motion.p>

          <TextReveal
            as="h1"
            text={CV.headline}
            inView={false}
            delay={0.25}
            stagger={0.09}
            className="display mt-6 text-[2.9rem] text-fg sm:text-6xl md:text-7xl lg:text-[5.4rem]"
          />

          <motion.p
            {...fadeUp(0.7)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty md:text-xl"
          >
            {CV.tagline}
          </motion.p>

          <motion.div
            {...fadeUp(0.85)}
            className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
          >
            <Button href="#work" size="lg" iconRight={ArrowDownRight}>
              Explore my work
            </Button>
            <p className="text-sm text-muted">
              Currently at <span className="text-fg">{CV.company}</span>
              <span className="mx-2.5 text-border">·</span>
              Based in {CV.location}
            </p>
          </motion.div>
        </motion.div>

        {/* Portrait with monogram watermark and handwritten note */}
        <div className="relative flex w-full items-end justify-center gap-5 lg:justify-end lg:gap-8">
          <motion.span
            aria-hidden="true"
            style={{ y: monogramY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
            className="display pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[11rem] leading-[0.8] text-fg/[0.05] sm:text-[15rem] lg:left-auto lg:right-24 lg:translate-x-0 lg:text-[19rem]"
          >
            {CV.initials}
          </motion.span>

          <motion.div
            style={{ y: photoY }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
            className="relative z-10"
          >
            <Image
              src={CV.photo.src}
              alt={CV.photo.alt}
              width={896}
              height={1195}
              priority
              sizes="(min-width: 1024px) 304px, 256px"
              className="h-72 w-[13.5rem] rounded-2xl object-cover object-top ring-1 ring-white/10 sm:h-80 sm:w-60 lg:h-[24rem] lg:w-[18rem]"
            />
          </motion.div>

          <p
            aria-hidden="true"
            className="relative z-10 mb-8 hidden w-28 -rotate-[14deg] font-hand text-2xl leading-[1.05] text-muted sm:block lg:mb-10 lg:w-32 lg:text-3xl"
          >
            {noteLines.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, x: reduce ? 0 : -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 1.1 + i * 0.22 }}
              >
                {line}
                {i < noteLines.length - 1 ? "," : ""}
              </motion.span>
            ))}
            <svg
              viewBox="0 0 64 24"
              className="mt-1 h-5 w-14 text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M2 4c14 16 32 18 58 8"
                initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.8 }}
              />
              <motion.path
                d="M52 6l8 6-9 5"
                initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 2.5 }}
              />
            </svg>
          </p>
        </div>
      </div>
      <p className="sr-only">{CV.motto}</p>
    </section>
  );
}
