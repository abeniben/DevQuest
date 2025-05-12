
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun, BookmarkCheck, History, Settings } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container px-4 mx-auto py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary font-bold text-xl">DevQuest</span>
          </Link>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-accent hover:bg-accent/80"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>
        </div>
      </header>
      
      <main className="container px-4 mx-auto py-6 pb-48">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-3">
        <div className="container mx-auto px-4 flex justify-around">
          <Link
            to="/"
            className={`flex flex-col items-center p-1 ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <BookmarkCheck size={20} />
            <span className="text-xs mt-1">Today</span>
          </Link>
          
          <Link
            to="/history"
            className={`flex flex-col items-center p-1 ${
              isActive("/history") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <History size={20} />
            <span className="text-xs mt-1">History</span>
          </Link>
          
          <Link
            to="/settings"
            className={`flex flex-col items-center p-1 ${
              isActive("/settings") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Settings size={20} />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
