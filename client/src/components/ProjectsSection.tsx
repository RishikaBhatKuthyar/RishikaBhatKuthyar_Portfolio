import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack" | "mobile";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const handleFilterClick = (filter: ProjectCategory) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here's a selection of my recent work. Each project demonstrates different skills and technologies.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            onClick={() => handleFilterClick("all")}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeFilter === "all" 
                ? "bg-primary-500 text-white" 
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            All
          </button>
          <button 
            onClick={() => handleFilterClick("frontend")}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeFilter === "frontend" 
                ? "bg-primary-500 text-white" 
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Frontend
          </button>
          <button 
            onClick={() => handleFilterClick("backend")}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeFilter === "backend" 
                ? "bg-primary-500 text-white" 
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Backend
          </button>
          <button 
            onClick={() => handleFilterClick("fullstack")}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeFilter === "fullstack" 
                ? "bg-primary-500 text-white" 
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Full Stack
          </button>
          <button 
            onClick={() => handleFilterClick("mobile")}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeFilter === "mobile" 
                ? "bg-primary-500 text-white" 
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Mobile
          </button>
        </div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
