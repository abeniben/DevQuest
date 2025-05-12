
import React, { useState, useEffect } from "react";
import { Prompt } from "../data/prompts";
import { BookmarkCheck, Bookmark } from "lucide-react";
import { isPromptBookmarked, toggleBookmark } from "../services/storageService";

interface PromptCardProps {
  prompt: Prompt;
  showBookmark?: boolean;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, showBookmark = true }) => {
  const [bookmarked, setBookmarked] = useState(() => isPromptBookmarked(prompt.id));
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  
  // Typewriter effect
  useEffect(() => {
  setIsTyping(true);
  let i = 0;
  const text = prompt.question;
  let currentText = "";

  const typing = setInterval(() => {
    if (i < text.length) {
      currentText += text.charAt(i);
      setDisplayText(currentText);
      i++;
    } else {
      clearInterval(typing);
      setIsTyping(false);
    }
  }, 30);

  return () => clearInterval(typing);
}, [prompt.question]);


  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleBookmark(prompt.id);
    setBookmarked(newState);
  };

  const getDifficultyColor = () => {
    switch (prompt.difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "Medium":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  const getCategoryColor = () => {
    switch (prompt.category) {
      case "DSA":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100";
      case "System Design":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100";
      case "Frontend":
        return "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100";
      case "Backend":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100";
      case "Behavioral":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100";
      case "Cloud":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      case "DevOps":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "Mobile":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "Database":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100";
      case "Security":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="card relative group animate-fade-in">
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.difficulty && (
          <span className={`badge ${getDifficultyColor()} capitalize`}>
            {prompt.difficulty}
          </span>
        )}
        <span className={`badge ${getCategoryColor()} capitalize`}>
          {prompt.category}
        </span>
      </div>

      <h3 className="text-lg font-medium mb-3 min-h-[3rem]">
        {displayText}
        {isTyping && <span className="animate-pulse">|</span>}
      </h3>
      
      {showBookmark && (
        <button
          onClick={handleToggleBookmark}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          {bookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
        </button>
      )}
    </div>
  );
};

export default PromptCard;
