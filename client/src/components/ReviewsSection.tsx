import { motion } from "framer-motion";

// Define the Review interface
interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  avatarUrl: string;
}

// Sample reviews data
const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Engineering Manager",
    company: "TechCorp Inc.",
    text: "John is one of the most talented developers I've had the pleasure to work with. His ability to translate complex requirements into elegant code is remarkable. He consistently delivers high-quality work and elevates the entire team with his knowledge sharing.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Tech Lead",
    company: "InnovateSoft",
    text: "Having worked with John on multiple projects, I can confidently say he's a developer who truly cares about code quality and user experience. His attention to detail and problem-solving skills make him an invaluable team member.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "Digital Solutions",
    text: "John has a rare combination of technical expertise and strong communication skills. He doesn't just write great code; he understands the business context and offers valuable insights that improve our products. Always a pleasure to collaborate with.",
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Peer Reviews</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            What my colleagues and clients say about working with me.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 flex-grow">
                <div className="flex items-center mb-4">
                  <i className="ri-double-quotes-l text-3xl text-primary-500 opacity-50"></i>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={review.avatarUrl} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-500"
                />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{review.name}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {review.position}, {review.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;