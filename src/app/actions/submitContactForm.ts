
'use server';

import * as z from 'zod';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Your message must be at least 10 characters." }).max(1000, { message: "Your message must not exceed 1000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

const TARGET_EMAIL = "simonwanjiru224@gmail.com";

export async function submitContactForm(data: ContactFormData) {
  try {
    const validatedData = contactFormSchema.parse(data);

    // --- !!! IMPORTANT !!! ---
    // This is a simulation. In a real application, you would integrate an email
    // service provider (e.g., SendGrid, Mailgun, Resend) here to send the email.
    // ---
    
    console.log(`SIMULATING CONTACT FORM EMAIL SEND TO: ${TARGET_EMAIL}`);
    console.log('---');
    console.log('Received Contact Form Data:');
    console.log('Full Name:', validatedData.fullName);
    console.log('Email:', validatedData.email);
    console.log('Subject:', validatedData.subject);
    console.log('Message:', validatedData.message);
    console.log('---');
    console.log('Reminder: To actually send emails, integrate an email service provider into this Server Action.');

    return { 
      success: true, 
      message: "Your message has been sent! We'll get back to you soon. (Email sending is simulated)" 
    };

  } catch (error) {
    console.error("Error submitting contact form via Server Action:", error);
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Validation failed on server: " + error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ') 
      };
    }
    return { 
      success: false, 
      message: "An unexpected error occurred while sending your message. Please try again." 
    };
  }
}
