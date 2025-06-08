import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

const Header = () => {
  const { isDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Check if the current route matches the link
  const isActiveRoute = (route: string) => {
    if (route === '/' && location === '/') return true;
    if (route !== '/' && location.startsWith(route)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 glass-morphism backdrop-blur-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text-primary hover:scale-105 transition-transform duration-300">
            JD
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:gradient-text-primary font-medium transition-all duration-300 hover:scale-105",
                    isActiveRoute("/") && "gradient-text-primary"
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors",
                    isActiveRoute("/projects") && "text-primary-600 dark:text-primary-400"
                  )}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/skills" 
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors",
                    isActiveRoute("/skills") && "text-primary-600 dark:text-primary-400"
                  )}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="/experience" 
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors",
                    isActiveRoute("/experience") && "text-primary-600 dark:text-primary-400"
                  )}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="/resume" 
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors",
                    isActiveRoute("/resume") && "text-primary-600 dark:text-primary-400"
                  )}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors",
                    isActiveRoute("/blog") && "text-primary-600 dark:text-primary-400"
                  )}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={cn(
                    "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors",
                    isActiveRoute("/contact") && "text-primary-600 dark:text-primary-400"
                  )}
                >
                  Contact
                </Link>
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
