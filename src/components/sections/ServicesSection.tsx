
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Code, Smartphone, LayoutPanelLeft, Zap, Shield, Search } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Engineering",
    description: "High-performance enterprise web applications and scalable SaaS platforms built with Next.js and high-end tech stacks.",
    accent: "bg-blue-500"
  },
  {
    icon: LayoutPanelLeft,
    title: "System Architecture",
    description: "Designing custom ERP, CRM, and automation tools that streamline business operations and eliminate bottlenecks.",
    accent: "bg-purple-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    description: "Crafting native-feel mobile applications for iOS and Android that engage users and drive consistent digital growth.",
    accent: "bg-pink-500"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <Search className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Core Specialization</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[0.9] mb-10">
                Translating complex ideas into <br/>
                <span className="text-primary italic underline decoration-primary/10">elegant code.</span>
              </h2>
            </motion.div>
            
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    key={index}
                    {...fadeIn}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center h-16 w-16 rounded-2xl ${service.accent} text-white group-hover:scale-110 transition-all duration-500 shadow-xl shadow-gray-200`}>
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed max-w-md">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div {...fadeIn} transition={{ delay: 0.5 }}>
              <Button asChild size="lg" className="mt-16 h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                <Link href="/services">
                  Explore Full Service Catalog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-[100px] -z-10 animate-pulse"></div>
            <div className="relative aspect-square md:aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1935&auto=format&fit=crop"
                alt="Simon Styles Software Engineering"
                fill
                className="object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-4 border-white"
                data-ai-hint="software engineer coding"
              />
              {/* Floating micro-stats */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-12 -left-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Optimized Performance</p>
                    <p className="text-xl font-black text-gray-900">99.9% UPTIME</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-12 -right-12 bg-gray-950 p-6 rounded-3xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Security</p>
                    <p className="text-xl font-black text-white">ISO CERTIFIED</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
