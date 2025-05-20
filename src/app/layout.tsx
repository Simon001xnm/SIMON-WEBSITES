import type {Metadata} from 'next';
import { Geist_Sans as GeistSans, Geist_Mono as GeistMono } from 'next/font/google'; // Corrected import for Geist
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster

const geistSans = GeistSans({ // Use GeistSans as imported
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = GeistMono({ // Use GeistMono as imported
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Simon Styles Limited | Digital Solutions',
  description: 'Portfolio of Simon Styles, showcasing web, mobile, and system development projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Added suppressHydrationWarning for potential theme issues */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}> {/* Use font-sans as base */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
