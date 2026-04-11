
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
  Smartphone, 
  Cloud, 
  Shield, 
  Bot, 
  ArrowRight,
  Zap,
  Layers,
  Search,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  Wallet,
  Globe,
  Database,
  RefreshCw,
  LineChart
} from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "web-engineering",
    icon: Globe,
    title: "Web Engineering",
    price: "20,000",
    priceNote: "Starting From",
    description: "High-performance, SEO-friendly architectures. We don't just build websites; we build digital assets designed to convert visitors into customers.",
    features: [
      "Next.js & React Performance",
      "SEO-First Semantic Markup",
      "Mobile-First Responsive Design",
      "Headless CMS Integration",
      "Speed Optimized (< 2s load time)",
    ],
    accent: "from-blue-500 to-cyan-600"
  },
  {
    id: "mpesa-integration",
    icon: Wallet,
    title: "M-Pesa & Fintech",
    price: "15,000",
    priceNote: "Official API Sync",
    description: "Specialized Daraja API integration. We automate your revenue collection with STK Push, Paybill sync, and automated B2C payouts.",
    features: [
      "Lipa Na M-Pesa STK Push",
      "C2B Paybill/Till Automation",
      "Real-time Payment Callbacks",
      "Secure Sandbox Migration",
    ],
    accent: "from-green-500 to-emerald-600"
  },
  {
    id: "software-architecture",
    icon: Database,
    title: "System Architecture",
    price: "60,000",
    priceNote: "Tailored Solutions",
    description: "Custom-built ERP, CRM, and automation tools that map perfectly to your unique business logic and eliminate operational waste.",
    features: [
      "Bespoke Business Logic",
      "Real-time Data Syncing",
      "Scalable Cloud Backends",
      "Comprehensive API Docs",
    ],
    accent: "from-purple-500 to-indigo-600"
  }
];

const processSteps = [
  {
    title: "Discovery",
    desc: "We learn your business, audience, and goals to create a data-driven roadmap.",
    icon: Search
  },
  {
    title: "Design",
    desc: "Wireframes and interactive mockups to validate UX before development starts.",
    icon: Layers
  },
  {
    title: "Build & QA",
    desc: "Agile development with cross-device testing and performance tuning.",
    icon: Code
  },
  {
    title: "Launch & Growth",
    desc: "SEO checklist, analytics setup, and coordinated go-live support.",
    icon: Zap
  }
];

const techCapabilities = [
  { icon: Smartphone, title: "Mobile Innovation", desc: "Native-feel cross-platform apps for iOS & Android." },
  { icon: Shield, title: "Cyber Security", desc: "Proactive defense, audits, and penetration testing." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Modernize with AWS, GCP, or Azure infrastructure." },
  { icon: RefreshCw, title: "Maintenance", desc: "Uptime monitoring, security patches, and updates." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ServicesPage() {
  const generateWhatsAppLink = (serviceTitle: string) => {
    const message = `Hello! I'm interested in professional "${serviceTitle}" services. I'd like to schedule a project discovery session.`;
    return `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-primary/30 overflow-x-hidden">
      <EcommerceHeader />
      
      <main>
        {/* Elite Hero */}
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
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Professional Engineering & Design</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8 md:mb-10"
              >
                World-Class <br/>
                <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Digital Success.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed font-medium mb-10 md:mb-12 mx-auto lg:mx-0"
              >
                We translate complex ideas into elegant code. High-performing, search-engine-friendly experiences built to convert visitors into customers.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start px-4 sm:px-0"
              >
                <Button asChild size="lg" className="h-16 px-10 text-base md:text-lg rounded-2xl bg-accent hover:bg-accent/90 font-black uppercase tracking-widest shadow-2xl shadow-accent/20 transition-all hover:scale-[1.02] w-full sm:w-auto">
                  <Link href="#services-grid">Explore Catalog</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-base md:text-lg rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase tracking-widest transition-all w-full sm:w-auto">
                  <Link href="/contact">Free Audit</Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Core Services Grid */}
        <section id="services-grid" className="py-20 md:py-32 bg-white text-black rounded-t-[3rem] md:rounded-t-[4rem]">
          <Container>
            <div className="text-center mb-16 md:mb-24">
              <motion.h2 {...fadeIn} className="text-3xl md:text-6xl font-black tracking-tighter mb-6">Built to <span className="text-primary italic">Rank & Perform.</span></motion.h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">Why settle for a website when you can own a lead-generating engine?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    key={service.title}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-1 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                  >
                    <div className="p-8 md:p-10 flex flex-col h-full">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
                        <Icon className="w-7 h-7 md:w-8 md:h-8" />
                      </div>
                      
                      <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow text-sm md:text-base">{service.description}</p>
                      
                      <ul className="space-y-4 mb-10">
                        {service.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-700">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Button asChild className="w-full h-14 rounded-2xl bg-gray-950 hover:bg-primary text-white font-black uppercase tracking-widest text-[10px] transition-all shadow-lg">
                        <Link href={generateWhatsAppLink(service.title)}>
                          Schedule Discovery
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Detailed Workflow */}
        <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
          <Container>
            <div className="text-center mb-16 md:mb-24">
              <motion.h2 {...fadeIn} className="text-3xl md:text-6xl font-black tracking-tighter text-black mb-6">Our Engineering <span className="text-primary italic">Process.</span></motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium px-4">Transparent timelines and milestone-driven results.</motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={step.title}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-lg text-center group hover:bg-primary transition-colors duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-8 group-hover:bg-white/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-black group-hover:text-white mb-4 uppercase tracking-tighter">{step.title}</h4>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technical Capabilities Grid */}
        <section className="py-20 md:py-32 bg-white text-black">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Advanced <br/><span className="text-accent">Capabilities.</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {techCapabilities.map((cap, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                        <cap.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-black text-sm uppercase tracking-tight">{cap.title}</h4>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeIn} 
                className="p-10 md:p-16 rounded-[3rem] bg-gray-950 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <LineChart className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-black mb-6">SEO-Friendly Standards</h3>
                <ul className="space-y-4">
                  {[
                    "Semantic Heading Hierarchy (H1-H6)",
                    "Image Optimization & Lazy Loading",
                    "Structured Data (JSON-LD) Support",
                    "Canonical URLs & Sitemap Generation",
                    "Analytics & Search Console Setup"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-10 w-full h-14 rounded-2xl bg-white text-black hover:bg-gray-100 font-black uppercase tracking-widest text-xs">
                  <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}`}>Get Project Quote</Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
          <Container className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Ready to evolve?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl mx-auto font-medium">Build a website that works as hard as you do. Schedule your discovery session today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="h-16 px-12 text-lg rounded-2xl font-black uppercase tracking-widest text-primary">
                <Link href={`tel:+254758673616`}>Call Lead Engineer</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase tracking-widest">
                <Link href={`mailto:simonwanjiru224@gmail.com`}>Email Us</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
