"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { type Engine } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  id: string;
}

export default function ParticlesBackground({ id }: ParticlesBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: { value: "transparent" }, // Nền trong suốt
        },
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: true, // Particle bị hút theo chuột
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract", // hoặc "grab", "repulse"
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 150,
              duration: 0.4,
              factor: 2,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
