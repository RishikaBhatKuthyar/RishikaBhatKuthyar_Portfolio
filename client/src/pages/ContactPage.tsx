import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section for Contact */}
      <section className="gradient-bg-warm relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-18 h-18 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-14 h-14 bg-white rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-white rounded-full animate-pulse animation-delay-2000"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Get In <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-left">
            Have a project in mind or just want to say hello? Let's create something amazing together
          </p>
        </motion.div>
      </section>
      
      {/* Contact Content */}
      <div className="gradient-bg-purple py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
                <ContactForm />
              </motion.div>
              
              {/* Contact Information */}
              <div>
                <motion.div 
                  className="glass-card p-8 rounded-xl mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
                
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-lg mr-4">
                        <i className="ri-mail-line text-xl text-yellow-300"></i>
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Email</div>
                        <a href="mailto:john.doe@example.com" className="text-white hover:text-yellow-300 transition-colors">john.doe@example.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-lg mr-4">
                        <i className="ri-phone-line text-xl text-yellow-300"></i>
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Phone</div>
                        <a href="tel:+11234567890" className="text-white hover:text-yellow-300 transition-colors">+1 (123) 456-7890</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-lg mr-4">
                        <i className="ri-map-pin-line text-xl text-yellow-300"></i>
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Location</div>
                        <div className="text-white">San Francisco, California, USA</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="glass-card p-8 rounded-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-xl font-bold text-white mb-6">Connect With Me</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      <i className="ri-github-fill text-2xl mr-3 text-white"></i>
                      <span className="text-white font-medium">GitHub</span>
                    </a>
                    
                    <a href="#" className="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      <i className="ri-linkedin-fill text-2xl mr-3 text-blue-300"></i>
                      <span className="text-white font-medium">LinkedIn</span>
                    </a>
                    
                    <a href="#" className="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      <i className="ri-twitter-fill text-2xl mr-3 text-blue-300"></i>
                      <span className="text-white font-medium">Twitter</span>
                    </a>
                    
                    <a href="#" className="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      <i className="ri-medium-fill text-2xl mr-3 text-white"></i>
                      <span className="text-white font-medium">Medium</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;