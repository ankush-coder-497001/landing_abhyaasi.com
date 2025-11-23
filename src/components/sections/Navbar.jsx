
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ scrollY }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const APP_URL = import.meta.env.VITE_APP_URL

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full px-4 md:px-0 ${isScrolled
        ? 'md:max-w-2xl md:rounded-2xl md:bg-background/80 md:backdrop-blur-xl md:border md:border-border md:shadow-lg'
        : 'md:max-w-4xl'
        }`}
    >
      <div className={`flex items-center justify-between px-4 md:px-6 py-3 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border border-border rounded-2xl' : ''
        } md:bg-transparent md:border-0 md:backdrop-blur-0`}>
        {/* Logo */}
        <div className="flex  items-center gap-2">
          {/* <div className="w-2 h-2 bg-accent rounded-full" /> */}
          <span className="text-xs font-semibold text-foreground tracking-wider">Abhyaasi.com</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 text-xs">
          <a href="#learn" className="px-3 py-1.5 text-muted-foreground hover:text-accent transition-colors cursor-pointer ">
            Home
          </a>
          <a href="#build" className="px-3 py-1.5 text-muted-foreground hover:text-accent transition-colors cursor-pointer ">
            Courses
          </a>
          <a href="#achieve" className="px-3 py-1.5 text-muted-foreground hover:text-accent transition-colors cursor-pointer ">
            Dashboard
          </a>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block px-4 py-1.5 bg-accent text-accent-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer ">
          Start Free
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col p-4 gap-3">
            <a href="#learn" className="px-3 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-card rounded-lg transition-colors">
              Learn
            </a>
            <a href="#build" className="px-3 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-card rounded-lg transition-colors">
              Build
            </a>
            <a href="#achieve" className="px-3 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-card rounded-lg transition-colors">
              Achieve
            </a>
            <button className="w-full mt-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
