'use server';
/**
 * @fileOverview A flow for an AI assistant named Symoh to answer development questions.
 *
 * - askSymoh - A function that takes a user's question and returns a streamed answer.
 * - AskSymohInput - The input type for the askSymoh function.
 * - AskSymohOutput - The return type for the askSymoh function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AskSymohInputSchema = z.object({
  question: z.string().describe('The user question for the AI assistant.'),
});
export type AskSymohInput = z.infer<typeof AskSymohInputSchema>;

const AskSymohOutputSchema = z.object({
  answer: z.string().describe("The AI assistant's answer to the question."),
});
export type AskSymohOutput = z.infer<typeof AskSymohOutputSchema>;

export async function askSymoh(
  input: AskSymohInput
): Promise<AsyncIterable<AskSymohOutput>> {
  const { stream } = await symohAssistantFlow(input);
  return stream;
}

const symohAssistantFlow = ai.defineFlow(
  {
    name: 'symohAssistantFlow',
    inputSchema: AskSymohInputSchema,
    outputSchema: AskSymohOutputSchema,
    stream: true,
  },
  async input => {
    const llmResponse = await ai.generate({
      prompt: `You are Symoh, a friendly and expert AI assistant from Simon Styles Technology. Your goal is to help users with their questions about web design, software development, e-commerce, and our services. Keep your answers concise, helpful, and professional.

User Question: ${input.question}`,
      model: 'googleai/gemini-1.5-flash',
      stream: true,
    });

    const stream = llmResponse.stream();
    
    // Create an async generator to yield chunks in the desired output format
    async function* outputStream(): AsyncGenerator<AskSymohOutput> {
      for await (const chunk of stream) {
        yield { answer: chunk.text };
      }
    }
    
    return { stream: outputStream() };
  }
);
