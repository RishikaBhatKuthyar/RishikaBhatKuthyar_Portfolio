import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.module.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">John Doe</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I create modern, responsive web applications with a focus on user experience 
            and clean, maintainable code. Passionate about turning ideas into digital reality.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Sections */}
      <section className="featured-sections">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="feature-icon">
                <i className="ri-code-s-slash-line text-3xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 className="feature-title">Clean Code</h3>
              <p className="feature-description">
                Writing maintainable, scalable code following best practices and industry standards.
              </p>
              <Link to="/skills" className="feature-link">
                View Skills <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="feature-icon">
                <i className="ri-palette-line text-3xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 className="feature-title">Modern Design</h3>
              <p className="feature-description">
                Creating beautiful, intuitive user interfaces that provide exceptional user experiences.
              </p>
              <Link to="/projects" className="feature-link">
                See Projects <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="feature-icon">
                <i className="ri-rocket-line text-3xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="feature-title">Performance</h3>
              <p className="feature-description">
                Optimizing applications for speed, accessibility, and seamless performance across devices.
              </p>
              <Link to="/experience" className="feature-link">
                My Journey <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;