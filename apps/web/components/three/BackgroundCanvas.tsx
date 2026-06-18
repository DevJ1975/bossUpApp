"use client";

import dynamic from "next/dynamic";

// three.js touches the DOM/WebGL, so it must only render on the client.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

/** Fixed, non-interactive 3D backdrop that sits behind all page content. */
export default function BackgroundCanvas() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      aria-hidden="true"
    >
      <Scene />
      {/* vignette so content stays readable over the 3D layer */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_30%,var(--color-ink)_85%)]" />
    </div>
  );
}
