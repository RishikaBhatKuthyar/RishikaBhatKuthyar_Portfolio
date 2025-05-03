import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Resume</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            A detailed overview of my professional background, skills, and education.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          {/* Resume Content */}
          <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Software engineer with 5+ years of experience building modern web applications. 
              Specializing in TypeScript, React, and Node.js development with a focus on creating 
              performant and accessible user experiences. Passionate about clean code, best practices, 
              and continuous learning.
            </p>
          </div>
          
          {/* Education */}
          <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-700 dark:text-gray-300">University of Technology • 2012 - 2016</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Graduated with honors. Coursework included Advanced Algorithms, Software Engineering, 
                Database Systems, and Web Development.
              </p>
            </div>
          </div>
          
          {/* Skills Summary */}
          <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>JavaScript/TypeScript</li>
                  <li>React.js & React Native</li>
                  <li>Node.js & Express</li>
                  <li>HTML5/CSS3, Tailwind CSS</li>
                  <li>MongoDB, PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Other Skills</h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>UI/UX Design Principles</li>
                  <li>RESTful API Design</li>
                  <li>Test-Driven Development</li>
                  <li>Agile/Scrum Methodologies</li>
                  <li>CI/CD Implementation</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Download */}
          <div className="text-center">
            <motion.a 
              href="#"
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Full Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;