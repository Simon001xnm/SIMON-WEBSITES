
'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientMarquee } from './ClientMarquee';

export function ClientsAndReachSection() {
  return (
    <section id="clients-reach" className="py-12 md:py-20 bg-secondary/30">
      <Container>
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            <span className="text-primary">Simon Styles™</span> is transforming businesses across Africa through technology
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-square lg:aspect-[4/3]">
              <Image
                src="/AFRICA.png"
                alt="Map of Africa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                data-ai-hint="africa map green"
              />
            </div>
            <div className="relative w-full h-auto min-h-[320px]">
              <Image
                src="/COUNTRY.png"
                alt="Countries we serve"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                data-ai-hint="african country flags"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">Trusted by many clients across Africa</h3>
          <ClientMarquee />
           <Button asChild size="lg" className="group mt-10 bg-green-600 hover:bg-green-700 text-base">
            <Link href="/contact">
              Meet All Our Clients <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
