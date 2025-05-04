import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";

// Define blog post interface
interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    date: "April 15, 2023",
    excerpt: "Learn how to build React applications that are accessible to all users, including those with disabilities. This post covers ARIA attributes, keyboard navigation, and more.",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Accessibility", "Frontend"]
  },
  {
    id: 2,
    title: "State Management in 2023: Beyond Redux",
    date: "March 2, 2023",
    excerpt: "Explore modern state management solutions for React applications beyond Redux. We'll look at Context API, Zustand, Recoil, and other alternatives.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "State Management", "Frontend"]
  },
  {
    id: 3,
    title: "Setting Up a TypeScript Project from Scratch",
    date: "January 18, 2023",
    excerpt: "A step-by-step guide to setting up a new TypeScript project with the best configurations for development, testing, and production.",
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "JavaScript", "Tooling"]
  },
  {
    id: 4,
    title: "Building a RESTful API with Node.js and Express",
    date: "December 5, 2022",
    excerpt: "Learn how to create a robust RESTful API using Node.js and Express. This tutorial covers routing, middleware, error handling, and best practices.",
    imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Express", "Backend", "API"]
  },
  {
    id: 5,
    title: "Advanced TypeScript Patterns",
    date: "November 15, 2022",
    excerpt: "Dive deep into TypeScript with advanced patterns like conditional types, mapped types, and template literal types to make your code more robust.",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "JavaScript", "Advanced"]
  },
  {
    id: 6,
    title: "Optimizing React Performance",
    date: "October 3, 2022",
    excerpt: "Learn techniques to identify and fix performance bottlenecks in React applications, including React.memo, useMemo, useCallback, and code splitting.",
    imageUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Performance", "Frontend"]
  }
];

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isFiltering, setIsFiltering] = useState(false);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  
  // Get unique tags from all blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  // Handle tag filter click
  const handleTagClick = (tag: string | null) => {
    setIsFiltering(true);
    setSelectedTag(tag);
  };
  
  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFiltering(true);
    setSearchQuery(e.target.value);
  };
  
  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "date-desc" || value === "date-asc" || value === "title-desc" || value === "title-asc") {
      const [field, order] = value.split("-") as ["date" | "title", "asc" | "desc"];
      setSortBy(field);
      setSortOrder(order);
    }
  };
  
  // Apply filters and sorting whenever they change
  useEffect(() => {
    const filterAndSortPosts = () => {
      // Start with all blog posts
      let result = [...blogPosts];
      
      // Apply tag filter
      if (selectedTag) {
        result = result.filter(post => post.tags.includes(selectedTag));
      }
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(
          post =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      // Apply sorting
      result.sort((a, b) => {
        if (sortBy === "date") {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
        } else {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          return sortOrder === "asc" 
            ? titleA.localeCompare(titleB) 
            : titleB.localeCompare(titleA);
        }
      });
      
      setFilteredPosts(result);
      setTimeout(() => setIsFiltering(false), 300);
    };
    
    filterAndSortPosts();
  }, [selectedTag, searchQuery, sortBy, sortOrder]);
  
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
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Thoughts, tutorials, and insights about web development and software engineering.
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
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Tag filters */}
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            <motion.button 
              onClick={() => handleTagClick(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === null 
                  ? "bg-primary-600 text-white shadow-sm" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Topics
            </motion.button>
            
            {allTags.map(tag => (
              <motion.button 
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag 
                    ? "bg-primary-600 text-white shadow-sm" 
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
          
          {/* Sort dropdown */}
          <div className="relative w-full md:w-auto">
            <select
              className="block appearance-none w-full md:w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={`${sortBy}-${sortOrder}`}
              onChange={handleSortChange}
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
        </div>
        
        {/* Results count */}
        <div className="text-center mb-8 text-gray-700 dark:text-gray-300">
          {filteredPosts.length === 0 ? (
            <p>No articles match your filters. Try adjusting your criteria.</p>
          ) : (
            <p>Showing {filteredPosts.length} of {blogPosts.length} articles</p>
          )}
        </div>
        
        {/* Blog posts grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${selectedTag}-${searchQuery}-${sortBy}-${sortOrder}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-full flex flex-col"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                layout
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-48 object-cover transition-transform hover:scale-105 hover:brightness-75 duration-300"
                  />
                  <div className="absolute top-0 left-0 w-full p-2 bg-gradient-to-b from-black/50 to-transparent">
                    <p className="text-white text-sm font-medium">{post.date}</p>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, i) => (
                      <motion.span 
                        key={i} 
                        className="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-medium rounded"
                        whileHover={{ y: -2 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagClick(tag);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{post.excerpt}</p>
                  
                  <Link href={`/blog/${post.id}`}>
                    <motion.div 
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline mt-auto inline-flex items-center cursor-pointer"
                      whileHover={{ x: 3 }}
                    >
                      Read more <i className="ri-arrow-right-line ml-1"></i>
                    </motion.div>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-5xl mb-4 text-gray-400 dark:text-gray-600 flex justify-center">
              <i className="ri-search-line"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">No articles found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            <motion.button
              onClick={() => {
                setSelectedTag(null);
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
    </div>
  );
};

export default BlogPage;