import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getSkillLevel } from "@/utils/helpers";

interface SkillProgressBarProps {
  name: string;
  percentage: number;
  icon?: string;
  delay?: number;
  className?: string;
}

export default function SkillProgressBar({ 
  name, 
  percentage, 
  icon, 
  delay = 0,
  className 
}: SkillProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate the progress bar
      const animationTimer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 100);
      return () => clearTimeout(animationTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, percentage]);

  const skillLevel = getSkillLevel(percentage);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <i className={`${icon} text-lg text-blue-600 dark:text-blue-400`} />
          )}
          <span className="font-medium text-gray-900 dark:text-white">
            {name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {skillLevel}
          </span>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={cn(
              "h-2 rounded-full transition-all duration-1000 ease-out",
              "bg-gradient-to-r from-blue-500 to-purple-600",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{
              width: `${animatedPercentage}%`,
              transition: isVisible ? `width 1s ease-out ${delay}ms` : undefined
            }}
          />
        </div>
        
        {/* Skill level indicator */}
        <div className="absolute top-0 right-0 -mt-1">
          <div className={cn(
            "w-3 h-3 rounded-full border-2 border-white dark:border-gray-800",
            percentage >= 90 ? "bg-green-500" :
            percentage >= 70 ? "bg-blue-500" :
            percentage >= 50 ? "bg-yellow-500" :
            percentage >= 30 ? "bg-orange-500" : "bg-red-500"
          )} />
        </div>
      </div>
    </div>
  );
}