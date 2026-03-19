import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: ["#F59E0B", "#FB7185", "#D4A574"] },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
          },
          number: { value: 120, density: { enable: true, area: 800 } },
          opacity: { 
            value: { min: 0.1, max: 0.4 },
            animation: { enable: true, speed: 1, sync: false }
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
          links: {
            enable: true,
            distance: 150,
            color: "#F59E0B",
            opacity: 0.15,
            width: 1,
            triangles: { enable: true, opacity: 0.02 }
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
