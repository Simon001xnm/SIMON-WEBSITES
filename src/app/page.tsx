'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Zap,
  Rocket,
  Sparkles,
  Layers,
  Activity,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { ClientsAndReachSection } from '@/components/sections/ClientsAndReachSection';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function AgencyLandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-background min-h-screen selection:bg-primary/30 overflow-x-hidden">
      <EcommerceHeader />

      <main>
        {/* Animated Hero Section - Scaled Down */}
        <section className="relative pt-16 pb-12 md:pt-28 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow -z-10 -translate-x-1/2 translate-y-1/2"></div>
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-primary" />
                  Elevating Digital Experiences
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95] mb-6">
                  We Build <br/>
                  <motion.span 
                    initial={{ color: "var(--foreground)" }}
                    animate={{ color: "hsl(var(--primary))" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="italic"
                  >
                    Excellence.
                  </motion.span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md leading-relaxed font-medium">
                  Simon Styles Technology transforms ambitious ideas into high-performance web ecosystems and enterprise software.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 transition-all font-black group">
                      <Link href="/contact">
                        Let's Talk <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full border-2 border-primary/10 hover:bg-secondary font-black">
                      <Link href="/projects">View Projects</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, rotateY: 30, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-square w-full max-w-[450px] mx-auto animate-float">
                  <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                  <div className="relative h-full w-full glass-card rounded-[3rem] overflow-hidden border-4 border-white/40 shadow-2xl group cursor-pointer">
                    <Image 
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                      alt="Modern Tech Hardware" 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint="tech aesthetic"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-50"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                      <motion.div 
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <p className="text-5xl font-black mb-1">#1</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-90">Agency in Nairobi</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Fun Stats Marquee - Tighter */}
        <section className="bg-primary py-6 overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 text-white whitespace-nowrap">
                <Zap className="w-5 h-5 fill-white" />
                <span className="text-lg font-black uppercase tracking-tighter">Fast Performance</span>
                <Globe className="w-5 h-5" />
                <span className="text-lg font-black uppercase tracking-tighter">Global Standards</span>
                <Code className="w-5 h-5" />
                <span className="text-lg font-black uppercase tracking-tighter">Clean Code</span>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Services - Refined Grid */}
        <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div {...fadeIn} className="max-w-xl">
                <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-2 text-xs">
                  <Activity className="w-4 h-4" /> Our Capabilities
                </h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                  Expertise that <br/> <span className="text-primary italic">defies limits.</span>
                </h3>
              </motion.div>
              <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-base text-muted-foreground max-w-xs font-medium">
                We don't just deliver products; we engineer competitive advantages through code.
              </motion.p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Globe,
                  title: "Web Engineering",
                  desc: "Ultra-fast Next.js platforms optimized for high traffic and maximum search visibility.",
                  features: ["Core Web Vitals", "headless CMS", "React Expert"]
                },
                {
                  icon: Layers,
                  title: "System Design",
                  desc: "Complex backend architectures, ERPs, and CRMs that automate your heavy lifting.",
                  features: ["Microservices", "Real-time Sync", "SQL/NoSQL"]
                },
                {
                  icon: Smartphone,
                  title: "Mobile Innovation",
                  desc: "Cross-platform apps with native speed, buttery smooth animations, and push tech.",
                  features: ["iOS & Android", "Biometrics", "Offline Mode"]
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative p-8 rounded-[2.5rem] bg-secondary/20 border-2 border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-[10deg] transition-transform shadow-lg shadow-primary/10">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* The Journey - Refined Animated Process */}
        <section className="py-24 bg-primary/[0.02] border-y border-primary/5">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px]"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Our Process" 
                  width={600} 
                  height={600} 
                  className="rounded-[3rem] shadow-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="team workshop"
                />
                <motion.div 
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 glass-card p-8 rounded-[2rem] z-20 hidden md:block border-2 border-white shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-4 rounded-full text-white animate-pulse">
                      <Rocket className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-foreground">100%</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Quality Guarantee</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <div>
                <motion.div {...fadeIn}>
                  <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-4 text-xs">Execution</h2>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 leading-[0.95]">The Roadmap to <br/><span className="text-primary italic">Digital Mastery.</span></h3>
                </motion.div>
                
                <div className="space-y-10">
                  {[
                    { step: "01", title: "Blueprint & Strategy", desc: "We map out your technical architecture and ROI goals before any code is typed." },
                    { step: "02", title: "High-Fidelity Design", desc: "Pixel-perfect interfaces designed for engagement and brand conversion." },
                    { step: "03", title: "Robust Engineering", desc: "Agile sprints with weekly demos ensuring total transparency and speed." },
                    { step: "04", title: "Deploy & Scale", desc: "Zero-downtime launch followed by 24/7 maintenance and optimization." },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-8 group"
                    >
                      <span className="text-5xl font-black text-primary/10 group-hover:text-primary transition-colors duration-500 leading-none">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-black mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* High Conversion CTA Section - Scaled Down Heading */}
        <section className="py-28 relative overflow-hidden group">
          <motion.div 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-primary skew-y-1 origin-right transition-transform duration-1000"
          ></motion.div>
          <Container className="relative z-10 text-center text-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">Ready to <br className="hidden md:block"/> Start Building?</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Transform your business challenges into elegant software. We are ready when you are.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="secondary" className="h-16 px-12 text-xl rounded-full hover:shadow-2xl transition-all font-black bg-white text-primary">
                    <Link href="/contact">Book A Session</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="h-16 px-12 text-xl rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-all font-black">
                    <Link href="tel:+254758673616">Call Us Direct</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </section>

        <ClientsAndReachSection />
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
