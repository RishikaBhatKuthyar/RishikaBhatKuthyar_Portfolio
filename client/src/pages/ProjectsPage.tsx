import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section for Projects */}
      <section className="gradient-bg-blue relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-16 h-16 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-20 h-20 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            My <span className="text-yellow-300">Projects</span>
          </h1>
        </motion.div>
      </section>
      
      {/* Projects Content */}
      <div className="gradient-bg-cool py-16">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ProjectsPage;