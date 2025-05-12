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
          <h2 className="text-3xl font-bold text-beige-800 dark:text-beige-100 mb-4">Technical Skills</h2>
          <p className="text-lg text-beige-700 dark:text-beige-300">
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
                className="bg-beige-50 dark:bg-gray-900/80 p-8 rounded-xl shadow-md border border-beige-200 dark:border-beige-800/30"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-beige-800 dark:text-beige-100 flex items-center">
                    <i className="ri-tools-fill mr-2 text-beige-600 dark:text-beige-400"></i> Tools & Technologies
                  </h3>
                  <span className="px-3 py-1 bg-beige-200 text-beige-800 dark:bg-beige-800/30 dark:text-beige-200 text-xs font-medium rounded-full">
                    {frontendSkills.length + backendSkills.length + otherSkills.length} Skills
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {/* Frontend Skills */}
                  {frontendSkills.map((skill, index) => (
                    <SkillBar 
                      key={`frontend-${index}`}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={index * 0.05}
                    />
                  ))}
                  
                  {/* Backend Skills */}
                  {backendSkills.map((skill, index) => (
                    <SkillBar 
                      key={`backend-${index}`}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={(frontendSkills.length + index) * 0.05}
                    />
                  ))}
                  
                  {/* Other Skills/Tools */}
                  {otherSkills.map((skill, index) => (
                    <SkillBar 
                      key={`other-${index}`}
                      name={skill.name}
                      percentage={75} // Default mid-level for tools
                      icon={skill.icon}
                      delay={(frontendSkills.length + backendSkills.length + index) * 0.05}
                    />
                  ))}
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-beige-100 dark:bg-beige-900/20 rounded-lg">
                    <h4 className="font-semibold text-beige-800 dark:text-beige-200 mb-2 flex items-center">
                      <i className="ri-code-s-slash-line mr-2"></i> Frontend
                    </h4>
                    <p className="text-beige-700 dark:text-beige-300 text-sm">
                      Creating responsive, accessible, and performant user interfaces with modern frontend technologies to deliver intuitive user experiences.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-beige-100 dark:bg-beige-900/20 rounded-lg">
                    <h4 className="font-semibold text-beige-800 dark:text-beige-200 mb-2 flex items-center">
                      <i className="ri-server-line mr-2"></i> Backend
                    </h4>
                    <p className="text-beige-700 dark:text-beige-300 text-sm">
                      Building robust APIs, efficient database solutions, and scalable server architectures to power modern web applications.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-beige-100 dark:bg-beige-900/20 rounded-lg">
                    <h4 className="font-semibold text-beige-800 dark:text-beige-200 mb-2 flex items-center">
                      <i className="ri-tools-line mr-2"></i> DevOps & Tools
                    </h4>
                    <p className="text-beige-700 dark:text-beige-300 text-sm">
                      Leveraging modern development tools and CI/CD practices to streamline workflow, ensure code quality, and optimize deployment processes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="frontend">
              <motion.div
                className="bg-beige-50 dark:bg-gray-900/80 p-6 rounded-xl shadow-md border border-beige-200 dark:border-beige-800/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-beige-800 dark:text-beige-100 flex items-center">
                    <i className="ri-code-s-slash-line mr-2 text-beige-600 dark:text-beige-400"></i> Frontend Technologies
                  </h3>
                  <span className="px-3 py-1 bg-beige-200 text-beige-800 dark:bg-beige-800/30 dark:text-beige-200 text-xs font-medium rounded-full">
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
                
                <div className="mt-6 p-4 bg-beige-100 dark:bg-beige-900/20 rounded-lg">
                  <h4 className="font-semibold text-beige-800 dark:text-beige-200 mb-2">Frontend Focus</h4>
                  <p className="text-beige-700 dark:text-beige-300">
                    I specialize in building responsive, accessible, and performant user interfaces with modern frontend technologies. 
                    My primary focus is on creating intuitive and delightful user experiences.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="backend">
              <motion.div
                className="bg-beige-50 dark:bg-gray-900/80 p-6 rounded-xl shadow-md border border-beige-200 dark:border-beige-800/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-beige-800 dark:text-beige-100 flex items-center">
                    <i className="ri-server-line mr-2 text-beige-600 dark:text-beige-400"></i> Backend Technologies
                  </h3>
                  <span className="px-3 py-1 bg-beige-200 text-beige-800 dark:bg-beige-800/30 dark:text-beige-200 text-xs font-medium rounded-full">
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
                
                <div className="mt-6 p-4 bg-beige-100 dark:bg-beige-900/20 rounded-lg">
                  <h4 className="font-semibold text-beige-800 dark:text-beige-200 mb-2">Backend Expertise</h4>
                  <p className="text-beige-700 dark:text-beige-300">
                    I build robust and scalable backend services with a focus on API design, database optimization, and security. 
                    My experience includes developing RESTful APIs, managing databases, and implementing server-side logic.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="tools">
              <motion.div
                className="bg-beige-50 dark:bg-gray-900/80 p-6 rounded-xl shadow-md border border-beige-200 dark:border-beige-800/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-beige-800 dark:text-beige-100 flex items-center">
                    <i className="ri-tools-line mr-2 text-beige-600 dark:text-beige-400"></i> Tools & Other Skills
                  </h3>
                  <span className="px-3 py-1 bg-beige-200 text-beige-800 dark:bg-beige-800/30 dark:text-beige-200 text-xs font-medium rounded-full">
                    {otherSkills.length} Skills
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {otherSkills.map((skill, index) => (
                    <SkillBar 
                      key={index}
                      name={skill.name}
                      percentage={75} // Default mid-level for tools
                      icon={skill.icon}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-beige-100 dark:bg-beige-900/20 rounded-lg">
                  <h4 className="font-semibold text-beige-800 dark:text-beige-200 mb-2">Additional Expertise</h4>
                  <p className="text-beige-700 dark:text-beige-300">
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
