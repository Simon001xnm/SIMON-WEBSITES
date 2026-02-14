'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  ChevronLeft, 
  Code, 
  Smartphone, 
  Cloud, 
  Megaphone, 
  Shield, 
  Wrench, 
  Bot, 
  ArrowRight,
  Zap,
  Layers,
  Search,
  CheckCircle2,
  Phone
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
    id: "website-development",
    icon: Code,
    title: "Web Engineering",
    price: "20,000",
    priceNote: "Starting From",
    description: "High-performance, custom-built web architectures from East Africa's top-rated designer. Not just websites, but digital assets.",
    features: [
      "Next.js & React Native Performance",
      "Free 1 Year Hosting & Domain",
      "Full SEO & Analytics Integration",
      "Headless CMS for Easy Updates",
      "Speed Optimized (< 2s load time)",
    ],
    accent: "from-cyan-500 to-blue-600"
  },
  {
    id: "software-development",
    icon: Bot,
    title: "System Architecture",
    price: "60,000",
    priceNote: "Starting From",
    description: "Tailored ERP, CRM, and automation tools that solve complex business logic and eliminate operational waste.",
    features: [
      "Custom Business Logic Mapping",
      "Real-time Data Syncing",
      "Secure API Integrations",
      "Scalable Cloud Infrastructure",
    ],
    accent: "from-purple-500 to-indigo-600"
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "Mobile Innovation",
    price: "140,000",
    priceNote: "Starting From",
    description: "Native-feel cross-platform mobile apps providing seamless experiences across Kenya and the global market.",
    features: [
      "iOS & Android Universal Deployment",
      "Push Notification Systems",
      "Offline Sync Capabilities",
      "Store Optimization (ASO)",
    ],
    accent: "from-pink-500 to-rose-600"
  },
  {
    id: "cloud-computing",
    icon: Cloud,
    title: "Cloud & DevOps",
    price: "45,000",
    priceNote: "Starting From",
    description: "Modernize your infrastructure with AWS, GCP, or Azure. We build the backbone that never goes down.",
    features: [
      "Auto-scaling Configurations",
      "Serverless Architecture (Lambda)",
      "Zero-Downtime Deployments",
      "Cost Reduction Strategies",
    ],
    accent: "from-blue-400 to-cyan-500"
  },
  {
    id: "ethical-hacking",
    icon: Shield,
    title: "Cyber Security",
    price: "80,000",
    priceNote: "Full Audit",
    description: "Proactive defense against the invisible. We think like hackers to ensure your data remains impenetrable.",
    features: [
      "Full Penetration Testing",
      "Network Vulnerability Scan",
      "Compliance Audits (GDPR/DPA)",
      "Incident Response Planning",
    ],
    accent: "from-emerald-500 to-teal-600"
  },
  {
    id: "social-media-management",
    icon: Megaphone,
    title: "Brand Management",
    price: "4,000",
    priceNote: "Per Month",
    description: "Data-driven storytelling that builds communities and converts followers into brand evangelists.",
    features: [
      "High-Impact Content Strategy",
      "Community Engagement Ops",
      "Weekly Growth Reports",
      "Targeted Ad Campaign Mgmt",
    ],
    accent: "from-orange-500 to-red-600"
  },
];

const steps = [
  {
    title: "Discovery",
    desc: "We dive deep into your business goals, target audience, and current pain points.",
    icon: Search
  },
  {
    title: "Architecture",
    desc: "We map out the system requirements and UI/UX flows for a seamless experience.",
    icon: Layers
  },
  {
    title: "Engineering",
    desc: "Our A-Team builds your solution with clean, scalable, and modern code.",
    icon: Code
  },
  {
    title: "Growth",
    desc: "We launch, monitor, and optimize your project for maximum ROI.",
    icon: Zap
  }
];

