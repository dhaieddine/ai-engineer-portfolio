"use client"

import { motion } from "framer-motion"
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiMongodb,
  SiDocker,
  SiApacheairflow,
  SiApachespark,
  SiMysql
} from "react-icons/si"

const technologies = [
  { name: "Python", icon: SiPython, className: "text-yellow-400" },
  { name: "PyTorch", icon: SiPytorch, className: "text-orange-500" },
  { name: "TensorFlow", icon: SiTensorflow, className: "text-orange-400" },
  { name: "SQL", icon: SiMysql, className: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, className: "text-green-500" },
  { name: "Docker", icon: SiDocker, className: "text-blue-500" },
  { name: "Airflow", icon: SiApacheairflow, className: "text-cyan-400" },
  { name: "Spark", icon: SiApachespark, className: "text-orange-500" },
]

export function TechStack() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl py-4 px-6 overflow-hidden"
        >
          <div className="flex items-center justify-start md:justify-center gap-8 md:gap-10 overflow-x-auto scrollbar-hide pb-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-2 flex-shrink-0 cursor-pointer group"
                >
                <tech.icon
                  className={`w-6 h-6 ${tech.className} 
                  group-hover:scale-125 transition-transform duration-300`}
                />
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
