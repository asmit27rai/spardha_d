"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Description } from "./Description";

export function Heading() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Unleash the Champion Within at Spardha 2024{" "}< br />
        <Highlight className="text-black dark:text-white">
        IIT BHU&apos;s Premier Sports Fest
        </Highlight>
        <Description />
      </motion.h1>
    </HeroHighlight>
  );
}
