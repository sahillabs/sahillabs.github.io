"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects, Project } from "@/lib/data";

const urlFor = (name: string) => (name === "RecoveryCart" ? "recoverycart.app" : name);

function PreviewCard({ p, flip }: { p: Project; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 18 });

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
    <div className={`preview-row ${flip ? "flip" : ""}`}>
      <div className="preview-stage" ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
        <motion.div
          className="browser"
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.21, 0.5, 0.25, 1] }}
        >
          <div className="browser-bar">
            <span className="bdot r" />
            <span className="bdot y" />
            <span className="bdot g" />
            <span className="browser-url">{urlFor(p.name)}</span>
          </div>
          <div className="browser-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              className={loaded ? "loaded" : ""}
              src={p.image}
              alt={`${p.name} preview`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="preview-info"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.5, 0.25, 1] }}
      >
        <div className="preview-flag">{p.flag}</div>
        <h3 className="preview-title">{p.name}</h3>
        <p className="preview-blurb">{p.blurb}</p>
        <div className="stack">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function LivePreview() {
  const featured = projects.filter((p) => p.image);
  return (
    <section className="preview" id="preview" aria-label="Live previews">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">// live preview</span>
          <h2 className="section-title">Featured work</h2>
        </div>
        {featured.map((p, i) => (
          <PreviewCard key={p.name} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
