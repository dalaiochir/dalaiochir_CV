import React from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: { color: "#f9f9f9" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: "#ff6600" },
          links: { enable: true, color: "#ff6600", distance: 150 },
          collisions: { enable: false },
          move: { enable: true, speed: 2 },
          number: { density: { enable: true, area: 800 }, value: 40 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
