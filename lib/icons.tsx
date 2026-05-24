import type { IconType } from "react-icons";
import {
  SiTypescript, SiJavascript, SiPython, SiDart,
  SiReact, SiNextdotjs, SiSolid, SiVite, SiRedux, SiTailwindcss, SiShadcnui, SiReactquery,
  SiNestjs, SiNodedotjs, SiExpress, SiFastapi, SiTypeorm, SiSocketdotio,
  SiServerless, SiDocker, SiMysql, SiPrisma, SiRedis, SiFirebase,
  SiOpenai, SiAnthropic, SiElevenlabs, SiClaude,
  SiFlutter, SiElectron, SiSwift, SiGraphql,
  SiShopify, SiSelenium, SiAuth0, SiApple, SiReactrouter,
} from "react-icons/si";
import { FaAws, FaDatabase, FaTerminal } from "react-icons/fa6";
import {
  LuMic, LuLayoutDashboard, LuSquareTerminal, LuTrendingUp, LuFileText,
  LuShoppingCart, LuBrainCircuit, LuBot, LuClapperboard, LuTerminal,
} from "react-icons/lu";

export type IconDef = { Icon: IconType; color: string };
export type TechItem = { name: string; Icon: IconType; color: string };

// brand colors tuned for visibility on the dark (#06070c) background
const FALLBACK: IconDef = { Icon: FaTerminal, color: "#18d6c4" };

export const iconMap: Record<string, IconDef> = {
  TypeScript: { Icon: SiTypescript, color: "#3B82F6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Python: { Icon: SiPython, color: "#5B9BD5" },
  Dart: { Icon: SiDart, color: "#34B4F5" },
  SQL: { Icon: FaDatabase, color: "#8AA0C0" },

  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  SolidJS: { Icon: SiSolid, color: "#4D80C9" },
  Vite: { Icon: SiVite, color: "#A07CFF" },
  "Redux Toolkit": { Icon: SiRedux, color: "#A07CD6" },
  Tailwind: { Icon: SiTailwindcss, color: "#22D3EE" },
  "shadcn/ui": { Icon: SiShadcnui, color: "#FFFFFF" },
  TanStack: { Icon: SiReactquery, color: "#FF4154" },

  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  "Node.js": { Icon: SiNodedotjs, color: "#6FBF5A" },
  Express: { Icon: SiExpress, color: "#E6E6E6" },
  FastAPI: { Icon: SiFastapi, color: "#05B6A2" },
  TypeORM: { Icon: SiTypeorm, color: "#FF7A7A" },
  WebSockets: { Icon: SiSocketdotio, color: "#E6E6E6" },
  REST: FALLBACK,

  "AWS Lambda": { Icon: FaAws, color: "#FF9900" },
  "S3 / SES / KMS": { Icon: FaAws, color: "#FF9900" },
  Serverless: { Icon: SiServerless, color: "#FD5750" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  MySQL: { Icon: SiMysql, color: "#5B92C4" },
  Prisma: { Icon: SiPrisma, color: "#7DE3D0" },
  Redis: { Icon: SiRedis, color: "#FF6258" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },

  "Anthropic Claude": { Icon: SiClaude, color: "#D97757" },
  MCP: { Icon: SiAnthropic, color: "#D97757" },
  OpenAI: { Icon: SiOpenai, color: "#E6E6E6" },
  Whisper: { Icon: SiOpenai, color: "#74AA9C" },
  ElevenLabs: { Icon: SiElevenlabs, color: "#E6E6E6" },
  "Claude Code": { Icon: SiClaude, color: "#D97757" },

  Flutter: { Icon: SiFlutter, color: "#54C5F8" },
  Electron: { Icon: SiElectron, color: "#62C0CE" },
  "Native macOS (Swift)": { Icon: SiSwift, color: "#F05138" },

  // aliases used by project tech tags
  "Anthropic API": { Icon: SiAnthropic, color: "#D97757" },
  "TanStack Query": { Icon: SiReactquery, color: "#FF4154" },
  "Socket.io": { Icon: SiSocketdotio, color: "#E6E6E6" },
  "Shopify API": { Icon: SiShopify, color: "#95BF47" },
  Shopify: { Icon: SiShopify, color: "#95BF47" },
  Selenium: { Icon: SiSelenium, color: "#5FC04A" },
  Auth0: { Icon: SiAuth0, color: "#EB5424" },
  "Native macOS": { Icon: SiApple, color: "#FFFFFF" },
  "React Router": { Icon: SiReactrouter, color: "#F44250" },
};

export function getIcon(label: string): IconDef {
  return iconMap[label] ?? FALLBACK;
}

/** Returns a brand icon only when one genuinely exists (no generic fallback). */
export function getBrandIcon(label: string): IconDef | null {
  return label in iconMap ? iconMap[label] : null;
}

// Conceptual (non-brand) icons for project cards — clean Lucide line icons.
export const projectIcons: Record<string, IconType> = {
  mic: LuMic,
  dashboard: LuLayoutDashboard,
  terminal: LuSquareTerminal,
  chart: LuTrendingUp,
  file: LuFileText,
  cart: LuShoppingCart,
  brain: LuBrainCircuit,
  bot: LuBot,
  clapper: LuClapperboard,
};

export function getProjectIcon(slug: string): IconType {
  return projectIcons[slug] ?? LuTerminal;
}

// Curated lists for the marquee (only real, recognizable brand logos)
export const marqueeRowA: TechItem[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3B82F6" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#6FBF5A" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Python", Icon: SiPython, color: "#5B9BD5" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#22D3EE" },
  { name: "Redis", Icon: SiRedis, color: "#FF6258" },
  { name: "Prisma", Icon: SiPrisma, color: "#7DE3D0" },
  { name: "MySQL", Icon: SiMysql, color: "#5B92C4" },
];

export const marqueeRowB: TechItem[] = [
  { name: "Anthropic", Icon: SiAnthropic, color: "#D97757" },
  { name: "OpenAI", Icon: SiOpenai, color: "#E6E6E6" },
  { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
  { name: "Electron", Icon: SiElectron, color: "#62C0CE" },
  { name: "Vite", Icon: SiVite, color: "#A07CFF" },
  { name: "Redux", Icon: SiRedux, color: "#A07CD6" },
  { name: "FastAPI", Icon: SiFastapi, color: "#05B6A2" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Socket.io", Icon: SiSocketdotio, color: "#E6E6E6" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E535AB" },
  { name: "Swift", Icon: SiSwift, color: "#F05138" },
  { name: "Express", Icon: SiExpress, color: "#E6E6E6" },
];
