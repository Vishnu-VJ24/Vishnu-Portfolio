import React from 'react'
import { Code2, Users, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'AI & ML Expertise',
      description: 'Specialized in Generative AI, MLOps, and building intelligent data-driven systems'
    },
    {
      icon: Users,
      title: 'Research & Innovation',
      description: 'Strong experience in multi-agentic systems, RAG pipelines, and real-time ML solutions'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Passionate about creating impactful solutions through advanced AI and data science'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Focused on delivering high-performance AI systems that solve real-world challenges'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-900/50 shadow-2xl transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A passionate AI developer and data scientist specializing in Generative AI and MLOps
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm Vishnu Jayanth Senthil Kumar, a passionate AI developer and data scientist 
                  with a strong focus on creating impactful, data-driven solutions. I'm currently pursuing 
                  my Master's degree in Data Science, Analytics and Engineering at Arizona State University.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey in AI and data science has been driven by curiosity and a love for building 
                  intelligent systems that solve real-world problems. I specialize in Generative AI, 
                  MLOps, and developing multi-agentic systems that can reason, plan, and execute complex tasks.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not working on AI systems, you'll find me exploring new technologies, 
                  contributing to research projects, or learning about the latest developments in 
                  machine learning and artificial intelligence.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About