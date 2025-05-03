import { motion } from "framer-motion";
import { workExperience } from "@/lib/data";
import TimelineItem from "@/components/TimelineItem";

const ExperiencePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My professional journey as a software engineer.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {workExperience.map((experience, index) => (
                <TimelineItem
                  key={index}
                  title={experience.title}
                  company={experience.company}
                  period={experience.period}
                  description={experience.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;