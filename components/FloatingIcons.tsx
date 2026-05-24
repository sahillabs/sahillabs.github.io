"use client";
import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiDocker,
  SiTailwindcss, SiRedis, SiPrisma, SiGraphql, SiFirebase, SiFlutter, SiNestjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

type Floater = { Icon: IconType; color: string; top: string; left: string; size: number; dur: number; delay: number; depth: number };

// scattered, low-opacity brand marks drifting behind the content
const ICONS: Floater[] = [
  { Icon: SiReact, color: "#61DAFB", top: "13%", left: "7%", size: 48, dur: 9, delay: 0, depth: 1 },
  { Icon: SiNextdotjs, color: "#FFFFFF", top: "24%", left: "84%", size: 40, dur: 11, delay: -2, depth: 0.6 },
  { Icon: SiTypescript, color: "#3B82F6", top: "70%", left: "5%", size: 44, dur: 10, delay: -4, depth: 0.8 },
  { Icon: FaAws, color: "#FF9900", top: "79%", left: "88%", size: 46, dur: 12, delay: -1, depth: 1 },
  { Icon: SiNodedotjs, color: "#6FBF5A", top: "42%", left: "93%", size: 38, dur: 9.5, delay: -3, depth: 0.7 },
  { Icon: SiPython, color: "#5B9BD5", top: "88%", left: "38%", size: 42, dur: 13, delay: -6, depth: 0.9 },
  { Icon: SiDocker, color: "#2496ED", top: "7%", left: "52%", size: 36, dur: 10.5, delay: -5, depth: 0.5 },
  { Icon: SiTailwindcss, color: "#22D3EE", top: "56%", left: "47%", size: 34, dur: 12.5, delay: -2.5, depth: 0.4 },
  { Icon: SiRedis, color: "#FF6258", top: "33%", left: "22%", size: 34, dur: 11.5, delay: -7, depth: 0.6 },
  { Icon: SiPrisma, color: "#7DE3D0", top: "62%", left: "76%", size: 36, dur: 9.8, delay: -1.5, depth: 0.8 },
  { Icon: SiGraphql, color: "#E535AB", top: "16%", left: "34%", size: 32, dur: 13.5, delay: -8, depth: 0.5 },
  { Icon: SiFlutter, color: "#54C5F8", top: "90%", left: "64%", size: 34, dur: 10.2, delay: -3.5, depth: 0.7 },
  { Icon: SiFirebase, color: "#FFCA28", top: "47%", left: "13%", size: 32, dur: 12.2, delay: -6.5, depth: 0.6 },
  { Icon: SiNestjs, color: "#E0234E", top: "5%", left: "70%", size: 34, dur: 11.8, delay: -4.5, depth: 0.9 },
];

export default function FloatingIcons() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      // subtle parallax (research: keep multiplier low to avoid motion sickness)
      tx = (e.clientX / window.innerWidth - 0.5) * -34;
      ty = (e.clientY / window.innerHeight - 0.5) * -34;
    };
    const loop = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      if (ref.current) ref.current.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="float-layer" ref={ref} aria-hidden>
      {ICONS.map((f, i) => {
        const Icon = f.Icon;
        return (
          <Icon
            key={i}
            className="float-ico"
            style={{
              top: f.top,
              left: f.left,
              fontSize: f.size,
              color: f.color,
              ["--dur" as string]: `${f.dur}s`,
              ["--delay" as string]: `${f.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
