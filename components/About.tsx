import Reveal from "./Reveal";
import { certifications, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">$ whoami</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Background</h2>
          </Reveal>
        </div>

        <div className="two-col">
          <Reveal>
            <div className="panel glass">
              <h4>// certifications · Anthropic</h4>
              {certifications.map((c) => (
                <div className="row" key={c}>
                  <span className="mk">▸</span>
                  <div className="body">
                    <strong>{c}</strong>
                    <span>Anthropic</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="panel glass">
              <h4>// education</h4>
              {education.map((e) => (
                <div className="row" key={e.degree}>
                  <span className="mk">▸</span>
                  <div className="body">
                    <strong>{e.degree}</strong>
                    <span>
                      {e.place} · {e.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
