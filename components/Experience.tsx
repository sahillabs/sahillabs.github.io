"use client";
import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

function renderBold(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? <b key={i}>{p.slice(2, -2)}</b> : <span key={i}>{p}</span>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 65%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">$ cat experience.log</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Experience</h2>
          </Reveal>
        </div>

        <div className="timeline" ref={ref}>
          <div className="tl-rail">
            <motion.div className="tl-fill" style={{ scaleY }} />
          </div>
          {experience.map((job) => (
            <Reveal key={job.company} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-head">
                <h3>
                  {job.role} <span className="co">· {job.company}</span>
                </h3>
                <span className="tl-date">{job.period}</span>
              </div>
              <ul className="tl-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{renderBold(b)}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
