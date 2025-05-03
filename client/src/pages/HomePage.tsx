import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// Import ReviewsSection
import ReviewsSection from "../components/ReviewsSection";

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
    </div>
  );
};

export default HomePage;