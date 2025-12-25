"use client"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image"
import { IoMdStarOutline } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-amber-500 font-mono p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="border border-amber-700 mb-6 overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.7)", // amber-500 glow
          }}>
          <Image
            src="/oook.jpg"
            alt="Banner image"
            width={700}
            height={200}
            className="w-full h-auto floating-banner"
            priority
          />
        </div>
        {/* Navigation */}
        <nav className="mb-8 border-b border-green-600 text-green-300 pb-2">
          <ul className="flex flex-wrap gap-4 md:gap-8">
            <li>
              <Link href="/" className="hover:text-amber-300 transition-colors">
                ~/home
              </Link>
            </li>
            <li>
              <Link href="/experience" className="hover:text-amber-300 transition-colors">
                ~/experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-amber-300 transition-colors">
                ~/projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-300 transition-colors">
                ~/about
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-300 transition-colors">
                ~/contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <Terminal>
          <p className="mb-6">
            <Typewriter
              words={['> my projects ']}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>

          <div className="mb-4">
            <p className="terminal-line">// showcasing My Latest Tech Adventures</p>
          </div>

          <div className="space-y-8">
            {/* Project 1 - AI Auto Documentation Tool */}
            <div className="border border-orange-600 rounded-lg p-6 bg-black/50 hover:border-orange-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-orange-400 font-bold text-xl">AI Auto Documentation Tool</h3>
                <a href="https://auto-documentation-tool-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <HiExternalLink className="text-orange-400 w-5 h-5 hover:text-orange-300 transition-colors" />
                </a>
              </div>
              
              <p className="text-orange-100 mb-4 leading-relaxed">
                Production-ready tool that automatically generates comprehensive technical documentation from demo videos using AI-powered video processing. Features frame extraction, audio transcription, chapter segmentation, and can process videos up to 2 hours with automated timestamp generation and PDF export.
              </p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-200 text-sm">100%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-white h-2 rounded-full transition-all duration-300" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["#python", "#fastapi", "#streamlit", "#openai", "#ffmpeg", "#llm"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://auto-documentation-tool-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>🚀</span> Live Demo
                </a>
                <a href="https://github.com/neeleshkr22/auto-documentation-tool" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>👁</span> View Code
                </a>
                <a href="https://github.com/neeleshkr22/auto-documentation-tool" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>⭐</span> Star Project
                </a>
              </div>
            </div>

            {/* Project 2 - AI Criminal Sketch Matching System */}
            <div className="border border-orange-600 rounded-lg p-6 bg-black/50 hover:border-orange-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-orange-400 font-bold text-xl">AI Criminal Sketch Matching System</h3>
                <a href="https://github.com/neeleshkr22/AI-forensic-sketching" target="_blank" rel="noopener noreferrer">
                  <HiExternalLink className="text-orange-400 w-5 h-5 hover:text-orange-300 transition-colors" />
                </a>
              </div>
              
              <p className="text-orange-100 mb-4 leading-relaxed">
                Full-stack application for generating realistic criminal sketches from text descriptions using Stable Diffusion and matching them against a database of 10,000+ records. Features CNN feature extraction (VGGFace), SVM classification with 85-90% accuracy, and pix2pix GAN enhancement improving accuracy by 15-20%. Includes dual sketch creation: AI-powered generator and drag-and-drop interface.
              </p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-200 text-sm">95%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-white h-2 rounded-full transition-all duration-300" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["#python", "#flask", "#react", "#mongodb", "#tensorflow", "#opencv", "#cnn", "#svm", "#gan"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://github.com/neeleshkr22/AI-forensic-sketching" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>👁</span> View Code
                </a>
                <a href="https://github.com/neeleshkr22/AI-forensic-sketching" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>⭐</span> Star Project
                </a>
              </div>
            </div>

            {/* Project 3 - InRoute */}
            <div className="border border-orange-600 rounded-lg p-6 bg-black/50 hover:border-orange-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-orange-400 font-bold text-xl">InRoute</h3>
                <a href="https://github.com/neeleshkr22/InRoute" target="_blank" rel="noopener noreferrer">
                  <HiExternalLink className="text-orange-400 w-5 h-5 hover:text-orange-300 transition-colors" />
                </a>
              </div>
              
              <p className="text-orange-100 mb-4 leading-relaxed">
                InRoute is a web-based application designed to provide wheelchair-friendly and accessible routes for people with disabilities (PWD). It helps users find safe and obstacle-free pathways, ensuring a smooth journey. Additionally, it offers community insights and emotional support features to enhance the user experience.
              </p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-200 text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-white h-2 rounded-full transition-all duration-300" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["#react Js", "#Gsap", "#Express", "#Mongo", "#JWT", "#Gemini-API"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://github.com/neeleshkr22/InRoute" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>👁</span> View Code
                </a>
                <a href="https://github.com/neeleshkr22/InRoute" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>⭐</span> Star Project
                </a>
              </div>
            </div>

            {/* Project 4 - Project-Launcher */}
            <div className="border border-orange-600 rounded-lg p-6 bg-black/50 hover:border-orange-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-orange-400 font-bold text-xl">Project-Launcher</h3>
                <a href="https://github.com/neeleshkr22/Project-Launcher" target="_blank" rel="noopener noreferrer">
                  <HiExternalLink className="text-orange-400 w-5 h-5 hover:text-orange-300 transition-colors" />
                </a>
              </div>
              
              <p className="text-orange-100 mb-4 leading-relaxed">
                Quickly spin up a fullstack hackathon-ready starter with just one command!
              </p>

              <pre className="inline-block bg-gray-900 text-green-400 px-3 py-2 rounded-md text-sm mb-4">
                <code>npm create-project-launcher-v1</code>
              </pre>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-200 text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-white h-2 rounded-full transition-all duration-300" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["#react", "#express", "#nodejs", "#zod", "#Tailwind"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://github.com/neeleshkr22/Project-Launcher" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>👁</span> View Code
                </a>
                <a href="https://github.com/neeleshkr22/Project-Launcher" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>⭐</span> Star Project
                </a>
              </div>
            </div>

            {/* Project 5 - Movie Finder */}
            <div className="border border-orange-600 rounded-lg p-6 bg-black/50 hover:border-orange-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-orange-400 font-bold text-xl">Movie Finder</h3>
                <a href="https://movieeefinderr.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <HiExternalLink className="text-orange-400 w-5 h-5 hover:text-orange-300 transition-colors" />
                </a>
              </div>
              
              <p className="text-orange-100 mb-4 leading-relaxed">
                Movie Finder is a web application that allows users to search for movies, view trending films, and get details about their favorite films seamlessly. The app integrates with The Movie Database (TMDb) API for fetching movie data and uses Appwrite as a backend service for tracking search counts and trending movies.
              </p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-200 text-sm">95%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-white h-2 rounded-full transition-all duration-300" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["#react", "#nodejs", "#appwrite", "#TMDB API"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://movieeefinderr.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>🚀</span> Live Demo
                </a>
                <a href="https://github.com/neeleshkr22/Movie-Finder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>👁</span> View Code
                </a>
                <a href="https://github.com/neeleshkr22/Movie-Finder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>⭐</span> Star Project
                </a>
              </div>
            </div>

            {/* Project 6 - Restify */}
            <div className="border border-orange-600 rounded-lg p-6 bg-black/50 hover:border-orange-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-orange-400 font-bold text-xl">Restify – REST Client</h3>
                <a href="https://github.com/neeleshkr22/Restify" target="_blank" rel="noopener noreferrer">
                  <HiExternalLink className="text-orange-400 w-5 h-5 hover:text-orange-300 transition-colors" />
                </a>
              </div>
              
              <p className="text-orange-100 mb-4 leading-relaxed">
                A Postman-like REST API client built for Warewe Consultancy as an assignment. Features request builder, response viewer, and PostgreSQL-based history.
              </p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-200 text-sm">100%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-white h-2 rounded-full transition-all duration-300" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["#nextjs", "#mikroorm", "#postgresql", "#railway", "#typescript"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://github.com/neeleshkr22/Restify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>👁</span> View Code
                </a>
                <a href="https://github.com/neeleshkr22/Restify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>⭐</span> Star Project
                </a>
              </div>
            </div>
          </div>
        </Terminal>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-black rounded-full flex items-center justify-center transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </main>
  )
}
