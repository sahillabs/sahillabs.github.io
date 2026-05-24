"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const LINKS = [
  { id: "experience", label: "experience" },
  { id: "preview", label: "work" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "arsenal" },
  { id: "about", label: "about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          sahil<span className="c">.</span>labs
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="cmdk-btn"
            onClick={() => window.dispatchEvent(new Event("cmdk:open"))}
            aria-label="Open command menu (Command-K)"
          >
            <span className="k">⌘</span>K
          </button>
          <a className="nav-cta" href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
            resume.pdf ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
