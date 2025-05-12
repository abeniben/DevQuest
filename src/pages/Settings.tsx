
import React from "react";
import Layout from "../components/Layout";
import { clearAllData } from "../services/storageService";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear all your data? This cannot be undone.")) {
      clearAllData();
      toast.success("All data has been cleared successfully");
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <div className="card mb-6 transition-all duration-300 hover:shadow-md">
          <h2 className="text-xl font-medium mb-4">Appearance</h2>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Theme</h3>
              <p className="text-sm text-muted-foreground">
                Toggle between light and dark mode
              </p>
            </div>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
        
        <div className="card mb-6 transition-all duration-300 hover:shadow-md">
          <h2 className="text-xl font-medium mb-4">Data</h2>
          
          <div className="mb-6">
            <h3 className="font-medium mb-1">Device Storage</h3>
            <p className="text-sm text-muted-foreground mb-3">
              DevQuest stores all your responses and settings in your browser's local storage.
              No data is sent to any server.
            </p>
          </div>
          
          <button
            onClick={handleClearData}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/80 transition-colors"
          >
            Clear All Data
          </button>
        </div>
        
        <div className="card transition-all duration-300 hover:shadow-md">
          <h2 className="text-xl font-medium mb-4">About</h2>
          
          <div className="prose dark:prose-invert prose-sm max-w-none">
            <p className="mb-4 leading-relaxed">
              <span className="font-semibold">DevQuest</span> — your daily space for growth, challenge, and self-reflection. 
              This app was built with a simple mission: to help developers sharpen their problem-solving skills by consistently 
              reflecting on real-world interview prompts.
            </p>
            
            <p className="mb-4 leading-relaxed">
              There are no answers here — just thoughtful questions to spark your curiosity, 
              discipline, and creativity. Whether you're preparing for your next big opportunity or just 
              keeping your mind sharp, DevQuest is your quiet companion on the journey to becoming a better developer.
            </p>
            
            <p className="italic text-muted-foreground">
              Consistency is the key to mastery. Keep going!
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-border">
            <h3 className="font-medium">Version</h3>
            <p className="text-sm text-muted-foreground">1.0.0</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
