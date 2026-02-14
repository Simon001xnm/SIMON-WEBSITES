'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  CheckCircle2,
  Zap,
  Rocket,
  MousePointer2,
  Sparkles,
  Layers,
  Activity,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { ClientsAndReachSection } from '@/components/sections/ClientsAndReachSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AgencyLandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
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
        {/* Animated Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-40 md:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow -z-10 -translate-x-1/2 translate-y-1/2"></div>
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8"
                >
                  <Sparkles className="w-4 h-4 fill-primary" />
                  Elevating Digital Experiences
                </motion.div>
                
                <h1 className="text-6xl md:text-[100px] font-black tracking-tighter text-foreground leading-[0.9] mb-8">
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
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-lg leading-relaxed font-medium">
                  Simon Styles Technology transforms ambitious ideas into high-performance web ecosystems and enterprise software.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="h-20 px-12 text-xl rounded-full shadow-2xl shadow-primary/40 bg-primary hover:bg-primary/90 transition-all font-black group">
                      <Link href="/contact">
                        Let's Talk <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" size="lg" className="h-20 px-12 text-xl rounded-full border-2 border-primary/20 hover:bg-secondary font-black">
                      <Link href="/projects">View Projects</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-square w-full max-w-[600px] mx-auto animate-float">
                  <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
                  <div className="relative h-full w-full glass-card rounded-[4rem] overflow-hidden border-8 border-white/40 shadow-[0_0_80px_rgba(var(--primary),0.3)] group cursor-pointer">
                    <Image 
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                      alt="Modern Tech Hardware" 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint="tech aesthetic"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-16 left-16 text-white">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <p className="text-6xl font-black mb-2">#1</p>
                        <p className="text-sm font-black uppercase tracking-[0.3em] opacity-90">Agency in Nairobi</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Fun Stats Marquee */}
        <section className="bg-primary py-10 overflow-hidden">
          <div className="flex animate-marquee gap-20 items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-white whitespace-nowrap">
                <Zap className="w-6 h-6 fill-white" />
                <span className="text-2xl font-black uppercase tracking-tighter">Fast Performance</span>
                <Globe className="w-6 h-6" />
                <span className="text-2xl font-black uppercase tracking-tighter">Global Standards</span>
                <Code className="w-6 h-6" />
                <span className="text-2xl font-black uppercase tracking-tighter">Clean Code</span>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Services - Interactive Grid */}
        <section className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <motion.div {...fadeIn} className="max-w-2xl">
                <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                  <Activity className="w-5 h-5" /> Our Capabilities
                </h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                  Expertise that <br/> <span className="text-primary italic">defies limits.</span>
                </h3>
              </motion.div>
              <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground max-w-sm font-medium">
                We don't just deliver products; we engineer competitive advantages through code.
              </motion.p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
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
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative p-12 rounded-[3.5rem] bg-secondary/20 border-2 border-transparent hover:border-primary/30 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                >
                  <div className="w-20 h-20 bg-primary text-white rounded-[2rem] flex items-center justify-center mb-10 group-hover:rotate-[15deg] transition-transform shadow-xl shadow-primary/20">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-black mb-6 tracking-tight">{service.title}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* The Journey - Animated Process */}
        <section className="py-32 bg-primary/[0.03] border-y border-primary/5">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-bounce"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Our Process" 
                  width={700} 
                  height={700} 
                  className="rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="team workshop"
                />
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-12 -right-12 glass-card p-12 rounded-[3rem] z-20 hidden md:block border-4 border-white shadow-2xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-primary p-5 rounded-full text-white animate-pulse">
                      <Rocket className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-5xl font-black text-foreground">100%</p>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Quality Guarantee</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <div>
                <motion.div {...fadeIn}>
                  <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-6">Execution</h2>
                  <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 leading-[0.95]">The Roadmap to <br/><span className="text-primary italic">Digital Mastery.</span></h3>
                </motion.div>
                
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Blueprint & Strategy", desc: "We map out your technical architecture and ROI goals before any code is typed." },
                    { step: "02", title: "High-Fidelity Design", desc: "Pixel-perfect interfaces designed for engagement and brand conversion." },
                    { step: "03", title: "Robust Engineering", desc: "Agile sprints with weekly demos ensuring total transparency and speed." },
                    { step: "04", title: "Deploy & Scale", desc: "Zero-downtime launch followed by 24/7 maintenance and optimization." },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex gap-10 group"
                    >
                      <span className="text-6xl font-black text-primary/10 group-hover:text-primary transition-colors duration-500 leading-none">{item.step}</span>
                      <div>
                        <h4 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* High Conversion CTA Section */}
        <section className="py-40 relative overflow-hidden group">
          <motion.div 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-primary skew-y-2 origin-right transition-transform duration-1000"
          ></motion.div>
          <Container className="relative z-10 text-center text-white">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-[120px] font-black tracking-tighter mb-12 leading-[0.85]">Ready to <br className="hidden md:block"/> Start Building?</h2>
              <p className="text-2xl md:text-3xl opacity-90 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                Transform your business challenges into elegant software. We are ready when you are.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <motion.div whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.9 }}>
                  <Button asChild size="lg" variant="secondary" className="h-24 px-16 text-2xl rounded-full hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all font-black bg-white text-primary">
                    <Link href="/contact">Book A Free Session</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.9 }}>
                  <Button asChild variant="outline" size="lg" className="h-24 px-16 text-2xl rounded-full border-4 border-white text-white hover:bg-white hover:text-primary transition-all font-black">
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