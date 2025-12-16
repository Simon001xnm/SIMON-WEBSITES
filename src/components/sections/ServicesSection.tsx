
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Code, ShoppingCart, Laptop } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Tailored websites and web applications built to solve your unique business challenges. We deliver high-quality, scalable, and secure software solutions."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Powerful online stores designed to drive sales and grow your brand. We build robust solutions that convert visitors into customers."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-10 md:py-16 bg-background overflow-x-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image Column */}
          <div className="relative h-80 md:h-[450px] w-full">
            <div className="absolute inset-0 bg-purple-100/60 rounded-2xl -rotate-6 transform"></div>
            <div className="absolute inset-0 p-4">
              <Image
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1935&auto=format&fit=crop"
                alt="Developer working on code"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-xl"
                data-ai-hint="black developer coding"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:pl-8">
            <h3 className="text-base font-semibold uppercase text-purple-600 tracking-wider">Our Business Goal</h3>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-4xl">
              Software Development Services
            </h2>
            
            <div className="mt-8 space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-100/60 text-purple-700 shadow-md">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
                      <p className="mt-1 text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
             <Button asChild size="lg" className="group mt-8 text-base bg-purple-600 hover:bg-purple-700">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
