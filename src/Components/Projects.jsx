import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1. Explain key features and technologies used.",
    videoUrl: "/path/to/video1.mp4", 
    githubUrl: "https://github.com/username/project1",
    liveUrl: "https://project1-demo.com"
  },
  {
    title: "Project 2",
    description: "Description of project 2. Highlight main functionality and tech stack.",
    videoUrl: "/path/to/video2.mp4",
    githubUrl: "https://github.com/username/project2",
    liveUrl: "https://project2-demo.com"
  },
  {
    title: "Project 3",
    description: "Description of project 3. Features and tech details here.",
    videoUrl: "/path/to/video3.mp4",
    githubUrl: "https://github.com/username/project3",
    liveUrl: "https://project3-demo.com"
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const projectElements = projectsRef.current;
    const title = titleRef.current;

    if (!container || projectElements.length === 0 || !title) return;

    // Initial state - projects come from left instead of right
    gsap.set(projectElements, { opacity: 0, scale: 0.8, xPercent: -100 });
    gsap.set(title, { opacity: 1, scale: 1, x: 0 });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${window.innerHeight * (projects.length + 1)}`,
        scrub: true, // Changed to true for smoother bi-directional scrolling
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        snap: {
          snapTo: 1 / (projects.length + 1), // Snap to each project section
          duration: { min: 0.2, max: 0.5 }, // Snap duration
          ease: "power1.inOut"
        }
      }
    });

    // Title animation works in both directions
    tl.to(title, {
      x: window.innerWidth,
      duration: projects.length,
      ease: "none" // Changed to none for consistent bi-directional movement
    });

    // Projects animation works in both directions
    projectElements.forEach((project, index) => {
      tl.addLabel(`project-${index}`)
        .to(
          project,
          {
            opacity: 1,
            scale: 1,
            xPercent: 0,
            duration: 1,
            ease: "none"
          },
          `project-${index}`
        )
        .to(
          project,
          {
            opacity: 0,
            scale: 0.8,
            xPercent: 100,
            duration: 1,
            ease: "none"
          },
          `project-${index}+=1`
        );
    });

  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <h2
        ref={titleRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white z-10"
      >
        PROJECTS
      </h2>

      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (projectsRef.current[index] = el)}
          className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
        >
          <div className="bg-gray-900 rounded-xl p-8 max-w-4xl w-full">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-black">
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-3xl font-bold mb-4 text-white">{project.title}</h3>

            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                GitHub Repo
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
