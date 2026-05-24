"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-11, 11]), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <section className="showcase" aria-label="Featured project preview">
      <div className="wrap">
        <div className="showcase-eyebrow">// featured · live preview</div>
        <div className="showcase-stage" ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
          <div className="showcase-glow" />
          <motion.div
            className="browser"
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 46 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.21, 0.5, 0.25, 1] }}
          >
            <div className="browser-bar">
              <span className="bdot r" />
              <span className="bdot y" />
              <span className="bdot g" />
              <span className="browser-url">recoverycart.app</span>
            </div>
            <div className="browser-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/shots/recoverycart.png" alt="RecoveryCart — AI abandoned-cart recovery for Shopify" />
            </div>
          </motion.div>
        </div>
        <div className="showcase-cap">RecoveryCart — AI abandoned-cart recovery for Shopify</div>
      </div>
    </section>
  );
}
