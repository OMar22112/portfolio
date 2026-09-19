"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Signature easing used across the site: fast start, long soft landing. */
export const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: "-10% 0px -10% 0px" } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Add a soft blur-to-sharp on entry (good for paragraphs, not for images). */
  blur?: boolean;
  as?: "div" | "section" | "li" | "article" | "p";
};

/** Fades + lifts content into view once, respecting reduced-motion. */
export function Reveal({ children, className, delay = 0, y = 20, blur = false, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, y, filter: blur ? "blur(6px)" : "blur(0px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers its <StaggerItem> children on scroll into view. */
export function Stagger({
  children,
  className,
  delayChildren = 0,
  stagger = 0.08,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
  as?: "div" | "ul" | "ol";
}) {
  const MotionTag = motion[as];
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  };
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </MotionTag>
  );
}

const upVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const popVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};
const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export function StaggerItem({
  children,
  className,
  as = "div",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span";
  variant?: "up" | "pop";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const variants = reduce ? fadeVariants : variant === "pop" ? popVariants : upVariants;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}

/**
 * Masked word-by-word reveal for headlines: each word slides up from behind a clip.
 * Words are kept as inline-block so wrapping still works naturally.
 */
export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.045,
  inView = true,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  /** false = animate on mount (hero) instead of on scroll into view. */
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag];
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } }
    : {
        hidden: { y: "110%", rotate: 2 },
        show: { y: 0, rotate: 0, transition: { duration: 0.9, ease: EASE } },
      };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      {...(inView ? { whileInView: "show", viewport: VIEWPORT } : { animate: "show" })}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span className="inline-block origin-bottom-left" variants={word}>
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}

/** Wipes an image in from the left with a slow settle-scale, then hands hover over to CSS. */
export function ClipReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0 round 12px)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0 round 12px)" }}
      viewport={VIEWPORT}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.4, ease: EASE, delay }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
