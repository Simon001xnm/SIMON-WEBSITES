
'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const countries = [
  { name: 'Burkina Faso', flagUrl: 'https://picsum.photos/seed/bf-flag/32/32' },
  { name: 'Cameroon', flagUrl: 'https://picsum.photos/seed/cm-flag/32/32' },
  { name: 'Eswatini', flagUrl: 'https://picsum.photos/seed/sz-flag/32/32' },
  { name: 'Ethiopia', flagUrl: 'https://picsum.photos/seed/et-flag/32/32' },
  { name: 'Ghana', flagUrl: 'https://picsum.photos/seed/gh-flag/32/32' },
  { name: 'Kenya', flagUrl: 'https://picsum.photos/seed/ke-flag/32/32' },
  { name: 'Lesotho', flagUrl: 'https://picsum.photos/seed/ls-flag/32/32' },
  { name: 'Mauritius', flagUrl: 'https://picsum.photos/seed/mu-flag/32/32' },
  { name: 'Malawi', flagUrl: 'https://picsum.photos/seed/mw-flag/32/32' },
  { name: 'Mali', flagUrl: 'https://picsum.photos/seed/ml-flag/32/32' },
  { name: 'Mozambique', flagUrl: 'https://picsum.photos/seed/mz-flag/32/32' },
  { name: 'Nigeria', flagUrl: 'https://picsum.photos/seed/ng-flag/32/32' },
  { name: 'DRC', flagUrl: 'https://picsum.photos/seed/cd-flag/32/32' },
  { name: 'Rwanda', flagUrl: 'https://picsum.photos/seed/rw-flag/32/32' },
  { name: 'South Africa', flagUrl: 'https://picsum.photos/seed/za-flag/32/32' },
  { name: 'South Sudan', flagUrl: 'https://picsum.photos/seed/ss-flag/32/32' },
  { name: 'Tanzania', flagUrl: 'https://picsum.photos/seed/tz-flag/32/32' },
  { name: 'Uganda', flagUrl: 'https://picsum.photos/seed/ug-flag/32/32' },
  { name: 'Zambia', flagUrl: 'https://picsum.photos/seed/zm-flag/32/32' },
  { name: 'Zimbabwe', flagUrl: 'https://picsum.photos/seed/zw-flag/32/32' },
];

const clients = [
    { name: 'Elizabeth Glaser Pediatric AIDS Foundation', logoUrl: 'https://picsum.photos/seed/egpaf-logo/200/100', dataAiHint: 'egpaf logo' },
    { name: 'Evidence Action', logoUrl: 'https://picsum.photos/seed/evidence-action-logo/200/100', dataAiHint: 'evidence action logo' },
    { name: 'EXIM Bank', logoUrl: 'https://picsum.photos/seed/exim-logo/200/100', dataAiHint: 'exim bank logo' },
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
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {countries.map((country) => (
                <div key={country.name} className="flex items-center gap-3">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden shadow">
                    <Image src={country.flagUrl} alt={`${country.name} flag`} layout="fill" objectFit="cover" data-ai-hint={`${country.name} flag`} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{country.name}</span>
                </div>
              ))}
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
