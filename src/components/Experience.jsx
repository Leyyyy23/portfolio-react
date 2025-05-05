import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Experience</h2>
          <div className="achievement-badge">
            <FaCode /> Professional Journey
          </div>
        </motion.div>

        <div className="experience-timeline">
          {/* Work Experience */}
          <motion.div 
            className="timeline-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="section-title">
              <FaBriefcase className="section-icon" /> Work Experience
            </h3>
            
            <div className="timeline-card">
              <div className="timeline-header">
                <h4>Project Manager</h4>
                <span className="timeline-duration">June 2023 - Present</span>
              </div>
              <h5 className="timeline-company">QUATRO CRAFT</h5>
              <p className="timeline-description">
                Leading development projects and coordinating team efforts to ensure timely delivery.
                Managing project scope, resources, and timelines for optimal efficiency.
                Facilitating communication between stakeholders and development team.
                Implementing agile methodologies to enhance project workflow and adaptability.
              </p>
              <div className="skill-tags">
                <span className="skill-tag">Project Management</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Team Leadership</span>
                <span className="skill-tag">Stakeholder Management</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="timeline-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="section-title">
              <FaGraduationCap className="section-icon" /> Education
            </h3>
            
            <div className="timeline-card">
              <div className="timeline-header">
                <h4>Bachelor of Science in Information Technology</h4>
                <span className="timeline-duration">2021 - Present</span>
              </div>
              <h5 className="timeline-company">Western Mindanao State University</h5>
              <p className="timeline-description">
                Focusing on software development, web technologies, and information systems.
                Participating in coding competitions, hackathons, and tech events.
                Developing practical skills through hands-on projects and collaborative work.
                Exploring specializations in web development and database management.
              </p>
              <div className="skill-tags">
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">Database Systems</span>
                <span className="skill-tag">Programming</span>
                <span className="skill-tag">System Analysis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience
