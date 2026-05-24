export const profile = {
  name: "Sahil Khatkar",
  role: "Full-Stack Developer",
  company: "AIThinkers",
  location: "Pune, India",
  email: "sahil@sahillabs.dev",
  github: "https://github.com/sahillabs",
  linkedin: "https://www.linkedin.com/in/sahil-khatkar-b55562170",
  resumePdf: "/resume.pdf",
  tagline:
    "I build production AI products end to end — cross-platform desktop apps with native audio and offline speech models, serverless NestJS backends on AWS, and React frontends.",
  roleWords: ["AIThinkers", "AIT-Scribe", "serverless APIs", "AI products", "the web"],
};

export const stats = [
  { num: "1+", label: "yr full-stack @ AIThinkers" },
  { num: "9", label: "projects shipped" },
  { num: "100+", label: "AIT-Scribe builds" },
  { num: "4", label: "Anthropic certs" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "AIThinkers",
    period: "May 2025 — Present",
    bullets: [
      "Built and shipped **AIT-Scribe**, a cross-platform (macOS / Windows / Linux) desktop voice-to-text app — system-wide hold-to-dictate that transcribes speech and pastes at the cursor in any app, with a floating widget over fullscreen apps.",
      "Implemented **offline transcription** via faster-whisper (no API key), voice-activity detection and wake-word support, with native macOS audio capture (Core Audio / HALInputUnit); iterated across **100+ released builds**.",
      "Engineered the **AIHR enterprise portal** backend with **NestJS, TypeORM and MySQL deployed serverless on AWS Lambda** — S3, SES, KMS, Secrets Manager, real-time WebSockets (Socket.io), and Swagger-documented REST APIs.",
      "Built the portal frontend in **React + TypeScript + Vite** with Redux Toolkit, shadcn/ui, TanStack Table and React Hook Form; documented components in Storybook with a11y checks and Vitest coverage.",
      "Built **xThinker**, an AI agent-platform dashboard with an in-browser Monaco editor and a live execution sandbox via WebContainers, Auth0 auth and Recharts analytics.",
    ],
  },
];

export type Project = {
  name: string;
  flag: string;
  blurb: string;
  stack: string[];
  icon: string;
  span: "lg" | "md" | "sm";
  featured?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "AIT-Scribe",
    flag: "flagship · shipped product",
    blurb:
      "Cross-platform desktop voice-to-text. Hold a key, speak, and your words are transcribed and pasted at the cursor in any app — fully offline via faster-whisper, with a floating widget over fullscreen apps, voice-activity detection and wake-word support. Native macOS audio capture; iterated across 100+ builds.",
    stack: ["Native macOS", "Core Audio", "faster-whisper", "VAD", "Wake-word"],
    icon: "mic",
    span: "lg",
    featured: true,
    image: "/shots/ait-scribe.png",
  },
  {
    name: "AIHR Portal",
    flag: "enterprise · full-stack",
    blurb:
      "HR platform — a serverless NestJS API on AWS Lambda (TypeORM/MySQL, S3/SES/KMS, Socket.io, Swagger) with a React + Redux + shadcn dashboard and real-time updates.",
    stack: ["NestJS", "AWS Lambda", "TypeORM", "MySQL", "React", "Socket.io"],
    icon: "dashboard",
    span: "sm",
  },
  {
    name: "xThinker",
    flag: "AI agent platform",
    blurb:
      "Agent-platform dashboard with an in-browser Monaco code editor and a live execution sandbox via WebContainers, plus Auth0 auth and Recharts analytics.",
    stack: ["React", "WebContainers", "Monaco", "TanStack Query", "Auth0"],
    icon: "terminal",
    span: "md",
  },
  {
    name: "Mutual Fund Analyzer",
    flag: "fintech · data",
    blurb:
      "Indian mutual fund & market-intelligence system with a “smart-money” signal engine — ingests fund and market data to surface portfolio insights and analytics.",
    stack: ["Python", "Market Data APIs", "Analytics"],
    icon: "chart",
    span: "md",
  },
  {
    name: "FileForge",
    flag: "platform · python",
    blurb:
      "AI-powered PDF intelligence platform — convert, extract and transform PDFs at scale with an async task queue.",
    stack: ["Reflex", "FastAPI", "Celery/Redis", "Docker"],
    icon: "file",
    span: "sm",
  },
  {
    name: "RecoveryCart",
    flag: "saas · side project",
    blurb:
      "Recovers revenue from abandoned Shopify carts with AI-generated recovery emails — connect a store in minutes, run automated campaigns.",
    stack: ["Next.js", "TypeScript", "Prisma", "Shopify API"],
    icon: "cart",
    span: "sm",
    image: "/shots/recoverycart.png",
  },
  {
    name: "AI Work Assistant",
    flag: "desktop · ai",
    blurb:
      "Electron desktop assistant pairing the Anthropic API with local Whisper transcription for voice-driven, context-aware help.",
    stack: ["Electron", "Anthropic API", "Whisper", "Prisma"],
    icon: "brain",
    span: "sm",
  },
  {
    name: "Google Meet AI Agent",
    flag: "automation · python",
    blurb:
      "Joins a Google Meet as an authenticated user, gives a TTS intro, transcribes the call with Whisper, and answers questions via OpenAI.",
    stack: ["Python", "Selenium", "Whisper", "OpenAI"],
    icon: "bot",
    span: "md",
  },
  {
    name: "AI Video Pipeline",
    flag: "generative · python",
    blurb:
      "Turns a script into a narrated video: copy from the Anthropic API, voice from ElevenLabs, alignment with Whisper, assembly with MoviePy.",
    stack: ["Anthropic API", "ElevenLabs", "Whisper", "MoviePy"],
    icon: "clapper",
    span: "md",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "languages", items: ["TypeScript", "JavaScript", "Python", "Dart", "SQL"] },
  { group: "frontend", items: ["React", "Next.js", "SolidJS", "Vite", "Redux Toolkit", "Tailwind", "shadcn/ui", "TanStack"] },
  { group: "backend", items: ["NestJS", "Node.js", "Express", "FastAPI", "TypeORM", "WebSockets", "REST"] },
  { group: "cloud & data", items: ["AWS Lambda", "S3 / SES / KMS", "Serverless", "Docker", "MySQL", "Prisma", "Redis", "Firebase"] },
  { group: "ai / llm", items: ["Anthropic Claude", "MCP", "OpenAI", "Whisper", "ElevenLabs", "Claude Code"] },
  { group: "cross-platform", items: ["Flutter", "Electron", "Native macOS (Swift)"] },
];

export const certifications = [
  "Claude Code in Action",
  "Claude with the Anthropic API",
  "Introduction to Model Context Protocol",
  "Introduction to Agent Skills",
];

export const education = [
  { degree: "PG Diploma, Internet of Things", place: "C-DAC, Pune", year: "2024" },
  { degree: "B.Tech, Electronics & Communication Engineering", place: "Kurukshetra University", year: "2020–2023" },
  { degree: "Diploma, Electronics & Communication", place: "Chotu Ram Polytechnic, Rohtak", year: "2018–2020" },
];
