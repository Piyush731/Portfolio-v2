import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#3b82f6",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            links: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false,
              },
              onClick: {
                enable: false,
              },
              resize: true,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Particle;