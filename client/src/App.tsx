import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/layouts/MainLayout";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import SkillsPage from "@/pages/SkillsPage";
import ExperiencePage from "@/pages/ExperiencePage";
import ResumePage from "@/pages/ResumePage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import { useState, useEffect } from "react";

// Keyboard shortcuts info component shown at the bottom of the page
const KeyboardShortcutInfo = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the info after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Show help dialog when clicking on the info
  const handleShowHelp = () => {
    const event = new CustomEvent('toggle-shortcut-help');
    document.dispatchEvent(event);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 px-4 text-sm flex items-center gap-2 z-50 animate-fade-in-up">
      <span>Press</span>
      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs">?</kbd>
      <span>for keyboard shortcuts</span>
      <button 
        onClick={handleShowHelp}
        className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
      >
        View All
      </button>
      <button 
        onClick={() => setIsVisible(false)}
        className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <span className="sr-only">Dismiss</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      <KeyboardShortcutInfo />
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
