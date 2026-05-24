"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProfilePhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [12, -12]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 150, damping: 18 });

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
    <motion.div
      className="hero-photo"
      ref={ref}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.5, 0.25, 1] }}
    >
      <div className="hero-photo-glow" />
      {/* monogram fallback (shows until /shots/profile.jpg exists) */}
      <div className="hero-photo-ph">
        <span>SK</span>
        <em>drop your photo at /shots/profile.jpg</em>
      </div>
      {/* photo layer — hides itself (revealing the monogram) if the file is missing */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hero-photo-img"
        src="/shots/profile.jpg"
        alt="Sahil Khatkar"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </motion.div>
  );
}
