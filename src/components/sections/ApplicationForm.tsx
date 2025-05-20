
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
import { submitApplication, type ApplicationFormDataForAction } from '@/app/actions/submitApplication';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const ACCEPTED_FILE_EXTENSIONS = '.pdf, .doc, .docx';


const applicationFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Your message must be at least 10 characters." }).max(1000, { message: "Your message must not exceed 1000 characters." }),
  resume: z.custom<FileList>()
    .optional()
    .refine(files => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(files => !files || files.length === 0 || ACCEPTED_FILE_TYPES.includes(files[0].type), `Accepted file types: PDF, DOC, DOCX.`)
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

  async function onSubmit(data: ApplicationFormValues) {
    startTransition(async () => {
      let resumeInfo: ApplicationFormDataForAction['resumeInfo'] = undefined;
      if (data.resume && data.resume.length > 0) {
        const file = data.resume[0];
        resumeInfo = {
          name: file.name,
          type: file.type,
          size: file.size,
        };
      }

      const actionData: ApplicationFormDataForAction = {
        fullName: data.fullName,
        email: data.email,
        message: data.message,
        resumeInfo: resumeInfo,
      };

      try {
        const result = await submitApplication(actionData);
        if (result.success) {
          toast({
            title: "Application Submitted!",
            description: result.message || "Thank you! We'll review your application.",
          });
          form.reset();
        } else {
          toast({
            title: "Submission Failed",
            description: result.message || "Could not submit application. Please try again.",
            variant: "destructive",
          });
        }
      } catch (e) {
        console.error("Client-side submission error:", e);
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Card className="w-full shadow-xl border-0 sm:border"> {/* Remove border on mobile for edge-to-edge feel in dialog */}
      <CardHeader className="text-center px-4 pt-6 pb-4 sm:p-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Join Our Team</CardTitle>
        <CardDescription className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-xl mx-auto mt-1">
          Interested in working with us? Fill out the form below to apply.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
          <CardContent className="space-y-4 sm:space-y-6 px-4 pb-4 pt-0 sm:p-6 sm:pt-0">
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
                      className="min-h-[100px] sm:min-h-[120px] resize-y"
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
                    <Input 
                      type="file" 
                      accept={ACCEPTED_FILE_EXTENSIONS}
                      onChange={(e) => field.onChange(e.target.files)} 
                    />
                  </FormControl>
                  <FormDescription className="text-xs sm:text-sm">
                    PDF, DOC, or DOCX files accepted. Max 5MB.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="px-4 pb-6 pt-4 sm:p-6 sm:pt-4">
            <Button type="submit" className="w-full text-base" disabled={isPending}>
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
