import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/ojt-blog', label: 'OJT Blog' },
    { path: '/contact', label: 'Contact' }
  ]

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
        <Link to="/"><h1>LA</h1></Link>
      </motion.div>
      
      <div className={`nav-links ${mobileMenu ? 'active' : ''}`}>
        {navItems.map((item, index) => (
          <motion.div key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => setMobileMenu(false)}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
      
      <FiMenu className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)} />
    </motion.nav>
  )
}

export default Navbar
