import { Link } from "react-router-dom";
import { useKeyboardShortcuts } from "../../hooks/use-keyboard-shortcuts";
import './Header.module.css';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  useKeyboardShortcuts();

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Developer Portfolio
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            <i className="ri-moon-line dark:hidden text-xl"></i>
            <i className="ri-sun-line hidden dark:block text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;