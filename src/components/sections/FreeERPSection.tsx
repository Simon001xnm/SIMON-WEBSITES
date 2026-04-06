'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Laptop, Smartphone, Database, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const detailedFeatures = [
  { 
    icon: Zap, 
    title: "Instant Point of Sale", 
    text: "Process transactions in seconds with an intuitive, lightning-fast POS interface designed for high-traffic shops." 
  },
  { 
    icon: Database, 
    title: "Inventory Master", 
    text: "Automated stock tracking with low-stock alerts, category management, and detailed product history." 
  },
  { 
    icon: BarChart3, 
    title: "Powerful Analytics", 
    text: "Generate daily, weekly, and monthly sales reports to understand your profit margins and growth trends." 
  },
  { 
    icon: ShieldCheck, 
    title: "Secure Cloud Core", 
    text: "Your data is encrypted and backed up daily on secure cloud servers, accessible only by you from anywhere." 
  },
];

export function FreeERPSection() {
  const erpLink = "https://royal-tech-computers-limited-7he6.vercel.app/login";

  return (
    <section id="free-erp" className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[150px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[150px]"></div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 lg:sticky lg:top-40"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-600">Free for Lifetime • Official Release</span>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[0.95]">
                Enterprise Grade <br/>
                <span className="text-primary italic">POS & ERP Suite.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                We are revolutionizing local commerce by providing world-class management tools to every Kenyan business—<span className="text-gray-900 font-black">completely free of charge.</span> No subscriptions, no hidden fees, just pure growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {detailedFeatures.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-6 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">{f.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-gray-950 hover:bg-primary text-white font-black uppercase tracking-widest text-xs transition-all shadow-2xl hover:scale-105">
                <Link href={erpLink} target="_blank">
                  Access Your System Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-dashed border-gray-200">
                <Globe className="w-5 h-5 text-gray-400" />
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Global Web Access</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group lg:mt-12"
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <Link href={erpLink} target="_blank" className="block relative">
              <div className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-gray-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                <Image 
                  src="/2026-04-06 171856.png" 
                  alt="Professional ERP Suite Dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                />
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gray-900 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                      Launch Demo <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="glass-card p-6 rounded-[2rem] border border-white/20 w-full shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900 text-lg font-black tracking-tight mb-1">Live Management Console</p>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Simon Styles Technology • Open Beta</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-200">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Floating Device Icons */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-[2rem] shadow-2xl border-4 border-gray-50 flex items-center justify-center hidden md:flex">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-[2rem] shadow-2xl border-4 border-gray-50 flex items-center justify-center hidden md:flex">
              <Laptop className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
