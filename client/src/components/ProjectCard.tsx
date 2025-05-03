import { FC } from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, tags, demoLink, codeLink } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 card-dark h-full">
      <img src={image} alt={`${title} screenshot`} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="flex gap-2 mb-3 flex-wrap">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between">
          <motion.a 
            href={demoLink} 
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Demo
          </motion.a>
          <motion.a 
            href={codeLink} 
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Code <i className="ri-github-fill ml-1"></i>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
