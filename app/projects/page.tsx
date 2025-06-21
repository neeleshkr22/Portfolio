"use client"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image"
import { IoMdStarOutline } from "react-icons/io";

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

          {/* Project 1 */}
          <div className="bg-transparent border border-amber-300 rounded-lg p-6 mb-6 shadow-lg ">
            <p className="text-yellow-400 font-bold mb-2">[1] InRoute</p>
            <p className="text-gray-400 mb-4">InRoute is a web-based application designed to provide wheelchair-friendly and accessible routes for people with disabilities (PWD). It helps users find safe and obstacle-free pathways, ensuring a smooth journey. Additionally, it offers community insights and emotional support features to enhance the user experience.</p>
            <div className="flex space-x-2 mb-4">
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#react Js</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#Gsap</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#Express</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#Mongo</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#JWT</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#Gemini-API</span>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">80%</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              <a href="https://github.com/neeleshkr22/InRoute" target="blank" className="text-blue-400 hover:underline">Code</a> | <a href="https://github.com/neeleshkr22/InRoute" target="blank" className="text-blue-400 hover:underline">Star Project ⭐</a>
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-transparent border border-amber-300 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-yellow-400 font-bold mb-2">[2] Project-Launcher</p>
            <p className="text-gray-400 mb-4">
              Quickly spin up a fullstack hackathon-ready starter with just one command!
            </p>
            <pre className="inline-block bg-gray-900 text-green-400 px-3 py-2 rounded-md text-sm">
              <code>npm create-project-launcher-v1</code>
            </pre>
            <br />
            <br />


            <div className="flex space-x-2 mb-4">
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#react</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#express</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#nodejs</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#zod</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#Tailwind</span>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">90%</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              <a href="https://github.com/neeleshkr22/Project-Launcher" target="blank" className="text-blue-400 hover:underline">Code</a> | <a href="https://github.com/neeleshkr22/Project-Launcher" target="blank" className="text-blue-400 hover:underline">Star Project ⭐</a>
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-transparent border border-amber-300 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-yellow-400 font-bold mb-2">[3] Movie Finder </p>
            <p className="text-gray-400 mb-4">Movie Finder is a web application that allows users to search for movies, view trending films, and get details about their favorite films seamlessly. The app integrates with The Movie Database (TMDb) API for fetching movie data and uses Appwrite as a backend service for tracking search counts and trending movies.</p>
            <div className="flex space-x-2 mb-4">
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#react</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#nodejs</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#appwrite</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#TMDB API</span>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">95%</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              <a href="https://movieeefinderr.netlify.app/" target="blank" className="text-blue-400 hover:underline">Live</a> | <a href="https://github.com/neeleshkr22/Movie-Finder" target="blank" className="text-blue-400 hover:underline">Star Project ⭐</a>
            </p>
          </div>

          {/* Project 4 */}
          <div className="bg-transparent border border-amber-300 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-yellow-400 font-bold mb-2">[4] Discord Bot</p>
            <p className="text-gray-400 mb-4">Discord moderation bot with many features and helping server to keep protected and safe.</p>
            <div className="flex space-x-2 mb-4">
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#javascript</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#discord-js</span>

            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">90%</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              <a href="https://github.com/neeleshkr22/Discord-Bot" target="blank" className="text-blue-400 hover:underline">Code</a> | <a href="https://github.com/neeleshkr22/Discord-Bot" target="blank" className="text-blue-400 hover:underline">Star Project ⭐</a>
            </p>
          </div>

          {/* Project 5 */}
          <div className="bg-transparent border border-amber-300 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-yellow-400 font-bold mb-2">[5] Restify – REST Client</p>
            <p className="text-gray-400 mb-4">
              A Postman-like REST API client built for Warewe Consultancy as an assignment. Features request builder, response viewer, and PostgreSQL-based history.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#nextjs</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#mikroorm</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#postgresql</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#railway</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#typescript</span>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">100%</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              <a href="https://github.com/neeleshkr22/Restify" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Code</a> {" "}| <a href="https://github.com/neeleshkr22/Discord-Bot" target="blank" className="text-blue-400 hover:underline">Star Project ⭐</a>
            </p>
          </div>

          {/* Project 6 */}
          <div className="bg-transparent border border-amber-300 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-yellow-400 font-bold mb-2">[5] Portfolio Website</p>
            <p className="text-gray-400 mb-4">A personal portfolio website built with Next.js and Tailwind CSS</p>
            <div className="flex space-x-2 mb-4">
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#nextjs</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#tailwindcss</span>
              <span className="text-blue-400 text-sm font-medium py-1 px-3 rounded-full bg-gray-800">#javascript</span>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">100%</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              <a href="#" className="text-blue-400 hover:underline">Code</a> | <a href="#" className="text-blue-400 hover:underline">Star Project ⭐</a>
            </p>
          </div>
        </Terminal>
      </div>
    </main>
  )
}
