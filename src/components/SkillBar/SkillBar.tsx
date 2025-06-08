import { FC, useState } from "react";
import { motion } from "framer-motion";
import './SkillBar.module.css';

interface SkillBarProps {
  name: string;
  percentage: number;
  icon?: string;
  delay?: number;
}

const SkillBar: FC<SkillBarProps> = ({ name, percentage, icon, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
      className="skill-card"
      style={{
        backgroundColor: isHovered ? "hsl(240 4.8% 95.9%)" : "transparent",
        boxShadow: isHovered ? "0 4px 12px rgba(0, 0, 0, 0.05)" : "none"
      }}
    >
      <motion.div 
        className="skill-icon-container"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <i className={`${iconClass} text-3xl text-gray-700 dark:text-gray-300`}></i>
      </motion.div>
      
      <h3 className="skill-name">{name}</h3>
      
      <motion.div 
        className="skill-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillBar;