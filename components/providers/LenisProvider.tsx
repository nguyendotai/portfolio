"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // inertia / smoothness (0.06–0.12 range is nice)
        duration: 1.2, // approximate scroll time in seconds
        smoothWheel: true, // smooth mouse wheel (desktop)
        syncTouch: false, // ← this is the new name (was smoothTouch in very old versions)
        // touchMultiplier: 2,  // optional: increase scroll speed on touch if needed
      }}
    >
      {children}
    </ReactLenis>
  );
}
