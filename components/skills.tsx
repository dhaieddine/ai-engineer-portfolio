"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "TypeScript", "SQL", "PyTorch", "TensorFlow", "Keras", "FastAPI"],
  },
  {
    category: "Data & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "Transformers", "OpenCV", "Hugging Face"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Airflow", "MLflow", "DVC"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Snowflake"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, categoryIndex) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-gray-300 border border-purple-500/20 hover:border-purple-500/40 hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
