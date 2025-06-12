// import { motion } from "framer-motion";
// import resumePng from "@/assets/resume.png";

// const ResumePage = () => {
//   return (
//     <div className="min-h-screen pt-24 bg-white dark:bg-black">
//       {/* Hero Section for Resume */}
//       <section className="relative overflow-hidden py-20 bg-white dark:bg-black">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-16 right-16 w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
//           <div className="absolute bottom-16 left-16 w-14 h-14 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse animation-delay-1000"></div>
//           <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse animation-delay-500"></div>
//         </div>
//         <motion.div
//           className="container mx-auto px-4 text-center relative z-10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
//             My <span className="text-yellow-500">Resume</span>
//           </h1>
//           <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto animate-fade-in-left">
//             A comprehensive overview of my professional journey and achievements
//           </p>
//         </motion.div>
//       </section>
      
//       {/* Resume Content */}
//       <div className="py-16 bg-white dark:bg-black">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto p-8 rounded-xl flex flex-col items-center bg-white dark:bg-neutral-900 shadow">
//             {/* Resume Image Preview */}
//             <div className="w-full flex justify-center mb-8">
//               <img
//                 src={resumePng}
//                 alt="Resume"
//                 className="rounded-lg shadow-lg max-w-full max-h-[900px] border border-gray-200 dark:border-gray-700 bg-white"
//               />
//             </div>
//             {/* Download Resume Button */}
//             <div className="text-center flex flex-col gap-4 md:flex-row md:justify-center">
//               <a
//                 href={resumePng}
//                 download="RishikaBhatKuthyar_Resume.png"
//                 className="btn-gradient px-8 py-3 text-white font-semibold rounded-lg hover:scale-105 transition-transform inline-block"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumePage;

import { motion } from "framer-motion";
import resumePng from "@/assets/resume.png";

const ResumePage = () => {
  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-black">
      {/* Hero Section for Resume */}
      <section className="gradient-bg-cool relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-16 right-16 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-14 h-14 bg-white rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-white rounded-full animate-pulse animation-delay-500"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            My <span className="text-yellow-300">Resume</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-left">
            A comprehensive overview of my professional journey and achievements
          </p>
        </motion.div>
      </section>
      
      {/* Resume Content */}
      <div className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Resume Image Preview */}
          <div className="w-full flex justify-center mb-8">
            <img
              src={resumePng}
              alt="Resume"
              className="rounded-lg shadow-lg max-w-full max-h-[900px] border border-gray-200 dark:border-gray-700 bg-white"
            />
          </div>
          {/* Download Resume Button */}
          <div className="text-center">
            <a
              href={resumePng}
              download="RishikaBhatKuthyar_Resume.png"
              className="btn-gradient px-8 py-3 text-white font-semibold rounded-lg hover:scale-105 transition-transform inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;