"use client";

import GlowBackground from "./ui/GlowBackground";
import GridBackground from "./ui/GridBackground";
import FloatingParticles from "./ui/FloatingParticles";
import MouseGlow from "./ui/MouseGlow";

import HeroContent from "./hero/HeroContent";
import HeroDashboard from "./hero/HeroDashboard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#050816]"
    >
      <GlowBackground />
      <GridBackground />
      <FloatingParticles />
      <MouseGlow />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-5 pt-24 pb-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:pt-32">

        {/* Left Content */}
        <HeroContent />

        {/* Right Dashboard */}
        <div className="w-full">
          <HeroDashboard />
        </div>

      </div>
    </section>
  );
}