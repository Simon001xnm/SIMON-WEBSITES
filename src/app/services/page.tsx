
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  ArrowRight,
  Zap,
  CheckCircle2,
  Globe,
  Database,
  Wallet
} from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER, OFFICIAL_EMAIL } from '@/lib/constants';

const services = [
  {
    id: "web-engineering",
    icon: Globe,
    title: "Web Engineering",
    description: "High-performance, SEO-friendly architectures built to convert visitors into customers.",
    features: [
      "Next.js Performance",
      "SEO-First Markup",
      "Mobile-First Design",
      "Headless CMS",
    ],
    accent: "from-blue-500 to-cyan-600"
  },
  {
    id: "mpesa-integration",
    icon: Wallet,
    title: "M-Pesa & Fintech",
    description: "Specialized Daraja API integration for STK Push and C2B automated payments.",
    features: [
      "STK Push Integration",
      "Till Automation",
      "Real-time Callbacks",
      "Secure Sandbox",
    ],
    accent: "from-green-500 to-emerald-600"
  },
  {
    id: "software-architecture",
    icon: Database,
    title: "System Architecture",
    description: "Custom ERP, CRM, and automation tools that map perfectly to your business logic.",
    features: [
      "Bespoke Business Logic",
      "Real-time Data Sync",
      "Cloud Backends",
      "Full API Support",
    ],
    accent: "from-purple-500 to-indigo-600"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ServicesPage() {
  const generateWhatsAppLink = (serviceTitle: string) => {
    const message = `Hello! I'm interested in professional "${serviceTitle}" services.`;
    return `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-primary/30 overflow-x-hidden">
      <EcommerceHeader />
      
      <main>
        {/* The Direct Mantra */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          
          <Container>
            <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/60">No Jargon. Just Results.</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12"
              >
                Web Design. <br/>
                <span className="text-accent italic">Sorted.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="h-16 px-10 text-base md:text-lg rounded-2xl bg-accent hover:bg-accent/90 font-black uppercase tracking-widest shadow-2xl shadow-accent/20 w-full sm:w-auto">
                  <Link href="#services-grid">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-base md:text-lg rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase tracking-widest w-full sm:w-auto">
                  <Link href="/contact">Free Audit</Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Direct Service Cards */}
        <section id="services-grid" className="py-20 md:py-32 bg-white text-black rounded-t-[3rem] md:rounded-t-[4rem]">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    key={service.title}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-1 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                  >
                    <div className="p-10 flex flex-col h-full">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow">{service.description}</p>
                      
                      <ul className="space-y-4 mb-10">
                        {service.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-xs font-bold text-gray-700 uppercase tracking-widest">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Button asChild className="w-full h-14 rounded-2xl bg-gray-950 hover:bg-primary text-white font-black uppercase tracking-widest text-[10px] transition-all shadow-lg">
                        <Link href={generateWhatsAppLink(service.title)}>
                          Book Discovery
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Final Call */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
          <Container className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Ready to evolve?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="h-16 px-12 text-lg rounded-2xl font-black uppercase tracking-widest text-primary">
                <Link href={`tel:0758673616`}>Call Lead Engineer</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase tracking-widest">
                <Link href={`mailto:${OFFICIAL_EMAIL}`}>Email Us</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
