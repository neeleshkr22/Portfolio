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

          <div className="timeline mt-8">
            {/* Timeline Item 1 */}
            <div className="timeline-item slide-in" style={{ animationDelay: "0s" }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-orange-400 font-bold text-lg">Vice President</h3>
                <div className="flex items-center gap-2">
                  <span className="badge badge-secondary"></span>
                </div>
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
            <br />
            <br />

            {/* Timeline Item 2 */}
            <div className="timeline-item slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-orange-400 font-bold text-lg">Data Analysis Trainee</h3>
                <div className="flex items-center gap-2">
                  <span className="badge badge-secondary">Internship</span>
                </div>
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
            <br />
            <br />

            
            

            {/* Timeline Item 4 */}
            {/* <div className="timeline-item slide-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-orange-400 font-bold text-lg">Machine Learning Researcher</h3>
                <div className="flex items-center gap-2">
                  <span className="badge badge-secondary">Research</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center text-sm mb-3 text-orange-200">
                <div className="flex items-center">
                  <LuBriefcase className="h-4 w-4 mr-1" />
                  <span>AI Research Lab</span>
                </div>
                <span className="hidden md:inline mx-2">•</span>
                <div className="flex items-center">
                  <LuCalendar className="h-4 w-4 mr-1" />
                  <span>Mar. 2023–Aug. 2023</span>
                </div>
                <span className="hidden md:inline mx-2">•</span>
                <div className="flex items-center">
                  <LuMapPin className="h-4 w-4 mr-1" />
                  <span>Remote</span>
                </div>
              </div>
              <p className="mb-3">
                Focused on the development of deep learning models to analyze large datasets, including the creation of neural networks for natural language processing and computer vision tasks.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "Keras", "NLP", "Deep Learning"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </Terminal>
      </div>
    </main>
  );
}
