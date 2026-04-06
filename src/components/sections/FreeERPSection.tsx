'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Laptop } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  { icon: Zap, text: "Real-time Inventory" },
  { icon: BarChart3, text: "Sales Analytics" },
  { icon: ShieldCheck, text: "Secure Cloud Access" },
];

export function FreeERPSection() {
  const erpLink = "https://royal-tech-computers-limited-7he6.vercel.app/login";

  return (
    <section id="free-erp" className="py-24 md:py-40 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent rounded-full blur-[120px]"></div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-600">Free for Lifetime • No Hidden Fees</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[0.95]">
              Professional <br/>
              <span className="text-primary italic">ERP & POS Suite.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
              We are empowering Kenyan small businesses, shops, and startups with a world-class management system. 
              Manage your stock, track sales, and grow your empire—<span className="text-gray-900 font-black underline decoration-primary/30">completely free of charge.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <f.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-tight text-gray-600">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-gray-950 hover:bg-primary text-white font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
                <Link href={erpLink} target="_blank">
                  Access Free System <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-dashed border-gray-200">
                <Laptop className="w-5 h-5 text-gray-400" />
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Available on all Browsers</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl bg-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional ERP Suite Dashboard"
                fill
                className="object-cover"
                data-ai-hint="erp dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="glass-card p-6 rounded-3xl border border-white/20 w-full">
                  <p className="text-white text-lg font-black tracking-tight mb-1">Empowering Local Commerce</p>
                  <p className="text-white/70 text-xs font-medium italic">"Built to help you outpace the competition, at zero cost."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
