
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
import { Separator } from '@/components/ui/separator';
import { Laptop } from 'lucide-react';

export default function LaptopsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-background">
          <Container>
            <div className="text-center mb-10 md:mb-12">
              <Laptop className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Explore Our Laptops
              </h1>
              <p className="text-md sm:text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
                Find the perfect machine to power your productivity, creativity, and gaming.
              </p>
            </div>
            
            {MOCK_LAPTOPS.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {MOCK_LAPTOPS.map((laptop) => (
                  <LaptopCard key={laptop.id} laptop={laptop} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-lg py-10">
                No laptops available at the moment. Please check back soon!
              </p>
            )}
          </Container>
        </section>
        <Separator />
      </main>
      <Footer />
    </div>
  );
}
