import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hello, I'm <span className="text-primary-600 dark:text-primary-400">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Software Engineer passionate about building modern web applications with TypeScript and React
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="#projects" 
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 font-medium rounded-lg border border-primary-600 dark:border-primary-400 transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
          <div className="mt-12">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
