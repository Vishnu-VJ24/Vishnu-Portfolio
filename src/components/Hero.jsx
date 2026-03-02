import React, { useState, useEffect } from 'react'
import { ChevronDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import profileImage from '../assets/profile.jpg'
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { SplineScene } from "@/components/ui/splite"

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = ['AI Developer', 'Data Scientist', 'Data Engineer', 'ML Engineer']

  useEffect(() => {
    const currentRole = roles[currentIndex]
    let timeout
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50)
      } else {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % roles.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* ── Layer 0: WebGL wire fills the ENTIRE hero as background ── */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>

      {/* ── Layer 1: translucent overlay ── */}
      <div className="absolute inset-0 z-[1] bg-black/30 pointer-events-none" />

      {/* ── Layer 2: Content + Robot ── */}
      <div className="relative z-10 flex w-full h-full">

        {/* ─── Left: Profile content, fully centered ─── */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pl-16 md:pl-24 lg:pl-32 pr-0 pt-24">

          {/* Profile image */}
          <div className="mb-6">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-[3px] shadow-2xl mx-auto">
              <img
                src={profileImage}
                alt="Vishnu Jayanth Senthil Kumar"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 leading-[1.05] drop-shadow-lg">
            <span className="block">Vishnu Jayanth</span>
            <span className="block mt-1 text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
              Senthil Kumar
            </span>
          </h1>

          {/* Typing role */}
          <div className="text-base md:text-xl text-blue-100 mb-4 h-8">
            <span className="font-medium">I can be your </span>
            <span className="font-bold text-white">
              {displayText}<span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="text-xs md:text-sm text-white/75 mb-6 max-w-xs leading-relaxed">
            Specializing in Generative AI, MLOps, and building intelligent data-driven systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ExternalLink size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 py-2.5 border border-white/40 text-white rounded-full font-semibold hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <ExternalLink size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-3 mb-8">
            <a href="https://www.linkedin.com/in/vishnu--vj" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/Vishnu-VJ24" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
              <Github size={18} />
            </a>
            <a href="mailto:vishnujayanth.24@gmail.com"
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
              <Mail size={18} />
            </a>
          </div>

          {/* Scroll hint */}
          <button onClick={scrollToAbout} className="animate-bounce text-white/50 hover:text-white/80 transition-colors duration-300">
            <ChevronDown size={26} />
          </button>
        </div>

        {/* ─── Right: Spline robot ─── */}
        <div className="flex-1 hidden lg:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
