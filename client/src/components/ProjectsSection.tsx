import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack" | "mobile";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);

  // Extract all unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Handle category filter click
  const handleFilterClick = (filter: ProjectCategory) => {
    setIsFiltering(true);
    setActiveFilter(filter);
    setActiveTag(null);
    setSearchQuery("");
  };

  // Handle tag filter click
  const handleTagClick = (tag: string | null) => {
    setIsFiltering(true);
    setActiveTag(tag);
    setActiveFilter("all");
    setSearchQuery("");
  };

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFiltering(true);
    setSearchQuery(e.target.value);
    setActiveFilter("all");
    setActiveTag(null);
  };

  // Apply filters whenever they change
  useEffect(() => {
    const filterProjects = () => {
      let result = projects;
      
      // Apply category filter
      if (activeFilter !== "all") {
        result = result.filter(project => project.category === activeFilter);
      }
      
      // Apply tag filter
      if (activeTag) {
        result = result.filter(project => project.tags.includes(activeTag));
      }
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(
          project =>
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      setFilteredProjects(result);
      setTimeout(() => setIsFiltering(false), 600);
    };
    
    filterProjects();
  }, [activeFilter, activeTag, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here's a selection of my recent work. Each project demonstrates different skills and technologies.
          </p>
        </motion.div>
        
        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="ri-search-line text-gray-500 dark:text-gray-400"></i>
            </div>
            <input
              type="text"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        {/* Filter buttons */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center mb-3 text-gray-800 dark:text-gray-200">Filter by Type</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <motion.button 
              onClick={() => handleFilterClick("all")}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === "all" 
                  ? "bg-primary-600 text-white shadow-md" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            <motion.button 
              onClick={() => handleFilterClick("frontend")}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === "frontend" 
                  ? "bg-primary-600 text-white shadow-md" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Frontend
            </motion.button>
            <motion.button 
              onClick={() => handleFilterClick("backend")}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === "backend" 
                  ? "bg-primary-600 text-white shadow-md" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Backend
            </motion.button>
            <motion.button 
              onClick={() => handleFilterClick("fullstack")}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === "fullstack" 
                  ? "bg-primary-600 text-white shadow-md" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Full Stack
            </motion.button>
            <motion.button 
              onClick={() => handleFilterClick("mobile")}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === "mobile" 
                  ? "bg-primary-600 text-white shadow-md" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mobile
            </motion.button>
          </div>
          
          <h3 className="text-lg font-semibold text-center mb-3 text-gray-800 dark:text-gray-200">Filter by Technology</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <motion.button 
              onClick={() => handleTagClick(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeTag === null 
                  ? "bg-primary-600 text-white shadow-sm" 
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Technologies
            </motion.button>
            
            {allTags.map(tag => (
              <motion.button 
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeTag === tag 
                    ? "bg-primary-600 text-white shadow-sm" 
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Results count */}
        <div className="text-center mb-8 text-gray-700 dark:text-gray-300">
          {filteredProjects.length === 0 ? (
            <p>No projects match your filters. Try adjusting your criteria.</p>
          ) : (
            <p>Showing {filteredProjects.length} of {projects.length} projects</p>
          )}
        </div>
        
        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeFilter}-${activeTag}-${searchQuery}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                layout
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-5xl mb-4 text-gray-400 dark:text-gray-600 flex justify-center">
              <i className="ri-search-line"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            <motion.button
              onClick={() => {
                setActiveFilter("all");
                setActiveTag(null);
                setSearchQuery("");
              }}
              className="mt-6 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
