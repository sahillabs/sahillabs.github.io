"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  '<span class="arrow">&gt;</span> initializing portfolio…',
  '<span class="arrow">&gt;</span> loading modules [react · nestjs · aws · ai] <span class="ok">ok</span>',
  '<span class="arrow">&gt;</span> mounting 9 projects <span class="ok">ok</span>',
  '<span class="arrow">&gt;</span> establishing connection <span class="ok">ready</span>',
];

const DURATION = 2200;

export default function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      new URLSearchParams(window.location.search).has("nointro")
    ) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    let finishTimer: ReturnType<typeof setTimeout>;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setPct(Math.round((1 - Math.pow(1 - t, 2)) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finishTimer = setTimeout(() => setDone(true), 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(finishTimer);
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  // reveal lines progressively as the bar fills
  const shown = Math.min(LINES.length, Math.floor((pct / 100) * (LINES.length + 1)));

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="loader-box">
            <div className="loader-name">
              sahil<span className="c">.</span>khatkar<span className="c">()</span>
            </div>
            <div className="loader-log">
              {LINES.map((l, i) => (
                <div
                  key={i}
                  style={{ opacity: i < shown ? 1 : 0, transition: "opacity .3s ease" }}
                  dangerouslySetInnerHTML={{ __html: l }}
                />
              ))}
            </div>
            <div className="loader-bar">
              <i style={{ width: pct + "%" }} />
            </div>
            <div className="loader-pct">
              <span>INITIALIZING SEQUENCE</span>
              <span>{pct}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
