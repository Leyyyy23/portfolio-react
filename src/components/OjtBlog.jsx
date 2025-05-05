import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import '../styles/OjtBlog.css';

const OjtBlog = () => {
  // Updated blog post data with the requested categories
  const blogPosts = [
    {
      id: 1,
      day: "Capstone Project",
      title: "Our Journey Through Capstone Development",
      date: "March 2023",
      preview: "Developing our capstone project was both challenging and rewarding, pushing our skills to new heights...",
      image: "/caps (1).jpeg",
      content: "Our capstone project journey was a transformative experience that tested our technical skills, teamwork, and perseverance. We spent countless hours brainstorming, designing, and implementing our solution to address real-world problems.",
      gallery: [
        "/caps (1).jpeg",
        "/caps (2).jpeg",
        "/caps (3).jpeg",
        "/caps (4).jpeg"
      ]
    },
    {
      id: 2,
      day: "OJT Experience",
      title: "On-the-Job Training Adventures",
      date: "January - April 2023",
      preview: "My OJT experience provided invaluable industry exposure and practical application of classroom knowledge...",
      image: "/ojt (1).jpeg",
      content: "My On-the-Job Training experience was a crucial bridge between academic learning and professional practice. Working in a real-world environment allowed me to apply theoretical knowledge while gaining new technical and soft skills.",
      gallery: [
        "/ojt (1).jpeg",
        "/ojt (2).jpeg",
        "/ojt (3).jpeg",
        "/ojt (4).jpeg"
      ]
    },
    {
      id: 3,
      day: "Post-Pandemic Classes",
      title: "Returning to Campus After the Pandemic",
      date: "June 2022",
      preview: "Transitioning back to face-to-face classes brought new challenges and opportunities after years of online learning...",
      image: "/postpan (1).jpeg",
      content: "The return to campus after the pandemic was a significant adjustment. After years of virtual classes, we had to reacclimate to in-person interactions, physical classrooms, and campus life. The transition brought both challenges and joys as we rediscovered the value of face-to-face learning and social connections.",
      gallery: [
        "/postpan (1).jpeg",
        "/postpan (2).jpeg",
        "/postpan (3).jpeg",
        "/postpan (4).jpeg",
        "/postpan (5).jpeg",
        "/postpan (6).jpeg"
      ]
    },
    {
      id: 4,
      day: "CCS Fest",
      title: "Celebrating at the College of Computing Studies Festival",
      date: "November 2022",
      preview: "The annual CCS Fest showcased student talents, innovations, and the vibrant community of our college...",
      image: "/ccsfest (1).jpeg",
      content: "The College of Computing Studies Festival was a highlight of our academic year, bringing together students, faculty, and industry partners to celebrate achievements and innovations in computing. The event featured technical competitions, project exhibitions, workshops, and social activities that strengthened our community bonds.",
      gallery: [
        "/ccsfest (1).jpeg",
        "/ccsfest (2).jpeg",
        "/ccsfest (3).jpeg",
        "/ccsfest (4).jpeg"
      ]
    },
    {
      id: 5,
      day: "Pinning Ceremony",
      title: "WMSU CCS Department Pinning for 4th Year Students",
      date: "February 2023",
      preview: "The pinning ceremony marked a significant milestone in our academic journey as we prepare to enter the professional world...",
      image: "/pin (1).jpeg",
      content: "The WMSU College of Computing Studies Pinning Ceremony was a momentous occasion that symbolized our transition from students to professionals. This traditional rite of passage acknowledged our hard work, dedication, and readiness to contribute to the computing industry. Faculty members, family, and friends gathered to celebrate our achievements and future endeavors.",
      gallery: [
        "/pin (1).jpeg",
        "/pin (2).jpeg",
        "/pin (3).jpeg",
        "/pin (4).jpeg",
        "/pin (5).jpeg"
      ]
    },
    {
      id: 6,
      day: "WMSU Palaro",
      title: "Competing in the WMSU Palaro Sports Festival",
      date: "October 2022",
      preview: "Participating in various sports competitions during the WMSU Palaro fostered school spirit and camaraderie...",
      image: "/palaro (1).jpeg",
      content: "The WMSU Palaro was an exciting university-wide sports festival that brought together students from different colleges to compete in various athletic events. Representing the College of Computing Studies, we participated in basketball, volleyball, track and field, and other sports. Beyond competition, the Palaro strengthened friendships, promoted physical fitness, and enhanced our sense of school pride.",
      gallery: [
        "/palaro (1).jpeg",
        "/palaro (2).jpeg",
        "/palaro (3).jpeg",
        "/palaro (4).jpeg",
        "/palaro (5).jpeg",
        "/palaro (6).jpeg"
      ]
    },
    {
      id: 7,
      day: "School Life",
      title: "Everyday Moments of University Life",
      date: "2019 - 2023",
      preview: "The daily experiences, friendships, and memories that defined our university journey beyond academics...",
      image: "/school (1).jpeg",
      content: "University life is about much more than just classes and exams. It's about the friendships formed, the late-night study sessions, the campus hangouts, and the personal growth that happens along the way. These everyday moments—sharing meals at the cafeteria, collaborating on projects, celebrating birthdays, and supporting each other through challenges—create the rich tapestry of the college experience.",
      gallery: [
        "/school (1).jpeg",
        "/school (2).jpeg",
        "/school (3).jpeg",
        "/school (4).jpeg",
        "/school (5).jpeg",
        "/school (6).jpeg"
      ]
    }
  ];

  // Sample OJT experience data
  const ojtExperience = {
    company: "XYZ Tech Solutions",
    role: "Software Engineering Intern",
    duration: "January - April 2023",
    description: "During my OJT at XYZ Tech Solutions, I worked on developing web applications using React.js and Node.js. I collaborated with a team of experienced developers to build scalable and responsive web solutions for clients in various industries."
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A responsive dashboard for an e-commerce platform with analytics and inventory management features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com/username/ecommerce-dashboard",
      live: "https://ecommerce-dashboard.example.com"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates and team communication features.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/username/task-management",
      live: "https://task-management.example.com"
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className="ojt-blog-container">
      {!selectedPost ? (
        <>
          <motion.div 
            className="ojt-blog-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>My University Journey</h2>
            <p>Explore my experiences throughout my academic and professional development</p>
          </motion.div>

          <motion.div 
            className="blog-posts-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {blogPosts.map((post, index) => (
              <motion.div 
                className="blog-post-card"
                key={post.id}
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                onClick={() => handlePostClick(post)}
              >
                <div className="blog-post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-post-day">{post.day}</div>
                </div>
                <div className="blog-post-info">
                  <h3>{post.title}</h3>
                  <div className="blog-post-date">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                  <p>{post.preview}</p>
                  <div className="read-more">Read More</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="ojt-experience-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>OJT Experience</h2>
            <div className="experience-card">
              <div className="experience-header">
                <h3>{ojtExperience.company}</h3>
                <div className="experience-role">{ojtExperience.role}</div>
                <div className="experience-duration">{ojtExperience.duration}</div>
              </div>
              <p>{ojtExperience.description}</p>
            </div>
          </motion.div>

          <motion.div 
            className="ojt-projects-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2>OJT Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div 
                  className="project-card"
                  key={project.id}
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGithub />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2>Get In Touch</h2>
            <p>Interested in my work? Feel free to reach out!</p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link email">
                your.email@example.com
              </a>
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                {/* Add more social media links as needed */}
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div 
          className="blog-post-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="back-button" onClick={handleBackClick}>
            &larr; Back to all posts
          </button>
          <div className="blog-post-header">
            <h2>{selectedPost.title}</h2>
            <div className="blog-post-meta">
              <span className="blog-post-day">{selectedPost.day}</span>
              <span className="blog-post-date">{selectedPost.date}</span>
            </div>
          </div>
          <div className="blog-post-featured-image">
            <img src={selectedPost.image} alt={selectedPost.title} />
          </div>
          <div className="blog-post-content">
            <p>{selectedPost.content}</p>
            
            <h3>Highlights</h3>
            <p>This experience was filled with memorable moments, challenges, and growth opportunities that shaped my academic and professional development.</p>
            
            <div className="blog-post-gallery">
              {selectedPost.gallery.map((image, index) => (
                <img key={index} src={image} alt={`${selectedPost.day} - Image ${index + 1}`} />
              ))}
            </div>
            
            <h3>Reflections</h3>
            <p>Looking back on this experience, I gained valuable insights into both technical skills and personal development. The challenges faced and overcome have prepared me for future endeavors in my career.</p>
            
            <h3>Key Learnings</h3>
            <ul>
              <li>Enhanced technical skills through practical application</li>
              <li>Developed stronger teamwork and communication abilities</li>
              <li>Gained confidence in problem-solving and decision-making</li>
              <li>Built meaningful professional relationships and networks</li>
              <li>Learned to adapt to changing circumstances and requirements</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OjtBlog;
