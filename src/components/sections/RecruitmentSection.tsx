
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Laptop, Building } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

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

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="ml-2"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

export function RecruitmentSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'm interested in your corporate laptop rental and bulk purchase services.`;

  return (
    <section id="corporate-services" className="py-10 md:py-16 bg-background overflow-x-hidden">
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Content Column */}
            <div className="order-2 md:order-1 md:pr-8">
                <h3 className="text-base font-semibold uppercase text-purple-600 tracking-wider">For Your Business</h3>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Corporate &amp; Business Solutions
                </h2>
                
                <div className="mt-8 space-y-4">
                  {corporateServices.map((service, index) => {
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
                 <Button asChild size="lg" className="group text-base mt-8 bg-purple-600 hover:bg-purple-700">
                    <Link href={whatsappLink} target="_blank">
                        Chat With Us Now <WhatsAppIcon />
                    </Link>
                </Button>
            </div>
            
            {/* Image Column */}
            <div className="order-1 md:order-2 relative h-80 md:h-[450px] w-full">
                <div className="absolute inset-0 bg-purple-100/60 rounded-2xl rotate-6 transform"></div>
                <div className="absolute inset-0 p-4">
                <Image
                    src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop"
                    alt="Black professionals in a meeting"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl shadow-xl"
                    data-ai-hint="black professionals meeting"
                />
                </div>
            </div>

        </div>
      </Container>
    </section>
  );
}
