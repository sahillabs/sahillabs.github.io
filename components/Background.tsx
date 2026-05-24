"use client";
import { useEffect, useRef } from "react";
import FloatingIcons from "./FloatingIcons";

export default function Background() {
  const spotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = spotRef.current;
      if (!el) return;
      el.style.setProperty("--mx", e.clientX + "px");
      el.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="bg-layers" aria-hidden>
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <FloatingIcons />
      <div className="grid-overlay" />
      <div className="spotlight" ref={spotRef} />
      <div className="noise" />
    </div>
  );
}
