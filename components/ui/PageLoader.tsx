"use client";

import React, { useEffect, useRef, useState } from "react";

export interface PageLoaderProps {
  isLoading?: boolean;
  autoDismissMs?: number | null;
  onDismiss?: () => void;
  companyName?: string;
}

export default function PageLoader({
  isLoading = true,
  autoDismissMs = 2000,
  onDismiss,
  companyName = "Special Pumps",
}: PageLoaderProps) {
  const [show, setShow] = useState<boolean>(isLoading);
  const [textVisible, setTextVisible] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [gearSize, setGearSize] = useState<number>(120);

  const textTimerRef = useRef<number | null>(null);
  const dismissTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setShow(isLoading);

    if (isLoading) {
      if (textTimerRef.current) window.clearTimeout(textTimerRef.current);
      textTimerRef.current = window.setTimeout(() => setTextVisible(true), 500);

      if (autoDismissMs && autoDismissMs > 0) {
        if (dismissTimerRef.current) window.clearTimeout(dismissTimerRef.current);
        dismissTimerRef.current = window.setTimeout(() => {
          setShow(false);
          setTextVisible(false);
          onDismiss?.();
        }, autoDismissMs);
      }
    } else {
      setTextVisible(false);
      if (textTimerRef.current) window.clearTimeout(textTimerRef.current);
      if (dismissTimerRef.current) window.clearTimeout(dismissTimerRef.current);
    }

    return () => {
      if (textTimerRef.current) window.clearTimeout(textTimerRef.current);
      if (dismissTimerRef.current) window.clearTimeout(dismissTimerRef.current);
    };
  }, [isLoading, autoDismissMs, onDismiss]);

  // Reduced motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mql.matches);
    update();
    if ("addEventListener" in mql) {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }
    // @ts-ignore legacy Safari
    mql.addListener(update);
    return () => {
      // @ts-ignore legacy Safari
      mql.removeListener(update);
    };
  }, []);

  // Responsive size: 80 on small screens, 120 otherwise
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setGearSize(mq.matches ? 80 : 120);
    update();
    if ("addEventListener" in mq) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }
    // @ts-ignore legacy Safari
    mq.addListener(update);
    return () => {
      // @ts-ignore legacy Safari
      mq.removeListener(update);
    };
  }, []);

  // Build 12 teeth around the gear (compute every render; cheap and avoids hook-order issues)
  const teethPoints: string[] = (() => {
    const teeth = 12;
    const step = (2 * Math.PI) / teeth;
    const innerR = 34;
    const outerR = 44;
    const halfWidth = 0.18; // ~10.3deg
    const cx = 50;
    const cy = 50;

    const pts: string[] = [];
    for (let i = 0; i < teeth; i++) {
      const a = i * step;
      const a1 = a - halfWidth;
      const a2 = a + halfWidth;

      const x1 = cx + Math.cos(a1) * innerR;
      const y1 = cy + Math.sin(a1) * innerR;
      const x2 = cx + Math.cos(a1) * outerR;
      const y2 = cy + Math.sin(a1) * outerR;
      const x3 = cx + Math.cos(a2) * outerR;
      const y3 = cy + Math.sin(a2) * outerR;
      const x4 = cx + Math.cos(a2) * innerR;
      const y4 = cy + Math.sin(a2) * innerR;

      pts.push(`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`);
    }
    return pts;
  })();

  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Special Pumps"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        // White blurry glass effect
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#1e293b",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
      }}
    >
      {/* GEAR WHEEL - FIXED & ROTATING (single SVG) */}
      <svg
        width={gearSize}
        height={gearSize}
        viewBox="0 0 100 100"
        style={{
          display: "block",
          filter: "drop-shadow(0 0 16px rgba(59,130,246,0.35))",
          marginBottom: 24,
          transformOrigin: "50px 50px",
          ...(reducedMotion ? {} : { animation: "spnl_spin 2.5s linear infinite" }),
        }}
      >
        <g>
          {/* Gear body */}
          <circle cx="50" cy="50" r="26" fill="#1e40af" stroke="#1e3a8a" strokeWidth={1.5} />
          {/* Teeth */}
          {teethPoints.map((points, i) => (
            <polygon key={i} points={points} fill="#3b82f6" stroke="#1e40af" strokeWidth={1.25} />
          ))}
          {/* Hub ring */}
          <circle cx="50" cy="50" r="16" fill="none" stroke="#1e40af" strokeWidth={2} />
          {/* Center shaft */}
          <circle cx="50" cy="50" r="7.5" fill="#1e40af" />
          <circle cx="50" cy="50" r="3.5" fill="#ffffff" />
        </g>
      </svg>

      {/* Text appears 500ms after start */}
      <div
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 600ms ease-out, transform 600ms ease-out",
          color: "#0f172a",
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: 0.5,
          textShadow: "0 1px 2px rgba(255,255,255,0.8)",
        }}
      >
        {companyName}
      </div>
      <div
        style={{
          opacity: textVisible ? 0.85 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 700ms ease-out 150ms, transform 700ms ease-out 150ms",
          color: "#475569",
          fontSize: 14,
          marginTop: 8,
        }}
      >
        Industrial Pump Solutions
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes spnl_spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export { PageLoader };
