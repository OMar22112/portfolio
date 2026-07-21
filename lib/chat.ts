import { CV } from "./data";

const intents = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "howdy", "greetings"],
    response: `Hi! I'm Omar's portfolio assistant. I can answer questions about his skills, work experience, projects, education, or how to contact him. What would you like to know?`,
  },
  {
    id: "about",
    keywords: ["about", "bio", "who", "introduce", "overview", "summary", "tell me about"],
    response: `${CV.name} is a ${CV.title}. ${CV.about}`,
  },
  {
    id: "skills",
    keywords: ["skills", "tech", "stack", "technologies", "know", "proficient", "good at", "expertise"],
    response: () => {
      const groups = CV.skills
        .map((group) => `${group.category}: ${group.items.join(", ")}`)
        .join("\n");
      return `Here are Omar's skills:\n\n${groups}`;
    },
  },
  {
    id: "experience",
    keywords: ["experience", "work", "job", "career", "grind", "company", "employment"],
    response: () => {
      const jobs = CV.experience
        .map(
          (job) =>
            `${job.title} at ${job.company} — ${job.location} — ${job.dates}\n${job.bullets
              .map((b) => `• ${b}`)
              .join("\n")}`
        )
        .join("\n\n");
      return `Omar's experience:\n\n${jobs}`;
    },
  },
  {
    id: "projects",
    keywords: ["projects", "portfolio", "built", "created", "developed", "app", "application"],
    response: () => {
      const projects = CV.projects
        .map(
          (p) =>
            `• ${p.name} — ${p.tech.join(", ")} — ${p.date}${
              p.preview ? ` — Preview: ${p.preview}` : ""
            }`
        )
        .join("\n");
      return `Omar has worked on several projects:\n\n${projects}\n\nAsk me about any specific project for more details.`;
    },
  },
  {
    id: "education",
    keywords: ["education", "university", "degree", "gpa", "study", "studied", "college"],
    response: `${CV.education.degree} from ${CV.education.school} in ${CV.education.location}. GPA: ${CV.education.gpa} (${CV.education.dates}).`,
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "linkedin", "github", "reach", "connect", "call"],
    response: `You can reach Omar at:\n\n• Email: ${CV.contact.email}\n• Phone: ${CV.contact.phone}\n• LinkedIn: ${CV.contact.linkedin}\n• GitHub: ${CV.contact.github}`,
  },
  {
    id: "help",
    keywords: ["help", "what can you do", "what do you know", "questions"],
    response: `I can answer questions about Omar's background, skills, work experience at GRINDA AI, projects, education, and contact details. Try asking "What is Omar's tech stack?" or "Tell me about his experience."`,
  },
];

const projectKeywords: Record<string, string> = {
  hiraku: "HIRAKU Agent",
  "excel-smart": "Excel-Smart",
  "excel smart": "Excel-Smart",
  excel: "Excel-Smart",
  "trade show": "Trade Show Agent",
  "tradeshow": "Trade Show Agent",
  "bnk": "BNK-BAIA Agent",
  "baia": "BNK-BAIA Agent",
  compliance: "Compliance-AI",
  "saas marketing": "SaaS-Marketing-Reply",
  "marketing reply": "SaaS-Marketing-Reply",
  reconstruction: "Reconstruction-Copilot",
};

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
}

function findProjectMatch(text: string) {
  const normalized = normalize(text);
  for (const [key, projectName] of Object.entries(projectKeywords)) {
    if (normalized.includes(key)) {
      return CV.projects.find((p) => p.name === projectName);
    }
  }
  return undefined;
}

export function generateLocalResponse(messages: { role: "user" | "assistant"; content: string }[]) {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUserMessage) {
    return "Hi! I'm Omar's portfolio assistant. What would you like to know?";
  }

  const text = normalize(lastUserMessage.content);

  // Check for specific project mentions first
  const project = findProjectMatch(text);
  if (project) {
    const bullets = project.bullets.map((b) => `• ${b}`).join("\n");
    return `${project.name} (${project.tech.join(", ")}, ${project.date})\n\n${bullets}${
      project.preview ? `\n\nPreview: ${project.preview}` : ""
    }`;
  }

  // Check intents
  for (const intent of intents) {
    if (intent.keywords.some((keyword) => text.includes(normalize(keyword)))) {
      return typeof intent.response === "function" ? intent.response() : intent.response;
    }
  }

  return `I'm not sure I have an answer for that. I can tell you about Omar's skills, experience, projects, education, or contact info. What would you like to know?`;
}
