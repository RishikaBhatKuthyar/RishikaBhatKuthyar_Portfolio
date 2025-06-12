



// import { motion } from "framer-motion";
// import { workExperience, extraExperience } from "@/lib/data";
// import TimelineItem from "@/components/TimelineItem";

// const ExperiencePage = () => {
//   return (
//     <div className="min-h-screen pt-24">
//       {/* Hero Section for Experience */}
//       <section className="gradient-bg-accent relative overflow-hidden py-20">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-16 left-16 w-20 h-20 bg-white rounded-full animate-pulse"></div>
//           <div className="absolute bottom-16 right-16 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-1500"></div>
//           <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-500"></div>
//         </div>
//         <motion.div
//           className="container mx-auto px-4 text-center relative z-10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
//             My <span className="text-yellow-300">Experience</span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-left">
//             Professional journey and milestones
//           </p>
//         </motion.div>
//       </section>
      
//       {/* Experience Content */}
//       <div className="gradient-bg-cool py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Vertical line */}
//               <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>
              
//               {/* Timeline items */}
//               <div className="space-y-12">
//                 {workExperience.map((experience, index) => (
//                   <TimelineItem
//                     key={index}
//                     title={experience.title}
//                     company={experience.company}
//                     period={experience.period}
//                     description={experience.description}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

// {/* Extracurricular Experience Section */}
// <div className="gradient-bg-cool py-16">
//   <div className="container mx-auto px-4">
//     <div className="max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-8 text-primary-600 dark:text-primary-400">Leadership & Extracurricular Experience</h2>
//       <div className="space-y-8">
//         {extraExperience.map((item, idx) => (
//           <div key={idx} className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow border border-gray-200 dark:border-gray-700">
//             <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
//               <div>
//                 <h4 className="text-lg font-semibold">{item.title}</h4>
//                 <div className="text-primary-600 dark:text-primary-400">{item.organization}</div>
//                 <div className="text-gray-500">{item.period}</div>
//               </div>
//               <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
//                 {item.skills.map(skill => (
//                   <span key={skill} className="px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 rounded text-xs">{skill}</span>
//                 ))}
//               </div>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
 
// </div>
//   );

// }
// export default ExperiencePage;

import { motion } from "framer-motion";
import { workExperience, extraExperience } from "@/lib/data";
import TimelineItem from "@/components/TimelineItem";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section for Experience */}
      <section className="gradient-bg-accent relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-16 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-1500"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-500"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            My <span className="text-yellow-300">Experience</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-left">
            Professional journey and milestones
          </p>
        </motion.div>
      </section>
      
      <div className="gradient-bg-cool py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Professional Experience */}
            <h2 className="text-3xl font-bold mb-10 text-primary-700 dark:text-primary-300 text-center">
              Professional Experience
            </h2>
            <div className="relative mb-20">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>
              {/* Timeline items */}
              <div className="space-y-12">
                {workExperience.map((experience, index) => (
                  <TimelineItem
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    period={experience.period}
                    description={experience.description}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center my-16">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
              <span className="mx-4 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">
                Leadership & Extracurricular
              </span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>

            {/* Leadership & Extracurricular Experience */}
            <div>
              <div className="space-y-8">
                {extraExperience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white/70 dark:bg-gray-800/70 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                      <div>
                        <h4 className="text-base font-semibold">{item.title}</h4>
                        <div className="text-primary-600 dark:text-primary-400 text-sm">{item.organization}</div>
                        <div className="text-gray-500 text-xs">{item.period}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        {item.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;