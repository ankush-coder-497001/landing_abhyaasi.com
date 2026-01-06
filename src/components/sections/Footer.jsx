
import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-border/20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/20 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-12 md:py-16">
        {/* Main Footer Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand & Built By Message */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left: Abhyaasi Branding */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Abhyaasi</p>
                <p className="text-xs text-foreground/50">Learning Platform</p>
              </div>
            </div>

            {/* Center: Built By Message */}
            <div className="text-center">
              <p className="text-xs text-foreground/60 uppercase tracking-wider mb-2">Crafted with passion</p>
              <p className="text-sm md:text-base font-bold text-foreground">
                Built by <span className="bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Ankush</span>
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/ankush-coder-497001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-foreground text-white flex items-center justify-center hover:shadow-lg hover:shadow-foreground/30 transition-all duration-300 cursor-pointer"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ankush-kumar-gupta-88b383305"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-300 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              &copy; {currentYear} Abhyaasi. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

