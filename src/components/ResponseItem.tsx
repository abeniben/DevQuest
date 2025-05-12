
import React, { useState } from "react";
import { Prompt } from "../data/prompts";
import { UserResponse } from "../services/storageService";

interface ResponseItemProps {
  prompt: Prompt;
  response: UserResponse;
}

const ResponseItem: React.FC<ResponseItemProps> = ({ prompt, response }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const truncatedResponse = response.response.length > 150 && !isExpanded
    ? response.response.substring(0, 150) + "..."
    : response.response;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="badge badge-muted">{formatDate(response.date)}</span>
        </div>
      </div>

      <h3 className="text-lg font-medium mb-2">{prompt.question}</h3>
      
      <div className="mt-2 text-muted-foreground">
        <p className="whitespace-pre-wrap">{truncatedResponse}</p>
        
        {response.response.length > 150 && (
          <button
            onClick={toggleExpand}
            className="text-sm text-primary mt-2"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ResponseItem;
