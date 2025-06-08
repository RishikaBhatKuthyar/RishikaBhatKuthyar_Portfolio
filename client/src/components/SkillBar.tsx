import { FC, useState } from "react";
import { motion } from "framer-motion";
import { getSkillLevel } from "@/utils/helpers";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  icon?: string;
  delay?: number;
  className?: string;
}

const SkillBar: FC<SkillBarProps> = ({ name, percentage, icon, delay = 0, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
      className="p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex flex-col items-center"
      style={{
        backgroundColor: isHovered ? 'hsl(240 4.8% 95.9%)' : 'transparent',
        boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <motion.div 
        className="flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-gray-200 dark:bg-gray-700/50"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <i className={`${iconClass} text-3xl text-gray-700 dark:text-gray-300`}></i>
      </motion.div>
      
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
      
      {/* Bottom border that appears on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gray-500 dark:bg-gray-600 rounded-b-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillBar;
