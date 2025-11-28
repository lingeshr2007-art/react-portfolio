import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },

        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 4 } },
          links: {
            enable: true,
            distance: 150,
            opacity: 0.4,
            width: 1,
            color: "#ffffff",
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: "bounce",
          },
        },

        detectRetina: true,
      }}
    />
  );
}