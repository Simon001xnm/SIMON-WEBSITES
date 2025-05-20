import type {Metadata} from 'next';
// Corrected imports for Geist fonts
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// The GeistSans and GeistMono objects from 'geist/font' directly provide .variable
// so we don't need to call them as functions like with next/font/google.

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
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/*
        The font-sans and font-mono classes (typically from Tailwind's base or utility)
        will now correctly pick up the CSS variables (--font-geist-sans, --font-geist-mono)
        defined by the classes applied to the <html> tag.
      */}
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
