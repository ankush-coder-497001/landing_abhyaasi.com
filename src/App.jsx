import { useState, useRef, useEffect } from 'react'
import './App.css'
import SplashLoader from './components/sections/SplashLoader'
import HeroSection from './components/sections/HeroSection'
import StepperSection from './components/sections/StepperSection'
import FeaturesSection from './components/sections/FeaturesSection'
import PricingSection from './components/sections/PricingSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/sections/Footer'
import Navbar from './components/sections/Navbar'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [scrollY, setScrollY] = useState(0)



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])




  return (
    <main className="min-h-screen bg-background">
      {showSplash && <SplashLoader />}
      {!showSplash && (
        <>
          <Navbar scrollY={scrollY} />
          <HeroSection />
          <StepperSection />
          <FeaturesSection />
          <PricingSection />
          <CTASection />
          <Footer />
        </>
      )}
    </main>
  )
}

export default App
