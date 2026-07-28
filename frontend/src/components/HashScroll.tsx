"use client";

import { useEffect } from "react";

/** Scroll to #hash after load (e.g. arriving from a sport page). */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const t = window.setTimeout(scroll, 50);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
