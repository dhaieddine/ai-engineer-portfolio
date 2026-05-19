"use client"

import { motion } from "framer-motion"
import { ArrowRight, Brain, BarChart3, Database } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Building predictive models and intelligent systems using deep learning and ML techniques.",
    gradient: "from-purple-500/20 to-violet-500/10",
    link: "/services/ai-engineering",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Extracting insights from data through analysis, visualization and statistical modeling.",
    gradient: "from-cyan-500 to-blue-500",
    link: "/services/data-science",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Designing and building scalable data pipelines and robust data infrastructure.",
    gradient: "from-pink-500 to-rose-500",
    link: "/services/data-engineering",
  },
]

export function Services() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          What I do?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              href={service.link}
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="glass glass-hover rounded-3xl p-6 group cursor-pointer relative overflow-hidden block"
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                    className="
                    w-12 h-12
                    rounded-3xl
                    bg-purple-500/10
                    border border-purple-500/20
                    flex items-center justify-center
                    shadow-[0_0_25px_rgba(168,85,247,0.15)]
                    backdrop-blur-xl
                  "
                  >
                  <service.icon className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="relative text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow */}
              <motion.div
                className="relative flex items-center gap-2 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
