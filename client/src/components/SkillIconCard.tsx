// import { FC, useState } from "react";
// import { motion } from "framer-motion";

// interface SkillIconCardProps {
//   name: string;
//   icon?: string;
//   delay?: number;
// }

// const SkillIconCard: FC<SkillIconCardProps> = ({ name, icon, delay = 0 }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const getDefaultIcon = () => {
//     const skill = name.toLowerCase();
//     if (skill.includes("javascript")) return "ri-javascript-fill";
//     if (skill.includes("typescript")) return "ri-code-s-slash-line";
//     if (skill.includes("react")) return "ri-reactjs-line";
//     if (skill.includes("node")) return "ri-nodejs-line";
//     if (skill.includes("html")) return "ri-html5-fill";
//     if (skill.includes("css")) return "ri-css3-fill";
//     if (skill.includes("mongo")) return "ri-database-2-line";
//     if (skill.includes("sql") || skill.includes("postgres")) return "ri-database-line";
//     if (skill.includes("express")) return "ri-server-line";
//     if (skill.includes("next")) return "ri-nextjs-line";
//     if (skill.includes("tailwind")) return "ri-wind-line";
//     if (skill.includes("kafka")) return "ri-exchange-cny-line";
//     if (skill.includes("rabbit")) return "ri-message-2-line";
//     if (skill.includes("swagger")) return "ri-file-code-line";
//     if (skill.includes("postman")) return "ri-mail-send-line";
//     if (skill.includes("jira")) return "ri-task-line";
//     if (skill.includes("ssrs")) return "ri-bar-chart-box-line";
//     if (skill.includes("agile")) return "ri-run-line";
//     if (skill.includes("git")) return "ri-git-branch-line";
//     return "ri-code-s-slash-line";
//   };

//   const iconClass = icon || getDefaultIcon();

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       whileHover={{ scale: 1.05 }}
//       transition={{ delay }}
//     >
//       <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700/50 rounded-full mb-3">
//         <i className={`${iconClass} text-3xl text-gray-800 dark:text-gray-300`} title={name}></i>
//       </div>
//       <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">{name}</p>
//     </motion.div>
//   );
// };

// export default SkillIconCard;
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface SkillIconCardProps {
  name: string;
  icon?: string | React.ComponentType<{ className?: string; title?: string }>;
  delay?: number;
}

const SkillIconCard: FC<SkillIconCardProps> = ({ name, icon, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDefaultIcon = () => {
    const skill = name.toLowerCase();
    if (skill.includes("javascript")) return "ri-javascript-fill";
    if (skill.includes("typescript")) return "ri-code-s-slash-line";
    if (skill.includes("react")) return "ri-reactjs-line";
    if (skill.includes("node")) return "ri-nodejs-line";
    if (skill.includes("html")) return "ri-html5-fill";
    if (skill.includes("css")) return "ri-css3-fill";
    if (skill.includes("mongo")) return "ri-database-2-line";
    if (skill.includes("sql") || skill.includes("postgres")) return "ri-database-line";
    if (skill.includes("express")) return "ri-server-line";
    if (skill.includes("next")) return "ri-nextjs-line";
    if (skill.includes("tailwind")) return "ri-wind-line";
    if (skill.includes("kafka")) return "ri-exchange-cny-line";
    if (skill.includes("rabbit")) return "ri-message-2-line";
    if (skill.includes("swagger")) return "ri-file-code-line";
    if (skill.includes("postman")) return "ri-mail-send-line";
    if (skill.includes("jira")) return "ri-task-line";
    if (skill.includes("ssrs")) return "ri-bar-chart-box-line";
    if (skill.includes("agile")) return "ri-run-line";
    if (skill.includes("git")) return "ri-git-branch-line";
    return "ri-code-s-slash-line";
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ delay }}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700/50 rounded-full mb-3">
 {typeof icon === "string" ? (
  <i className={`${icon} text-3xl text-gray-800 dark:text-gray-300`} title={name}></i>
) : icon ? (
  (() => {
    const IconComponent = icon;
    return <IconComponent className="text-3xl text-gray-800 dark:text-gray-300" title={name} />;
  })()
) : (
  <i className={`${getDefaultIcon()} text-3xl text-gray-800 dark:text-gray-300`} title={name}></i>
)}
        </div>  
      <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">{name}</p>
    </motion.div>
  );
};

export default SkillIconCard;