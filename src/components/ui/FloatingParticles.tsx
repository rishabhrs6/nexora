"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  duration: number;
};

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }, () => ({
      x: Math.random() * 1600,
      y: Math.random() * 900,
      opacity: Math.random(),
      scale: Math.random() * 1.5 + 0.5,
      duration: 6 + Math.random() * 8,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-400/30"

          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
            scale: particle.scale,
          }}

          animate={{
            y: [particle.y, particle.y - 120],
            opacity: [0.2, 0.8, 0.2],
          }}

          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
}