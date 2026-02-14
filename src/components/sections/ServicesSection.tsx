'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Code, Smartphone, LayoutPanelLeft } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Engineering",
    description: "Beyond simple websites. We build enterprise-grade web applications, dashboards, and scalable SaaS platforms using modern stacks like Next.js and React."
  },
  {
    icon: LayoutPanelLeft,
    title: "System Architecture",
    description: "Designing the backbone of your business. We develop custom ERP, CRM, and automation tools that streamline operations and eliminate bottlenecks."
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    description: "Crafting native-feel mobile applications that users love. Our cross-platform expertise ensures high performance on both iOS and Android."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-transparent">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <h3 className="text-base font-bold uppercase text-primary tracking-[0.2em] mb-4">Our Specialization</h3>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-8">
              We translate complex ideas into <span className="text-primary">elegant code.</span>
            </h2>
            
            <div className="space-y-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{service.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
             <Button asChild size="lg" className="mt-12 h-14 px-8 rounded-full font-bold">
              <Link href="/services">
                Explore Detailed Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] w-full">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 scale-105"></div>
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1935&auto=format&fit=crop"
                alt="Developer engineering high-quality software"
                fill
                className="object-cover rounded-[2.5rem] shadow-2xl"
                data-ai-hint="software engineer coding"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}