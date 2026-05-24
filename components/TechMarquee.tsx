"use client";
import { marqueeRowA, marqueeRowB, TechItem } from "@/lib/icons";

function Row({ items, reverse }: { items: TechItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? "reverse" : ""}`}>
      <div className="marquee-track">
        {doubled.map((t, i) => {
          const Icon = t.Icon;
          return (
            <span className="marquee-item" key={`${t.name}-${i}`} aria-hidden={i >= items.length}>
              <Icon style={{ color: t.color }} />
              {t.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="marquee-band" aria-label="Technologies I work with">
      <div className="marquee-label">// the stack I build with</div>
      <Row items={marqueeRowA} />
      <Row items={marqueeRowB} reverse />
    </section>
  );
}
