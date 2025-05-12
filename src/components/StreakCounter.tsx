
import React from "react";
import { loadUserData } from "../services/storageService";

interface StreakCounterProps {
  className?: string;
}

const StreakCounter: React.FC<StreakCounterProps> = ({ className = "" }) => {
  const { currentStreak } = loadUserData();

  // Prepare streak display elements
  const streakCircles = [];
  for (let i = 0; i < 5; i++) {
    // Show up to 5 circles, filled if within current streak
    streakCircles.push(
      <div 
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < currentStreak 
            ? "bg-primary animate-pulse-scale" 
            : "bg-muted"
        }`}
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-xs text-muted-foreground mb-1">Current Streak</div>
      <div className="text-lg font-bold mb-1">{currentStreak} days</div>
      <div className="flex space-x-1">
        {streakCircles}
        {currentStreak > 5 && (
          <span className="text-xs text-muted-foreground ml-1 self-end">+{currentStreak - 5}</span>
        )}
      </div>
    </div>
  );
};

export default StreakCounter;
