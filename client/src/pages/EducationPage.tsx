import { motion } from "framer-motion";
import { educationTimeline } from "@/lib/data";

const EducationPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="gradient-bg-cool relative overflow-hidden py-20">
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-yellow-300">Education</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Academic journey and key milestones
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
<div className="gradient-bg-cool py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12 relative">
        {educationTimeline.map((edu, idx) => (
          <div key={idx} className="relative md:flex md:items-center">
            {/* Left Side: Logo + Line */}
            <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 flex items-center justify-end relative">
              <div className="flex flex-col items-center relative z-10">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="h-16 w-16 object-contain rounded-full bg-white shadow mb-2"
                  />
                )}
                {/* Vertical Line */}
                <div className="w-px h-full bg-gray-300 dark:bg-gray-700 absolute top-full"></div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="md:w-1/2 bg-white dark:bg-neutral-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">{edu.institution}</h3>
              <div className="text-gray-600 dark:text-gray-300">{edu.degree}</div>
              <div className="text-gray-500 text-sm mb-2">{edu.period}</div>
              {edu.courses && (
                <div className="mb-2">
                  <span className="font-semibold text-gray-700 dark:text-gray-200">Courses:</span>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.skills && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 rounded text-xs">{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

</div>
  );
};

export default EducationPage;