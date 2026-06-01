"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Counter from "./Counter";
import { profile, stats } from "@/lib/data";

const ease = [0.21, 0.5, 0.25, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [typed, setTyped] = useState("");
  useEffect(() => {
    const words = profile.roleWords;
    let wi = 0, ci = 0, del = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = words[wi];
      setTyped(del ? w.slice(0, ci--) : w.slice(0, ci++));
      if (!del && ci > w.length) { del = true; timer = setTimeout(tick, 1500); return; }
      if (del && ci < 0) { del = false; wi = (wi + 1) % words.length; ci = 0; }
      timer = setTimeout(tick, del ? 45 : 95);
    };
    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header ref={ref} className="hero" id="top">
      <div className="hero-bg" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/shots/profile.webp"
          alt=""
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="hero-duotone" />
        <div className="hero-scrim" />
      </div>
      <motion.div className="wrap" style={{ y: yUp, opacity: fade }}>
        <motion.div className="status" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}>
          <span className="live" /> Open to opportunities · {profile.location}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}>
          Sahil <span className="grad-text">Khatkar</span>
        </motion.h1>

        <motion.div className="role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}>
          {profile.role} <span style={{ color: "var(--faint)" }}>@</span> <span className="typed">{typed}</span>
          <span className="caret" />
        </motion.div>

        <motion.p className="lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease }}>
          {profile.tagline} I like shipping real software and putting LLMs to work inside it.
        </motion.p>

        <motion.div className="hero-links" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease }}>
          <MagneticButton href={`mailto:${profile.email}`} primary>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
            Get in touch
          </MagneticButton>
          <MagneticButton href={profile.github}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>
            GitHub
          </MagneticButton>
          <MagneticButton href={profile.linkedin}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.59 22 11.2 22 14.34V21h-4v-5.9c0-1.4-.02-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-4V9Z" /></svg>
            LinkedIn
          </MagneticButton>
        </motion.div>

        <motion.div className="stats" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85, ease }}>
          {stats.map((s) => (
            <div className="stat glass" key={s.label}>
              <div className="num grad-text"><Counter value={s.num} /></div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="scroll-hint" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        SCROLL ↓
      </motion.div>
    </header>
  );
}
