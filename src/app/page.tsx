"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Heading } from "@/components/HeadingComponent";
import { TypewriterEffectSmoothDemo } from "@/components/EventStarter";

export default function Home() {
  return (
    <AuroraBackground>
      <Heading/>
      <TypewriterEffectSmoothDemo />
    </AuroraBackground>
  );
}
