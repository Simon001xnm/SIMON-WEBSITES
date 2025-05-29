
import type {Metadata} from 'next';
// Corrected imports for Geist fonts
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script'; // Import the Script component
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { FloatingSocialButtons } from '@/components/layout/FloatingSocialButtons'; // Added import

// The GeistSans and GeistMono objects from 'geist/font' directly provide .variable
// so we don't need to call them as functions like with next/font/google.

export const metadata: Metadata = {
  title: 'Simon Styles Limited | Digital Solutions',
  description: 'Portfolio of Simon Styles, showcasing web, mobile, and system development projects.',
  verification: {
    google: 'iL8hUbqCiIxBbr8PF-HLXDFor0u8O9b3DwYHjzKu7LE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5L0N9NZMQ6"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5L0N9NZMQ6');
            `,
          }}
        />
      </head>
      {/*
        The font-sans and font-mono classes (typically from Tailwind's base or utility)
        will now correctly pick up the CSS variables (--font-geist-sans, --font-geist-mono)
        defined by the classes applied to the <html> tag.
      */}
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
