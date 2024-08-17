"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Heading } from "@/components/HeadingComponent";
import { TypewriterEffectSmoothDemo } from "@/components/EventStarter";

const Footer = () => {
  return (
    <footer className="text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Spardha Is Waiting For You</p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <AuroraBackground>
      <Heading />
      <TypewriterEffectSmoothDemo />
      <Footer />
    </AuroraBackground>
  );
}
