
import React, { useState, useEffect } from "react";
import { Prompt } from "../data/prompts";
import { saveResponse, getResponseForPrompt } from "../services/storageService";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

interface ResponseEditorProps {
  prompt: Prompt;
}

const ResponseEditor: React.FC<ResponseEditorProps> = ({ prompt }) => {
  const [response, setResponse] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check for existing response when prompt changes
  useEffect(() => {
    const existingResponse = getResponseForPrompt(prompt.id);
    if (existingResponse) {
      setResponse(existingResponse.response);
      setIsSubmitted(true);
    } else {
      setResponse("");
      setIsSubmitted(false);
    }
    
    // Add entrance animation
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    
    return () => clearTimeout(timer);
  }, [prompt.id]);

  // Update character count
  useEffect(() => {
    setCharCount(response.length);
  }, [response]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (response.trim().length < 10) {
      toast.error("Please provide a more detailed response (at least 10 characters).");
      return;
    }

    saveResponse(prompt.id, response);
    setIsSubmitted(true);
    toast.success("Your reflection has been saved!");
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div className={`mt-6 h-80 transform transition-all duration-300 ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-2 flex justify-between items-center">
          <label htmlFor="response" className="block text-sm font-medium">
            Your reflection
          </label>
          <div className="text-xs text-muted-foreground">
            {charCount} characters
          </div>
        </div>
        
        <Textarea
          id="response"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Write your reflection here..."
          className="w-full min-h-[200px] md:min-h-[300px] p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          disabled={isSubmitted}
          required
        />
        
        <div className="mt-4 flex justify-end">
          {isSubmitted ? (
            <button
              type="button"
              onClick={handleEdit}
              className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors"
            >
              Edit Response
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
            >
              Save Reflection
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResponseEditor;
