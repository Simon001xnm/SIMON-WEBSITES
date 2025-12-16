
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Briefcase, Laptop, Building, Headset } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const corporateServices = [
  {
    icon: Laptop,
    title: "Flexible Laptop Rentals",
    description: "Hassle-free rental plans for your team, events, or short-term projects. Get the tech you need, when you need it."
  },
  {
    icon: Building,
    title: "Bulk Purchase Discounts",
    description: "Benefit from competitive pricing when you purchase multiple devices to equip your entire organization."
  }
];


export function RecruitmentSection() {
  return (
    <section id="corporate-services" className="py-10 md:py-16 bg-background overflow-x-hidden">
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Content Column */}
            <div className="order-2 md:order-1 md:pr-8">
                <h3 className="text-base font-semibold uppercase text-primary tracking-wider">For Your Business</h3>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Corporate &amp; Business Solutions
                </h2>
                
                <div className="mt-8 space-y-8">
                  {corporateServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="flex gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#3B4A6A] text-white shadow-md">
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
                 <Button asChild size="lg" className="group text-base mt-8">
                    <Link href="/contact">
                        Inquire Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
            
            {/* Image Column */}
            <div className="order-1 md:order-2 relative h-80 md:h-[450px] w-full">
                <div className="absolute inset-0 bg-[#3B4A6A] rounded-2xl rotate-6 transform"></div>
                <div className="absolute inset-0 p-4">
                <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                    alt="Team collaboration"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-xl"
                    data-ai-hint="team meeting"
                />
                </div>
            </div>

        </div>
      </Container>
    </section>
  );
}
