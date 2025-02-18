import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import leoImage from '../assets/leo.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Leonard Aquino
          </motion.h1>
          
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'UI/UX Designer',
              2000,
              'Web Developer',
              2000
            ]}
            wrapper="h2"
            repeat={Infinity}
          />
          
          <p>Creating visually appealing and practical web experiences</p>
          
          <div className="hero-buttons">
            <motion.button 
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
            <motion.button 
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </div>
          
          <div className="social-links">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#"
                whileHover={{ y: -5, color: '#4ECDC4' }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
          src={leoImage} 
          alt="Leonard Aquino"
          whileHover={{ scale: 1.05 }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
