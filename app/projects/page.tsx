"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useState, useEffect } from "react"

export default function Projects() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: true 
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const projects = [
    {
      title: "AI Auto Documentation Tool",
      description: "Production-ready tool that automatically generates comprehensive technical documentation from demo videos using AI-powered video processing. Features frame extraction, audio transcription, chapter segmentation.",
      image: "/doctool.png",
      tech: ["Python", "FastAPI", "Streamlit", "OpenAI", "FFmpeg"],
      github: "https://github.com/neeleshkr22/auto-documentation-tool",
      live: "https://auto-documentation-tool-frontend.onrender.com/"
    },
    {
      title: "AI Criminal Sketch Matching",
      description: "Full-stack application for generating realistic criminal sketches from text descriptions using Stable Diffusion and matching them against 10,000+ records with CNN & SVM.",
      image: "/peace.jpg",
      tech: ["Python", "Flask", "React", "TensorFlow", "OpenCV"],
      github: "https://github.com/neeleshkr22/AI-forensic-sketching"
    },
    {
      title: "InRoute",
      description: "Voice-enabled route-finder for differently-abled users, helping them safely navigate urban zones with community-driven obstacle reporting and emotional support features.",
      image: "/inroute.png",
      tech: ["React.js", "Express", "MongoDB", "Gemini API"],
      github: "https://github.com/neeleshkr22/InRoute"
    },
    {
      title: "Project-Launcher",
      description: "Quickly spin up a fullstack hackathon-ready starter with just one command! npm create-project-launcher-v1",
      image: "/npmpack.png",
      tech: ["React", "Express", "Node.js", "Zod", "Tailwind"],
      github: "https://github.com/neeleshkr22/Project-Launcher"
    },
    {
      title: "Movie Finder",
      description: "Movie Finder allows users to search for movies, view trending films, and get details. Integrates with TMDb API and uses Appwrite for tracking search counts.",
      image: "/moviefind.png",
      tech: ["React", "Node.js", "Appwrite", "TMDB API"],
      github: "https://github.com/neeleshkr22/Movie-Finder",
      live: "https://movieeefinderr.netlify.app/"
    },
    {
      title: "Restify – REST Client",
      description: "A Postman-like REST API client built for Warewe Consultancy. Features request builder, response viewer, and PostgreSQL-based history.",
      image: "/restify.png",
      tech: ["Next.js", "MikroORM", "PostgreSQL", "TypeScript"],
      github: "https://github.com/neeleshkr22/Restify"
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-xs sm:text-sm font-medium text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5">
              Projects
            </Link>
          </div>
          <a href="https://github.com/neeleshkr22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </motion.nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-gray-400 text-xs sm:text-sm">A collection of projects I&apos;ve worked on.</p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-4 sm:space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Project Image */}
                <div className="sm:w-56 h-32 sm:h-auto overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={224}
                    height={144}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{project.title}</h3>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                          <span>Live</span>
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                        >
                          <FaGithub className="w-3 h-3" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <a 
            href="https://github.com/neeleshkr22" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 rounded-lg text-xs sm:text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all"
          >
            <FaGithub className="w-4 h-4" />
            More on GitHub
          </a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6 sm:pt-8 mt-12 sm:mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="text-center sm:text-left">
              Designed & Developed by <span className="text-white">Neelesh</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>
              © 2025. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Delhi, India · {time}</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
