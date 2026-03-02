import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
      console.log('Theme loaded from localStorage:', saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      console.log('Theme set from system preference:', prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      console.log('Dark mode enabled')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      console.log('Light mode enabled')
    }
  }, [isDark])

  const toggleTheme = () => {
    console.log('Theme toggle clicked, current state:', isDark)
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}