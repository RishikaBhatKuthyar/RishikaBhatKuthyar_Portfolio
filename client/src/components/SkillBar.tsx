import { FC, useState } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number; // Still used for level calculation, but not displayed
  icon?: string; // Icon class or URL
  delay?: number;
}

const SkillBar: FC<SkillBarProps> = ({ name, percentage, icon, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to get skill level based on percentage
  const getSkillLevel = (percent: number) => {
    if (percent >= 90) return "Expert";
    if (percent >= 80) return "Advanced";
    if (percent >= 70) return "Intermediate";
    if (percent >= 60) return "Competent";
    return "Beginner";
  };
  
  // Function for default icon if none provided
  const getDefaultIcon = () => {
    if (name.toLowerCase().includes("javascript") || name.toLowerCase().includes("js")) return "ri-javascript-fill";
    if (name.toLowerCase().includes("typescript") || name.toLowerCase().includes("ts")) return "ri-file-code-line";
    if (name.toLowerCase().includes("react")) return "ri-reactjs-line";
    if (name.toLowerCase().includes("node")) return "ri-nodejs-line";
    if (name.toLowerCase().includes("html")) return "ri-html5-fill";
    if (name.toLowerCase().includes("css")) return "ri-css3-fill";
    if (name.toLowerCase().includes("tailwind")) return "ri-wind-line";
    if (name.toLowerCase().includes("mongo")) return "ri-database-2-line";
    if (name.toLowerCase().includes("sql") || name.toLowerCase().includes("postgres")) return "ri-database-line";
    if (name.toLowerCase().includes("express")) return "ri-server-line";
    if (name.toLowerCase().includes("next")) return "ri-next-js-fill";
    return "ri-code-s-slash-line";
  };
  
  const iconClass = icon || getDefaultIcon();
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-lg transition-all duration-300 hover:bg-beige-100 dark:hover:bg-gray-800 flex flex-col items-center"
      style={{
        backgroundColor: isHovered ? 'var(--color-beige-100)' : 'transparent',
        boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <motion.div 
        className="flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-beige-200 dark:bg-beige-900/30"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <i className={`${iconClass} text-3xl text-beige-700 dark:text-beige-300`}></i>
      </motion.div>
      
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{name}</h3>
      
      <motion.span 
        className="text-sm font-medium text-beige-600 dark:text-beige-400 bg-beige-100 dark:bg-beige-900/20 px-2 py-1 rounded-full"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {getSkillLevel(percentage)}
      </motion.span>
      
      {/* Bottom border that appears on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-beige-500 dark:bg-beige-700 rounded-b-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillBar;
