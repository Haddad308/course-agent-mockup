"use server";

import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function generateCourseTopics() {
  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Generate 6 trending course topics that would be valuable for online learning. Include a brief description for each topic. Format the response as a JSON array with 'title' and 'description' fields.`,
      system:
        "You are an expert course creation assistant with deep knowledge of online education trends and market demands.",
    });

    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to generate course topics:", error);
    return [];
  }
}
