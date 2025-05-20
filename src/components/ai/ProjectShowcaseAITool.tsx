'use client';

import * as React from 'react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateProjectShowcase, type GenerateProjectShowcaseInput } from '@/ai/flows/generate-project-showcase';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input'; // Added for project title
import { MOCK_PROJECTS } from '@/lib/constants'; // To populate dropdown
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // For project selection
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const formSchema = z.object({
  selectedProjectId: z.string().min(1, 'Please select a project.'),
  customProjectDetails: z.string().optional(),
  customProjectLinks: z.string().optional(),
});

type ProjectShowcaseFormValues = z.infer<typeof formSchema>;

export function ProjectShowcaseAITool() {
  const [isPending, startTransition] = useTransition();
  const [showcaseResult, setShowcaseResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ProjectShowcaseFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedProjectId: '',
      customProjectDetails: '',
      customProjectLinks: '',
    },
  });

  const selectedProjectId = form.watch('selectedProjectId');
  const selectedProject = MOCK_PROJECTS.find(p => p.id === selectedProjectId);

  const onSubmit = (values: ProjectShowcaseFormValues) => {
    setError(null);
    setShowcaseResult(null);

    let projectDetails: string;
    let projectLinksArray: string[];

    if (selectedProject) {
      projectDetails = values.customProjectDetails || selectedProject.longDescription;
      const linksFromProject = [selectedProject.liveUrl, selectedProject.repoUrl].filter(Boolean) as string[];
      const customLinks = values.customProjectLinks ? values.customProjectLinks.split('\n').map(link => link.trim()).filter(link => link.length > 0) : [];
      projectLinksArray = [...new Set([...linksFromProject, ...customLinks])];
    } else if (values.customProjectDetails && values.customProjectLinks) {
        projectDetails = values.customProjectDetails;
        projectLinksArray = values.customProjectLinks.split('\n').map(link => link.trim()).filter(link => link.length > 0);
    }
     else {
      setError('Please select a project or provide custom details and links.');
      return;
    }
    
    if (!projectDetails) {
        setError('Project details are missing.');
        return;
    }


    const input: GenerateProjectShowcaseInput = {
      projectDetails,
      projectLinks: projectLinksArray,
    };

    startTransition(async () => {
      try {
        const result = await generateProjectShowcase(input);
        setShowcaseResult(result.showcaseSection);
      } catch (e) {
        console.error(e);
        setError('Failed to generate project showcase. Please try again.');
      }
    });
  };
  
  // Effect to update form when selectedProject changes
  React.useEffect(() => {
    if (selectedProject) {
      form.setValue('customProjectDetails', selectedProject.longDescription);
      const linksString = [selectedProject.liveUrl, selectedProject.repoUrl].filter(Boolean).join('\n');
      form.setValue('customProjectLinks', linksString);
    } else {
      form.setValue('customProjectDetails', '');
      form.setValue('customProjectLinks', '');
    }
  }, [selectedProject, form]);


  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">AI Project Showcase Generator</CardTitle>
        <CardDescription>
          Select a project or enter details to generate a compelling showcase section using AI.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="selectedProjectId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Project (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a project to prefill details" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {MOCK_PROJECTS.map((project) => (
                        <SelectItem key={project.id} value={project.id}>
                          {project.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="custom">Enter Custom Details Below</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customProjectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the project, its goals, tech stack, and outcomes..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customProjectLinks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Links (One per line)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="https://github.com/yourproject\nhttps://yourproject.live"
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Showcase'
              )}
            </Button>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </CardFooter>
        </form>
      </Form>

      {showcaseResult && (
        <div className="px-6 pb-6 mt-6 border-t pt-6">
          <h3 className="text-xl font-semibold mb-2">Generated Showcase:</h3>
          <ScrollArea className="h-[300px] w-full rounded-md border p-4 bg-secondary/30">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">{showcaseResult}</pre>
          </ScrollArea>
        </div>
      )}
    </Card>
  );
}
