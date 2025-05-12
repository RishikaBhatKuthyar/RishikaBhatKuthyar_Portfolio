import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillBar from "@/components/SkillBar";
import { frontendSkills, backendSkills, otherSkills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SkillCategory = "all" | "frontend" | "backend" | "tools";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="skills" className="py-20 px-4 bg-beige-50 dark:bg-gray-900">
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
        
        <div className="max-w-4xl mx-auto">
          {/* Skills tabs */}
          <Tabs 
            defaultValue="all" 
            className="mb-8"
            onValueChange={(value) => setActiveTab(value as SkillCategory)}
          >
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="all" className="rounded-full">
                  <i className="ri-apps-line mr-2"></i> All Skills
                </TabsTrigger>
                <TabsTrigger value="frontend" className="rounded-full">
                  <i className="ri-code-s-slash-line mr-2"></i> Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="rounded-full">
                  <i className="ri-server-line mr-2"></i> Backend
                </TabsTrigger>
                <TabsTrigger value="tools" className="rounded-full">
                  <i className="ri-tools-line mr-2"></i> Tools
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <i className="ri-code-s-slash-line mr-2 text-primary-600 dark:text-primary-400"></i> Frontend
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium rounded-full">
                      {frontendSkills.length} Skills
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
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
                
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <i className="ri-server-line mr-2 text-primary-600 dark:text-primary-400"></i> Backend
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium rounded-full">
                      {backendSkills.length} Skills
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
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
              </motion.div>
              
              {/* Other Skills */}
              <motion.div 
                className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <i className="ri-tools-line mr-2 text-primary-600 dark:text-primary-400"></i> Tools & Other Skills
                  </h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-medium rounded-full">
                    {otherSkills.length} Skills
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {otherSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="relative p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ 
                        y: -5, 
                        backgroundColor: "var(--color-primary-50)",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" 
                      }}
                    >
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: hoveredSkill === skill.name ? 1.15 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <i className={`${skill.icon} text-3xl text-primary-600 dark:text-primary-400 mb-3 block`}></i>
                        <div className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</div>
                      </motion.div>

                      {hoveredSkill === skill.name && (
                        <motion.div 
                          className="absolute inset-0 bg-primary-600 bg-opacity-10 dark:bg-opacity-20 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="frontend">
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <i className="ri-code-s-slash-line mr-2 text-primary-600 dark:text-primary-400"></i> Frontend Technologies
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium rounded-full">
                    {frontendSkills.length} Skills
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {frontendSkills.map((skill, index) => (
                    <SkillBar 
                      key={index}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Focus</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    I specialize in building responsive, accessible, and performant user interfaces with modern frontend technologies. 
                    My primary focus is on creating intuitive and delightful user experiences.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="backend">
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <i className="ri-server-line mr-2 text-primary-600 dark:text-primary-400"></i> Backend Technologies
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium rounded-full">
                    {backendSkills.length} Skills
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {backendSkills.map((skill, index) => (
                    <SkillBar 
                      key={index}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Expertise</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    I build robust and scalable backend services with a focus on API design, database optimization, and security. 
                    My experience includes developing RESTful APIs, managing databases, and implementing server-side logic.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="tools">
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <i className="ri-tools-line mr-2 text-primary-600 dark:text-primary-400"></i> Tools & Other Skills
                  </h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-medium rounded-full">
                    {otherSkills.length} Skills
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {otherSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ 
                        y: -5, 
                        backgroundColor: "var(--color-primary-50)",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" 
                      }}
                    >
                      <i className={`${skill.icon} text-3xl text-primary-600 dark:text-primary-400 mb-3 block`}></i>
                      <div className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Additional Expertise</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Beyond core development, I'm experienced with a variety of tools and practices that enhance the development process. 
                    This includes version control, CI/CD, cloud services, testing methodologies, and development best practices.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
