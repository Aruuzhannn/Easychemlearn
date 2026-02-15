import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIHint = async (
  question: string,
  userAnswer: string,
  correctAnswer: string,
  language: Language
): Promise<string> => {
  try {
    const prompt = `
      You are a helpful chemistry tutor in the app "EasyChemLearn".
      Language: ${language}.
      
      The student is trying to solve this problem: "${question}".
      The correct answer is: "${correctAnswer}".
      The student answered: "${userAnswer}".
      
      Please provide a helpful hint without giving away the direct answer immediately. 
      Explain the concept they might have missed based on their wrong answer.
      Keep it short (max 2 sentences) and encouraging.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Hint unavailable.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'RU' 
      ? 'Не удалось получить подсказку от AI.' 
      : language === 'KZ' 
      ? 'AI кеңесін алу мүмкін емес.' 
      : 'Could not retrieve AI hint.';
  }
};