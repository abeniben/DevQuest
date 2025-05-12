
import { Prompt } from "../data/prompts";

export interface UserResponse {
  promptId: number;
  date: string;
  response: string;
}

export interface UserData {
  responses: UserResponse[];
  bookmarks: number[];
  lastAnsweredDate: string | null;
  currentStreak: number;
  todayPromptId: number | null;
}

const STORAGE_KEY = 'devquest_user_data';

const getInitialUserData = (): UserData => ({
  responses: [],
  bookmarks: [],
  lastAnsweredDate: null,
  currentStreak: 0,
  todayPromptId: null,
});

export const loadUserData = (): UserData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return getInitialUserData();
    
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading user data from localStorage', error);
    return getInitialUserData();
  }
};

export const saveUserData = (data: UserData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving user data to localStorage', error);
  }
};

export const updateStreak = (userData: UserData): UserData => {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = userData.lastAnsweredDate;
  
  // If no previous answer, start streak at 1
  if (!lastDate) {
    return {
      ...userData,
      lastAnsweredDate: today,
      currentStreak: 1,
    };
  }
  
  // Check dates
  const lastDateTime = new Date(lastDate);
  const todayTime = new Date(today);
  
  const timeDiff = todayTime.getTime() - lastDateTime.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  
  // Same day, no streak change
  if (daysDiff === 0) {
    return userData;
  }
  
  // Next consecutive day, increase streak
  if (daysDiff === 1) {
    return {
      ...userData,
      lastAnsweredDate: today,
      currentStreak: userData.currentStreak + 1,
    };
  }
  
  // Gap in days, reset streak
  return {
    ...userData,
    lastAnsweredDate: today,
    currentStreak: 1,
  };
};

export const getDailyPrompt = (prompts: Prompt[]): { prompt: Prompt, isNew: boolean } => {
  const userData = loadUserData();
  const today = new Date().toISOString().split('T')[0];
  
  // Check if we already assigned a prompt today
  if (userData.todayPromptId !== null) {
    const existingPrompt = prompts.find(p => p.id === userData.todayPromptId);
    if (existingPrompt) {
      return { prompt: existingPrompt, isNew: false };
    }
  }
  
  // Check if user has unanswered prompts from previous days
  const mostRecentResponse = userData.responses.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];
  
  if (mostRecentResponse) {
    const lastResponseDate = mostRecentResponse.date;
    const today = new Date().toISOString().split('T')[0];
    
    // If last response is not from today, and we have a todayPromptId that hasn't been answered,
    // continue showing that prompt instead of a new one
    if (lastResponseDate !== today && userData.todayPromptId !== null) {
      const existingPrompt = prompts.find(p => p.id === userData.todayPromptId);
      if (existingPrompt) {
        return { prompt: existingPrompt, isNew: false };
      }
    }
  }
  
  // Get all answered prompt IDs
  const answeredPromptIds = userData.responses.map(r => r.promptId);
  
  // Try to find prompts that haven't been answered yet
  const unansweredPrompts = prompts.filter(p => !answeredPromptIds.includes(p.id));
  
  // If all prompts have been answered, allow repeats but prioritize least recently answered ones
  let promptsPool = unansweredPrompts.length > 0 ? unansweredPrompts : prompts;
  
  // Select random prompt from the pool
  const randomIndex = Math.floor(Math.random() * promptsPool.length);
  const selectedPrompt = promptsPool[randomIndex];
  
  // Save today's prompt ID
  saveUserData({
    ...userData,
    todayPromptId: selectedPrompt.id,
  });
  
  return { prompt: selectedPrompt, isNew: true };
};

export const saveResponse = (promptId: number, response: string): void => {
  const userData = loadUserData();
  const today = new Date().toISOString().split('T')[0];
  
  // Check if already answered today
  const todayResponse = userData.responses.find(
    r => r.date === today && r.promptId === promptId
  );
  
  if (todayResponse) {
    // Update existing response
    const updatedResponses = userData.responses.map(r => 
      r.date === today && r.promptId === promptId ? { ...r, response } : r
    );
    
    saveUserData({
      ...userData,
      responses: updatedResponses,
    });
  } else {
    // Add new response and update streak
    const updatedData = updateStreak({
      ...userData,
      responses: [
        ...userData.responses, 
        { promptId, date: today, response }
      ],
    });
    
    saveUserData(updatedData);
  }
};

export const toggleBookmark = (promptId: number): boolean => {
  const userData = loadUserData();
  
  const isBookmarked = userData.bookmarks.includes(promptId);
  const updatedBookmarks = isBookmarked
    ? userData.bookmarks.filter(id => id !== promptId)
    : [...userData.bookmarks, promptId];
  
  saveUserData({
    ...userData,
    bookmarks: updatedBookmarks,
  });
  
  return !isBookmarked; // Return new state
};

export const isPromptBookmarked = (promptId: number): boolean => {
  const userData = loadUserData();
  return userData.bookmarks.includes(promptId);
};

export const getResponseForPrompt = (promptId: number): UserResponse | null => {
  const userData = loadUserData();
  const today = new Date().toISOString().split('T')[0];
  
  return userData.responses.find(r => r.promptId === promptId && r.date === today) || null;
};

export const getAllResponses = (): UserResponse[] => {
  const userData = loadUserData();
  return [...userData.responses].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getBookmarkedPrompts = (prompts: Prompt[]): Prompt[] => {
  const userData = loadUserData();
  return prompts.filter(prompt => userData.bookmarks.includes(prompt.id));
};

export const clearAllData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
