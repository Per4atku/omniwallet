"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, Fragment } from "react";

import applepay from "@/assets/images/apple-pay.png";
import binance from "@/assets/images/binance-logo.png";
import bitstamp from "@/assets/images/bitstamp-logo.png";
import coinbase from "@/assets/images/coinbase-logo.png";
import kraken from "@/assets/images/kraken-logo.png";
import paypal from "@/assets/images/paypal-logo.png";
import metamask from "@/assets/images/metamask-logo.png";
import n26 from "@/assets/images/n26-logo.png";
import MaxWidthWrapper from "./MaxWidthWrapper";

const logos = [
  { name: "Apple Pay", src: applepay },
  { name: "Binance", src: binance },
  { name: "Bitstamp", src: bitstamp },
  { name: "Coinbase", src: coinbase },
  { name: "Kraken", src: kraken },
  { name: "PayPal", src: paypal },
  { name: "MetaMask", src: metamask },
  { name: "N26", src: n26 },
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
