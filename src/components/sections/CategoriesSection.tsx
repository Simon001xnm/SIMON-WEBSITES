
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, ShoppingBag } from 'lucide-react'; // Added ShoppingBag icon

export function CategoriesSection() {
  return (
    <section id="categories" className="py-12 md:py-20 bg-gradient-to-b from-background via-secondary/20 to-background">
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3 sm:mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto">
            Discover expert digital solutions and quality tech products tailored to your needs.
          </p>
        </div>

        <div className="flex justify-center"> {/* Changed grid to flex justify-center for single card */}
          {/* Services Category Card - Now pointing to Shop */}
          <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl bg-card transform hover:-translate-y-1 md:max-w-2xl w-full">
            <CardHeader className="items-center text-center p-4 sm:p-6">
              <div className="p-3 sm:p-4 bg-primary/10 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10 text-primary" /> {/* Changed icon to ShoppingBag */}
              </div>
              <CardTitle className="text-xl sm:text-2xl font-semibold">Tech Products & Gadgets</CardTitle> {/* Updated Title */}
              <CardDescription className="text-sm sm:text-base min-h-[3em] mt-1">
                Browse our selection of high-quality laptops and computer accessories.
              </CardDescription> {/* Updated Description */}
            </CardHeader>
            <CardContent className="flex-grow p-4 sm:p-6 pt-0 text-center">
              <div className="aspect-video relative mb-4 sm:mb-6 overflow-hidden rounded-md border p-2"> {/* Added p-2 for padding */}
                <Image
                  src="https://nairobicomputershop.co.ke/media/cache/3c/eb/3cebd8fb6a43acf83b8efcb652cd79a8.jpg"
                  alt="Tech Products Showcase"
                  fill
                  className="object-cover"
                  data-ai-hint="computer hardware tech products"
                />
              </div>
            </CardContent>
            <CardFooter className="p-4 sm:p-6 pt-0 justify-center">
              <Button asChild size="lg" className="group text-sm sm:text-base w-full sm:w-auto">
                <Link href="/laptops"> {/* Changed link to /laptops */}
                  Our Shop <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </section>
  );
}
