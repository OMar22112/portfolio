export const CV = {
  name: "Omar Abo-Elmaaty",
  title: "Full-Stack Developer",
  focus: "Front-end focused",
  roles: ["React", "Next.js", "TypeScript", "Node", "FastAPI"],
  location: "Alexandria, Egypt",
  availability: "Available for work",
  resume: "/Omar-Abo-Elmaaty-Resume.pdf",
  tagline:
    "I build production-grade, AI-powered web apps end to end — from pixel-perfect, accessible interfaces to the FastAPI/Node backends, AI pipelines, and secure auth behind them.",
  contact: {
    phone: "+201066206278",
    email: "omaraboulmaaty.11@gmail.com",
    linkedin: "https://www.linkedin.com/in/omar-abo-elmaaty-frontend-developer/",
    github: "https://github.com/omaraboulmaaty",
    phoneHref: "tel:+201066206278",
    emailHref: "mailto:omaraboulmaaty.11@gmail.com",
  },
  about:
    "Full-Stack Developer with 2+ years of professional experience and a front-end specialization in React, Next.js, and TypeScript. Proven track record delivering production-grade AI-powered web applications at GRINDA AI, serving compliance professionals, financial analysts, and trade-show teams. I work across the stack — from pixel-perfect, accessible interfaces to FastAPI/Node backends, AI pipelines on the Claude API, REST/GraphQL integration, PostgreSQL/Prisma data layers, and secure multi-tenant authentication. Comfortable bridging design and engineering, and shipping hardened, well-tested features to real users.",
  // Headline metrics surfaced across the site.
  stats: [
    { value: "2+", label: "Years of experience" },
    { value: "8", label: "Production AI apps shipped" },
    { value: "~40%", label: "Faster page loads" },
    { value: "340", label: "Unit tests written" },
  ],
  education: {
    school: "Alexandria University — Faculty of Science",
    location: "Alexandria, Egypt",
    degree: "B.Sc. in Software Industry and Multimedia",
    gpa: "3.0 (Very Good)",
    dates: "Aug 2020 – Jul 2024",
  },
  experience: [
    {
      title: "Junior Front-End Developer",
      company: "GRINDA AI",
      location: "Seoul, South Korea — Remote",
      dates: "Aug 2024 – Present",
      current: true,
      bullets: [
        "Engineered and maintained scalable React/Next.js UI components across 4+ production AI applications, reducing bug rate by improving code modularity and reusability.",
        "Cut average page load time by ~40% through lazy loading, code splitting, and eliminating render-blocking resources.",
        "Integrated RESTful and GraphQL APIs powering real-time AI features used daily by compliance, finance, and sales teams.",
        "Implemented secure JWT-based authentication and protected route systems across multiple client projects.",
        "Ensured cross-browser and cross-device compatibility for all deployed products, targeting 99%+ consistent UX.",
        "Collaborated daily with UI/UX designers and back-end engineers in Agile sprints, contributing to on-time delivery.",
      ],
    },
    {
      title: "Front-End Development Intern",
      company: "GRINDA AI",
      location: "Seoul, South Korea — Remote",
      dates: "Jul 2024 – Aug 2024",
      current: false,
      bullets: [
        "Enhanced UI/UX for 2 AI-powered applications, directly improving accessibility and user engagement.",
        "Gained hands-on production experience with Supabase authentication and Next.js SSR patterns.",
        "Refined 10+ interactive components in collaboration with senior developers, contributing to cleaner design workflows.",
      ],
    },
  ],
  projects: [
    {
      name: "HIRAKU Agent",
      tagline: "An AI agent that fills & submits Japanese contact forms end to end.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Playwright", "n8n"],
      date: "2026",
      featured: true,
      preview: "https://japan-b2b-agent.vercel.app/en",
      highlights: ["340 unit tests", "SSRF-hardened", "ja / en / ko", "WebGL hero"],
      bullets: [
        "Built an AI agent that fills and submits Japanese contact forms end to end, using Playwright with an LLM mapper and deterministic fallbacks so it works even without an AI key.",
        "Added a learning layer on Prisma/Postgres so the agent remembers answers to fields it couldn't fill — and stops asking after the first time.",
        "Developed the Next.js dashboard and marketing site in TypeScript + Tailwind, localized in ja / en / ko, with a WebGL shader hero and an animated campaign wizard.",
        "Hardened the send path with SSRF protection, compliance checks (no-solicitation, CAPTCHA → human), and 340 unit tests.",
      ],
    },
    {
      name: "Excel-Smart",
      tagline: "Turns messy Excel workbooks into clean, verified accounting systems.",
      tech: ["Next.js", "FastAPI", "TypeScript", "Anthropic Claude", "Tailwind CSS", "Better Auth"],
      date: "Jun 2026",
      featured: true,
      preview: "https://drive.google.com/file/d/14RssO__HQ3aNVR0SfwXkzb94GXCiIfzy/view",
      highlights: ["Bilingual AR/EN", "Multi-tenant", "Full RTL", "Redis rate-limit"],
      bullets: [
        "Built a bilingual (Arabic/English) SaaS that turns messy Excel workbooks into clean, verified accounting systems.",
        "Engineered an AI pipeline on the Claude API that structures uploaded spreadsheets under a human-in-the-loop approval flow.",
        "Implemented multi-tenant auth with Better Auth and signed JWT assertions, enforcing strict per-tenant data isolation.",
        "Hardened .xlsx ingestion with server-side preflight validation, plus Excel export and PDF statement generation.",
        "Crafted an accessible UI (full RTL, dark mode, keyboard command palette) and shipped with Redis-backed rate limiting and Sentry monitoring.",
      ],
    },
    {
      name: "Trade Show Agent",
      tagline: "Responsive web app for trade-show prep and sales strategy.",
      tech: ["React.js", "Tailwind CSS", "Supabase", "Context API"],
      date: "Jan 2025",
      featured: false,
      preview: "https://drive.google.com/file/d/1g4ebx_CIcK-MxmB68gcEsMNEYm2MBE-Y/view?usp=sharing",
      highlights: [],
      bullets: [
        "Architected a user-friendly and highly responsive web interface optimized for efficient trade show preparation and sales strategy creation.",
        "Implemented secure user authentication and management features utilizing Supabase integration.",
        "Enhanced user experience and perceived performance by implementing seamless dynamic loading states and smooth UI transitions during asynchronous data processing.",
      ],
    },
    {
      name: "BNK-BAIA Agent",
      tagline: "AI business assistant for financial document analysis.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      date: "Nov 2024",
      featured: false,
      preview: "https://drive.google.com/file/d/1alyyjcfHKv1e8FNRQXXOFcM9e2Xx38iB/view?usp=sharing",
      highlights: [],
      bullets: [
        "Developed a responsive and intuitive web client UI, ensuring cross-device compatibility and seamless user interactions.",
        "Integrated an AI-powered business assistant chatbot tailored for financial document analysis, automated report generation, and smart code suggestions.",
        "Implemented robust conversation management components, allowing users to efficiently store, retrieve, and organize interaction history.",
        "Implemented real-time streaming responses with an efficient caching layer, and built a knowledge base management interface for uploading financial documents and managing regulatory updates.",
        "Built an interactive admin dashboard featuring secure authentication, live user activity monitoring, and system performance analytics.",
      ],
    },
    {
      name: "Compliance-AI",
      tagline: "AI document-analysis workflow for compliance professionals.",
      tech: ["Next.js", "Redux Toolkit", "i18next", "Axios"],
      date: "Oct 2024",
      featured: false,
      preview: "https://drive.google.com/file/d/1C2yiK-na0TCXqDi8eFwpwHKbJ2hETUxP/view?usp=sharing",
      highlights: [],
      bullets: [
        "Designed and refined core UI components to enhance usability, ensuring a seamless and efficient workflow for compliance professionals.",
        "Developed and integrated AI-driven document analysis interfaces by connecting front-end components with backend APIs for automated compliance checks.",
        "Optimized application state management using Redux Toolkit, significantly improving overall performance and interface responsiveness.",
        "Integrated multi-language support leveraging i18next, expanding platform accessibility to a global audience.",
        "Built compliance gap analysis and document lookup features, enabling users to quickly identify missing ISO requirements and reference standards in real time.",
        "Implemented secure client-side authentication with protected routes to enhance user data security and access control.",
      ],
    },
    {
      name: "Reconstruction-Copilot",
      tagline: "Pixel-perfect Figma replication with embedded AI Copilot.",
      tech: ["Next.js", "Tailwind CSS", "CopilotKit", "TypeScript"],
      date: "Nov 2024",
      featured: false,
      highlights: [],
      bullets: [
        "Recreated a high-fidelity front-end UI by precisely replicating complex Figma designs (Wooriga OMS) ensuring strict visual consistency and responsive layouts.",
        "Integrated AI capabilities into a custom Chat Bubble UI using CopilotKit to enable real-time, interactive, and context-aware assistance.",
        "Enhanced platform functionality by seamlessly embedding Copilot features across multiple modules for a unified user experience.",
      ],
    },
    {
      name: "SaaS-Marketing-Reply",
      tagline: "Full-stack marketing reply platform with secure auth.",
      tech: ["React.js", "Node.js", "Express", "CSS Modules"],
      date: "Jul 2024",
      featured: false,
      preview: "https://drive.google.com/file/d/12E3ffXeqaP5cxYz7Ynm8gCOWdFfbyxRc/view?usp=sharing",
      highlights: [],
      bullets: [
        "Developed the front-end UI, focusing on an intuitive user experience and responsive design to enhance engagement.",
        "Integrated the front-end with backend functionality, ensuring smooth data flow and interactions with the backend services.",
        "Worked on backend development to create user routes, enabling secure user authentication and smooth interaction with the platform's features.",
        "Optimized the overall application performance, ensuring efficient loading times and user interactions across the platform.",
      ],
    },
  ],
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
      items: ["Supabase", "Firebase", "JWT", "Better Auth", "Prisma", "PostgreSQL"],
    },
    {
      category: "AI & Tooling",
      items: ["Anthropic Claude", "CopilotKit", "Playwright", "n8n", "i18next", "Sentry"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "Docker", "Linux", "VS Code", "Redis"],
    },
    {
      category: "Other Languages",
      items: ["Java", "C++"],
    },
    {
      category: "Languages",
      items: ["Arabic (Native)", "English (Proficient)"],
    },
  ],
};

export const SYSTEM_PROMPT = `You are a helpful portfolio assistant for Omar Abo-Elmaaty. Answer questions about Omar based ONLY on the CV below. Be concise, friendly, and professional. If you don't know the answer, say so and offer to help with something else.

${CV.name} | ${CV.contact.phone} | ${CV.contact.email}
${CV.contact.linkedin}
${CV.contact.github}

About Me
${CV.about}

Education
${CV.education.school} — ${CV.education.location}
${CV.education.degree} — GPA: ${CV.education.gpa} — ${CV.education.dates}

Experience
${CV.experience
  .map(
    (job) =>
      `${job.title} at ${job.company} — ${job.location} — ${job.dates}\n${job.bullets
        .map((b) => `• ${b}`)
        .join("\n")}`
  )
  .join("\n\n")}

Projects
${CV.projects
  .map(
    (p) =>
      `${p.name} — ${p.tech.join(", ")} — ${p.date}${p.preview ? ` — Preview: ${p.preview}` : ""}\n${p.bullets
        .map((b) => `• ${b}`)
        .join("\n")}`
  )
  .join("\n\n")}

Skills
${CV.skills
  .map((group) => `${group.category}: ${group.items.join(", ")}`)
  .join("\n")}
`;
