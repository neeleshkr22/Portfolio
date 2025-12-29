"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaTwitter, FaLinkedin, FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiMongodb, SiDocker, SiAmazonwebservices, SiGit, SiTailwindcss, SiGmail, SiMedium, SiTableau, SiDjango, SiPrisma, SiPandas, SiNumpy, SiScikitlearn, SiFastapi } from "react-icons/si"

// Animation variants
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

// Experience data
const experiences = [
  {
    id: 1,
    company: "Joget Inc.",
    role: "Software Engineering Intern",
    location: "Malaysia (Remote)",
    period: "Sep 2025 - Dec 2025",
    logo: "/joget.jpg",
    points: [
      "Worked on production-grade low-code platform used by enterprise clients; contributed features directly to deployed software.",
      "Designed and implemented a Vector Database utility to improve semantic search and context retrieval for AI-driven workflows.",
      "Developed an Auto Documentation Generator that converts recorded demo videos into structured technical documentation using LLM-based processing.",
      "Optimized existing internal tools, improving response time and reducing redundant API calls through better caching and query handling.",
      "Conducted comparative evaluation of Weaviate Vector DB against Elysia AI chat workflows to benchmark retrieval accuracy and agent responses."
    ]
  },
  {
    id: 2,
    company: "Hashtag Coding Society",
    role: "Vice President",
    location: "On-Site",
    period: "Mar 2024 - Oct 2025",
    logo: "/hashtag.jpg",
    points: [
      "Led 10+ technical events including hackathons, workshops, and speaker sessions across campus.",
      "Increased member participation by 40% through structured mentorship programs and coding competitions.",
      "Managed inter-college collaborations with 3+ partner institutions for joint technical initiatives."
    ]
  },
  {
    id: 3,
    company: "Deloitte",
    role: "Data Analysis Trainee",
    location: "Remote",
    period: "Dec 2023 - Jan 2024",
    logo: "/deloitte.jpg",
    points: [
      "Executed a comprehensive data analysis project at Deloitte, demonstrating proficiency in extracting actionable insights from complex datasets.",
      "Developed and implemented a data dashboard using Tableau to visualize key metrics, providing stakeholders with clear and concise business intelligence."
    ]
  },
  
]

// Projects data
const projects = [
  {
    id: 1,
    title: "AI Auto Documentation Tool",
    description: "Production-ready tool that automatically generates comprehensive technical documentation from demo videos using AI-powered video processing.",
    image: "/doctool.png",
    tags: ["Python", "FastAPI", "Streamlit", "OpenAI", "FFmpeg"],
    liveUrl: "https://auto-documentation-tool-frontend.onrender.com/",
    githubUrl: "https://github.com/neeleshkr22/auto-documentation-tool"
  },
  {
    id: 2,
    title: "AI Criminal Sketch Matching",
    description: "Full-stack application for generating realistic criminal sketches using Stable Diffusion and matching against 10,000+ records with CNN & SVM.",
    image: "/sketch.png",
    tags: ["Python", "Flask", "React", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/neeleshkr22/AI-forensic-sketching"
  },
  {
    id: 3,
    title: "InRoute",
    description: "Voice-enabled route-finder for differently-abled users, helping them safely navigate urban zones with community-driven obstacle reporting.",
    image: "/inroute.png",
    tags: ["React", "Express", "MongoDB", "Gemini API"],
    githubUrl: "https://github.com/neeleshkr22/InRoute"
  }
]

// Skills data with React Icons
const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React/Next.js", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "SQL", icon: SiPostgresql, color: "#336791" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Tableau", icon: SiTableau, color: "#E97627" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
]

