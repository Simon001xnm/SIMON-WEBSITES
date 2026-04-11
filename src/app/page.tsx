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
  Clock,
  Wallet,
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

const stats = [
  { label: 'Glorious Years', value: '11+' },
  { label: 'Sales Completed', value: '3,330+' },
  { label: 'Laptops Leased', value: '8,500+' },
  { label: 'Happy Clients', value: '500+' },
];

const leasingBenefits = [
  { icon: Wallet, title: "Cost Effective", desc: "Save money without long-term capital commitment." },
  { icon: Zap, title: "Latest Tech", desc: "Access the newest models and specifications immediately." },
  { icon: Clock, title: "Flexible Duration", desc: "Rent from a few days to several months as needed." },
  { icon: ShieldCheck, title: "Full Support", desc: "Maintenance and technical assistance always included." },
];

export default function DirectLandingPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'm interested in your services.`;

  return (
    <div className="bg-white min-h-screen selection:bg-accent/30">
      <EcommerceHeader />

      <main className="pt-24 md:pt-32">
        {/* Simplified High-Impact Hero */}
        <section className="py-16 md:py-28 text-center bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Kenya's Elite Tech Partner</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight text-primary leading-[0.9] mb-8">
                Laptops for Hire. <br/>
                Web Design. <br/>
                <span className="text-accent italic">Sorted.</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Direct results for Corporate & Individual needs. Over 11 years of engineering excellence in East Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-16 px-12 text-lg rounded-2xl bg-primary hover:bg-primary/90 font-black uppercase tracking-widest shadow-xl">
                  <Link href="/laptops">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg rounded-2xl border-2 border-primary/10 font-black uppercase tracking-widest text-primary">
                  <Link href={whatsappLink}>Chat With Us</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Established Stats */}
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
              
              {/* Pillar 1: Sales */}
              <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border-2 border-transparent shadow-xl group hover:border-accent transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Premium Laptops</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                  HP, Dell, and MacBooks. New and Certified Refurbished with full warranty. Tested for reliability.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href="/laptops">View Inventory <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>

              {/* Pillar 2: Hire */}
              <motion.div id="hire" {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border-2 border-transparent shadow-xl group hover:border-accent transition-all">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Hire & Lease</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                  Scale your team without the upfront cost. Corporate rentals for training, seminars, and remote research.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href={whatsappLink}>Inquire Leasing</Link>
                </Button>
              </motion.div>

              {/* Pillar 3: Web Design */}
              <motion.div id="web-design" {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border-2 border-transparent shadow-xl group hover:border-accent transition-all">
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8">
                  <Code className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Web Engineering</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                  High-speed websites and custom systems. M-Pesa integration and AI-driven workflows included.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs" variant="outline">
                  <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=I need a professional website.`}>Get a Quote</Link>
                </Button>
              </motion.div>

              {/* Pillar 4: Free ERP */}
              <motion.div {...fadeIn} className="bg-primary p-10 rounded-[2.5rem] shadow-2xl text-white group border-2 border-transparent hover:border-green-500 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <Terminal className="w-8 h-8 text-green-500" />
                  </div>
                  <span className="bg-green-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Free Forever</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Free POS & ERP</h3>
                <p className="text-gray-400 font-medium mb-8 leading-relaxed">
                  Total management for your shop. Inventory, Sales, and Cloud Security. $0 cost for Kenyan SMEs.
                </p>
                <Button asChild className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs bg-green-600 hover:bg-green-700 text-white border-none">
                  <Link href="https://royal-tech-computers-limited-7he6.vercel.app/login" target="_blank">Access System <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>

            </div>
          </Container>
        </section>

        {/* Leasing Detail Section */}
        <section className="py-24 bg-white overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-8 leading-tight">
                  Premium Technology <br/>
                  <span className="text-accent italic">on your terms.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {leasingBenefits.map((benefit, i) => (
                    <div key={i} className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-black text-sm uppercase tracking-tight">{benefit.title}</h4>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="mt-12 h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">
                  <Link href={whatsappLink}>Request a Laptop Rental</Link>
                </Button>
              </motion.div>
              <motion.div {...fadeIn} className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                <Image 
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop"
                  alt="Business meeting"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Trusted By */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <Container>
            <div className="text-center mb-16">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Our Clientele</p>
              <h3 className="text-3xl font-black text-primary uppercase tracking-tighter">Trusted by Industry Leaders</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 transition-all duration-500">
              {['IEBC', 'Muthaiga Golf Club', 'GTBank', 'Dimension Data', 'Siginon Group', 'My Dawa'].map((client) => (
                <span key={client} className="text-lg md:text-xl font-black text-primary tracking-widest">{client}</span>
              ))}
            </div>
          </Container>
        </section>

        {/* Final Simple CTA */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
          <Container className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Ready to evolve?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl mx-auto font-medium">Work with the leading IT firm in Kenya. High performance, zero boredom.</p>
            <Button asChild variant="secondary" size="lg" className="h-16 px-12 text-xl rounded-2xl font-black uppercase tracking-widest text-primary">
              <Link href={whatsappLink}>Start a Conversation</Link>
            </Button>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
