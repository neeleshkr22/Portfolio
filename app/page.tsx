"use client"
import Image from "next/image"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { Typewriter } from 'react-simple-typewriter'
import { FaTwitter, FaDiscord, FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="min-h-screen bg-black text-amber-500 font-mono p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Banner Image */}
        <div className="border border-amber-700 mb-6 overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.7)", // amber-500 glow
          }}>
          <Image
            src="/huma1.gif"
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
            <li><Link href="/" className="hover:text-amber-300 transition-colors">~/home</Link></li>
            <li><Link href="/experience" className="hover:text-amber-300 transition-colors">~/experience</Link></li>
            <li><Link href="/projects" className="hover:text-amber-300 transition-colors">~/projects</Link></li>
            <li><Link href="/about" className="hover:text-amber-300 transition-colors">~/about</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300 transition-colors">~/contact</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <Terminal>
          <p className="mb-6">
            <Typewriter
              words={['Yo! Wassupp! This side Neelesh aka ZORD']}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>

          <div className="mb-4">
            <p className="terminal-line">Based in Delhi → <span className="font-bold">{time}</span></p>
          </div>

          <div className="mb-4">
            <p className="terminal-line">
              ✨ hi! my name is <span className="text-yellow-400 font-bold">Neelesh Kumar</span>! Just a coder on a mission to build cool things, break stuff (sometimes), and have fun along the way!
            </p>
          </div>

          <div className="mb-4">
            <p className="terminal-line">
              Currently, I'm focused on implementing real world problem's solution and building hands-on projects in <span className="text-blue-400">Next Js</span> and <span className="text-blue-400">Docker</span>.
            </p>
            <p className="terminal-line">
              Always eager to learn and collaborate, I'm actively exploring new opportunities while turning cutting-edge ideas into real-world solutions.
            </p>
          </div>

          <div className="mb-4">
            <p className="terminal-line">
              I'm passionate about solving real-world problems through data-driven solutions and impactful analytics.
            </p>
            <p className="terminal-line">
              so ping me on any of the below if you would like to collaborate on something!
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              <li className="terminal-line flex items-center gap-2">
                <FaTwitter className="text-blue-400" />
                <a href="https://x.com/neeleshkr22" target="_blank" className="text-blue-400 hover:underline">@neeleshkr22</a> : X (formerly Twitter)
              </li>
              <li className="terminal-line flex items-center gap-2">
                <FaDiscord className="text-blue-400" />
                <a href="https://discord.gg/R9bBk9vzda" className="text-blue-400 hover:underline">@i.neelesh</a> : Discord
              </li>
              <li className="terminal-line flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:neeleshrana22@gmail.com" className="text-blue-400 hover:underline">mail</a>
              </li>
              <li className="terminal-line flex items-center gap-2">
                <FaLinkedin className="text-blue-400" />
                <a href="https://www.linkedin.com/in/neelesh-kumar-rana-a7b903290/" className="text-blue-400 hover:underline">LinkedIn</a> : Connect with me
              </li>
              <li className="terminal-line flex items-center gap-2">
                <FaGithub className="text-blue-400" />
                <a href="https://github.com/neeleshkr22" className="text-blue-400 hover:underline">GitHub</a> : Code playground
              </li>
              <li className="terminal-line flex items-center gap-2">
                <FaFileAlt className="text-blue-400" />
                <a href="/resume.pdf" className="text-blue-400 hover:underline" target="_blank">resume</a> : Here's my resume
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="terminal-line">I am currently working on the following topics:</p>
            <ul className="ml-4 mt-2 list-disc text-amber-300">
              <li>AI ML: Linear Algebra, Stats, Pandas</li>
              <li>Next js (SSH, SSR)</li>
              <li>Docker (Images, Containeriztion)</li>
              <li>Generative models (GANs, diffusion models, stable diffusion)</li>
              <li>Model deployment strategies and productionizing ML systems</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="terminal-line">I am interested in exploring opportunities in the following areas:</p>
            <ul className="ml-4 mt-2 list-disc text-amber-300">
              <li>Software Developer Engineer (SDE) roles</li>
              <li>Full stack Web Developer  positions</li>
              <li>Dynamic roles at startups working on innovative tech solutions</li>
              <li>Research positions in industry or academia</li>
              <li>Other related fields in AI, ML, or web dev domains</li>
            </ul>
          </div>
          <hr className="w-full mb-4 mt-4 border-amber-300 " />

          <p className="mb-4">
            <Typewriter
              words={['Thanks for visiting!⚡ ']}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
        </Terminal>
      </div>
    </main>
  )
}
