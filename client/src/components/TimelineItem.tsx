import { FC } from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

const TimelineItem: FC<TimelineItemProps> = ({ title, company, period, description, index }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="timeline-dot absolute left-0 md:left-1/2 top-0 bg-primary-500 border-4 border-primary-100 dark:border-gray-800 transform -translate-x-1/2 w-3 h-3 rounded-full"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:text-right md:pr-8">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
          <div className="text-primary-600 dark:text-primary-400 font-medium">{company}</div>
          <div className="text-gray-600 dark:text-gray-400">{period}</div>
        </div>
        
        <div className="md:pl-8">
          <p className="text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
