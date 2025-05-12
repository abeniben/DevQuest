
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PromptCard from "../components/PromptCard";
import ResponseEditor from "../components/ResponseEditor";
import StreakCounter from "../components/StreakCounter";
import { prompts } from "../data/prompts";
import { getDailyPrompt, getResponseForPrompt } from "../services/storageService";

const Index = () => {
  const [todayPrompt, setTodayPrompt] = useState(getDailyPrompt(prompts).prompt);
  const [hasAnswered, setHasAnswered] = useState(false);
  
  useEffect(() => {
    const response = getResponseForPrompt(todayPrompt.id);
    setHasAnswered(!!response);
  }, [todayPrompt.id]);
  
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">DevQuest</h1>
          <p className="text-muted-foreground text-center mb-4">Your daily Quest</p>
          <StreakCounter className="mb-2" />
        </div>
        
        <h2 className="text-xl font-bold mb-4">Today's Challenge</h2>
        
        <div className="transform transition-all duration-300 hover:scale-[1.01]">
          <PromptCard prompt={todayPrompt} />
        </div>
        
        {hasAnswered && (
          <div className="mt-4 bg-muted/50 p-4 rounded-lg border border-muted">
            <p className="text-center text-muted-foreground">
              You've already answered today's question. You can edit your response below.
            </p>
          </div>
        )}
        
        <ResponseEditor prompt={todayPrompt} />
      </div>
    </Layout>
  );
};

export default Index;
