
'use server';

import * as z from 'zod';

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

const TARGET_EMAIL = "simonwanjiru224@gmail.com";

export async function submitApplication(data: ApplicationFormDataForAction) {
  try {
    const validatedData = serverActionSchema.parse(data);

    // --- !!! IMPORTANT !!! ---
    // This is where you would integrate a real email service provider
    // (e.g., SendGrid, Mailgun, Resend, AWS SES) to send the email.
    // 
    // Example using a hypothetical sendEmail function (you'd need to implement this):
    //
    // import { sendEmail } from '@/lib/emailService'; // This service would need to be created
    //
    // const emailSubject = `New Application from ${validatedData.fullName}`;
    // const emailHtmlBody = `
    //   <h1>New Application Received</h1>
    //   <p><strong>Full Name:</strong> ${validatedData.fullName}</p>
    //   <p><strong>Email:</strong> ${validatedData.email}</p>
    //   <p><strong>Message:</strong></p>
    //   <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    //   ${validatedData.resumeInfo ? `<p><strong>Resume Attached:</strong> ${validatedData.resumeInfo.name} (${validatedData.resumeInfo.type}, ${Math.round(validatedData.resumeInfo.size / 1024)}KB)</p><p>Note: Actual file upload would require separate handling to a storage service.</p>` : '<p>No resume uploaded.</p>'}
    // `;
    //
    // await sendEmail({
    //   to: TARGET_EMAIL,
    //   subject: emailSubject,
    //   html: emailHtmlBody,
    //   // If handling actual file attachments, that would be configured here too
    // });
    // --- End of Email Service Integration Placeholder ---

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
