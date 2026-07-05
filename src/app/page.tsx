'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { QuoteForm } from '@/components/sections/QuoteForm';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CoreServicesSection } from '@/components/sections/CoreServicesSection';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { MOCK_PROJECTS } from '@/lib/project-data';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from 'next/script';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const stats = [
  { label: 'Glorious Years', value: '7+' },
  { label: 'Sales Completed', value: '3,330+' },
  { label: 'Laptops Leased', value: '8,500+' },
  { label: 'Happy Clients', value: '500+' },
];

const faqs = [
  {
    question: "Do you offer web design and software development in Kenya?",
    answer: "Yes. SIMON STYLES is a premier web design and software development company based in Nairobi, Kenya. We specialize in building high-performance websites, custom mobile apps (Android/iOS), and complex business software solutions tailored for the East African market."
  },
  {
    question: "Can you integrate M-Pesa payments into my website or app?",
    answer: "Absolutely. We are experts in Daraja API integration. We can set up M-Pesa STK Push, C2B automated payments, and real-time transaction callbacks for any ecommerce platform or custom management system."
  },
  {
    question: "How long does it take to develop a professional website?",
    answer: "A standard professional corporate website typically takes 5–10 business days. Complex ecommerce platforms or custom software systems with deep business logic may take 3–6 weeks depending on requirements."
  },
  {
    question: "Do you provide laptops for hire for corporate events?",
    answer: "Yes, we are the leading provider of corporate laptop leasing in Kenya. We offer flexible rental plans for training, seminars, research projects, and remote teams with full technical support included."
  },
  {
    question: "What makes SIMON STYLES the best tech partner in Nairobi?",
    answer: "With 7+ years of experience and over 1,000 successful projects, we focus on ROI-driven technology. We don't just build tools; we create strategic assets that help you grow your business exponentially through efficient transactions and digital automation."
  }
];

export default function LandingPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'd like to book a consultation for a project.`;

  // Structured Data for Google (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SIMON STYLES TECHNOLOGY",
    "image": "https://simonstyles.co.ke/logo.jpg",
    "@id": "https://simonstyles.co.ke",
    "url": "https://simonstyles.co.ke",
    "telephone": "+254758673616",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Biashara Street, Revlon Professional Plaza, 2nd Floor",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2822,
      "longitude": 36.8211
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/simon-styles-technologies-limited-tech-company-644a00257/",
      "https://github.com/Symoh242"
    ]
  };

  return (
    <div className="bg-white min-h-screen selection:bg-accent/30">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <EcommerceHeader />

      <main className="pt-24 md:pt-32">
        {/* Agency Hero Section */}
        <section className="py-12 md:py-20 lg:py-28 overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Messaging */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[0.95]">
                    Your Trusted Partner <br/>
                    for <span className="text-accent italic">Digital Success.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                    We work with ambitious brands to ideate, design & build high-performance business systems powered by beautifully designed and engineered softwares and technological solutions.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="h-14 px-8 rounded-xl bg-[#3b32e0] hover:bg-[#3229c7] text-white font-black uppercase tracking-widest text-[10px] shadow-xl">
                    <Link href={whatsappLink}>
                      Book a free Consultation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-black uppercase tracking-widest text-[10px] bg-[#ff7b54] hover:bg-[#ff6a3d] text-white border-none">
                    <Link href="tel:0758673616" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call us!
                    </Link>
                  </Button>
                </div>

                <PartnersSection />
              </motion.div>

              {/* Right Column: Quote Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="absolute -inset-4 bg-accent/5 rounded-[2.5rem] blur-2xl -z-10"></div>
                <QuoteForm />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Impact Stats */}
        <section className="py-12 border-y border-gray-100 bg-white">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center">
                  <p className="text-3xl md:text-5xl font-black text-primary mb-1">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Animated Core Services Section */}
        <CoreServicesSection />

        {/* Featured Projects Showcase */}
        <section className="py-24 bg-[#fafafa]">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Strategic Achievements</span>
                </motion.div>
                <motion.h2 
                  {...fadeIn} 
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-[0.95]"
                >
                  Digital Products <br/>
                  <span className="text-accent">Engineered for Growth.</span>
                </motion.h2>
              </div>
              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <Button asChild variant="outline" className="h-14 px-8 rounded-xl border-2 font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Link href="/projects" className="flex items-center gap-2">
                    View Full Portfolio <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MOCK_PROJECTS.slice(0, 3).map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary">Q&A: Tech <span className="italic">Simplified.</span></h2>
              </motion.div>

              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-gray-50 py-2">
                      <AccordionTrigger className="text-left text-lg font-black text-primary hover:no-underline hover:text-accent transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-500 font-medium leading-relaxed pt-4 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
