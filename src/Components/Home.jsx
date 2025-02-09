import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Waves = () => {
  const canvasRef = useRef(null);
  const [theme] = useState("dark"); // Simplified theme handling

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let increment = 0;

    const waveConfig = {
      amplitude: 100,
      frequency: 0.02,
      speed: 0.05,
    };

    const animateWaves = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      
      for (let x = 0; x < width; x += 10) {
        let y = height / 2 + Math.sin(x * waveConfig.frequency + increment) * waveConfig.amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = "#111";
      ctx.fill();
      
      increment += waveConfig.speed;
      requestAnimationFrame(animateWaves);
    };
    
    animateWaves();
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center p-8">
      <Waves />
      <div className="text-center max-w-4xl relative z-10">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          I AM NEELESH
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          Crafting cool web experiences with modern technologies
        </p>

        <div className="space-y-6 text-lg text-gray-300">
          <p>
            I'm a passionate full-stack developer focused on creating engaging and interactive web applications. 
            With expertise in React, Node.js, and modern web technologies.
          </p>

          <p>
            My goal is to build seamless digital experiences that combine clean code with creative design.
            I love taking on challenging projects that push the boundaries of what's possible on the web.
          </p>
        </div>

        <div className="mt-12 flex gap-6 justify-center">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-lg text-lg hover:bg-white hover:text-black transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
