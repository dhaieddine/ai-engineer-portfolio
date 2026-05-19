"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3 } from "lucide-react"
import Link from "next/link"
import { SiPython, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si"

const technologies = [
  { name: "Python", icon: SiPython },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Power BI", icon: BarChart3 },
]

const workflows = [
  { step: "01", title: "Data Exploration", description: "Understanding data distributions, patterns, and identifying anomalies" },
  { step: "02", title: "Feature Engineering", description: "Creating meaningful features that enhance model performance" },
  { step: "03", title: "Statistical Modeling", description: "Applying advanced statistical techniques to extract insights" },
  { step: "04", title: "Visualization & Insights", description: "Communicating findings through compelling data visualizations" },
]

const projects = [
  { title: "Data Job Market Intelligence Platform", description: "Comprehensive analysis of Data job market trends in France using statistical modeling", tags: ["Python", "Pandas", "Data Analysis"] },
  { title: "Predictive Analytics System", description: "Advanced forecasting and predictive modeling for business intelligence", tags: ["Scikit-learn", "Statistical Modeling", "Power BI"] },
]

export default function DataSciencePage() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-4xl w-full mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
              <div className="inline-block mb-4">
                <motion.div className="px-4 py-2 rounded-full glass border border-cyan-500/30" whileHover={{ scale: 1.05 }}>
                  <span className="text-sm font-medium text-cyan-300">Data Science</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Data Science</motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">Transforming raw data into actionable insights</motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#projects">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors">View Projects</motion.button>
              </Link>
              <Link href="/#contact">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors flex items-center gap-2">Contact Me <ArrowRight className="w-4 h-4" /></motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-8 md:p-12 border border-cyan-500/15">
              <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">Data Science bridges the gap between raw data and actionable business intelligence. By combining statistical rigor with machine learning expertise, I transform complex datasets into meaningful insights that drive informed decision-making.</p>
              <p className="text-gray-300 text-lg leading-relaxed">My approach emphasizes both technical accuracy and clear communication. I specialize in exploratory data analysis, feature engineering, predictive modeling, and compelling visualizations that tell the data&apos;s story to stakeholders at all levels.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack & Expertise</motion.h2>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {technologies.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants} whileHover={{ y: -8, scale: 1.05 }} className="glass rounded-2xl p-6 border border-cyan-500/15 flex flex-col items-center justify-center hover:border-cyan-500/40 transition-colors">
                  <tech.icon className="w-12 h-12 text-cyan-400 mb-3" />
                  <span className="text-sm font-medium text-gray-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-white">Core Topics</h3>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {["Data Analysis", "Statistical Modeling", "Data Visualization", "Feature Engineering", "Predictive Analytics", "Machine Learning Workflows", "A/B Testing", "Data Mining", "Hypothesis Testing", "Time Series Analysis", "Cluster Analysis", "Regression Modeling"].map((topic) => (
                  <motion.div key={topic} variants={itemVariants} whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-sm font-medium text-cyan-300 hover:bg-cyan-500/20 transition-colors cursor-default">{topic}</motion.div>
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
                <motion.div key={workflow.step} variants={itemVariants} whileHover={{ y: -8 }} className="glass rounded-2xl p-8 border border-cyan-500/15 hover:border-cyan-500/40 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-cyan-400/30 group-hover:text-cyan-400/60 transition-colors">{workflow.step}</div>
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
                <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8 }} className="glass rounded-2xl p-8 border border-cyan-500/15 hover:border-cyan-500/40 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-12 border border-cyan-500/15 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Data Insights?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Let&apos;s work together to transform your data into strategic advantage</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#projects">
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors">View All Projects</motion.button>
                </Link>
                <Link href="/#contact">
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors flex items-center gap-2 justify-center">Get in Touch <ArrowRight className="w-4 h-4" /></motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
