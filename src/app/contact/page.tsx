
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactSection } from '@/components/sections/ContactSection';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-20">
        <Container>
           <div className="text-center mb-12">
            <Button asChild variant="outline" size="sm" className="mb-6">
                <Link href="/">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help. Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <div className="lg:mt-8">
              <ContactSection />
            </div>
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
