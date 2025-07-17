import React, { useState, useEffect } from 'react'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 80 }
      ]
    },
    {
      title: 'ML/DL Frameworks & Libraries',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Keras', level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'LangGraph', level: 80 },
        { name: 'Hugging Face', level: 85 },
        { name: 'XGBoost', level: 80 },
        { name: 'LightGBM', level: 75 }
      ]
    },
    {
      title: 'Data & Analytics Platforms',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Snowflake', level: 80 },
        { name: 'BigQuery', level: 75 },
        { name: 'Apache Kafka', level: 75 },
        { name: 'PowerBI', level: 80 },
        { name: 'Tableau', level: 75 },
        { name: 'Databricks', level: 75 },
        { name: 'Apache Spark', level: 80 }
      ]
    },
    {
      title: 'MLOps & Cloud Platforms',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Azure AI Foundry', level: 85 },
        { name: 'AWS Lambda', level: 80 },
        { name: 'GCP Vertex AI', level: 75 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Apache Airflow', level: 80 },
        { name: 'CI/CD', level: 80 },
        { name: 'MLflow', level: 75 },
        { name: 'SageMaker', level: 75 },
        { name: 'Azure ML', level: 80 }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const SkillBar = ({ skill, index, categoryColor }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${categoryColor} transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-gray-900/50 shadow-2xl transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                      categoryColor={category.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Specializations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I specialize in Generative AI (Agentic Systems, RAG, LLM Fine-Tuning), Multi-Modal AI, 
                Natural Language Processing, and Computer Vision. My expertise lies in building intelligent 
                data-driven systems that solve complex real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills