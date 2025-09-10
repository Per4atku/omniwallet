/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { useScroll, useTransform } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionBadge from "./SectionBadge";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.";

const words = text.split(" ");
const Introduction = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start start", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", () => setCurrentWord(wordIndex.get()));
  }, [wordIndex]);

  return (
    <div className="mt-32">
      {/* Container defines the height for sticky to work */}
      <div ref={componentRef} className="relative h-[200vh]">
        {/* Sticky content */}
        <div className="sticky top-20 flex flex-col items-center justify-start z-10 md:top-48">
          <div className="w-full flex justify-center mb-8">
            <SectionBadge>INTRODUCING LAYERS</SectionBadge>
          </div>
          <MaxWidthWrapper maxWidth={800}>
            <h2 className="text-4xl lg:text-5xl text-center font-medium">
              <span className="text-white">
                Your creative process deserves better.{" "}
              </span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "transition-opacity duration-300",
                    index < currentWord ? "opacity-100" : "opacity-20"
                  )}
                >
                  {word}{" "}
                </span>
              ))}
              <span className="text-lime-400 block">
                That's why we built Layers.
              </span>
            </h2>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
