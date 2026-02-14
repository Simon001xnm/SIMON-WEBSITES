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
  ShieldCheck,
  MousePointer2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { ClientsAndReachSection } from '@/components/sections/ClientsAndReachSection';
import { motion } from 'framer-motion';

export default function AgencyLandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-background min-h-screen selection:bg-primary/30">
      <EcommerceHeader />

      <main>
        {/* Hero Section - The "Hook" */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  <Zap className="w-3 h-3 fill-primary" />
                  Leading Software Agency in Nairobi
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.95] mb-8">
                  We Build <span className="text-primary">Digital</span> Future.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-medium">
                  High-performance web ecosystems, mobile innovations, and enterprise systems engineered for growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button asChild size="lg" className="h-16 px-10 text-lg rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                    <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-2 hover:bg-secondary">
                    <Link href="/projects">Our Portfolio</Link>
                  </Button>
                </div>
                <div className="mt-12 flex items-center gap-6 opacity-70 grayscale">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Trusted Technology Partner</div>
                  <div className="h-px w-12 bg-border"></div>
                  {/* Small social proof icons could go here */}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square w-full max-w-[600px] mx-auto group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse group-hover:scale-110 transition-transform duration-1000"></div>
                  <div className="relative h-full w-full glass-card rounded-[3rem] overflow-hidden border-4 border-white/50 dark:border-gray-800/50 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                    <Image 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Modern Code Interface" 
                      fill
                      className="object-cover"
                      data-ai-hint="code interface"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-4xl font-black">99.9%</p>
                      <p className="text-sm font-bold uppercase tracking-widest opacity-80">Uptime & Reliability</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Value Proposition - Why Us? */}
        <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-base font-black text-primary uppercase tracking-[0.3em] mb-4">Our Specialization</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Expertise that drives <span className="text-primary italic">results.</span></h3>
              <p className="text-lg text-muted-foreground">We don't just write code; we architect solutions that streamline your business and captivate your users.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: Globe,
                  title: "Web Engineering",
                  desc: "Custom high-performance websites and SaaS platforms built with Next.js and React for ultimate speed.",
                  features: ["SEO Optimized", "Responsive Design", "Fast Loading"]
                },
                {
                  icon: Smartphone,
                  title: "Mobile Innovation",
                  desc: "User-centric iOS and Android applications built with Flutter and React Native for a native experience.",
                  features: ["Cross-Platform", "Push Notifications", "Biometric Auth"]
                },
                {
                  icon: Code,
                  title: "Bespoke Systems",
                  desc: "Robust ERP, CRM, and Inventory management tools tailored to your business's unique logic.",
                  features: ["Automated Workflows", "Data Visualization", "API First"]
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-10 rounded-[2.5rem] bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section - How We Build */}
        <section className="py-24 bg-primary/[0.02] border-y border-primary/5">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-bounce"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Creative Collaboration" 
                  width={600} 
                  height={600} 
                  className="rounded-[3rem] shadow-2xl relative z-10"
                  data-ai-hint="team collaboration"
                />
                <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[2rem] z-20 hidden md:block border-2 border-primary/10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-3 rounded-full text-white">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-black">100+</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Successful Launches</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-base font-black text-primary uppercase tracking-[0.3em] mb-4">The Methodology</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 leading-tight">Your idea, turned into <span className="text-primary italic">scalable success.</span></h3>
                <div className="space-y-10">
                  {[
                    { step: "01", title: "Strategic Blueprint", desc: "We define the technical roadmap and business goals before writing a single line of code." },
                    { step: "02", title: "Creative Architecture", desc: "Our UI/UX designers craft intuitive interfaces that prioritize engagement and brand identity." },
                    { step: "03", title: "Agile Engineering", desc: "We build iteratively, ensuring you have visibility into the development process at every stage." },
                    { step: "04", title: "Launch & Growth", desc: "We deploy with zero downtime and provide ongoing maintenance to scale your project." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <span className="text-5xl font-black text-primary/10 group-hover:text-primary/30 transition-colors duration-500">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* High Conversion CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary skew-y-3 origin-right scale-110"></div>
          <Container className="relative z-10 text-center text-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Ready to Build Something <br className="hidden md:block"/> Remarkable?</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
                Our team is ready to transform your complex business challenges into elegant, efficient software solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" variant="secondary" className="h-20 px-12 text-xl rounded-full hover:scale-110 transition-transform shadow-2xl font-black">
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-20 px-12 text-xl rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-all font-black">
                  <Link href="tel:+254758673616">Call Us Now</Link>
                </Button>
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