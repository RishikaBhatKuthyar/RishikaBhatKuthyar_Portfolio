import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="relative inline-block w-12 align-middle transition duration-200 ease-in">
      <label htmlFor="dark-toggle" className="cursor-pointer">
        <input 
          type="checkbox" 
          id="dark-toggle" 
          className="sr-only peer"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="h-6 w-11 rounded-full bg-gray-300 dark:bg-gray-600 peer-checked:bg-primary-500"></div>
        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white dark:bg-gray-300 transition-all peer-checked:translate-x-5"></div>
        <span className="sr-only">Toggle Dark Mode</span>
      </label>
    </div>
  );
};

export default ThemeToggle;
