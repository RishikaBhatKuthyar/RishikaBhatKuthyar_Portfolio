import { motion } from "framer-motion";
import { workExperience } from "@/lib/data";
import TimelineItem from "@/components/TimelineItem";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section for Experience */}
      <section className="gradient-bg-accent relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-16 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-1500"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-500"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            My <span className="text-yellow-300">Experience</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-left">
            Professional journey and milestones in software engineering
          </p>
        </motion.div>
      </section>
      
      {/* Experience Content */}
      <div className="gradient-bg-cool py-16">
        <div className="container mx-auto px-4">
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
    </div>
  );
};

export default ExperiencePage;