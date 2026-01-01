
'use client';

import Link from 'next/link';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ChevronLeft, Code, ShoppingCart, Cloud, Megaphone, Shield, Wrench, Bot, Phone } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

const services = [
  {
    icon: Code,
    title: "Website Development",
    price: "KES 30,000",
    priceNote: "Starting From",
    description: "Beautiful, responsive websites tailored to your brand. Perfect for portfolios, blogs, and corporate sites.",
    features: [
      "Custom, Modern Design",
      "Mobile-First & Responsive",
      "Content Management System (CMS)",
      "Basic SEO Foundation",
    ],
  },
  {
    icon: Bot,
    title: "Software Development",
    price: "KES 60,000",
    priceNote: "Starting From",
    description: "Custom software solutions to streamline your business processes and deliver value to your users.",
    features: [
      "Custom Business Logic",
      "Database Integration",
      "User Authentication",
      "Scalable Architecture",
    ],
  },
  {
    icon: ShoppingCart,
    title: "App Development",
    price: "KES 140,000",
    priceNote: "Starting From",
    description: "Native and cross-platform mobile applications for both iOS and Android to reach your customers on the go.",
    features: [
      "iOS & Android Compatible",
      "Push Notifications",
      "API Integrations",
      "App Store Submission",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    price: "KES 4,000",
    priceNote: "Per Month",
    description: "Engage your audience and grow your brand with our professional social media management services.",
    features: [
      "Content Creation & Curation",
      "Scheduled Posting",
      "Community Engagement",
      "Monthly Performance Reports",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Computing Services",
    price: "KES 45,000",
    priceNote: "Labor + Subscription",
    description: "Leverage the power of the cloud with our expert setup, migration, and management services.",
    features: [
      "AWS, Google Cloud, Azure",
      "Scalable Infrastructure Setup",
      "Server Migration & Management",
      "Cost Optimization",
    ],
  },
  {
    icon: Shield,
    title: "Ethical Hacking Services",
    price: "KES 80,000",
    priceNote: "Starting From",
    description: "Identify and fix security vulnerabilities in your systems before malicious actors can exploit them.",
    features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Audits",
      "Detailed Reporting",
    ],
  },
   {
    icon: Wrench,
    title: "Vulnerability Fixing",
    price: "Custom Quote",
    priceNote: "Based on Scope",
    description: "Found a security flaw? Our experts will analyze, patch, and secure your systems to prevent breaches.",
    features: [
      "Code-level Fixes",
      "System Re-configuration",
      "Security Patch Implementation",
      "Post-fix Verification",
    ],
  },
];

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-2"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);


export default function ServicesPage() {
    
  const generateWhatsAppLink = (serviceTitle: string, price: string) => {
    const message = `Hello, I'm interested in your "${serviceTitle}" service, listed at ${price}. Please provide more details.`;
    return `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  };
    
  return (
    <div className="bg-gray-50 min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-20">
            <Button asChild variant="outline" size="sm" className="mb-6">
                <Link href="/">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We build high-quality, scalable, and secure digital solutions to help your business thrive online. All prices are exclusive of VAT.
            </p>
          </div>

          <section id="our-services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="flex flex-col transform hover:-translate-y-1 transition-transform duration-300 shadow-md hover:shadow-xl border-t-4 border-primary/20">
                    <CardHeader className="items-center text-center p-6">
                      <div className="p-4 bg-primary/10 rounded-full w-fit mb-4 border border-primary/20">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                      <div className="mt-2">
                        <p className="text-3xl font-extrabold text-accent">{service.price}</p>
                        <p className="text-xs text-muted-foreground">{service.priceNote}</p>
                      </div>
                      <CardDescription className="text-sm min-h-[4rem] pt-2">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow px-6 pb-6">
                      <ul className="space-y-3 text-sm">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                             <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                     <CardFooter className="p-6 bg-gray-50 rounded-b-md">
                        <Button 
                          asChild 
                          className="w-full bg-green-600 hover:bg-green-700 text-white text-base"
                        >
                          <a href={generateWhatsAppLink(service.title, service.price)} target="_blank" rel="noopener noreferrer">
                              <WhatsAppIcon /> Inquire via WhatsApp
                          </a>
                        </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>

        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
