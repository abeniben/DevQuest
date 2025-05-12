
import React, { useState } from "react";
import Layout from "../components/Layout";
import ResponseItem from "../components/ResponseItem";
import PromptCard from "../components/PromptCard";
import { prompts } from "../data/prompts";
import { getAllResponses, getBookmarkedPrompts } from "../services/storageService";

const History = () => {
  const [activeTab, setActiveTab] = useState<"all" | "bookmarked">("all");
  const allResponses = getAllResponses();
  const bookmarkedPrompts = getBookmarkedPrompts(prompts);
  
  const getPromptById = (id: number) => {
    return prompts.find(p => p.id === id) || prompts[0];
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your History</h1>
        
        <div className="flex border-b border-border mb-6">
          <button
            className={`pb-2 px-4 ${
              activeTab === "all"
                ? "border-b-2 border-primary font-medium"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Responses
          </button>
          <button
            className={`pb-2 px-4 ${
              activeTab === "bookmarked"
                ? "border-b-2 border-primary font-medium"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("bookmarked")}
          >
            Bookmarked
          </button>
        </div>

        {activeTab === "all" && (
          <>
            {allResponses.length > 0 ? (
              allResponses.map((response) => (
                <ResponseItem
                  key={`${response.promptId}-${response.date}`}
                  prompt={getPromptById(response.promptId)}
                  response={response}
                />
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>You haven't answered any prompts yet.</p>
                <p className="mt-2">Start your daily reflection today!</p>
              </div>
            )}
          </>
        )}

        {activeTab === "bookmarked" && (
          <>
            {bookmarkedPrompts.length > 0 ? (
              bookmarkedPrompts.map((prompt) => (
                <div key={prompt.id} className="mb-4">
                  <PromptCard prompt={prompt} showBookmark={true} />
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>You haven't bookmarked any prompts yet.</p>
                <p className="mt-2">Bookmark prompts to revisit them later!</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default History;
