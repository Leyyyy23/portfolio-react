import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaRocket, FaLaptopCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const About = () => {
  const skills = [
    { icon: FaCode, title: 'Frontend Development', desc: 'React' },
    { icon: FaBrain, title: 'Problem Solving', desc: 'Algorithmic thinking' },
    { icon: FaRocket, title: 'Performance', desc: 'Optimization expert' },
    { icon: FaLaptopCode, title: 'Clean Code', desc: 'Best practices advocate' }
  ]

  const techStack = [
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaBootstrap, name: 'Bootstrap', color: '#7952B3' }
  ]

  return (
    <section className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-header">
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              As a passionate frontend developer, I specialize in creating intuitive and 
              performant web applications. With a strong foundation in modern JavaScript 
              frameworks and a keen eye for design, I transform complex problems into 
              elegant solutions.
            </p>
            <p>
              Currently working on an open-source project focused on accessibility 
              and developing a real-time collaboration platform.
            </p>
          </motion.div>

          <motion.div 
            className="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Tech Stack</h3>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="tech-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <tech.icon style={{ color: tech.color }} className="tech-icon" />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <skill.icon className="skill-icon" />
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="personal-section">
            <h3>Fun Fact</h3>
            <p>
              When I'm not coding, you'll find me exploring photography and contributing 
              to tech communities. I believe in continuous learning and sharing knowledge.
            </p>
          </div>

          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Portfolio
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default About