const faqs = [
  {
    q: "How long does a standard website take?",
    a: "As the region's leading team, we balance speed with perfection. A professional 5-page startup site typically takes 7-14 business days from design approval to launch."
  },
  {
    q: "What are your payment terms?",
    a: "We work with a 50% down payment to initiate the project and secure your slot. The remaining 50% is settled after the project is fully completed and handed over to you."
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "Yes, we provide ongoing support, security updates, and performance monitoring for all our systems."
  },
  {
    q: "Can you integrate M-Pesa payments?",
    a: "Absolutely. We are experts in Daraja API integrations for real-time customer payments."
  },
  {
    q: "Is the first year of hosting really free?",
    a: "Yes! When you start a web project with us, we cover your domain and high-speed hosting costs for the first 12 months."
  }
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ServicesPage() {
  const generateWhatsAppLink = (serviceTitle: string, price: string) => {
    const message = `Hello! I'm interested in the "${serviceTitle}" service (KES ${price}). Can we discuss my requirements?`;
    return `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-primary/30">
      <EcommerceHeader />
      
      <main>
        {/* Cinematic Hero */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2 opacity-50"></div>
          
          <Container>
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">East Africa's Leading Digital Partner</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10"
              >
                Leading the <br/>
                <span className="text-primary italic underline decoration-primary/20">Digital Era.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-medium mb-12"
              >
                We are the top-rated agency for web design and custom systems in East Africa. Our engineering excellence gives your enterprise a definitive global advantage.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button asChild size="lg" className="h-16 px-10 text-lg rounded-2xl bg-primary hover:bg-primary/90 font-black uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                  <Link href="#services-grid">View Our Expertise</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase tracking-widest transition-all">
                  <Link href="/contact">Free Consultation</Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="py-32 bg-white text-black rounded-t-[4rem]">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-24">
              <motion.div {...fadeIn} className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">The best solutions, <br/><span className="text-primary italic">engineered by leaders.</span></h2>
                <p className="text-xl text-gray-500 font-medium">As East Africa's premier design firm, we provide the elite technical infrastructure your brand deserves.</p>
              </motion.div>
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="hidden lg:block">
                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Payment Policy</p>
                    <p className="text-2xl font-black">50% DEPOSIT</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    key={service.title}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
                    
                    <div className="p-10 flex flex-col h-full">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.accent} shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                      
                      <div className="mb-6">
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">{service.priceNote}</p>
                        <p className="text-4xl font-black text-accent">KES {service.price}</p>
                      </div>

                      <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow">{service.description}</p>
                      
                      <ul className="space-y-4 mb-10">
                        {service.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Button asChild className="w-full h-14 rounded-2xl bg-gray-950 hover:bg-primary text-white font-black uppercase tracking-widest text-[10px] transition-all">
                        <a href={generateWhatsAppLink(service.title, service.price)} target="_blank" rel="noopener noreferrer">
                          <WhatsAppIcon /> Secure Your Spot
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Strategic Workflow */}
        <section className="py-32 bg-gray-50 overflow-hidden">
          <Container>
            <div className="text-center mb-24">
              <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6">Our Leading <span className="text-primary italic">Workflow.</span></motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">We've refined a process that ensures elite quality and absolute clarity at every stage.</motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
              
              {steps.map((step, i) => (
                <motion.div 
                  key={step.title}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl text-center group hover:bg-primary transition-colors duration-500"
                >
                  <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-white/20 transition-colors">
                    <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-black group-hover:text-white mb-4 uppercase tracking-tighter">{step.title}</h4>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 font-medium leading-relaxed">{step.desc}</p>
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center font-black text-primary text-xl">
                    0{i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div>
                <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-8 leading-[0.9]">Common <br/><span className="text-primary italic">Queries.</span></motion.h2>
                <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-xl text-gray-500 font-medium mb-12">Transparency is why we are the leaders. If you have more questions, our team is always ready.</motion.p>
                
                <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-2xl border-gray-200 hover:bg-gray-50 font-black uppercase tracking-widest text-[10px]">
                  <Link href="/contact">Talk to a Lead Engineer <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>

              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border rounded-[1.5rem] px-8 py-2 bg-gray-50 border-gray-100 hover:border-primary/20 transition-colors">
                      <AccordionTrigger className="text-lg font-black text-black hover:no-underline text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-500 font-medium text-base leading-relaxed pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <Container>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-16 md:p-24 rounded-[4rem] bg-gray-950 text-white text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 pointer-events-none"></div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 relative z-10">Outpace <br/>your <span className="text-primary italic">competition.</span></h2>
              <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto font-medium relative z-10">Work with the leading agency in the region. Let's build your future today.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <Button asChild size="lg" className="h-16 px-12 text-lg rounded-2xl bg-white text-primary hover:bg-gray-100 font-black uppercase tracking-widest shadow-xl transition-all hover:scale-105">
                  <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}`}>Partner with Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase tracking-widest transition-all">
                  <Link href="/projects">See Our Track Record</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
