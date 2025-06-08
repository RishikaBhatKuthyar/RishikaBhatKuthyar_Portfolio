import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// Import ReviewsSection
import ReviewsSection from "../components/ReviewsSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="gradient-bg-cool">
        <AboutSection />
      </div>
      <div className="bg-white dark:bg-gray-900">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default HomePage;