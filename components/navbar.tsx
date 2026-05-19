"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Download, Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
  y: showNavbar ? 0 : -120,
  opacity: showNavbar ? 1 : 0,
}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  item.active
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {item.active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Download CV Button */}
          <motion.a
            href="#"
            className="hidden md:flex items-center gap-2 glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden glass rounded-lg p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass rounded-2xl p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center gap-2 mt-4 glass rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
