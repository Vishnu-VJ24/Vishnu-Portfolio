import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ThreeDAnimation from './components/ThreeDAnimation'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [animationOpacity, setAnimationOpacity] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = window.innerHeight * 4; // Fade out after 4 pages
      let newOpacity = 1;
      if (scrollY > fadeStart) {
        newOpacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
      }
      setAnimationOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/80 text-lg font-medium">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThreeDAnimation opacity={animationOpacity} />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App