export default function Portfolio() {
  const [time, setTime] = useState("")
  const [expandedExp, setExpandedExp] = useState<number | null>(1)
  const [showBannerTooltip, setShowBannerTooltip] = useState(false)
  const [contributions, setContributions] = useState<{total: number, days: {count: number, date: string, level: number}[]}>({ total: 0, days: [] })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit",
        hour12: true 
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Fetch real GitHub contribution data
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/neeleshkr22?y=last')
        const data = await response.json()
        setContributions({
          total: data.total?.lastYear || 0,
          days: data.contributions || []
        })
      } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error)
      }
    }
    fetchContributions()
  }, [])

  // Group contributions by weeks (7 days each)
  const getWeeks = () => {
    const weeks: {count: number, date: string, level: number}[][] = []
    for (let i = 0; i < contributions.days.length; i += 7) {
      weeks.push(contributions.days.slice(i, i + 7))
    }
    return weeks
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
            <Link href="/" className="text-xs sm:text-sm font-medium text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5">
              Home
            </Link>
            <Link href="/projects" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
          </div>
          <a href="https://github.com/neeleshkr22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </motion.nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20">
        {/* Japanese Banner with Tooltip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center mb-8 sm:mb-12"
        >
          <div 
            className="relative cursor-pointer group"
            onMouseEnter={() => setShowBannerTooltip(true)}
            onMouseLeave={() => setShowBannerTooltip(false)}
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-zinc-700 group-hover:text-white transition-colors duration-300 select-none" style={{ fontFamily: 'serif' }}>
              開発者
            </h1>
            
            {/* Tooltip */}
            <AnimatePresence>
              {showBannerTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-[#1a1a1a] border border-white/10 rounded-xl p-4 min-w-[250px] shadow-2xl z-50"
                >
                  {/* Tooltip arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1a1a] border-l border-t border-white/10 rotate-45"></div>
                  
                  <div className="relative">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-2xl font-bold text-white" style={{ fontFamily: 'serif' }}>開発者</span>
                      <span className="text-gray-400 text-sm italic">/kaihatsu-sha/</span>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">NOUN</p>
                    <p className="text-gray-300 text-sm">
                      Developer; one who creates<br />and builds software.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          {/* Profile Header */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8 text-center sm:text-left">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-[3px] border-gray-700">
                <Image
                  src="/Profilepic.jpg"
                  alt="Neelesh Kumar"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: '"Domine", serif' }}>Neelesh Kumar</h1>
                <svg className="w-6 h-6" viewBox="0 0 22 22" fill="none">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"/>
                </svg>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-4" style={{ fontFamily: '"Roboto Mono", monospace' }}>20 · Engineer · Developer · Builder</p>
              <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5">
                <a href="mailto:neeleshrana22@gmail.com" className="text-gray-400 hover:text-white transition-colors" title="Email">
                  <SiGmail className="w-5 h-5" />
                </a>
                <a href="https://github.com/neeleshkr22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/neelesh-kumar-rana-a7b903290/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/neeleshkr22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Twitter">
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* About */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3" style={{ fontFamily: '"Roboto Mono", monospace' }}>About</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-mono">
              I turn ideas into production-ready applications. Whether it’s designing intuitive UIs, building solid backends, or shipping it. I enjoy owning the full development lifecycle. Focused on real-world problem solving, with an eye for clean design, performance, and reliability.
            </p>
          </motion.div>

          {/* Location & Time */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 text-sm sm:text-base text-gray-500 font-mono">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-3 h-3" />
              <span>Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="w-3 h-3" />
              <span>{time}</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-base sm:text-lg font-bold text-white mb-6" style={{ fontFamily: '"Roboto Mono", monospace' }}>
            Work Experience
          </motion.h2>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <button
                  onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                  className="w-full px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 flex-wrap">
                        <span className="text-white font-medium font-mono text-xs sm:text-sm">{exp.company}</span>
                        <span className="text-gray-500 font-mono text-xs sm:text-sm">/ {exp.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-xs font-mono hidden sm:block">{exp.period}</span>
                    {expandedExp === exp.id ? (
                      <FaChevronUp className="w-3 h-3 text-gray-500" />
                    ) : (
                      <FaChevronDown className="w-3 h-3 text-gray-500" />
                    )}
                  </div>
                </button>

                {expandedExp === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-3 sm:px-5 pb-4 sm:pb-5"
                  >
                    <ul className="space-y-2 ml-6 sm:ml-12">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="text-gray-400 text-xs sm:text-sm font-mono flex items-start gap-2">
                          <span className="text-gray-600 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-base sm:text-lg font-bold text-white mb-6" style={{ fontFamily: '"Roboto Mono", monospace' }}>
            Projects
          </motion.h2>

          <div className="space-y-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-32 sm:h-auto overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={120}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold font-mono text-base sm:text-lg">{project.title}</h3>
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                            Live
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                          >
                            <FaGithub className="w-3 h-3" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm font-mono mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-6 text-center">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-all font-mono group"
            >
              Show All Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-base sm:text-lg font-bold text-white mb-6" style={{ fontFamily: '"Roboto Mono", monospace' }}>
            Skills
          </motion.h2>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            {skills.map((skill) => {
              const IconComponent = skill.icon
              return (
                <div 
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] border border-white/10 rounded-lg hover:bg-white/[0.05] hover:border-white/20 transition-all"
                >
                  <IconComponent className="w-4 h-4" style={{ color: skill.color }} />
                  <span className="text-gray-300 text-sm font-mono">{skill.name}</span>
                </div>
              )
            })}
          </motion.div>
        </motion.section>

        {/* GitHub Activity Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-base sm:text-lg font-bold text-white mb-6" style={{ fontFamily: '"Roboto Mono", monospace' }}>
            GitHub Activity
          </motion.h2>

          <motion.div variants={fadeInUp}>
            {/* Month labels - hidden on mobile */}
            <div className="hidden sm:flex mb-2 text-xs text-gray-500 pl-8">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <div key={month} className="flex-1 text-center">{month}</div>
              ))}
            </div>

            {/* Contribution grid - scrollable on mobile, full width on desktop */}
            <div className="flex gap-[2px] overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
              {/* Weeks */}
              {contributions.days.length > 0 ? (
                getWeeks().map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[2px] flex-shrink-0 sm:flex-1">
                    {week.map((day, dayIdx) => (
                      <div
                        key={dayIdx}
                        title={`${day.count} contributions on ${day.date}`}
                        className={`w-[8px] h-[8px] sm:w-full sm:aspect-square sm:max-w-[12px] rounded-[2px] cursor-pointer transition-all hover:ring-1 hover:ring-white/50 ${
                          day.level === 0 ? 'bg-[#1a1a1a]' :
                          day.level === 1 ? 'bg-[#3a3a3a]' :
                          day.level === 2 ? 'bg-[#5a5a5a]' :
                          day.level === 3 ? 'bg-[#8a8a8a]' :
                          'bg-[#ffffff]'
                        }`}
                      />
                    ))}
                  </div>
                ))
              ) : (
                // Placeholder while loading
                Array.from({ length: 52 }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[2px] flex-shrink-0 sm:flex-1">
                    {Array.from({ length: 7 }).map((_, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="w-[8px] h-[8px] sm:w-full sm:aspect-square sm:max-w-[12px] rounded-[2px] bg-[#1a1a1a] animate-pulse"
                      />
                    ))}
                  </div>
                ))
              )}
            </div>

            {/* Legend and stats */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-2">
              <p className="text-xs sm:text-sm text-gray-400 font-mono text-center sm:text-left">
                {contributions.total > 0 ? `${contributions.total} contributions in the last year` : 'Loading contributions...'}
              </p>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs text-gray-500 font-mono">Less</span>
                <div className="flex gap-1">
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#1a1a1a]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#3a3a3a]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#5a5a5a]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#8a8a8a]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#ffffff]"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">More</span>
              </div>
            </div>

            {/* Follow link */}
            <div className="mt-4 text-right">
              <a 
                href="https://github.com/neeleshkr22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors font-mono inline-flex items-center gap-2"
              >
                Follow me on GitHub
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mb-16 py-12 sm:py-16"
        >
          {/* Corner plus decorations */}
          <div className="absolute top-0 left-0 text-gray-600 text-xl">+</div>
          <div className="absolute top-0 right-0 text-gray-600 text-xl">+</div>
          <div className="absolute bottom-0 left-0 text-gray-600 text-xl">+</div>
          <div className="absolute bottom-0 right-0 text-gray-600 text-xl">+</div>
          
          {/* Dashed border lines */}
          <div className="absolute top-2 left-4 right-4 border-t border-dashed border-gray-800"></div>
          <div className="absolute bottom-2 left-4 right-4 border-t border-dashed border-gray-800"></div>
          <div className="absolute left-2 top-4 bottom-4 border-l border-dashed border-gray-800"></div>
          <div className="absolute right-2 top-4 bottom-4 border-l border-dashed border-gray-800"></div>

          <div className="text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: '"Roboto Mono", monospace' }}>Let&apos;s work together</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
              Have a project in mind? Let&apos;s create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a 
                href="mailto:neeleshrana22@gmail.com"
                className="w-full sm:w-auto px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors font-mono shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
              >
                Email Me
              </a>
              <a 
                href="/neelesh.pdf"
                target="_blank"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#1a1a1a] border border-gray-700 rounded-full text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-colors font-mono flex items-center justify-center gap-2 group shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
              >
                Resume
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
            <div className="text-center sm:text-left">
              Designed & Developed by <span className="text-white">Neelesh</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>
              © 2025. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-3 h-3" />
              <span>Delhi, India · {time}</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
