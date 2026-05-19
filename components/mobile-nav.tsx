"use client"

import { motion } from "framer-motion"
import { Home, FolderOpen, Code2, Mail } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "#home", active: true },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function MobileNav() {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50"
    >
      <div className="glass rounded-2xl px-4 py-3 neon-glow">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                item.active
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
              {item.active && (
                <motion.div
                  layoutId="activeMobileNav"
                  className="absolute -bottom-1 w-1 h-1 bg-purple-400 rounded-full"
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
