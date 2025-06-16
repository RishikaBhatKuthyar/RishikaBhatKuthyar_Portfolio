
import { useState } from "react";
import { motion } from "framer-motion";
import SkillIconCard from "@/components/SkillIconCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SiTypescript, SiPython, SiC, SiJavascript, SiHtml5, SiCss3, SiRust,
  SiSpring, SiSpringboot, SiCloudflare, SiReact, SiNodedotjs, SiExpress, SiHibernate, SiJunit5,
  SiMysql, SiMongodb, SiOracle, SiPostgresql, SiRedis,
   SiKubernetes, SiDocker, SiTerraform, SiGooglecloud,
  SiGit, SiApachekafka, SiRabbitmq, SiSwagger, SiPostman, SiGraphql, SiJira, SiChartdotjs, 
} from "react-icons/si";
import { FaDatabase, FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

type SkillCategory = "all" | "languages" | "frameworks" | "databases" | "cloud" | "tools";

const programmingLanguages = [
  { name: "Java", percentage: 90, icon: FaCode },
  { name: "TypeScript", percentage: 85, icon: SiTypescript },
{ name: "C#", percentage: 80, icon: "ri-hashtag" },
  { name: "Python", percentage: 80, icon: SiPython },
  { name: "C", percentage: 75, icon: SiC },
  { name: "JavaScript", percentage: 90, icon: SiJavascript },
  { name: "HTML", percentage: 95, icon: SiHtml5 },
  { name: "CSS", percentage: 90, icon: SiCss3 },
  { name: "Rust", percentage: 60, icon: SiRust }
];

const frameworksLibraries = [
  { name: "Spring Boot", percentage: 85, icon: SiSpringboot },
  { name: "Spring Cloud", percentage: 80, icon: SiCloudflare },
  { name: "Spring Security", percentage: 80, icon: SiSpring },
  { name: "Microservices", percentage: 85, icon: FaUsers },
  { name: "RESTful APIs", percentage: 90, icon: SiSwagger },
  { name: "React", percentage: 90, icon: SiReact },
  { name: "Node.js", percentage: 80, icon: SiNodedotjs },
  { name: "Express.js", percentage: 80, icon: SiExpress },
  { name: "Hibernate", percentage: 75, icon: SiHibernate },
  { name: "JUnit", percentage: 80, icon: SiJunit5 }
];

const databases = [
  { name: "MySQL", percentage: 85, icon: SiMysql },
  { name: "MongoDB", percentage: 80, icon: SiMongodb },
  { name: "Oracle DB", percentage: 75, icon: SiOracle },
  { name: "PostgreSQL", percentage: 80, icon: SiPostgresql },
  { name: "Redis", percentage: 70, icon: SiRedis }
];

const cloudDevops = [
{ name: "AWS (EC2, S3, Lambda)", percentage: 80, icon: "ri-cloud-line" },
  { name: "Kubernetes", percentage: 75, icon: SiKubernetes },
  { name: "Docker", percentage: 80, icon: SiDocker },
{ name: "Microsoft Azure", percentage: 70, icon: "ri-cloud-line" },
  { name: "Terraform", percentage: 70, icon: SiTerraform },
  { name: "GCP", percentage: 65, icon: SiGooglecloud }
];

const toolsTechnologies = [
  { name: "Git", icon: SiGit },
  { name: "Apache Kafka", icon: SiApachekafka },
  { name: "RabbitMQ", icon: SiRabbitmq },
  { name: "Swagger", icon: SiSwagger },
  { name: "Postman", icon: SiPostman },
  { name: "GraphQL", icon: SiGraphql },
  { name: "kSQL", icon: FaDatabase },
{ name: "Agile", icon: "ri-group-line" },
  { name: "JIRA", icon: SiJira },
  { name: "SSRS", icon: SiChartdotjs }
];
// --- End Skills Data ---

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My technical toolbox includes a wide range of languages, frameworks, databases, cloud platforms, and tools.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs 
            defaultValue="all" 
            className="mb-8"
            onValueChange={(value) => setActiveTab(value as SkillCategory)}
          >
              <div className="overflow-x-auto mb-6">
                <TabsList className="flex flex-nowrap gap-2 w-max px-2">
                <TabsTrigger value="all" className="rounded-full">
                  <i className="ri-apps-line mr-2"></i> All
                </TabsTrigger>
                <TabsTrigger value="languages" className="rounded-full">
                  <i className="ri-code-s-slash-line mr-2"></i> Languages
                </TabsTrigger>
                <TabsTrigger value="frameworks" className="rounded-full">
                  <i className="ri-stack-line mr-2"></i> Frameworks
                </TabsTrigger>
                <TabsTrigger value="databases" className="rounded-full">
                  <i className="ri-database-2-line mr-2"></i> Databases
                </TabsTrigger>
                <TabsTrigger value="cloud" className="rounded-full">
                  <i className="ri-cloud-line mr-2"></i> Cloud & DevOps
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Programming Languages</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {programmingLanguages.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Frameworks & Libraries</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {frameworksLibraries.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Databases</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {databases.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Cloud & DevOps</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {cloudDevops.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Tools & Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {toolsTechnologies.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="languages">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Programming Languages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {programmingLanguages.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="frameworks">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Frameworks & Libraries</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {frameworksLibraries.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="databases">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Databases</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {databases.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="cloud">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Cloud & DevOps</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {cloudDevops.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="tools">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Tools & Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {toolsTechnologies.map((skill, index) => (
                      <SkillIconCard 
        key={index}
        name={skill.name}
        icon={skill.icon}
        delay={index * 0.1}
      />
                  ))}
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