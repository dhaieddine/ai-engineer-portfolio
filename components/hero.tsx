"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { siteLinks } from "@/lib/site-links"

export function Hero() {
  const [command, setCommand] = useState("")
  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    const section = document.getElementById(command.toLowerCase())

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      })
    }

    setCommand("")
  }
}
  const codeContent = `class Developer {
  constructor() {
    this.name = "Dhia Eddine Sadli";
    this.role = "AI Engineer";
    this.focus = ["AI", "Data Science",
                  "Data Engineering"];
  }

  build() {
    return "Intelligent solutions
            that drive impact.";
  }
}`

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-violet-400 font-medium">Dhia Eddine Sadli</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
            >
              AI Engineer &<br />
              Data Scientist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-md"
            >
              Building{" "}
              <span className="text-violet-400 font-medium">intelligent</span>{" "}
              systems from data to deployment.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: siteLinks.github, label: "GitHub" },
                { icon: Linkedin, href: siteLinks.linkedin, label: "LinkedIn" },
                { icon: Mail, href: siteLinks.gmailCompose, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="
glass
glass-hover
rounded-2xl
p-4
text-zinc-500
hover:text-white
border
border-white/10
hover:border-violet-500/30
transition-all
duration-300
"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="code-block rounded-2xl p-6 neon-glow">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Code Content */}
              <pre className="font-mono text-sm md:text-base text-gray-300 overflow-x-auto">
                <code>
                  <span className="text-violet-400">class</span>{" "}
                  <span className="text-white">Developer</span>{" "}
                  <span className="text-gray-500">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-violet-300">constructor</span>
                  <span className="text-gray-500">()</span>{" "}
                  <span className="text-gray-500">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-zinc-400">this</span>.
                  <span className="text-purple-300">name</span> ={" "}
                  <span className="text-emerald-300">&quot;Dhia Eddine Sadli&quot;</span>;
                  {"\n"}
                  {"    "}
                  <span className="text-zinc-400">this</span>.
                  <span className="text-purple-300">role</span> ={" "}
                  <span className="text-emerald-300">&quot;AI Engineer&quot;</span>;
                  {"\n"}
                  {"    "}
                  <span className="text-zinc-400">this</span>.
                  <span className="text-purple-300">focus</span> = [
                  <span className="text-emerald-300">&quot;AI&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Data Science&quot;</span>,
                  {"\n"}
                  {"                  "}
                  <span className="text-emerald-300">&quot;Data Engineering&quot;</span>];
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">{"}"}</span>
                  {"\n\n"}
                  {"  "}
                  <span className="text-violet-300">build</span>
                  <span className="text-gray-500">()</span>{" "}
                  <span className="text-gray-500">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-violet-400">return</span>{" "}
                  <span className="text-emerald-300">&quot;Intelligent solutions</span>
                  {"\n"}
                  {"            "}
                  <span className="text-emerald-300">that drive impact.&quot;</span>;
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">{"}"}</span>
                  {"\n"}
                  <span className="text-gray-500">{"}"}</span>
                </code>
              </pre>
              

              {/* Terminal Cursor */}
              <div className="flex items-center gap-2 mt-4 font-mono text-sm">
                <span className="text-purple-400">&gt;</span>

                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="type a command..."
                  className="
                  bg-transparent
                  outline-none
                  border-none
                  text-zinc-300
                  placeholder:text-zinc-600
                  w-full
                  "
                />
              </div>
            </div>

            {/* Floating Glow Effect */}
            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
