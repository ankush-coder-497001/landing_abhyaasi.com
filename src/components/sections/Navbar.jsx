
import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar({ scrollY }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const APP_URL = import.meta.env.VITE_APP_URL

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled
        ? 'bg-white/80 border-b border-border shadow-sm'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <span className="text-white font-bold text-xs md:text-sm">A</span>
            </div>
            <span className="text-xs md:text-sm font-bold text-foreground tracking-tight hidden sm:inline-block">
              Abhyaasi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-xs md:text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a onClick={() => window.open(`${APP_URL}/courses`, '_blank')} className="text-xs md:text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 cursor-pointer relative group">
              Courses
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a onClick={() => window.open(`${APP_URL}/dashboard`, '_blank')} className="text-xs md:text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 cursor-pointer relative group">
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Desktop CTA Button */}
          <button onClick={() => {
            window.open(`${APP_URL}`, '_blank')
          }} className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-xs md:text-sm hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
            Start Free
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-border shadow-lg overflow-hidden animate-slideDown">
            <div className="flex flex-col p-4 gap-3 max-w-md">
              <a href="/" className="px-4 py-3 text-sm font-medium text-foreground hover:text-accent hover:bg-card/50 rounded-lg transition-all duration-200">
                Home
              </a>
              <a onClick={() => window.open(`${APP_URL}/courses`, '_blank')} className="px-4 py-3 text-sm font-medium text-foreground hover:text-accent hover:bg-card/50 rounded-lg transition-all duration-200 cursor-pointer">
                Courses
              </a>
              <a onClick={() => window.open(`${APP_URL}/dashboard`, '_blank')} className="px-4 py-3 text-sm font-medium text-foreground hover:text-accent hover:bg-card/50 rounded-lg transition-all duration-200 cursor-pointer">
                Dashboard
              </a>
              <button onClick={() => window.open(`${APP_URL}`, '_blank')} className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                Start Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
