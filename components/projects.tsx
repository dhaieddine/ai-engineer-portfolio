"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { siteLinks } from "@/lib/site-links"

const MotionLink = motion.create(Link)

const projects = [
  {
    title: "Hybrid Medical AI System for Cancer Detection",
    description:
      "Hybrid CNN + CBAM + Vision Transformer architecture for multi-task cancer detection and classification from MRI and X-Ray imaging.",
    image: "/projects/medical-ai.jpg",
    tags: ["PyTorch", "EfficientNet", "Vision Transformer", "CBAM"],
    link: "/projects/medical-ai",
  },
  {
    title: "Data Job Market Intelligence Platform",
    description:
      "End-to-end platform for collecting, enriching and analyzing Data job offers in France using APIs, scraping, MongoDB, FastAPI and Streamlit.",
    image: "/projects/job-intelligent.jpg",
    tags: ["MongoDB", "FastAPI", "Streamlit", "Playwright"],
    link: "/projects/job-intelligent",
  },
  {
    title: "HomeSmart AI – Plateforme Intelligente de Recherche de Logement",
    description:
      "Plateforme IA complète pour agrégation multi-plateforme, recommandation intelligente, prédiction ML des chances d'acceptation, génération PDF de dossiers et assistant IA conversationnel.",
    image: "/projects/homesmart-ai.png",
    tags: ["FastAPI", "React", "PostgreSQL", "Elasticsearch", "XGBoost"],
    link: "/projects/homesmart-ai",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const content = (
    <>
      <motion.div className="relative h-48 overflow-hidden rounded-2xl m-3">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg"
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div className="glass rounded-xl p-2">
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: index * 0.1, duration: 0.5 },
    whileHover: { y: -10 },
    className:
      "glass glass-hover rounded-2xl overflow-hidden group cursor-pointer block",
  }

  if (project.link.startsWith("/")) {
    return (
      <MotionLink href={project.link} {...motionProps}>
        {content}
      </MotionLink>
    )
  }

  return <motion.div {...motionProps}>{content}</motion.div>
}

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.a
          href={siteLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden flex items-center justify-center gap-2 mt-8 text-purple-400 hover:text-purple-300 text-sm font-medium"
        >
          View all projects
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  )
}
