"use client";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/data";
import { getBrandIcon, getProjectIcon } from "@/lib/icons";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">$ ls ./projects</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Projects</h2>
          </Reveal>
        </div>

        <div className="bento">
          {projects.map((p, i) => {
            const Icon = getProjectIcon(p.icon);
            return (
            <TiltCard
              key={p.name}
              className={`span-${p.span} ${p.featured ? "featured" : ""}`}
              delay={(i % 3) * 0.06}
            >
              {p.image ? (
                <div className="tile-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={`${p.name} preview`} loading="lazy" />
                </div>
              ) : (
                <div className="ico"><Icon /></div>
              )}
              <div className="flag">{p.flag}</div>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <div className="stack">
                {p.stack.map((s) => {
                  const def = getBrandIcon(s);
                  const BrandIcon = def?.Icon;
                  return (
                    <span key={s}>
                      {BrandIcon && <BrandIcon style={{ color: def!.color }} />}
                      {s}
                    </span>
                  );
                })}
              </div>
            </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
