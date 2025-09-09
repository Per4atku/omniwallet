"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

const SectionBadge = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // raw motion values (px relative to the badge top-left)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth them with springs
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  // radial gradient that uses the animated x/y (px)
  const background = useMotionTemplate`
    radial-gradient(220px circle at ${springX}px ${springY}px,
      rgba(163,230,53,0.30),
      rgba(163,230,53,0.12) 40%,
      transparent 60%)
  `;

  useEffect(() => {
    // set initial center to badge center (when mounted)
    const initCenter = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mouseX.set(r.width / 2);
      mouseY.set(r.height / 2);
    };

    const handleMouse = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // convert viewport coords -> coords relative to the element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    initCenter();
    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("resize", initCenter);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", initCenter);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ background }}
      className="inline-flex w-max items-center gap-2 cursor-cell rounded-full px-4 py-1.5 text-lime-400 border border-lime-400 relative overflow-hidden"
    >
      <span className="relative z-10">✶</span>
      <span className="relative z-10 uppercase">{children}</span>
    </motion.div>
  );
};

export default SectionBadge;
