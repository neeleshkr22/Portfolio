import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
          for (const step of (animationTo || defaultTo)) {
            await next(step);
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
          }
        }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transition-transform will-change-[transform,filter,opacity]"
        >
          {elements[index] === ' ' ? '\u00A0' : elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </animated.span>
      ))}
    </p>
  );
};

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
    let animationFrameId;

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
      animationFrameId = requestAnimationFrame(animateWaves);
    };
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animateWaves();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center p-8">
      <Waves />
      <div className="text-center max-w-4xl relative z-10">
        <BlurText
          text="I AM NEELESH"
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white bg-clip-text text-center mx-auto flex justify-center items-center w-full"
          delay={100}
          direction="bottom"
          animateBy="letters"
        />
        <p className="text-xl text-gray-400 mb-8 text-center">
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
