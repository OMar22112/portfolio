import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Clock,
  Code2,
  Drama,
  Globe,
  KeyRound,
  Languages,
  Layers,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  siAnthropic,
  siBetterauth,
  siCplusplus,
  siCss,
  siDocker,
  siExpress,
  siFastapi,
  siFirebase,
  siFlask,
  siGit,
  siGraphql,
  siHtml5,
  siI18next,
  siJavascript,
  siJquery,
  siJsonwebtokens,
  siLinux,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReactquery,
  siRedis,
  siRedux,
  siSentry,
  siSupabase,
  siTailwindcss,
  siTrpc,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export type SkillIcon =
  | { kind: "brand"; icon: SimpleIcon }
  | { kind: "glyph"; icon: LucideIcon };

const brand = (icon: SimpleIcon): SkillIcon => ({ kind: "brand", icon });
const glyph = (icon: LucideIcon): SkillIcon => ({ kind: "glyph", icon });

/** Skill label (as written in lib/data.ts) → icon. Unknown labels fall back to a layers glyph. */
const ICONS: Record<string, SkillIcon> = {
  "JavaScript (ES6+)": brand(siJavascript),
  TypeScript: brand(siTypescript),
  HTML5: brand(siHtml5),
  CSS3: brand(siCss),
  Python: brand(siPython),
  "SQL (PostgreSQL)": brand(siPostgresql),
  "React.js": brand(siReact),
  "Next.js (SSR/SSG)": brand(siNextdotjs),
  "Redux Toolkit": brand(siRedux),
  "Context API": brand(siReact),
  "Tailwind CSS": brand(siTailwindcss),
  jQuery: brand(siJquery),
  "Node.js": brand(siNodedotjs),
  "Express.js": brand(siExpress),
  Flask: brand(siFlask),
  FastAPI: brand(siFastapi),
  "RESTful APIs": glyph(Globe),
  GraphQL: brand(siGraphql),
  tRPC: brand(siTrpc),
  Supabase: brand(siSupabase),
  Firebase: brand(siFirebase),
  JWT: brand(siJsonwebtokens),
  "Protected Routes": glyph(ShieldCheck),
  PostgreSQL: brand(siPostgresql),
  Prisma: brand(siPrisma),
  "Better Auth": brand(siBetterauth),
  "Anthropic Claude": brand(siAnthropic),
  CopilotKit: glyph(Bot),
  Playwright: glyph(Drama),
  n8n: brand(siN8n),
  "TanStack Query": brand(siReactquery),
  Git: brand(siGit),
  Docker: brand(siDocker),
  Linux: brand(siLinux),
  "VS Code": glyph(Code2),
  i18next: brand(siI18next),
  Redis: brand(siRedis),
  Sentry: brand(siSentry),
  Java: brand(siOpenjdk),
  "C++": brand(siCplusplus),
  "Problem-Solving": glyph(Lightbulb),
  "Cross-functional Collaboration": glyph(Users),
  Adaptability: glyph(RefreshCw),
  "Time Management": glyph(Clock),
  "Arabic (Native)": glyph(Languages),
  "English (Proficient)": glyph(Languages),
};

export function getSkillIcon(label: string): SkillIcon {
  return ICONS[label] ?? glyph(Layers);
}

/**
 * Brand hex → colour that stays legible on the dark background.
 * Very dark marks (Next.js, Express, JWT, Anthropic, Prisma…) are drawn in the foreground colour.
 */
export function brandColor(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.28 ? "rgb(var(--fg))" : `#${hex}`;
}
