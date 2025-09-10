"use client";

import Image from "next/image";

import acmecorp from "@/assets/images/acme-corp.svg";
import apex from "@/assets/images/apex.svg";
import twice from "@/assets/images/twice.svg";
import pulse from "@/assets/images/pulse.svg";
import outside from "@/assets/images/outside.svg";
import echovalley from "@/assets/images/echo-valley.svg";
import quantum from "@/assets/images/quantum.svg";
import celestial from "@/assets/images/celestial.svg";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";

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
  return (
    <section className=" py-4  mt-32">
      <MaxWidthWrapper maxWidth={800}>
        <p className="text-muted-foreground text-xl font-medium mb-12 text-center px-2">
          Already chosen by these market leaders
        </p>
      </MaxWidthWrapper>
      <div className="flex overflow-hidden logo-ticker-mask gap-12">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 flex-shrink-0"
        >
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-12 w-auto"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 flex-shrink-0"
        >
          {logos.map((logo) => (
            <Image
              key={logo.name + "-copy"}
              src={logo.src}
              alt={logo.name}
              className="h-12 w-auto"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;
