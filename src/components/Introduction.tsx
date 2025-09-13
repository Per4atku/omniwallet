/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { useScroll, useTransform } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionBadge from "./SectionBadge";
import { Fragment, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "that never sleeps, never errs, and spots opportunities before you do. The ØmniWallet is that brain — your guide through banks, crypto, and the future of finance.";

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
            <SectionBadge>INTRODUCING ØMNIWALLET</SectionBadge>
          </div>
          <MaxWidthWrapper maxWidth={800}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-medium">
              <span className="text-white">
                Imagine if your money had a brain,
              </span>
              <br />
              {words.map((word, index) => (
                <Fragment key={index}>
                  {words[index + 1] === "ØmniWallet" && <br />}
                  <span
                    className={twMerge(
                      "transition-opacity duration-300",
                      index < currentWord ? "opacity-100" : "opacity-20"
                    )}
                  >
                    {word}{" "}
                  </span>
                </Fragment>
              ))}
              <span className="text-lime-400 block">
                One app, endless solutions.
              </span>
            </h2>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
