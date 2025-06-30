
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { ContactSection } from '@/components/sections/ContactSection';
import { RecruitmentSection } from '@/components/sections/RecruitmentSection';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <Container className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              High-Performance Laptops, <span className="text-primary">On Your Terms</span>
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-muted-foreground max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10">
              Explore our flexible rental plans and wide selection of laptops for sale. We provide top-tier technology for individuals, businesses, and events, tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="group text-sm sm:text-base">
                <Link href="/laptops">
                  Explore Our Shop <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group text-sm sm:text-base">
                <Link href="/#corporate-services">
                  Corporate Rentals <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        <Separator />

        {/* Categories Section */}
        <CategoriesSection />

        <Separator />

        {/* Corporate Services Section */}
        <RecruitmentSection />

        <Separator />

        {/* Contact CTA Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-secondary/30">
          <Container>
            <div className="max-w-3xl mx-auto">
             <ContactSection />
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </div>
  );
}
