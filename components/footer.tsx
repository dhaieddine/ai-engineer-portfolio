"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { siteLinks } from "@/lib/site-links"

const socialLinks = [
  { icon: Github, href: siteLinks.github, label: "GitHub" },
  { icon: Linkedin, href: siteLinks.linkedin, label: "LinkedIn" },
  { icon: Mail, href: siteLinks.gmailCompose, label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-12 px-4 mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let&apos;s work together
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <a
                href={siteLinks.gmailCompose}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover rounded-xl p-3 text-gray-400 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <a
                href={siteLinks.mailto}
                className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
              >
                {siteLinks.email}
              </a>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8">
            <motion.div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} Dhia Eddine Sadli. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-purple-400" /> and lots of coffee
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="h-20 md:h-0" />
    </footer>
  )
}
