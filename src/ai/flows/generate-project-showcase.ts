'use server';
/**
 * @fileOverview Generates a project showcase section for a portfolio based on project details and links.
 *
 * - generateProjectShowcase - A function that generates the project showcase.
 * - GenerateProjectShowcaseInput - The input type for the generateProjectShowcase function.
 * - GenerateProjectShowcaseOutput - The return type for the generateProjectShowcase function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectShowcaseInputSchema = z.object({
  projectDetails: z
    .string()
    .describe('Detailed description of the project, its goals, and outcomes.'),
  projectLinks: z
    .array(z.string())
    .describe(
      'An array of URLs related to the project (e.g., live demo, GitHub repository).'
    ),
});
export type GenerateProjectShowcaseInput = z.infer<
  typeof GenerateProjectShowcaseInputSchema
>;

const GenerateProjectShowcaseOutputSchema = z.object({
  showcaseSection: z
    .string()
    .describe(
      'A well-structured project showcase section, highlighting key features, tech stack, and relevant links.'
    ),
});
export type GenerateProjectShowcaseOutput = z.infer<
  typeof GenerateProjectShowcaseOutputSchema
>;

export async function generateProjectShowcase(
  input: GenerateProjectShowcaseInput
): Promise<GenerateProjectShowcaseOutput> {
  return generateProjectShowcaseFlow(input);
}

const linkReasoningTool = ai.defineTool({
  name: 'analyzeLinks',
  description: 'Analyzes project links to determine their relevance to the showcase.',
  inputSchema: z.object({
    links: z
      .array(z.string())
      .describe('The URLs to analyze.  These are URLs of live projects.'),
  }),
  outputSchema: z.array(z.string()).describe('The relevant links to use in the showcase.'),
  async fn(input) {
    // TODO: Implement the logic to analyze links and determine relevance.
    // For now, return all links.
    return input.links;
  },
});

const prompt = ai.definePrompt({
  name: 'generateProjectShowcasePrompt',
  input: {schema: GenerateProjectShowcaseInputSchema},
  output: {schema: GenerateProjectShowcaseOutputSchema},
  tools: [linkReasoningTool],
  prompt: `You are an AI expert in creating professional project showcase sections for portfolios.

  Based on the provided project details, you will create a concise and engaging showcase section.
  The showcase should highlight key features, the tech stack used, and links to live demos or repositories.
  Use the provided links to decide which ones to incorporate into your response using the analyzeLinks tool.

  Project Details: {{{projectDetails}}}

  Project Links: {{{projectLinks}}}

  Showcase Section:`,
});

const generateProjectShowcaseFlow = ai.defineFlow(
  {
    name: 'generateProjectShowcaseFlow',
    inputSchema: GenerateProjectShowcaseInputSchema,
    outputSchema: GenerateProjectShowcaseOutputSchema,
  },
  async input => {
    const relevantLinks = await linkReasoningTool({
      links: input.projectLinks,
    });

    const {output} = await prompt({...input, projectLinks: relevantLinks});
    return output!;
  }
);
