import { motion } from "framer-motion";
import { Link } from "wouter";
import SocialLinks from "@/components/SocialLinks";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 px-4 gradient-bg-hero relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse animation-delay-500"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Hello, I'm <span className="text-yellow-300 animate-pulse-glow">Rishika Bhat</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-left">
        Software Engineer passionate about solving real-time challenges with scalable, AI-driven solutions using Java, Python, Spring Boot, and Docker.

          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-in-right">
            <Link href="/projects">
              <motion.div 
                className="btn-gradient cursor-pointer inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div 
                className="px-6 py-3 glass-morphism text-white font-medium rounded-lg transition-all duration-300 hover-lift cursor-pointer inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.div>
            </Link>
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
