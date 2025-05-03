import { motion } from "framer-motion";
import SkillsSection from "@/components/SkillsSection";

const SkillsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white pt-24">
      <motion.div
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-12">My Skills</h1>
      </motion.div>
      <SkillsSection />
    </div>
  );
};

export default SkillsPage;