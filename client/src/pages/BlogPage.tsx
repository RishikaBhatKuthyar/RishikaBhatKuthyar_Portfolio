import { motion } from "framer-motion";
import { useState } from "react";

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
  }
];

const BlogPage = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags from all blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  // Filter posts based on selected tag
  const filteredPosts = filter 
    ? blogPosts.filter(post => post.tags.includes(filter))
    : blogPosts;
  
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
          
          {/* Tag filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === null 
                  ? "bg-primary-600 text-white" 
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === tag 
                    ? "bg-primary-600 text-white" 
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Blog posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.id}`} 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline mt-auto"
                >
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;