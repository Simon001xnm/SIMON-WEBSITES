'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Laptop,
  Terminal,
  Zap,
  CheckCircle2,
  Building,
  ShieldCheck,
  Globe,
  ShoppingCart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { motion } from 'framer-motion';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SimpleLandingPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'm interested in your services.`;

  return (
    <div className="bg-white min-h-screen selection:bg-primary/30">
      <EcommerceHeader />

      <main className="pt-24 md:pt-32">
        {/* Simplified Hero */}
        <section className="py-16 md:py-24 text-center">
          <Container>
            <motion.div {...fadeIn}>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight text-gray-900 leading-[0.9] mb-8">
                Laptops. <br/>
                Web Design. <br/>
                <span className="text-primary italic">Sorted.</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
                The most direct tech partner in East Africa. No complex talk, just high-performance results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-16 px-12 text-lg rounded-2xl bg-primary hover:bg-primary/90 font-black uppercase tracking-widest shadow-xl">
                  <Link href="/laptops">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg rounded-2xl border-2 font-black uppercase tracking-widest">
                  <Link href={whatsappLink}>Chat With Us</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* The 4 Pillars Grid */}
        <section className="py-12 md:py-24 bg-gray-50 border-y border-gray-100">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Pillar 1: Sales */}
              <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border-2 border-gray-100 shadow-xl group hover:border-primary transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-black mb-4">Premium Laptops</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                  HP, Dell, and MacBooks. New and Refurbished with full warranty. Tested for reliability.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href="/laptops">View Inventory <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>

              {/* Pillar 2: Hire */}
              <motion.div id="hire" {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border-2 border-gray-100 shadow-xl group hover:border-primary transition-all">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-black mb-4">Hire & Lease</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                  Scale your team without big costs. Corporate leasing and individual rentals available today.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href={whatsappLink}>Inquire Leasing</Link>
                </Button>
              </motion.div>

              {/* Pillar 3: Web Design */}
              <motion.div id="web-design" {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border-2 border-gray-100 shadow-xl group hover:border-primary transition-all">
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8">
                  <Code className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-3xl font-black mb-4">Web Engineering</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                  High-speed websites and custom systems. M-Pesa integration included. Built to grow your business.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=I need a professional website.`}>Get a Quote</Link>
                </Button>
              </motion.div>

              {/* Pillar 4: Free ERP */}
              <motion.div {...fadeIn} className="bg-gray-950 p-10 rounded-[2.5rem] shadow-2xl text-white group border-2 border-transparent hover:border-green-500 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <Terminal className="w-8 h-8 text-green-500" />
                  </div>
                  <span className="bg-green-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Free Forever</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Free ERP & POS</h3>
                <p className="text-gray-400 font-medium mb-8 leading-relaxed">
                  Total management for your shop. Inventory, Sales, and Cloud Security. $0 cost for lifetime.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs bg-green-600 hover:bg-green-700 text-white border-none">
                  <Link href="https://royal-tech-computers-limited-7he6.vercel.app/login" target="_blank">Access System <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>

            </div>
          </Container>
        </section>

        {/* Trust Points - Simple & Direct */}
        <section className="py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <CheckCircle2 className="w-10 h-10 text-primary mb-6 mx-auto md:mx-0" />
                <h4 className="text-xl font-black uppercase mb-3">1 Year Warranty</h4>
                <p className="text-gray-500 font-medium">Guaranteed performance on every device we sell.</p>
              </div>
              <div>
                <ShieldCheck className="w-10 h-10 text-primary mb-6 mx-auto md:mx-0" />
                <h4 className="text-xl font-black uppercase mb-3">Bank-Grade Security</h4>
                <p className="text-gray-500 font-medium">Your systems and data are always encrypted.</p>
              </div>
              <div>
                <Globe className="w-10 h-10 text-primary mb-6 mx-auto md:mx-0" />
                <h4 className="text-xl font-black uppercase mb-3">Pan-African Reach</h4>
                <p className="text-gray-500 font-medium">Serving clients across Kenya and the entire continent.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final Simple CTA */}
        <section className="py-20 bg-primary text-white text-center">
          <Container>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to start?</h2>
            <Button asChild variant="secondary" size="lg" className="h-16 px-12 text-xl rounded-2xl font-black uppercase tracking-widest">
              <Link href={whatsappLink}>Chat with an Engineer</Link>
            </Button>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
