
'use server';

import * as z from 'zod';
import { OFFICIAL_EMAIL } from '@/lib/constants';

// This schema is for data received by the Server Action
const serverActionSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Your message must be at least 10 characters." }).max(1000, { message: "Your message must not exceed 1000 characters." }),
  resumeInfo: z.object({
    name: z.string(),
    type: z.string(),
    size: z.number(),
  }).optional(),
});

export type ApplicationFormDataForAction = z.infer<typeof serverActionSchema>;

const TARGET_EMAIL = OFFICIAL_EMAIL;

export async function submitApplication(data: ApplicationFormDataForAction) {
  try {
    const validatedData = serverActionSchema.parse(data);

    console.log(`SIMULATING EMAIL SEND TO: ${TARGET_EMAIL}`);
    console.log('Received Application Data:');
    console.log('Full Name:', validatedData.fullName);
    console.log('Email:', validatedData.email);
    console.log('Message:', validatedData.message);
    if (validatedData.resumeInfo) {
      console.log('Resume Info:', validatedData.resumeInfo);
    } else {
      console.log('No resume uploaded.');
    }
    console.log('---');
    console.log('Reminder: To actually send emails, integrate an email service provider into this Server Action.');


    return { 
      success: true, 
      message: "Application submitted successfully! We'll review it and get back to you. (Email sending is simulated)" 
    };

  } catch (error) {
    console.error("Error submitting application via Server Action:", error);
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Validation failed on server: " + error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ') 
      };
    }
    return { 
      success: false, 
      message: "An unexpected error occurred while submitting the application. Please try again." 
    };
  }
}
