'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Laptop, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  MessageCircle,
  Building,
  Users,
  Search,
  Settings,
  Star
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const stats = [
  { label: 'Experience', value: '7+ Years' },
  { label: 'Available Inventory', value: '1,000+' },
  { label: 'Happy Clients', value: '500+' },
  { label: 'Support', value: '24/7' },
];

const benefits = [
  {
    icon: Zap,
    title: "Latest Technology",
    text: "Immediate access to the newest models and high-performance specifications without the heavy upfront capital investment."
  },
  {
    icon: ShieldCheck,
    title: "Zero Maintenance",
    text: "We handle all maintenance, repairs, and software upgrades, ensuring your team stays productive without technical downtime."
  },
  {
    icon: Clock,
    title: "Flexible Durations",
    text: "Rent for the exact duration you need—from a single-day seminar to several months of remote project execution."
  },
  {
    icon: Settings,
    title: "Full Technical Support",
    text: "Dedicated technical assistance is included with every lease. We ensure your equipment is always optimized and ready."
  }
];

const clientele = [
  "IEBC Tallying Center", "Muthaiga Golf Club", "Guaranty Trust Bank", "Sapro", "Dalberg", "Dimension Data", "BrighterMonday", "My Dawa", "SunCulture"
];

export default function LaptopHirePage() {
  const whatsappLeaseLink = (subject: string) => {
    const text = `🚀 *Laptop Leasing Inquiry - SIMON STYLES* 🚀\n\nI am interested in hiring laptops for: ${subject}. Please provide availability and rates.`;
    return `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white min-h-screen">
      <EcommerceHeader />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 md:py-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-[50vw] h-full bg-accent rounded-full blur-[150px]"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Center of Excellence</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                  Laptops <br/>
                  <span className="text-accent italic">for Hire.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                  SIMON STYLES provides Kenya's most reliable and cost-effective solutions for corporate technology needs. We lend out high-performance inventory tailored for seminars, remote work, and professional research.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest text-xs shadow-2xl">
                    <Link href={whatsappLeaseLink('General Lease')}>
                      Request Laptops Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/20 hover:bg-white/5 text-white font-black uppercase tracking-widest text-xs">
                    <Link href="/laptops">
                      Shop Sales Inventory
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop"
                  alt="Premium Laptops"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-gray-50 border-b">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center">
                  <p className="text-4xl md:text-6xl font-black text-primary mb-1">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-24 md:py-40 bg-white">
          <Container>
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-primary leading-tight mb-8">
                Technology without the <br/>
                <span className="text-accent italic">Maintenance Debt.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Leasing laptops from SIMON STYLES allows you to scale your operations instantly. No repair costs, no technical headaches—just execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  {...fadeIn} 
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-gray-50 border-2 border-transparent hover:border-accent/10 hover:bg-white hover:shadow-2xl transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">{benefit.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Target Use Cases */}
        <section className="py-24 bg-primary text-white overflow-hidden">
          <Container>
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic mb-6"> Center of Excellence</h2>
               <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Tailor-made corporate solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Users, title: "Training & Seminars", text: "Equip your entire audience with uniform, high-performance systems for a seamless learning experience." },
                 { icon: Search, title: "Research Projects", text: "High-spec processing power for data-heavy research and analysis, available for short-term project windows." },
                 { icon: Building, title: "Remote Working", text: "Scale your remote team instantly with secure, ready-to-use hardware delivered to any location in Nairobi." }
               ].map((item, i) => (
                 <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center space-y-4">
                    <item.icon className="w-12 h-12 text-accent mx-auto" />
                    <h5 className="text-xl font-black uppercase tracking-tight">{item.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                 </div>
               ))}
            </div>
          </Container>
        </section>

        {/* Clientele Marquee */}
        <section className="py-24 bg-white border-y">
           <Container>
             <div className="flex flex-col items-center text-center space-y-12">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Elite Social Proof • Trusted By Leaders</p>
               <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50">
                 {clientele.map(client => (
                   <span key={client} className="text-xl md:text-2xl font-black text-primary tracking-tighter grayscale">{client}</span>
                 ))}
               </div>
             </div>
           </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-40 bg-accent text-white relative overflow-hidden">
          <Container className="relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12">Ready to Scale?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="h-20 px-12 rounded-3xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-lg shadow-2xl">
                <Link href={whatsappLeaseLink('Immediate Requirement')}>
                  <MessageCircle className="mr-3 h-6 w-6" /> Request Laptops
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-20 px-12 rounded-3xl border-white hover:bg-white hover:text-accent font-black uppercase tracking-widest text-lg">
                <Link href={`tel:0758673616`}>
                  Call Technical Lead
                </Link>
              </Button>
            </div>
            <p className="mt-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-60">SIMON STYLES TECHNOLOGY • NAIROBI, KENYA</p>
          </Container>
        </section>
      </main>

      <EcommerceFooter />
    </div>
  );
}
