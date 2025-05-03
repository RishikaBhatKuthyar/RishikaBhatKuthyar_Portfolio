import { motion } from "framer-motion";
import SkillBar from "@/components/SkillBar";
import { frontendSkills, backendSkills, otherSkills } from "@/lib/data";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My technical toolbox includes a wide range of languages, frameworks, and tools.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-dark"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="ri-code-s-slash-line mr-2 text-primary-600 dark:text-primary-400"></i> Frontend
            </h3>
            
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-dark"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="ri-server-line mr-2 text-primary-600 dark:text-primary-400"></i> Backend
            </h3>
            
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-dark">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="ri-tools-line mr-2 text-primary-600 dark:text-primary-400"></i> Tools & Other Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <i className={`${skill.icon} text-2xl text-primary-600 dark:text-primary-400 mb-2`}></i>
                  <div className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
