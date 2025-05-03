import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

const Header = () => {
  const { isDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-primary-700 dark:text-primary-400">
            JD
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
