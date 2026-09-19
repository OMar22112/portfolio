export type Project = {
  slug: string;
  name: string;
  /** Short role line shown under the name (e.g. "AI employee platform"). */
  kicker: string;
  /** One or two sentences for cards. */
  tagline: string;
  /** Extra-short line for the "More projects" list rows. */
  summary: string;
  tech: string[];
  /** Compact tech shown on cards (3 max). */
  techShort: string[];
  date: string;
  /** "featured" = hero case study, "card" = grid card, "list" = compact row. */
  tier: "featured" | "card" | "list";
  preview?: string;
  image?: { src: string; alt: string; width: number; height: number };
  features?: { title: string; body: string; icon: "activity" | "alert" | "shield" }[];
  bullets: string[];
};

export const CV = {
  name: "Omar Abo-Elmaaty",
  initials: "OA",
  title: "Full-Stack Engineer",
  focus: "AI applications",
  roles: ["React", "Next.js", "TypeScript", "Node", "FastAPI"],
  location: "Egypt",
  company: "GRINDA AI",
  availability: "Open to new opportunities",
  resume: "/Omar-Abo-Elmaaty-Resume.pdf",
  headline: "From interface to intelligence.",
  tagline:
    "I build production AI applications, connecting thoughtful interfaces, reliable backend services, and agent workflows.",
  motto: "Code, ideas, better products.",
  footerLine: "Thoughtful software for a brighter tomorrow.",
  photo: { src: "/images/omar.jpeg", alt: "Portrait of Omar Abo-Elmaaty" },
  contact: {
    phone: "+201066206278",
    email: "omaraboulmaaty.11@gmail.com",
    linkedin: "https://www.linkedin.com/in/omar-aboulmaaty-983b66277",
    github: "https://github.com/OMar22112",
    phoneHref: "tel:+201066206278",
    emailHref: "mailto:omaraboulmaaty.11@gmail.com",
  },
  about:
    "Full-Stack Engineer building production AI-powered applications across frontend interfaces and backend services. Currently at GRINDA AI, developing end-to-end features with React, Next.js, and TypeScript, spanning API integrations, authentication, and AI agent workflows. Combines strong UI/UX skills with backend engineering to deliver reliable, maintainable applications and responsive user experiences.",
  education: {
    school: "Alexandria University, Faculty of Science",
    shortSchool: "Alexandria University",
    location: "Alexandria, Egypt",
    degree: "B.Sc. in Software Industry and Multimedia",
    shortDegree: "BSc, Software Industry & Multimedia",
    gpa: "3.0 (Very Good)",
    dates: "Aug 2020 – Jul 2024",
    year: "2024",
  },
  experience: [
    {
      title: "Full-Stack Engineer",
      company: "GRINDA AI",
      location: "Remote (Seoul / Egypt collaboration)",
      dates: "Aug 2024 — Present",
      current: true,
      bullets: [
        "Develop and maintain full-stack features for AI-powered applications, connecting React/Next.js interfaces with backend services and third-party APIs.",
        "Build AI agent integrations and application workflows, handling data exchange, execution states, and errors across the stack.",
        "Implement secure authentication flows and protected routes across application interfaces and backend endpoints.",
        "Strengthen AI agent execution security through sandbox network restrictions and server-side credential handling.",
        "Create reusable TypeScript components and responsive interfaces, translating product requirements into maintainable application features.",
        "Optimize frontend performance through lazy loading and code splitting, and investigate production issues across frontend and backend workflows.",
      ],
    },
    {
      title: "Front-End Development Intern",
      company: "GRINDA AI",
      location: "Remote (Seoul / Egypt collaboration)",
      dates: "Jul 2024 — Aug 2024",
      current: false,
      bullets: [
        "Developed responsive interfaces and interactive components for two AI-powered applications using React and Next.js.",
        "Worked with Supabase authentication and Next.js server-side rendering, collaborating with senior developers to improve usability and resolve interface issues.",
      ],
    },
  ],
  projects: [
    {
      slug: "arator",
      name: "Arator",
      kicker: "AI employee platform",
      tagline:
        "A platform for creating and managing your AI employees, with real-time execution, observability, and secure operations.",
      summary: "AI employee platform with live run observability.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "PostgreSQL"],
      techShort: ["Next.js", "TypeScript", "PostgreSQL"],
      date: "2026",
      tier: "featured",
      preview: "https://arator.rinda.ai/",
      image: {
        src: "/images/arator.png",
        alt: "Arator landing page: an AI employee that works inside Slack, showing a live deals channel demo",
        width: 1919,
        height: 949,
      },
      features: [
        {
          title: "Live run observability",
          body: "Real-time call counts, last-event age, and a stall detector that tells a slow run from a hung one.",
          icon: "activity",
        },
        {
          title: "Actionable failure states",
          body: "Raw harness errors mapped to human, actionable messages, shipped through a 760-test CI suite.",
          icon: "alert",
        },
        {
          title: "Agent execution security",
          body: "Sandboxed network access, server-side credentials, and controlled tool permissions.",
          icon: "shield",
        },
      ],
      bullets: [
        "Built live run observability: real-time call counts, last-event age, and a stall detector that tells a slow run from a hung one.",
        "Redesigned the run page into a two-column layout and folded the agent's sidebar block into the team roster with live presence.",
        "Tripled above-the-fold density on the daily brief by rebuilding its type scale and spacing, keeping EN/KO copy intact.",
        "Mapped raw harness errors to human, actionable failure messages, shipped through mockup-first approvals and a 760-test CI suite.",
      ],
    },
    {
      slug: "excel-smart",
      name: "Excel-Smart",
      kicker: "AI accounting from spreadsheets",
      tagline: "From messy spreadsheets to verified accounting workflows.",
      summary: "Bilingual SaaS that turns Excel workbooks into verified accounting systems.",
      tech: ["Next.js", "FastAPI", "TypeScript", "Anthropic Claude", "Tailwind CSS", "Better Auth"],
      techShort: ["Next.js", "FastAPI", "Claude"],
      date: "Jun 2026",
      tier: "card",
      preview: "https://drive.google.com/file/d/14RssO__HQ3aNVR0SfwXkzb94GXCiIfzy/view?usp=sharing",
      bullets: [
        "Built a bilingual (Arabic/English) SaaS that turns messy Excel workbooks into clean, verified accounting systems.",
        "Engineered an AI pipeline on the Claude API that structures uploaded spreadsheets under a human-in-the-loop approval flow.",
        "Implemented multi-tenant auth with Better Auth and signed JWT assertions, enforcing strict per-tenant data isolation.",
        "Hardened .xlsx ingestion with server-side preflight validation, plus Excel export and PDF statement generation.",
        "Crafted an accessible UI (full RTL, dark mode, keyboard command palette) and shipped with Redis-backed rate limiting and Sentry monitoring.",
      ],
    },
    {
      slug: "hiraku",
      name: "HIRAKU Agent",
      kicker: "Japanese form-outreach agent",
      tagline: "Form automation with learning, safeguards, and human handoff.",
      summary: "AI agent that fills and submits Japanese contact forms end to end.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL (Supabase)",
        "Playwright",
        "n8n",
      ],
      techShort: ["Next.js", "Playwright", "PostgreSQL"],
      date: "2026",
      tier: "card",
      preview: "https://japan-b2b-agent.rinda.ai",
      image: {
        src: "/images/hiraku.png",
        alt: "HIRAKU landing page with an AI agent filling a Japanese contact form",
        width: 1919,
        height: 946,
      },
      bullets: [
        "Built an AI agent that fills and submits Japanese contact forms end to end, using Playwright with an LLM mapper and deterministic fallbacks so it works even without an AI key.",
        "Added a learning layer on Prisma/Postgres so the agent remembers answers to fields it couldn't fill, and stops asking after the first time.",
        "Developed the Next.js dashboard and marketing site in TypeScript + Tailwind, localized in ja / en / ko, with a WebGL shader hero and an animated campaign wizard.",
        "Hardened the send path with SSRF protection, compliance checks (no-solicitation, CAPTCHA to human), and 340 unit tests.",
      ],
    },
    {
      slug: "opener",
      name: "Opener",
      kicker: "Autonomous Reddit marketing agent",
      tagline: "Reddit research & reply approval workflows.",
      summary: "Finds buyers on Reddit, scores intent, and queues replies for approval.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      techShort: ["Next.js", "TypeScript", "PostgreSQL"],
      date: "2026",
      tier: "card",
      preview: "https://autonomous-reddit-markter.rinda.ai",
      image: {
        src: "/images/opener.png",
        alt: "Opener dashboard showing found Reddit posts, reply drafts, and an account-health warning",
        width: 1919,
        height: 953,
      },
      bullets: [
        "Built a Reddit marketing agent that finds buyers, scores them with a two-tier Claude pipeline for buying intent and product fit, and drafts replies that wait in an approval queue so nothing posts without a human.",
        "Made Reddit reads survive network blocking with a fallback ladder (OAuth, then public JSON, then RSS, then the browser) so collection keeps working when any one host cuts us off.",
        "Added an account-health dashboard that spots shadowbans from RSS visibility, tells them apart from real bans, and counts removals over a true rolling 7 days.",
        "Turned each subreddit's rules into a machine-checked ban list and a disclosure gate, so a draft that breaks a rule is stopped before it ever posts.",
      ],
    },
    {
      slug: "trade-show-agent",
      name: "Trade Show Agent",
      kicker: "Event prep assistant",
      tagline: "Responsive web app for trade-show prep and sales strategy.",
      summary: "AI agent for event research and outreach workflows.",
      tech: ["React.js", "Tailwind CSS", "Supabase", "Context API"],
      techShort: ["React", "Supabase"],
      date: "Jan 2025",
      tier: "list",
      preview: "https://drive.google.com/file/d/1g4ebx_CIcK-MxmB68gcEsMNEYm2MBE-Y/view?usp=sharing",
      bullets: [
        "Architected a user-friendly and highly responsive web interface optimized for efficient trade show preparation and sales strategy creation.",
        "Implemented secure user authentication and management features utilizing Supabase integration.",
        "Enhanced user experience and perceived performance by implementing seamless dynamic loading states and smooth UI transitions during asynchronous data processing.",
      ],
    },
    {
      slug: "reconstruction-copilot",
      name: "Reconstruction-Copilot",
      kicker: "Figma-faithful UI with embedded Copilot",
      tagline: "Pixel-perfect Figma replication with an embedded AI Copilot.",
      summary: "Figma-faithful OMS interface with CopilotKit assistance.",
      tech: ["Next.js", "Tailwind CSS", "CopilotKit", "TypeScript"],
      techShort: ["Next.js", "CopilotKit"],
      date: "Nov 2024",
      tier: "list",
      bullets: [
        "Recreated a high-fidelity front-end UI by precisely replicating complex Figma designs (Wooriga OMS) ensuring strict visual consistency and responsive layouts.",
        "Integrated AI capabilities into a custom Chat Bubble UI using CopilotKit to enable real-time, interactive, and context-aware assistance.",
        "Enhanced platform functionality by seamlessly embedding Copilot features across multiple modules for a unified user experience.",
      ],
    },
    {
      slug: "bnk-baia-agent",
      name: "BNK-BAIA Agent",
      kicker: "Financial AI assistant",
      tagline: "AI assistant for financial document analysis.",
      summary: "Financial AI assistant for document analysis.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      techShort: ["React", "Redux Toolkit"],
      date: "Nov 2024",
      tier: "list",
      preview: "https://drive.google.com/file/d/1alyyjcfHKv1e8FNRQXXOFcM9e2Xx38iB/view?usp=sharing",
      bullets: [
        "Developed a responsive AI assistant interface for financial document analysis, report generation, and code suggestions, with streaming responses and caching.",
        "Built conversation history and knowledge base interfaces for organizing chats, uploading financial documents, and managing regulatory updates.",
        "Created an admin dashboard with secure authentication, live user activity monitoring, and system performance analytics.",
      ],
    },
    {
      slug: "compliance-ai",
      name: "Compliance-AI",
      kicker: "Compliance document review",
      tagline: "AI document-analysis workflow for compliance professionals.",
      summary: "Compliance document review and analysis.",
      tech: ["Next.js", "Redux Toolkit", "i18next", "Axios"],
      techShort: ["Next.js", "i18next"],
      date: "Oct 2024",
      tier: "list",
      preview: "https://drive.google.com/file/d/1C2yiK-na0TCXqDi8eFwpwHKbJ2hETUxP/view?usp=sharing",
      bullets: [
        "Built AI-powered document analysis interfaces integrated with backend APIs to automate compliance checks.",
        "Developed compliance gap analysis and document lookup features to identify missing ISO requirements and reference relevant standards.",
        "Implemented multilingual interfaces with i18next, managed application state with Redux Toolkit, and added authentication flows with protected routes.",
      ],
    },
  ] satisfies Project[],
  /** Three-column capability summary shown on the home page. */
  capabilities: [
    {
      title: "Interfaces",
      tools: ["React", "Next.js", "TypeScript"],
      body: "Thoughtful, usable interfaces that make complex workflows simple.",
    },
    {
      title: "Backend & data",
      tools: ["Node.js", "FastAPI", "PostgreSQL"],
      body: "Reliable services, data models, and integrations.",
    },
    {
      title: "AI workflows",
      tools: ["Agent integrations", "Automation", "Execution security"],
      body: "From model integration to multi-step agent workflows.",
    },
  ],
  /** Full skill inventory from the résumé (used by the assistant). */
  skills: [
    {
      category: "Core Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python", "SQL (PostgreSQL)"],
    },
    {
      category: "Frontend Frameworks",
      items: ["React.js", "Next.js (SSR/SSG)", "Redux Toolkit", "Context API", "Tailwind CSS", "jQuery"],
    },
    {
      category: "Backend / APIs",
      items: ["Node.js", "Express.js", "Flask", "FastAPI", "RESTful APIs", "GraphQL", "tRPC"],
    },
    {
      category: "Auth & Database",
      items: ["Supabase", "Firebase", "JWT", "Protected Routes", "PostgreSQL", "Prisma", "Better Auth"],
    },
    {
      category: "AI & Automation",
      items: ["Anthropic Claude", "CopilotKit", "Playwright", "n8n", "TanStack Query"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "Docker", "Linux", "VS Code", "i18next", "Redis", "Sentry"],
    },
    {
      category: "Other Languages",
      items: ["Java", "C++"],
    },
    {
      category: "Soft Skills",
      items: ["Problem-Solving", "Cross-functional Collaboration", "Adaptability", "Time Management"],
    },
    {
      category: "Languages",
      items: ["Arabic (Native)", "English (Proficient)"],
    },
  ],
};

export const featuredProject = CV.projects.find((p) => p.tier === "featured")!;
export const cardProjects = CV.projects.filter((p) => p.tier === "card");
export const listProjects = CV.projects.filter((p) => p.tier === "list");
