
import * as z from 'zod';

// Regex for password strength: at least one uppercase, one lowercase, one number, and one special character
const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

export const signUpSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." })
    .regex(passwordValidation, {
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

export type SignUpData = z.infer<typeof signUpSchema>;


export const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export type SignInData = z.infer<typeof signInSchema>;
