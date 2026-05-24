"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Toast() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const onToast = (e: Event) => {
      setMsg((e as CustomEvent).detail as string);
      clearTimeout(t);
      t = setTimeout(() => setMsg(null), 2200);
    };
    window.addEventListener("toast", onToast);
    return () => { window.removeEventListener("toast", onToast); clearTimeout(t); };
  }, []);

  return (
    <AnimatePresence>
      {msg && (
        <motion.div className="toast glass" role="status" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.25 }}>
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
