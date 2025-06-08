import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section for Resume */}
      <section className="gradient-bg-cool relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-16 right-16 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-14 h-14 bg-white rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-white rounded-full animate-pulse animation-delay-500"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            My <span className="text-yellow-300">Resume</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-left">
            A comprehensive overview of my professional journey and achievements
          </p>
        </motion.div>
      </section>
      
      {/* Resume Content */}
      <div className="gradient-bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
            {/* Professional Summary */}
            <div className="mb-8 pb-8 border-b border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
              <p className="text-white/90">
                Software engineer with 5+ years of experience building modern web applications. 
                Specializing in TypeScript, React, and Node.js development with a focus on creating 
                performant and accessible user experiences. Passionate about clean code, best practices, 
                and continuous learning.
              </p>
            </div>
            
            {/* Education */}
            <div className="mb-8 pb-8 border-b border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-white/80">University of Technology • 2012 - 2016</p>
                <p className="text-white/70 mt-2">
                  Graduated with honors. Coursework included Advanced Algorithms, Software Engineering, 
                  Database Systems, and Web Development.
                </p>
              </div>
            </div>
            
            {/* Technical Skills */}
            <div className="mb-8 pb-8 border-b border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Frontend</h3>
                  <p className="text-white/80">React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Next.js</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Backend</h3>
                  <p className="text-white/80">Node.js, Express, Python, PostgreSQL, MongoDB, REST APIs</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tools & Services</h3>
                  <p className="text-white/80">Git, Docker, AWS, Vercel, Figma, Webpack, Vite</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Other</h3>
                  <p className="text-white/80">Agile/Scrum, Testing (Jest, Cypress), CI/CD, DevOps</p>
                </div>
              </div>
            </div>
            
            {/* Download Resume Button */}
            <div className="text-center">
              <button className="btn-gradient px-8 py-3 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                Download PDF Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;