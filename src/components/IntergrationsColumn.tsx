"use client";

import Image from "next/image";
import { integrationsType } from "./Integrations";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const IntegrationColumn = ({
  direction,
  integrations,
  className,
}: {
  direction: "up" | "down";
  integrations: integrationsType;
  className?: string;
}) => {
  const looped = [...integrations, ...integrations];

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate(
      scope.current,
      {
        y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
      },
      {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }
    );

    // Set initial playback speed (1 = normal)
    controls.speed = 1;

    // Store controls on the scope element so events can access it
    scope.current._controls = controls;
  });

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        ref={scope}
        className="flex flex-col gap-4 pt-2"
        onMouseEnter={() => {
          const controls = scope.current?._controls;
          if (controls) controls.speed = 0.5;
        }}
        onMouseLeave={() => {
          const controls = scope.current?._controls;
          if (controls) controls.speed = 1;
        }}
      >
        {looped.map((integration, i) => (
          <div
            key={`${integration.name}-${i}`}
            className="flex flex-col py-8 text-center items-center justify-center gap-4 rounded-2xl border border-stone-800 bg-stone-900"
          >
            <Image
              width={90}
              height={90}
              src={integration.icon}
              alt={integration.name}
            />
            <h3 className="text-3xl">{integration.name}</h3>
            <p className="text-muted-foreground max-w-[250px] p-2">
              {integration.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default IntegrationColumn;
