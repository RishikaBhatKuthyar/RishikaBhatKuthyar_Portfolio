import { Link } from "wouter";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-bg-dark text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 gradient-bg-primary"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-3xl font-bold gradient-text-accent text-white">RBK</Link>
              <p className="text-gray-300 mt-2 text-center md:text-left">Software Engineer & Web Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/RishikaBhatKuthyar" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/rishikabhat/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 my-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-gray-400">
                &copy; {currentYear} RBK. All rights reserved.
              </p>
            </div>
            
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/skills" className="text-gray-400 hover:text-white transition-colors">Skills</Link></li>
                <li><Link href="/experience" className="text-gray-400 hover:text-white transition-colors">Experience</Link></li>
                <li><Link href="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>

                <li><Link href="/resume" className="text-gray-400 hover:text-white transition-colors">Resume</Link></li>
                {/* <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li> */}
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
