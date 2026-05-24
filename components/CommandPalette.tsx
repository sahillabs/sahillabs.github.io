"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

type Cmd = { id: string; label: string; hint: string; run: () => void; keywords?: string };

function toast(msg: string) {
  window.dispatchEvent(new CustomEvent("toast", { detail: msg }));
}
function scrollTo(target: string | number) {
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string | number, o?: object) => void } }).__lenis;
  if (lenis) lenis.scrollTo(target, { offset: typeof target === "string" ? -80 : 0 });
  else if (typeof target === "string") document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const cmds: Cmd[] = useMemo(() => {
    const go = (id: string) => () => { setOpen(false); scrollTo("#" + id); };
    return [
      { id: "experience", label: "Go to Experience", hint: "section", run: go("experience"), keywords: "work job" },
      { id: "preview", label: "Go to Featured work", hint: "section", run: go("preview"), keywords: "live preview projects" },
      { id: "projects", label: "Go to Projects", hint: "section", run: go("projects") },
      { id: "skills", label: "Go to Arsenal", hint: "section", run: go("skills"), keywords: "skills stack tech" },
      { id: "about", label: "Go to Background", hint: "section", run: go("about"), keywords: "education certifications" },
      { id: "top", label: "Back to top", hint: "section", run: () => { setOpen(false); scrollTo(0); } },
      { id: "email", label: "Copy email", hint: profile.email, run: () => { navigator.clipboard?.writeText(profile.email); toast("Email copied  ✓"); setOpen(false); }, keywords: "contact mail" },
      { id: "mail", label: "Send email", hint: "mailto", run: () => { window.location.href = `mailto:${profile.email}`; setOpen(false); } },
      { id: "github", label: "Open GitHub", hint: "external ↗", run: () => { window.open(profile.github, "_blank"); setOpen(false); } },
      { id: "linkedin", label: "Open LinkedIn", hint: "external ↗", run: () => { window.open(profile.linkedin, "_blank"); setOpen(false); } },
      { id: "resume", label: "Download résumé", hint: "pdf", run: () => { window.open(profile.resumePdf, "_blank"); setOpen(false); }, keywords: "cv" },
    ];
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return cmds;
    return cmds.filter((c) => (c.label + " " + c.hint + " " + (c.keywords ?? "")).toLowerCase().includes(s));
  }, [q, cmds]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); }
      else if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("cmdk:open", onOpen);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("cmdk:open", onOpen); };
  }, []);

  useEffect(() => {
    if (open) { setQ(""); setActive(0); document.body.style.overflow = "hidden"; setTimeout(() => inputRef.current?.focus(), 30); }
    else document.body.style.overflow = "";
  }, [open]);
  useEffect(() => setActive(0), [q]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); filtered[active]?.run(); }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="cmdk-overlay" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
          <motion.div
            className="cmdk glass"
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.21, 0.5, 0.25, 1] }}
          >
            <div className="cmdk-input">
              <span className="cmdk-prompt">$</span>
              <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onInputKey} placeholder="Type a command or search…" aria-label="Command search" />
              <kbd>esc</kbd>
            </div>
            <div className="cmdk-list">
              {filtered.length === 0 && <div className="cmdk-empty">No matches</div>}
              {filtered.map((c, i) => (
                <button key={c.id} className={`cmdk-item ${i === active ? "active" : ""}`} onMouseMove={() => setActive(i)} onClick={() => c.run()}>
                  <span className="cmdk-label">{c.label}</span>
                  <span className="cmdk-hint">{c.hint}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
