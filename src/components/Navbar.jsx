import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  return (
    <motion.nav 
      className={`navbar ${scroll ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="nav-logo"
        whileHover={{ scale: 1.1 }}
      >
        <h1>LA</h1>
      </motion.div>
      
      <div className={`nav-links ${mobileMenu ? 'active' : ''}`}>
        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
          <motion.a 
            href={`#${item.toLowerCase()}`}
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </div>
      
      <FiMenu className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)} />
    </motion.nav>
  )
}

export default Navbar
