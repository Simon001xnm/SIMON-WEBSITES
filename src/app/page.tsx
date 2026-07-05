
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { QuoteForm } from '@/components/sections/QuoteForm';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, ArrowRight, Code, ShoppingCart, Building, Terminal, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    answer: "Yes. Simon Styles is a premier web design and software development company based in Nairobi, Kenya. We specialize in building high-performance websites, custom mobile apps (Android/iOS), and complex business software solutions tailored for the East African market."
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
    question: "What makes Simon Styles the best tech partner in Nairobi?",
    answer: "With 7+ years of experience and over 1,000 successful projects, we focus on ROI-driven technology. We don't just build tools; we create strategic assets that help you grow your business exponentially through efficient transactions and digital automation."
  }
];

export default function LandingPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'd like to book a consultation for a project.`;

  return (
    <div className="bg-white min-h-screen selection:bg-accent/30">
      <EcommerceHeader />

      <main className="pt-24 md:pt-32">
        {/* New Agency-Style Hero Section */}
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

        {/* The 4 Core Pillars */}
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] shadow-xl group border-2 border-transparent hover:border-accent transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Premium Sales</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">HP, Dell, and MacBooks. New and Certified Refurbished with full warranty.</p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href="/laptops">View Inventory</Link>
                </Button>
              </motion.div>

              <motion.div id="hire" {...fadeIn} className="bg-white p-10 rounded-[2.5rem] shadow-xl group border-2 border-transparent hover:border-accent transition-all">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Hire & Lease</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">Scale your team without upfront costs. Corporate rentals for seminars and remote work.</p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href={whatsappLink}>Inquire Leasing</Link>
                </Button>
              </motion.div>

              <motion.div id="web-design" {...fadeIn} className="bg-white p-10 rounded-[2.5rem] shadow-xl group border-2 border-transparent hover:border-accent transition-all">
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8">
                  <Code className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Web Engineering</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">High-speed websites and custom apps. M-Pesa integration and AI-driven workflows.</p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=I need a professional website.`}>Get a Quote</Link>
                </Button>
              </motion.div>

              <motion.div {...fadeIn} className="bg-primary p-10 rounded-[2.5rem] shadow-2xl text-white group border-2 border-transparent hover:border-green-500 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <Terminal className="w-8 h-8 text-green-500" />
                  </div>
                  <span className="bg-green-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Integrated Payments</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Business Hub ERP</h3>
                <p className="text-gray-400 font-medium mb-8 leading-relaxed">Total management system with integrated M-Pesa & card payments. Get your 1 Month free trial today.</p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs bg-green-600 hover:bg-green-700 text-white border-none">
                  <Link href="https://businesshub.co.ke" target="_blank">Access Business Hub</Link>
                </Button>
              </motion.div>

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

