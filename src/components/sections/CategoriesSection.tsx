
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, ShoppingBag } from 'lucide-react'; 

export function CategoriesSection() {
  return (
    <section id="categories" className="py-10 md:py-16 bg-gradient-to-b from-background via-secondary/20 to-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
           <div className="text-center md:text-left">
              <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto md:mx-0 mb-3 sm:mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3 sm:mb-4">
                Explore Our Tech Products
              </h2>
              <p className="text-md sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto md:mx-0">
                Discover a curated selection of high-quality laptops, gadgets, and computer accessories tailored to your needs.
              </p>
               <Button asChild size="lg" className="group text-sm sm:text-base mt-6 hidden md:inline-flex">
                <Link href="/laptops"> 
                  Visit Our Shop <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          
            <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl bg-card transform hover:-translate-y-1 w-full">
                <CardContent className="flex-grow p-4 sm:p-6 text-center">
                  <div className="aspect-video relative overflow-hidden rounded-md border p-2">
                    <Image
                      src="https://nairobicomputershop.co.ke/media/cache/3c/eb/3cebd8fb6a43acf83b8efcb652cd79a8.jpg"
                      alt="Logitech Products Showcase"
                      fill
                      className="object-contain"
                      data-ai-hint="logitech products"
                    />
                  </div>
                </CardContent>
                 <CardFooter className="p-4 sm:p-6 pt-0 justify-center md:hidden">
                    <Button asChild size="lg" className="group text-sm sm:text-base w-full sm:w-auto">
                        <Link href="/laptops">
                        Visit Our Shop <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </Container>
    </section>
  );
}
