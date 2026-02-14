'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  Users,
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
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                  Building <span className="text-primary">Digital Excellence</span> for the Modern Era.
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                  Simon Styles Technology is a premier software agency in Nairobi, specializing in bespoke web development, mobile ecosystems, and high-performance systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full">
                    <Link href="/projects">View Our Work</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                  <Image 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                    alt="Software Engineering Team" 
                    fill
                    className="object-cover rounded-2xl shadow-2xl border-8 border-white dark:border-gray-800"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white dark:bg-gray-900/50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-primary uppercase tracking-widest mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground">Solutions that scale with you.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Web Development",
                  desc: "Custom high-performance websites and PWAs designed for conversion and speed."
                },
                {
                  icon: Smartphone,
                  title: "Mobile Innovation",
                  desc: "Seamless iOS and Android applications built with Flutter and React Native."
                },
                {
                  icon: Code,
                  title: "Enterprise Systems",
                  desc: "Robust ERP, CRM, and Inventory systems tailored to your unique business logic."
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-background border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-24 overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our Working Process" 
                  width={600} 
                  height={400} 
                  className="rounded-3xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl text-white shadow-2xl hidden md:block">
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-sm opacity-90">Projects Delivered</p>
                </div>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8">How We Bring Your Vision to Life.</h3>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Strategy & Discovery", desc: "We dive deep into your goals to define the roadmap." },
                    { step: "02", title: "Design & UX", desc: "Crafting beautiful interfaces that prioritize user experience." },
                    { step: "03", title: "Agile Development", desc: "Iterative building with constant feedback loops." },
                    { step: "04", title: "Deployment & Support", desc: "Launching your product and scaling it for long-term success." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-4xl font-black text-primary/20">{item.step}</span>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-primary text-primary-foreground">
          <Container className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build something <br className="hidden md:block"/> incredible together.</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Ready to transform your ideas into high-performance software? Our team is standing by to help you scale.
            </p>
            <Button asChild size="lg" variant="secondary" className="h-16 px-12 text-xl rounded-full hover:scale-105 transition-transform">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </Container>
        </section>

        <ClientsAndReachSection />
      </main>
      
      <EcommerceFooter />
    </div>
  );
}