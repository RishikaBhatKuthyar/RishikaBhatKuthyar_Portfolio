import { motion } from "framer-motion";
import SkillsSection from "@/components/SkillsSection";

const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section for Skills */}
      <section className="gradient-bg-primary relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 right-10 w-24 h-24 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            My <span className="text-yellow-300">Skills</span>
          </h1>
        </motion.div>
      </section>
      
      {/* Skills Content */}
      <div className="gradient-bg-purple py-16">
        <SkillsSection />
      </div>
    </div>
  );
};

export default SkillsPage;