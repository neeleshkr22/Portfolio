"use client"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-amber-500 font-mono p-4 md:p-8">
      
      
      <div className="max-w-5xl mx-auto">
        <div className="border border-amber-700 mb-6 overflow-hidden"
                  style={{
                    boxShadow: "0 0 20px rgba(245, 158, 11, 0.7)", // amber-500 glow
                  }}>
                  <Image
                    src="/messi.jpg"
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
              words={['> about me  ']}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>

          <div className="mb-4">
            <p className="terminal-line">// A bit more about me</p>
          </div>

          <div className="mb-4">
            <p className="terminal-line">
              I'm a passionate full-stack developer and problem solver with a strong focus on machine learning, DSA, and backend development. My journey in tech started with exploring data structures and algorithms, followed by a deep dive into full-stack development and AI.
            </p>
          </div>

          <div className="mb-4">
            <p className="terminal-line">
              Currently, I'm learning and applying TypeScript, Prisma, and PostgreSQL in my full-stack projects, while continuing to expand my understanding of AI for hackathons. I'm particularly focused on building practical, user-centric applications and solving complex problems using efficient algorithms.
            </p>
          </div>

          <div className="mb-4">
            <p className="terminal-line">// Skills</p>
            <ul className="ml-10 mt-2 grid grid-cols-2 gap-2">
              <li className="mb-2">
                <p>Python</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[90%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>React</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[92%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>Node.js</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[95%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>TypeScript</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[80%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>Prisma</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[79%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>PostgreSQL</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[80%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>Next JS</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[89%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>MongoDB</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[85%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>Machine Learning</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[75%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              <li className="mb-2">
                <p>SQL</p>
                <div className="w-full bg-gradient-to-r from-red-500 to-white h-2 rounded-full">
                  <div className="w-[85%] bg-red-500 h-full rounded-full"></div>
                </div>
              </li>
              
            </ul>
          </div>

          <div className="mb-4">
            <p className="terminal-line">// Interests</p>
            <ul className="ml-10 mt-2 list-disc">
              <li>Full-stack development</li>
              <li>Data Structures & Algorithms</li>
              <li>Machine Learning and AI</li>
              <li>Hackathons and coding competitions</li>
              <li>Open-source contributions</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="terminal-line">
              Outside of coding, I enjoy participating in hackathons, experimenting with new technologies, and mentoring others in programming and tech.
            </p>
          </div>
        </Terminal>
      </div>
    </main>
  )
}
