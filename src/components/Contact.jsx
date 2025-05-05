import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="contact-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for opportunities or just to say hello!</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-form-container"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Send Me a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subjects</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="contact-info"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
            </div>
            
            <div className="social-connect">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <motion.a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#4ECDC4' }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#4ECDC4' }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#4ECDC4' }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
            
            <div className="availability">
              <h4>Availability</h4>
              <p>I'm currently available for freelance work and full-time positions.</p>
            </div>
            
            <div className="resume-download">
              <motion.a 
                href="/resume.pdf" 
                download
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;