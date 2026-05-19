"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SiPytorch, SiTensorflow, SiPython, SiOpenai, SiScikitlearn } from "react-icons/si"

const technologies = [
  { name: "PyTorch", icon: SiPytorch },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Python", icon: SiPython },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Scikit-learn", icon: SiScikitlearn },
]

const workflows = [
  { step: "01", title: "Problem Analysis", description: "Understanding the domain, data requirements, and performance metrics" },
  { step: "02", title: "Model Architecture", description: "Designing hybrid CNN + Transformer systems with attention mechanisms" },
  { step: "03", title: "Training & Optimization", description: "Multi-task learning with advanced optimization techniques" },
  { step: "04", title: "Deployment & Inference", description: "Production-ready model deployment with explainability features" },
]

const projects = [
  { title: "Medical AI System for Cancer Detection", description: "Hybrid CNN + CBAM + Vision Transformer for MRI and X-Ray analysis", tags: ["PyTorch", "EfficientNet", "Vision Transformer"] },
  { title: "AI-Powered Analytics Platform", description: "Real-time intelligent data analysis with deep learning pipelines", tags: ["TensorFlow", "Python", "Data Processing"] },
]

export default function AIEngineeringPage() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-4xl w-full mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
              <div className="inline-block mb-4">
                <motion.div className="px-4 py-2 rounded-full glass border border-purple-500/30" whileHover={{ scale: 1.05 }}>
                  <span className="text-sm font-medium text-purple-300">AI Engineering</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">AI Engineering</motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">Building intelligent systems powered by deep learning and computer vision</motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#projects">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-purple-500/20 border border-purple-500/50 text-purple-300 font-medium hover:bg-purple-500/30 transition-colors">View Projects</motion.button>
              </Link>
              <Link href="/#contact">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">Contact Me <ArrowRight className="w-4 h-4" /></motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-8 md:p-12 border border-purple-500/15">
              <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">AI Engineering combines cutting-edge deep learning techniques with practical system design to create intelligent solutions that solve real-world problems. My expertise spans hybrid architectures that merge CNNs with Vision Transformers, enabling sophisticated multi-task learning for specialized domains like medical image analysis.</p>
              <p className="text-gray-300 text-lg leading-relaxed">I focus on building explainable, production-ready AI systems that not only achieve high accuracy but also provide insights into their decision-making processes. This approach ensures trustworthiness and adaptability in critical applications.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack & Expertise</motion.h2>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {technologies.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants} whileHover={{ y: -8, scale: 1.05 }} className="glass rounded-2xl p-6 border border-purple-500/15 flex flex-col items-center justify-center hover:border-purple-500/40 transition-colors">
                  <tech.icon className="w-12 h-12 text-purple-400 mb-3" />
                  <span className="text-sm font-medium text-gray-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-white">Core Topics</h3>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {["Deep Learning", "Computer Vision", "Vision Transformers", "CBAM Architecture", "Medical AI", "Explainable AI", "Attention Mechanisms", "Multi-task Learning", "Model Optimization", "EfficientNet", "CNN Architectures", "Transfer Learning"].map((topic) => (
                  <motion.div key={topic} variants={itemVariants} whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-300 hover:bg-purple-500/20 transition-colors cursor-default">{topic}</motion.div>
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
                <motion.div key={workflow.step} variants={itemVariants} whileHover={{ y: -8 }} className="glass rounded-2xl p-8 border border-purple-500/15 hover:border-purple-500/40 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-purple-400/30 group-hover:text-purple-400/60 transition-colors">{workflow.step}</div>
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
                <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8 }} className="glass rounded-2xl p-8 border border-purple-500/15 hover:border-purple-500/40 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-12 border border-purple-500/15 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Intelligent?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Let&apos;s collaborate on your next AI engineering project</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#projects">
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-purple-500/20 border border-purple-500/50 text-purple-300 font-medium hover:bg-purple-500/30 transition-colors">View All Projects</motion.button>
                </Link>
                <Link href="/#contact">
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors flex items-center gap-2 justify-center">Get in Touch <ArrowRight className="w-4 h-4" /></motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
