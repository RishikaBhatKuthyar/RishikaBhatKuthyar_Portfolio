import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";
import { workExperience } from "@/lib/data";
import profilePic from "@/assets/profile.jpeg";


const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I'm a software engineer with 2+ years of experience building modern web applications. I specialize in Java, Python, Spring Boot, Docker, and React JS development with a focus on creating performant and accessible user experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm Passionate about problem-solving and innovation, I thrive in dynamic environments where I can apply my technical skills and analytical thinking. I am continuously seeking opportunities to learn, contribute, and grow in the ever-evolving field of technology.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="ri-map-pin-line text-lg text-primary-600 dark:text-primary-400 mr-2"></i>
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="ri-mail-line text-lg text-primary-600 dark:text-primary-400 mr-2"></i>
                  <span>kuthyar.ri@northeastern.edu</span>
                </div>
              </div>
              
              {/* <motion.a 
                href="#"
                className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a> */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img 
                  src={profilePic} 
                  alt="Rishika Bhat Kuthyar" 
                  className="w-full h-auto rounded-xl shadow-lg" 
                />   
              </div>
            </motion.div>
          </div>
          
          {/* Work History */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Work Experience</h3>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {workExperience.map((experience, index) => (
                  <TimelineItem
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    period={experience.period}
                    description={experience.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
