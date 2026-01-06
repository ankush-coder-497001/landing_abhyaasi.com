
import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Search, X, ArrowRight, Sparkles } from 'lucide-react'
import { LampContainer } from "../ui/lamp"
import { getAllCourses } from '../../../api_services/course.svc'

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchRef = useRef(null)

  // Fetch courses using React Query
  const { data: coursesData, isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: getAllCourses,
  })

  // Get courses array - handle different response formats
  const courses = coursesData?.courses || coursesData?.data || coursesData || []

  const filteredCourses = courses.filter(course =>
    course?.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
    course?.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
    course?.slug?.toLowerCase().includes(searchValue.toLowerCase())
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

  const handleCourseClick = (courseId) => {
    setIsSearchOpen(false);
    setSearchValue('');

    const rawUrl = import.meta.env.VITE_APP_URL || 'http://localhost:5173/';
    const appUrl = rawUrl.replace(/\/+$/, ""); // remove trailing slashes

    window.open(`${appUrl}/course-details/${courseId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-white overflow-hidden pt-16 md:pt-20 pb-12 md:pb-16">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12">
          {/* Left Column - Premium Text Content */}
          <div className="space-y-6 animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700">Learn, Build, Achieve</span>
            </div>

            {/* Premium Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                Structured Learning Path
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-transparent bg-clip-text">
                  From Basics to Career
                </span>
              </h1>

              {/* Premium Description */}
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
                Master programming through modular, hands-on learning. Get AI-powered doubt solving, build real projects, and ace interviews—all on one platform. Designed for Tier-3 students and self-learners.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-5 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium text-foreground/60">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium text-foreground/60">Lifetime access</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => window.open(`${import.meta.env.VITE_APP_URL}`, '_blank')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-sm shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.open(`${import.meta.env.VITE_APP_URL}/courses`, '_blank')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground/20 text-foreground rounded-lg font-bold text-sm hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Column - Premium Search & Visual */}
          <div className="relative space-y-6 animate-fadeInScale [animation-delay:200ms]">
            {/* Premium Search Bar */}
            <div ref={searchRef} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl blur opacity-30" />
              <div className="relative bg-white rounded-2xl p-1.5">
                <div className="flex items-center px-5 py-4 rounded-xl bg-white">
                  <Search className="w-5 h-5 text-foreground/40 mr-3" />
                  <input
                    type="text"
                    placeholder="Search 10+ premium courses..."
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value)
                      setIsSearchOpen(true)
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    className="flex-1 bg-transparent text-base text-foreground placeholder:text-foreground/40 focus:outline-none font-medium"
                  />
                  {searchValue && (
                    <button
                      onClick={() => {
                        setSearchValue('')
                        setIsSearchOpen(false)
                      }}
                      className="p-2 text-foreground/40 hover:text-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Premium Search Results */}
                {isSearchOpen && (
                  <div className="absolute top-full mt-3 left-0 right-0 bg-white border border-border/20 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-80 overflow-y-auto backdrop-blur-sm">
                    {isLoading ? (
                      <div className="px-6 py-8 text-center">
                        <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-3" />
                        <p className="text-sm text-foreground/60">Loading courses...</p>
                      </div>
                    ) : error ? (
                      <div className="px-6 py-8 text-center">
                        <p className="text-sm text-foreground/60">Failed to load courses</p>
                      </div>
                    ) : filteredCourses.length > 0 ? (
                      <div className="divide-y divide-border/10">
                        {filteredCourses.map((course) => (
                          <button
                            onClick={() => handleCourseClick(course._id)}
                            key={course._id}
                            className="w-full text-left px-6 py-4 hover:bg-blue-50/50 transition-colors flex items-start justify-between group"
                          >
                            <div className="flex-1">
                              <p className="font-bold text-foreground group-hover:text-blue-600 transition-colors text-base">
                                {course.title}
                              </p>
                              <p className="text-sm text-foreground/50 mt-1">
                                {course.duration} • {course.difficulty}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 mt-1 flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-6 py-8 text-center">
                        <p className="text-sm text-foreground/60">No courses found</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Premium Visual Cards */}
            <div className="relative h-80 hidden lg:block">
              {/* Card 1 - Top Right */}
              <div className="absolute top-0 right-0 w-80 bg-white rounded-2xl border border-border/20 shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-blue-600/20 hover:shadow-3xl">
                <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm font-bold text-foreground">AI-Powered Learning</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-2 bg-border rounded-full w-3/4" />
                    <div className="h-2 bg-border rounded-full w-1/2" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-blue-50 rounded-lg" />
                    <div className="h-8 bg-blue-50/50 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Card 2 - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-72 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl border border-blue-200/50 shadow-xl overflow-hidden transform hover:translate-y-2 transition-all duration-300 hover:shadow-blue-600/30">
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-blue-600">✓</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">Real-World Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-blue-600">✓</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">Interactive IDE</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-blue-600">✓</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">Instant Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

