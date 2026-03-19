import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: ["#7C3AED", "#06B6D4", "#8B5CF6"] },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          number: { value: 40, density: { enable: true } },
          opacity: { value: { min: 0.1, max: 0.3 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: "#7C3AED",
            opacity: 0.08,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
