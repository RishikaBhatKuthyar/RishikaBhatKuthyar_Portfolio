import { motion } from "framer-motion";

// Define the Review interface
interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
}

const reviews: Review[] = [
{
  id: 1,
  name: "Roopesh Unnamatla",
  position: "Architect",
  company: "Innova Solutions",
  text: "I had the pleasure of managing Rishika Bhat, who stood out for her exceptional teamwork, clear communication, and strong work ethic. She consistently went above and beyond expectations, demonstrating sharp analytical skills and a remarkable ability to understand requirements. For someone at her experience level, her leadership and initiative were truly impressive. I highly recommend Rishika and would gladly work with her again anytime."
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
              <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4 text-lg font-bold">
                {review.name.split(" ").map(n => n[0]).join("")}
              </div>
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