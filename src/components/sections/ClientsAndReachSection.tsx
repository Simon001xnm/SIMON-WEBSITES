
'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const clients = [
    { name: 'Metocus', logoUrl: '/cropped-rsz_metocuslogo2023-removebg-preview_1.png', dataAiHint: 'metocus logo' },
    { name: 'Client 2', logoUrl: '/download.png', dataAiHint: 'client logo' },
    { name: 'Client 3', logoUrl: '/images.webp', dataAiHint: 'client logo' },
    { name: 'Equity Bank', logoUrl: 'https://picsum.photos/seed/equity-logo/200/100', dataAiHint: 'equity bank logo' },
    { name: 'Co-operative Bank', logoUrl: 'https://picsum.photos/seed/coop-logo/200/100', dataAiHint: 'coop bank logo' },
];


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
                layout="fill"
                objectFit="contain"
                data-ai-hint="africa map green"
              />
            </div>
            <div className="relative w-full h-auto min-h-[200px] md:min-h-[320px]">
              <Image
                src="/COUNTRY.png"
                alt="Countries we serve"
                layout="fill"
                objectFit="contain"
                data-ai-hint="african country flags"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-muted-foreground">Trusted by many clients across Africa</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
            {clients.map((client) => (
              <div key={client.name} className="p-4 bg-white rounded-lg shadow-sm border flex items-center justify-center aspect-[2/1]">
                 <div className="relative w-full h-12">
                    <Image src={client.logoUrl} alt={`${client.name} logo`} layout="fill" objectFit="contain" data-ai-hint={client.dataAiHint} />
                 </div>
              </div>
            ))}
          </div>
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
