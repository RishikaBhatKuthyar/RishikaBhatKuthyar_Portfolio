import { FC } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [location] = useLocation();

  // Check if the current route matches the link
  const isActiveRoute = (route: string) => {
    if (route === '/' && location === '/') return true;
    if (route !== '/' && location.startsWith(route)) return true;
    return false;
  };
  
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
      <ul className="flex flex-col space-y-4">
        <li>
          <Link 
            href="/" 
            className={cn(
              "block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium",
              isActiveRoute("/") && "text-primary-600 dark:text-primary-400"
            )}
            onClick={onClose}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/projects" 
            className={cn(
              "block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium",
              isActiveRoute("/projects") && "text-primary-600 dark:text-primary-400"
            )}
            onClick={onClose}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            href="/skills" 
            className={cn(
              "block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium",
              isActiveRoute("/skills") && "text-primary-600 dark:text-primary-400"
            )}
            onClick={onClose}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            href="/experience" 
            className={cn(
              "block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium",
              isActiveRoute("/experience") && "text-primary-600 dark:text-primary-400"
            )}
            onClick={onClose}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link 
            href="/resume" 
            className={cn(
              "block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium",
              isActiveRoute("/resume") && "text-primary-600 dark:text-primary-400"
            )}
            onClick={onClose}
          >
            Resume
          </Link>
        </li>
        {/* <li>
          <Link 
            href="/blog" 
            className={cn(
              "block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium",
              isActiveRoute("/blog") && "text-primary-600 dark:text-primary-400"
            )}
            onClick={onClose}
          >
            Blog
          </Link>
        </li> */}
        <li>
          <Link 
            href="/contact" 
            className={cn(
              "block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium",
              isActiveRoute("/contact") && "text-primary-600 dark:text-primary-400"
            )}
            onClick={onClose}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
