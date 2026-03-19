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
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          number: { value: 25, density: { enable: true } },
          opacity: { value: { min: 0.05, max: 0.15 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            distance: 180,
            color: "#F59E0B",
            opacity: 0.04,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
