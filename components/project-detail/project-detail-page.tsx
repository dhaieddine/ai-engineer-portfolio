"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Home,
  Mail,
} from "lucide-react"
import type { ProjectData } from "@/lib/projects-data"
import { BackgroundEffects } from "@/components/background-effects"
import { TechIcon } from "@/components/project-detail/tech-icon"

const accentStyles = {
  purple: {
    glow: "bg-purple-500/10",
    glowSecondary: "bg-violet-500/10",
    badge: "border-purple-500/30 text-purple-300",
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "text-purple-400",
    border: "border-purple-500/15 hover:border-purple-500/40",
    buttonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
    buttonSecondary:
      "bg-purple-500/20 border border-purple-500/50 text-purple-300 hover:bg-purple-500/30",
    metric: "text-purple-400",
    step: "text-purple-400/30 group-hover:text-purple-400/60",
    terminalPrompt: "text-purple-400",
    arrow: "text-purple-400",
    featureHover: "group-hover:text-purple-300",
    cursor: "bg-purple-400/80",
  },
  cyan: {
    glow: "bg-cyan-500/10",
    glowSecondary: "bg-blue-500/10",
    badge: "border-cyan-500/30 text-cyan-300",
    tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: "text-cyan-400",
    border: "border-cyan-500/15 hover:border-cyan-500/40",
    buttonPrimary: "bg-cyan-600 hover:bg-cyan-700 text-white",
    buttonSecondary:
      "bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30",
    metric: "text-cyan-400",
    step: "text-cyan-400/30 group-hover:text-cyan-400/60",
    terminalPrompt: "text-cyan-400",
    arrow: "text-cyan-400",
    featureHover: "group-hover:text-cyan-300",
    cursor: "bg-cyan-400/80",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const lineColors = {
  comment: "text-gray-500",
  keyword: "text-violet-400",
  string: "text-emerald-300",
  plain: "text-gray-300",
  indent: "text-gray-400 pl-4",
}

export function ProjectDetailPage({ project }: { project: ProjectData }) {
  const accent = accentStyles[project.accent]
  const projectTitles = {
    "medical-ai": "Medical AI System",
    "job-intelligent": "Job Intelligent Platform",
    "homesmart-ai": "HomeSmart AI Platform",
  }
  const allSlugs = ["medical-ai", "job-intelligent", "homesmart-ai"] as const
  const otherSlugs = allSlugs.filter((slug) => slug !== project.slug)
  const otherSlug = otherSlugs[0]
  const otherTitle = projectTitles[otherSlug]

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <BackgroundEffects />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto glass rounded-2xl px-4 py-3 flex items-center justify-between"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className={`text-sm font-medium ${accent.arrow} hover:opacity-80 transition-opacity`}
          >
            All Projects
          </Link>
        </motion.div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-28 pb-16 px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-6"
        >
          <div
            className={`px-4 py-2 rounded-full glass border ${accent.badge}`}
          >
            <span className="text-sm font-medium">{project.badge}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl leading-relaxed"
        >
          {project.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-3 py-1 rounded-full border ${accent.tag}`}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className={`glass rounded-3xl overflow-hidden border ${accent.border} neon-glow`}
          >
            <motion.div
              className="relative aspect-[16/9] md:aspect-[21/9] w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                }}
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
            </motion.div>
          </motion.div>
          <div
            className={`absolute -inset-4 ${accent.glow} blur-3xl rounded-full -z-10 opacity-50`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          {project.liveDemo !== "#" && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 ${accent.buttonPrimary}`}
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 ${accent.buttonSecondary}`}
            >
              GitHub Repository
              <Github className="w-4 h-4" />
            </motion.button>
          </a>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl glass glass-hover font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Overview */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Project Overview</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`glass rounded-3xl p-8 md:p-12 border ${accent.border}`}
          >
            <OverviewBlock title="Project Goal" text={project.overview.goal} />
            <OverviewBlock
              title="Real-World Problem"
              text={project.overview.problem}
            />
            <OverviewBlock
              title="Why It Matters"
              text={project.overview.why}
            />
            <OverviewBlock
              title="Architecture Summary"
              text={project.overview.architecture}
              last
            />
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle>Architecture & Pipeline</SectionTitle>

          <div className="hidden lg:flex items-center justify-between gap-2 mb-8">
            {project.architectureSteps.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className={`glass rounded-2xl p-5 border ${accent.border} flex-1 text-center group`}
                >
                  <div
                    className={`text-xs font-bold mb-2 ${accent.step}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {step.label}
                  </h3>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </motion.div>
                {i < project.architectureSteps.length - 1 && (
                  <ArrowRight
                    className={`w-5 h-5 mx-2 shrink-0 ${accent.icon} opacity-40`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden grid gap-4">
            {project.architectureSteps.map((step, i) => (
              <motion.div
                key={step.label}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`glass rounded-2xl p-6 border ${accent.border} group`}
              >
                <motion.div className="flex items-start gap-4">
                  <div className={`text-2xl font-bold ${accent.step}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {step.label}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Technologies</SectionTitle>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {project.technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`glass rounded-2xl p-6 border ${accent.border} flex flex-col items-center justify-center transition-colors`}
              >
                <TechIcon
                  iconId={tech.iconId}
                  className={`w-12 h-12 ${accent.icon} mb-3`}
                />
                <span className="text-sm font-medium text-gray-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle>Key Features</SectionTitle>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`glass rounded-2xl p-8 border ${accent.border} group cursor-default`}
              >
                <h3 className={`text-xl font-semibold text-white mb-3 transition-colors ${accent.featureHover}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Screenshots & Gallery</SectionTitle>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.gallery.map((item) => (
              <motion.div
                key={item.caption}
                variants={itemVariants}
                className="group"
              >
                <div
                  className={`glass rounded-2xl overflow-hidden border ${accent.border} neon-glow`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="p-4 text-sm text-gray-400 text-center">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Results & Metrics</SectionTitle>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {project.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                custom={index}
                className={`glass rounded-2xl p-6 md:p-8 border ${accent.border} text-center`}
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  className={`text-3xl md:text-4xl font-bold ${accent.metric} mb-2`}
                >
                  {metric.value}
                  {metric.suffix && (
                    <span className="text-lg">{metric.suffix}</span>
                  )}
                </motion.p>
                <p className="text-sm text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Terminal */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Code & Pipeline</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="code-block rounded-2xl p-6 neon-glow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-xs text-gray-500">
                  {project.terminal.filename}
                </span>
              </div>
              <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                <code>
                  {project.terminal.lines.map((line, i) => (
                    <span key={i} className={`block ${lineColors[line.type]}`}>
                      {line.text || "\u00A0"}
                    </span>
                  ))}
                </code>
              </pre>
              <div className="flex items-center gap-2 mt-4 font-mono text-sm">
                <span className={accent.terminalPrompt}>&gt;</span>
                <span className="text-zinc-500">pipeline ready</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className={`w-2 h-4 ${accent.cursor} inline-block`}
                />
              </div>
            </motion.div>
            <div
              className={`absolute -inset-4 ${accent.glow} blur-3xl rounded-full -z-10 opacity-40`}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`glass rounded-3xl p-12 border ${accent.border} text-center`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in this project?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Explore the codebase, get in touch, or discover more work from my
              portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 justify-center ${accent.buttonSecondary}`}
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </motion.button>
              </a>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 justify-center ${accent.buttonPrimary}`}
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.button>
              </Link>
              <Link href={`/projects/${otherSlug}`}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl glass glass-hover font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 justify-center"
                >
                  Explore {otherTitle}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
    >
      {children}
    </motion.h2>
  )
}

function OverviewBlock({
  title,
  text,
  last,
}: {
  title: string
  text: string
  last?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={last ? "" : "mb-8"}
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
    </motion.div>
  )
}
