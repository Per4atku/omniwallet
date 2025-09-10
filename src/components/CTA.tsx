"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const CTA = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate(
      scope.current,
      { x: "-50%" },
      {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }
    );

    // Set initial playback speed (1 = normal)
    controls.speed = 1;

    // Store controls on the scope element so events can access it
    scope.current._controls = controls;

    return () => {
      controls.stop?.();
    };
  }, [scope, animate]);

  return (
    <section className="my-32">
      <div className="overflow-x-clip p-4 flex ">
        <motion.div
          ref={scope}
          onHoverStart={() => {
            const ctrls = scope.current?._controls;
            if (ctrls) ctrls.speed = 0.3; // slow down (2x slower)
          }}
          onHoverEnd={() => {
            const ctrls = scope.current?._controls;
            if (ctrls) ctrls.speed = 1; // back to normal
          }}
          className="flex flex-none pr-16 gap-16 text-7xl md:text-8xl font-medium cursor-cell group"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 ">
              <span className="text-lime-400">✶</span>
              <span className="group-hover:text-lime-400 duration-250">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
