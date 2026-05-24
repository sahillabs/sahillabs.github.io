"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, .tile, [data-cursor]"));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div className="cursor-pos" style={{ left: x, top: y }}>
        <motion.div className="cursor-dot" animate={{ scale: hover ? 0 : 1 }} transition={{ duration: 0.15 }} />
      </motion.div>
      <motion.div className="cursor-pos" style={{ left: ringX, top: ringY }}>
        <motion.div className="cursor-ring" animate={{ scale: hover ? 1.7 : 1, opacity: hover ? 1 : 0.6 }} transition={{ duration: 0.2 }} />
      </motion.div>
    </>
  );
}
