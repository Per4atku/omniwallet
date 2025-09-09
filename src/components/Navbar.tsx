"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";

import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { useBoolean } from "@siberiacancode/reactuse";
import { AnimatedMenuButton } from "./ui/animated-menu-button";

const navlinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Integrations", href: "#intergrations" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, toggle] = useBoolean(false);

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 items-center lg:grid-cols-3">
          <div className="flex">
            <Image src={logo} alt="Logo" className="h-9 w-auto " />
          </div>
          <div className="hidden lg:flex w-full justify-between">
            {navlinks.map((link) => (
              <Link
                className="font-bold relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                key={link.href}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-self-end self-center gap-2">
            <Button
              className="hidden font-bold p-6 md:flex"
              size={"lg"}
              variant={"outline"}
            >
              Login
            </Button>
            <Button size={"lg"} className="hidden md:flex font-bold p-6">
              Sign Up
            </Button>
            <AnimatedMenuButton active={isOpen} toggle={toggle} />
          </div>
        </div>
      </div>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-5 flex items-center justify-center bg-black/90"
          >
            <div className="w-full h-full rounded-none text-white flex flex-col items-center justify-center gap-8">
              {navlinks.map((link) => (
                <Link
                  onClick={() => toggle(false)}
                  className="text-2xl border-b-1 border-white"
                  href={link.href}
                  key={link.href}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3">
                <Button
                  className=" font-bold p-6 px-12 md:hidden "
                  size={"lg"}
                  variant={"outline"}
                >
                  Login
                </Button>
                <Button size={"lg"} className="  font-bold p-6 px-12 md:hidden">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Navbar;
