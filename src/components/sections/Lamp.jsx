"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
import HeroSection from "./HeroSection";

export default function Lamp() {
  return (
    <LampContainer>
      <HeroSection />
    </LampContainer>
  );
}
