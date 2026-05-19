"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SiMongodb, SiPostgresql, SiFastapi, SiApacheairflow, SiApachespark } from "react-icons/si"

const technologies = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Airflow", icon: SiApacheairflow },
  { name: "Apache Spark", icon: SiApachespark },
]

const workflows = [
  { step: "01", title: "Requirements Analysis", description: "Understanding data sources, volume, velocity, and infrastructure requirements" },
  { step: "02", title: "Architecture Design", description: "Building scalable, cloud-ready data architectures with proper orchestration" },
  { step: "03", title: "Pipeline Development", description: "Creating robust ETL/ELT pipelines with error handling and monitoring" },
  { step: "04", title: "Optimization & Scaling", description: "Ensuring performance at scale with distributed processing and caching" },
]

const projects = [
  { title: "Data Job Market Intelligence Pipeline", description: "End-to-end ETL system for job data collection, enrichment, and storage using MongoDB and FastAPI", tags: ["MongoDB", "FastAPI", "ETL"] },
  { title: "Real-time Analytics Platform", description: "Scalable data pipeline for processing and analyzing streaming data with Apache Spark", tags: ["Apache Spark", "PostgreSQL", "Real-time Ingestion"] },
]

export default function DataEngineeringPage() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-4xl w-full mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
              <div className="inline-block mb-4">
                <motion.div className="px-4 py-2 rounded-full glass border border-pink-500/30" whileHover={{ scale: 1.05 }}>
                  <span className="text-sm font-medium text-pink-300">Data Engineering</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Data Engineering</motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">Designing scalable pipelines and modern data infrastructures</motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#projects">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-pink-500/20 border border-pink-500/50 text-pink-300 font-medium hover:bg-pink-500/30 transition-colors">View Projects</motion.button>
              </Link>
              <Link href="/#contact">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors flex items-center gap-2">Contact Me <ArrowRight className="w-4 h-4" /></motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-8 md:p-12 border border-pink-500/15">
              <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">Data Engineering is the backbone of modern data-driven organizations. I design and build scalable, resilient data pipelines that reliably move, transform, and store data at any scale. My expertise covers the full stack: from data ingestion and ETL/ELT processes to distributed processing and cloud-ready architectures.</p>
              <p className="text-gray-300 text-lg leading-relaxed">I focus on creating systems that are not only performant but also maintainable and observable. Proper orchestration, monitoring, and error handling ensure that data flows smoothly through your infrastructure, enabling real-time analytics and insights.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack & Expertise</motion.h2>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {technologies.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants} whileHover={{ y: -8, scale: 1.05 }} className="glass rounded-2xl p-6 border border-pink-500/15 flex flex-col items-center justify-center hover:border-pink-500/40 transition-colors">
                  <tech.icon className="w-12 h-12 text-pink-400 mb-3" />
                  <span className="text-sm font-medium text-gray-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-white">Core Topics</h3>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {["ETL/ELT", "Data Pipelines", "API Design", "Orchestration", "Distributed Processing", "Real-time Ingestion", "Data Quality", "Monitoring & Observability", "Schema Management", "Cloud Architecture", "Data Warehousing", "Scalable Systems"].map((topic) => (
                  <motion.div key={topic} variants={itemVariants} whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-sm font-medium text-pink-300 hover:bg-pink-500/20 transition-colors cursor-default">{topic}</motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">My Process</motion.h2>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
              {workflows.map((workflow) => (
                <motion.div key={workflow.step} variants={itemVariants} whileHover={{ y: -8 }} className="glass rounded-2xl p-8 border border-pink-500/15 hover:border-pink-500/40 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-pink-400/30 group-hover:text-pink-400/60 transition-colors">{workflow.step}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{workflow.title}</h3>
                      <p className="text-gray-400 text-sm">{workflow.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</motion.h2>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8 }} className="glass rounded-2xl p-8 border border-pink-500/15 hover:border-pink-500/40 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-300 border border-pink-500/20">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-12 border border-pink-500/15 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Scalable Data Systems?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Let&apos;s design and implement the data infrastructure your business needs</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#projects">
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-pink-500/20 border border-pink-500/50 text-pink-300 font-medium hover:bg-pink-500/30 transition-colors">View All Projects</motion.button>
                </Link>
                <Link href="/#contact">
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors flex items-center gap-2 justify-center">Get in Touch <ArrowRight className="w-4 h-4" /></motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
