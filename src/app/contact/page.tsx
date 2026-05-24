
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactSection } from '@/components/sections/ContactSection';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I need a consultation regarding your services.`;

  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-24">
        <Container>
           <div className="text-center mb-16">
            <Button asChild variant="outline" size="sm" className="mb-8 rounded-full border-2">
                <Link href="/">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary mb-6">
              Contact <span className="text-accent italic">Sorted.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Skip the forms. Chat directly with our engineering team for instant support and project scoping.
            </p>
            
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="h-16 px-10 bg-green-600 hover:bg-green-700 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-green-100">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Direct WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <ContactSection />
            <div className="space-y-8">
              <div className="p-8 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Or use the form</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
