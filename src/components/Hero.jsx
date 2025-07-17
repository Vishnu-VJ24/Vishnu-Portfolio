import React, { useState, useEffect } from 'react'
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Play } from 'lucide-react'
import profileImage from '../assets/profile.jpg'
import InteractiveNeuralNetwork from './InteractiveNeuralNetwork'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isInteractiveOpen, setIsInteractiveOpen] = useState(false)

  const roles = [
    'AI Developer',
    'Data Scientist',
    'Data Engineer',
    'ML Engineer'
  ]

  useEffect(() => {
    const currentRole = roles[currentIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, roles])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <img
                src={profileImage}
                alt="Vishnu Jayanth Senthil Kumar"
                className="w-full h-full rounded-full object-cover object-center"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            <span className="block">Vishnu Jayanth</span>
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
              Senthil Kumar
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-blue-200 mb-8 h-12 animate-fade-in-up delay-200">
            <span className="font-medium">I can be your </span>
            <span className="font-bold text-white">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Specializing in Generative AI, MLOps, and building intelligent data-driven systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-600">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Interactive Neural Network Button */}
          <div className="mb-12 animate-fade-in-up delay-700">
            <button
              onClick={() => setIsInteractiveOpen(true)}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                Play with Neural Network
                <Play size={20} className="group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up delay-800">
            <a
              href="https://www.linkedin.com/in/vishnu--vj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Vishnu-VJ24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:vishnujayanth.24@gmail.com"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} className="text-white" />
          </button>
        </div>
      </div>

      {/* Interactive Neural Network Modal */}
      <InteractiveNeuralNetwork 
        isOpen={isInteractiveOpen} 
        onClose={() => setIsInteractiveOpen(false)} 
      />
    </section>
  )
}

export default Hero