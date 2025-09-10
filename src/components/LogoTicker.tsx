"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, Fragment } from "react";

import acmecorp from "@/assets/images/acme-corp.svg";
import apex from "@/assets/images/apex.svg";
import twice from "@/assets/images/twice.svg";
import pulse from "@/assets/images/pulse.svg";
import outside from "@/assets/images/outside.svg";
import echovalley from "@/assets/images/echo-valley.svg";
import quantum from "@/assets/images/quantum.svg";
import celestial from "@/assets/images/celestial.svg";
import MaxWidthWrapper from "./MaxWidthWrapper";

const logos = [
  { name: "Acme Corp", src: acmecorp },
  { name: "Apex", src: apex },
  { name: "Twice", src: twice },
  { name: "Pulse", src: pulse },
  { name: "Outside", src: outside },
  { name: "Echo Valley", src: echovalley },
  { name: "Quantum", src: quantum },
  { name: "Celestial", src: celestial },
];

const LogoTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2); // half, because we duplicate logos
    }
  }, []);

  return (
    <section className="py-4 mt-32">
      <MaxWidthWrapper maxWidth={800}>
        <p className="text-muted-foreground text-xl font-medium mb-12 text-center px-2">
          Already chosen by these market leaders
        </p>
      </MaxWidthWrapper>

      <div className="overflow-hidden flex logo-ticker-mask">
        <motion.div
          ref={containerRef}
          className="flex flex-none gap-12 pr-12"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {logos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-auto"
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;
