import { FC } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
      <ul className="flex flex-col space-y-4">
        <li>
          <a 
            href="#home" 
            className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            onClick={onClose}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            onClick={onClose}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            onClick={onClose}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            onClick={onClose}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            onClick={onClose}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
