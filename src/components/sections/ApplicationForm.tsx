
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const applicationFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Your message must be at least 10 characters." }).max(1000, { message: "Your message must not exceed 1000 characters." }),
  resume: z.any().optional() // Basic handling for file input, specific validation can be complex
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

export function ApplicationForm() {
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
      resume: undefined,
    },
  });

  function onSubmit(data: ApplicationFormValues) {
    startTransition(() => {
      // Simulate API call
      console.log('Application Data:', data);
      // In a real application, you would send this data to your backend.
      // For now, we'll just show a success toast.
      setTimeout(() => {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We will review your application and get back to you soon.",
        });
        form.reset(); // Reset form after successful submission
      }, 1000);
    });
  }

  return (
    <Card className="w-full shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Join Our Team</CardTitle>
        <CardDescription className="text-lg text-muted-foreground max-w-xl mx-auto">
          Interested in working with us? Fill out the form below to apply.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
          <CardContent className="space-y-6 pt-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="e.g. jane.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter / Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a bit about yourself and why you'd be a great fit..."
                      className="min-h-[120px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CV / Resume (Optional)</FormLabel>
                  <FormControl>
                     {/* For file inputs, React Hook Form needs manual handling for `onChange` and `value` if you want to store the File object.
                         For simplicity, this example lets the browser handle it directly, and `field.value` would be a FileList.
                         You might need a custom component or more logic for advanced file handling (e.g., preview, upload progress).
                     */}
                    <Input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => field.onChange(e.target.files)} // Store FileList
                    />
                  </FormControl>
                  <FormDescription>
                    PDF, DOC, or DOCX files accepted. Max 5MB.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="pt-6">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
