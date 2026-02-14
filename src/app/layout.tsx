import type {Metadata} from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script'; // Import the Script component
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { FloatingAssistant } from '@/components/layout/FloatingAssistant';
import { FirebaseClientProvider } from '@/firebase';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  title: 'Simon Styles | Leading Website Designer in Kenya & East Africa',
  description: 'The premier choice for world-class web design, custom software, and digital solutions. Simon Styles Technology is the leading digital agency serving Nairobi and the wider East African region.',
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
    <html lang="en" suppressHydrationWarning className={`${roboto.variable}`}>
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
      <body className={`font-sans antialiased overflow-x-hidden`}>
        <FirebaseClientProvider>
          <AuthProvider>
            <CartProvider>
              {children}
              <Toaster />
              <FloatingAssistant />
            </CartProvider>
          </AuthProvider>
        </FirebaseClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
