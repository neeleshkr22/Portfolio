"use client"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { FaTwitter, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa"
import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create the mailto link
    const mailtoLink = `mailto:neeleshrana22@gmail.com?subject=Message from ${name}&body=Email: ${email}%0A%0A${message}`;
    
    // Open the user's email client with the pre-filled details
    window.location.href = mailtoLink;
  };
  return (
    <main className="min-h-screen bg-black text-amber-500 font-mono p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
      <div className="border border-amber-700 mb-6 overflow-hidden"
          style={{
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.7)", // amber-500 glow
          }}>
          <Image
            src="/connect.jpg"
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
              words={['> contact me  ']}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>

          <div className="mb-4">
            <p className="terminal-line">// Let's connect!</p>
          </div>

          <div className="mb-4">
            <p className="terminal-line">
              Feel free to reach out if you want to collaborate on a project, have a question, or just want to say hi!
            </p>
          </div>

          <div className="mb-6">
            <p className="terminal-line">// Social</p>
            <ul className="ml-2 sm:ml-6 mt-2">
              <li className="mb-2 flex items-center gap-2 text-sm sm:text-base break-all sm:break-normal">
                <FaTwitter className="text-blue-400 flex-shrink-0" />{" "}
                <a href="https://x.com/neeleshkr22" className="text-blue-400 hover:underline">
                  @neeleshkr22
                </a>{" "}
                <span className="hidden sm:inline">: X (formerly Twitter)</span>
              </li>
              <li className="mb-2 flex items-center gap-2 text-sm sm:text-base break-all sm:break-normal">
                <FaDiscord className="text-blue-400 flex-shrink-0" />{" "}
                <a href="https://discord.gg/R9bBk9vzda" className="text-blue-400 hover:underline">
                  @i.neelesh
                </a>{" "}
                <span className="hidden sm:inline">: Discord</span>
              </li>
              
              <li className="mb-2 flex items-center gap-2 text-sm sm:text-base break-all sm:break-normal">
                <FaLinkedin className="text-blue-400 flex-shrink-0" />{" "}
                <a href="https://www.linkedin.com/in/neelesh-kumar-rana-a7b903290/" className="text-blue-400 hover:underline">
                  LinkedIn
                </a>{" "}
                
              </li>
              <li className="mb-2 flex items-center gap-2 text-sm sm:text-base break-all sm:break-normal">
                <FaGithub className="text-blue-400 flex-shrink-0" />{" "}
                <a href="https://github.com/neeleshkr22" className="text-blue-400 hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="terminal-line">// Or send me a message directly</p>
          </div>

          <div className="mb-4">
          <form className="ml-2 sm:ml-6 mt-2 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm sm:text-base">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 md:w-2/3 bg-gray-900 border border-amber-700 text-amber-500 p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm sm:text-base">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 md:w-2/3 bg-gray-900 border border-amber-700 text-amber-500 p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm sm:text-base">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 md:w-2/3 bg-gray-900 border border-amber-700 text-amber-500 p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-amber-700 hover:bg-amber-600 text-black font-bold py-2 px-4 text-sm sm:text-base transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        </Terminal>
      </div>
    </main>
  )
}
