"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          sahil<span className="c">.</span>labs
        </a>
        <div className="nav-links">
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#skills">arsenal</a>
          <a href="#about">about</a>
        </div>
        <a className="nav-cta" href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
          resume.pdf ↓
        </a>
      </div>
    </nav>
  );
}
