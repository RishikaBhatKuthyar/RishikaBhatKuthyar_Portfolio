import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <motion.a 
        href="https://github.com/RishikaBhatKuthyar" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="ri-github-fill text-2xl"></i>
        <span className="sr-only">GitHub</span>
      </motion.a>
      <motion.a 
        href="https://www.linkedin.com/in/rishikabhat/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="ri-linkedin-fill text-2xl"></i>
        <span className="sr-only">LinkedIn</span>
      </motion.a>
    </div>
  );
};

export default SocialLinks;
