"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealState = "idle" | "pending" | "revealed";

// Default state renders exactly as if this component didn't exist — visible,
// untransformed — so content is never hidden without JS. The observer only
// ever adds an entrance animation for sections not already on screen; it
// never gates visibility itself.
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let firstCallback = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (firstCallback) {
          firstCallback = false;
          // Already on screen at mount — leave it alone, nothing to animate.
          if (!entry.isIntersecting) setState("pending");
          return;
        }
        if (entry.isIntersecting) {
          setState("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    state === "pending"
      ? "opacity-0 translate-y-4"
      : state === "revealed"
        ? "animate-reveal opacity-100 translate-y-0"
        : "";

  return (
    <div ref={ref} className={`${className} ${stateClass}`}>
      {children}
    </div>
  );
}
