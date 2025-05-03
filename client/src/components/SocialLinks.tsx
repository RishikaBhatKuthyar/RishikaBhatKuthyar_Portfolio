import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <motion.a 
        href="https://github.com/" 
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
        href="https://linkedin.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="ri-linkedin-fill text-2xl"></i>
        <span className="sr-only">LinkedIn</span>
      </motion.a>
      <motion.a 
        href="https://twitter.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="ri-twitter-fill text-2xl"></i>
        <span className="sr-only">Twitter</span>
      </motion.a>
    </div>
  );
};

export default SocialLinks;
