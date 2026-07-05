import type {Metadata} from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { FloatingAssistant } from '@/components/layout/FloatingAssistant';
import { FirebaseClientProvider } from '@/firebase';
import { GoogleReviewsBadge } from '@/components/layout/GoogleReviewsBadge';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://simonstyles.co.ke'),
  title: {
    default: 'SIMON STYLES | Best Web Design & Software Development Company in Kenya',
    template: '%s | SIMON STYLES'
  },
  description: 'SIMON STYLES TECHNOLOGY is Kenya\'s leading provider of web engineering, mobile app development, and custom software systems. Expert M-Pesa integration, high-performance ecommerce, and corporate laptop leasing in Nairobi.',
  keywords: ['web design kenya', 'website development nairobi', 'mobile app development kenya', 'software development company nairobi', 'custom erp systems kenya', 'm-pesa payment integration', 'ecommerce solutions kenya', 'best tech company nairobi', 'laptop hire services kenya', 'corporate laptop leasing', 'business management systems', 'digital transformation africa'],
  authors: [{ name: 'SIMON STYLES TECHNOLOGY' }],
  creator: 'SIMON STYLES TECHNOLOGY',
  publisher: 'SIMON STYLES TECHNOLOGY',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://simonstyles.co.ke',
    siteName: 'SIMON STYLES TECHNOLOGY',
    title: 'SIMON STYLES | Digital Success Engineered.',
    description: 'Bespoke web engineering, software systems, and digital strategy for ambitious brands in Africa.',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 800,
        alt: 'SIMON STYLES TECHNOLOGY Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIMON STYLES | Digital Success Engineered.',
    description: 'Kenya\'s premier software engineering and web design partner.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'zXRwvobv9w8fzWTzeoY3xeu8Dh_w-oIyFpSJjIECnFY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${roboto.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
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
      <body className={`font-sans antialiased selection:bg-primary/30`}>
        <FirebaseClientProvider>
          <AuthProvider>
            <CartProvider>
              <div className="flex flex-col min-h-screen">
                {children}
              </div>
              <Toaster />
              <FloatingAssistant />
              <GoogleReviewsBadge />
            </CartProvider>
          </AuthProvider>
        </FirebaseClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
