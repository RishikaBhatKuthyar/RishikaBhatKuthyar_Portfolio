import { FC, useState } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to determine color based on percentage
  const getBarColor = (percent: number) => {
    if (percent >= 90) return "bg-gradient-to-r from-primary-600 to-primary-500";
    if (percent >= 80) return "bg-gradient-to-r from-primary-500 to-blue-500";
    if (percent >= 70) return "bg-gradient-to-r from-blue-500 to-blue-400";
    if (percent >= 60) return "bg-gradient-to-r from-blue-400 to-cyan-500";
    return "bg-gradient-to-r from-cyan-500 to-cyan-400";
  };
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      className="p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
    >
      <div className="flex justify-between mb-1">
        <motion.span 
          className="text-gray-700 dark:text-gray-300 font-medium"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            color: isHovered ? "var(--color-primary-600)" : "currentColor"
          }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="text-gray-700 dark:text-gray-300 font-bold"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="skill-bar h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${getBarColor(percentage)} rounded-full relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        >
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-white opacity-20"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                x: ["0%", "100%", "0%"] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
        </motion.div>
      </div>
      
      {/* Skill level label */}
      <motion.div 
        className="mt-1 text-xs text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-gray-500 dark:text-gray-400 italic">
          {percentage >= 90 ? "Expert" : 
           percentage >= 80 ? "Advanced" : 
           percentage >= 70 ? "Intermediate" : 
           percentage >= 60 ? "Competent" : "Beginner"}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default SkillBar;
