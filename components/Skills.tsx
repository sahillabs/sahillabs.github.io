"use client";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">$ ./load_arsenal</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Arsenal</h2>
          </Reveal>
        </div>

        <div className="skill-grid">
          {skills.map((g, gi) => (
            <Reveal key={g.group} delay={(gi % 3) * 0.06}>
              <div className="skill-block glass">
                <h4>// {g.group}</h4>
                <div className="chips">
                  {g.items.map((it) => {
                    const { Icon, color } = getIcon(it);
                    return (
                      <span className="chip" key={it}>
                        <Icon className="chip-ico" style={{ color }} />
                        {it}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
