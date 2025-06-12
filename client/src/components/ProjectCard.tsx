import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { FiLink } from "react-icons/fi";
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, category, tags, reference } = project;
  const [isHovered, setIsHovered] = useState(false);

  // Category badge gradient
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "frontend":
        return "gradient-bg-blue text-white";
      case "backend":
        return "gradient-bg-accent text-white";
      case "fullstack":
        return "gradient-bg-primary text-white";
      case "devops":
        return "gradient-bg-warm text-white";
      case "machine-learning":
        return "gradient-bg-purple text-white";
      case "data-science":
        return "gradient-bg-green text-white";
      default:
        return "gradient-bg-cool text-white";
    }
  };

  return (
    <motion.div
      className="card-gradient rounded-xl overflow-hidden h-full flex flex-col group hover-lift"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={reference}
            className="mx-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm shadow-md flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLink className="mr-1" /> Ref
          </motion.a>
        </motion.div>

        <motion.img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-56 object-cover transition-transform group-hover:scale-110 group-hover:brightness-75"
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(0.75)" : "brightness(1)"
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="absolute top-2 left-2 z-10 flex gap-1">
          {category.map((cat: string) => (
            <span
              key={cat}
              className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryGradient(cat)}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="inline-block px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium rounded"
              whileHover={{ y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;