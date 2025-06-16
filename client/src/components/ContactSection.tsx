import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Contact Information */}
          <div>
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md mb-8 card-dark"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <i className="ri-mail-line text-xl text-primary-600 dark:text-primary-400"></i>
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Email</div>
                    <a href="mailto:kuthyar.ri@northeastern.edu" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">kuthyar.ri@northeastern.edu</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <i className="ri-phone-line text-xl text-primary-600 dark:text-primary-400"></i>
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Phone</div>
                    <a href="tel:+11234567890" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">+1 (857) 423-8702</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <i className="ri-map-pin-line text-xl text-primary-600 dark:text-primary-400"></i>
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Location</div>
                    <div className="text-gray-900 dark:text-white">Boston, MA, USA</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md card-dark"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/RishikaBhatKuthyar" className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <i className="ri-github-fill text-2xl mr-3 text-gray-800 dark:text-white"></i>
                  <span className="text-gray-800 dark:text-white font-medium">GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/rishikabhat/" className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <i className="ri-linkedin-fill text-2xl mr-3 text-blue-600"></i>
                  <span className="text-gray-800 dark:text-white font-medium">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;