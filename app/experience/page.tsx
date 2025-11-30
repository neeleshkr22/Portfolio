"use client";
import Link from "next/link";
import { Terminal } from "@/components/terminal";
import { LuBriefcase, LuCalendar, LuMapPin } from "react-icons/lu";
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image";

export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-amber-500 font-mono p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
      <div className="border border-amber-700 mb-6 overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.7)", // amber-500 glow
          }}>
          <Image
            src="/peace.jpg"
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

        {/* Terminal Content */}
        <Terminal>
          <p className="mb-6">
            <Typewriter
              words={['> my experience ']}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
          <div className="mb-4">
            <p className="terminal-line">// My professional journey</p>
          </div>

          <div className="relative pl-6 sm:pl-8 mt-8">
            {/* Timeline vertical line */}
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-gray-400" style={{ width: '3px' }}></div>

            {/* Timeline Item 1 */}
            <div className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute -left-6 w-4 h-4 bg-orange-500 rounded-full border-2 border-black"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-orange-400 font-bold text-lg">Vice President</h3>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-bold">
                  LEADER
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center text-sm mb-3 text-orange-200">
                <div className="flex items-center">
                  <LuBriefcase className="h-4 w-4 mr-1" />
                  <span>Hashtag</span>
                </div>
                <span className="hidden md:inline mx-2">•</span>
                <div className="flex items-center">
                  <LuCalendar className="h-4 w-4 mr-1" />
                  <span>Sep. 2024–Present</span>
                </div>
                <span className="hidden md:inline mx-2">•</span>
                <div className="flex items-center">
                  <LuMapPin className="h-4 w-4 mr-1" />
                  <span>On-Site</span>
                </div>
              </div>

              <p className="mb-3">
                Leading technical initiatives, organizing hackathons and coding events, mentoring juniors in DSA, MERN stack, and AI technologies. Spearheaded development of full-stack platforms for events and society management. Collaborated with team to bring industry-level project exposure to students through workshops and competitive programming contests.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Leadership", "React Js", "Node Js", "Express Js", "Tailwind", "Next Js", "Docker", "Zod", "Mongo", "Postgres", "Prisma", "Typescript", "C++"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute -left-7 sm:-left-6 w-4 h-4 bg-orange-500 rounded-full border-2 border-black"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-orange-400 font-bold text-lg">Data Analysis Trainee</h3>
                <span className="inline-block px-3 py-1 bg-yellow-600 text-black text-xs rounded-full font-bold">
                  INTERNSHIP
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center text-sm mb-3 text-orange-200">
                <div className="flex items-center">
                  <LuBriefcase className="h-4 w-4 mr-1" />
                  <span>Deloitte</span>
                </div>
                <span className="hidden md:inline mx-2">•</span>
                <div className="flex items-center">
                  <LuCalendar className="h-4 w-4 mr-1" />
                  <span>Dec. 2023–Jan. 2024</span>
                </div>
                <span className="hidden md:inline mx-2">•</span>
                <div className="flex items-center">
                  <LuMapPin className="h-4 w-4 mr-1" />
                  <span>Remote</span>
                </div>
              </div>

              <p className="mb-3">
                Executed a comprehensive data analysis project at Deloitte, demonstrating proficiency in extracting actionable
                insights from complex datasets.
                • Developed and implemented a data dashboard using Tableau to visualize key metrics, providing stakeholders with
                clear and concise business intelligence.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Python",  "SQL", "Tableau"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr className="w-full mb-4 mt-4 border-amber-300 " />
          <div className="mb-4">
            <p className="terminal-line">Want to know more? check my resume</p>
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
  );
}
