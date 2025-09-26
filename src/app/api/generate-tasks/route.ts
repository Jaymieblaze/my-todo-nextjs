import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Get the API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    // Get the prompt from the request body
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Construct the full prompt for the model
    const fullPrompt = `Generate a list of 3-5 todo tasks based on the following prompt: "${prompt}". The output should be a clean, unformatted list of tasks. Each task should be separated by a comma. For example: "Write a blog post about Next.js, Research new front-end frameworks, Deploy the project to Vercel". Do not include any markdown, numbering, or bullet points.`;
    
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    // Split the comma-separated string into an array of tasks
    const tasks = text.split(',').map(task => task.trim()).filter(Boolean);

    return NextResponse.json({ tasks });

  } catch (error) {
    console.error('Error in generate-tasks API route:', error);
    // Return a more detailed error message for debugging
    return NextResponse.json(
      { 
        error: 'Failed to generate tasks', 
        details: error instanceof Error ? error.message : 'An unknown error occurred' 
      }, 
      { status: 500 }
    );
  }
}
