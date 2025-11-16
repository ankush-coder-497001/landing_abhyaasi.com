
import { useEffect, useRef, useState } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { LampContainer } from "../ui/lamp";


const COURSES = [
  { id: 1, name: 'Web Development with React', category: 'Frontend', level: 'Beginner' },
  { id: 2, name: 'Advanced Node.js & Express', category: 'Backend', level: 'Advanced' },
  { id: 3, name: 'Full Stack MERN', category: 'Full Stack', level: 'Intermediate' },
  { id: 4, name: 'Python for Data Science', category: 'Data Science', level: 'Beginner' },
  { id: 5, name: 'Mobile App Development', category: 'Mobile', level: 'Intermediate' },
  { id: 6, name: 'Cloud & DevOps Essentials', category: 'DevOps', level: 'Advanced' },
]

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchRef = useRef(null)

  const filteredCourses = COURSES.filter(course =>
    course.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    course.category.toLowerCase().includes(searchValue.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false)
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchOpen])

  return (
    <section className="relative w-screen h-screen bg-background overflow-hidden">
      <div className="px-4 md:px-6 w-full h-full flex items-center justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-6xl">
          {/* Left Column - Text Content */}
          <div className="space-y-3 animate-fadeInUp">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-2.5xl lg:text-3xl font-bold text-foreground leading-tight">
                Learn by Building<br />
                <span className="text-accent">Real Projects</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xs md:text-xs lg:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Get AI-powered guidance, build real-world applications, and master interview questions. Everything you need to become a developer—completely free.
            </p>

            {/* CTA Button */}
            <div className="pt-0.5">
              <button className="group inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-accent text-accent-foreground rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all hover:gap-2.5 active:scale-95">
                Start Learning Free
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div ref={searchRef} className="relative w-full max-w-xs mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[30%] lg:-translate-y-1/2 lg:z-30 animate-fadeInScale">
            <div className="flex items-center group/input">
              <Search className="absolute left-2.5 w-3 h-3 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                  setIsSearchOpen(true)
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="w-full pl-8 pr-7 py-2 text-xs bg-white border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all shadow-md hover:shadow-lg"
              />
              {searchValue && (
                <button
                  onClick={() => {
                    setSearchValue('')
                    setIsSearchOpen(false)
                  }}
                  className="absolute right-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Search Results */}
            {isSearchOpen && (
              <div className="absolute top-full mt-1.5 w-full bg-white border border-border rounded-lg shadow-lg overflow-hidden z-50 max-h-40 overflow-y-auto">
                {filteredCourses.length > 0 ? (
                  <div className="divide-y divide-border/30">
                    {filteredCourses.map((course) => (
                      <button
                        key={course.id}
                        className="w-full text-left px-2.5 py-1.5 hover:bg-card transition-colors flex items-center justify-between group text-xs"
                      >
                        <div>
                          <p className="font-medium text-foreground group-hover:text-accent transition-colors text-xs">
                            {course.name}
                          </p>
                          <p className="text-[9px] text-muted-foreground mt-0.5">
                            {course.category} • {course.level}
                          </p>
                        </div>
                        <ArrowRight className="w-2 h-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-2.5 py-3 text-center">
                    <p className="text-xs text-muted-foreground">No courses found</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Screenshot Frames */}
          <div className="relative h-40 hidden lg:block animate-fadeInScale [animation-delay:200ms]">
            {/* Background frame 1 - Blue subtle frame */}
            <div className="absolute top-0 right-0 w-60 h-64 bg-accent/5 border border-accent/20 rounded-lg shadow-lg overflow-hidden transform translate-x-4 translate-y-2">
              <div className="w-full h-full bg-linear-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-accent/30 rounded-lg mx-auto mb-2" />
                  <p className="text-[10px] text-muted-foreground font-medium">Platform Interface</p>
                </div>
              </div>
            </div>

            {/* Middle frame - White foreground frame */}
            <div className="absolute bottom-18 right-18 w-54 h-58 bg-white border border-border rounded-lg shadow-xl overflow-hidden">
              <div className="w-full h-full bg-card p-4 space-y-3">
                <div className="space-y-1.5">
                  <div className="h-2 bg-border rounded-full w-2/3" />
                  <div className="h-1.5 bg-border rounded-full w-1/2" />
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-6 bg-accent/20 rounded-lg" />
                  <div className="h-6 bg-accent/10 rounded-lg" />
                  <div className="h-6 bg-accent/15 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Top frame - Dark accent frame */}
            <div className="absolute top-4 right-50 w-50 h-54 bg-foreground/5 border border-foreground/10 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-full bg-linear-to-b from-foreground/5 to-foreground/0 flex items-end p-4">
                <div className="w-full space-y-1.5">
                  <div className="h-1.5 bg-foreground/20 rounded-full" />
                  <div className="h-1.5 bg-foreground/15 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
