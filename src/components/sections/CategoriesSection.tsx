
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Laptop, Layers } from 'lucide-react';

export function CategoriesSection() {
  return (
    <section id="categories" className="py-12 md:py-20 bg-gradient-to-b from-background via-secondary/20 to-background">
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3 sm:mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto">
            Discover top-quality laptops and expert digital solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Products Category Card */}
          <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl bg-card transform hover:-translate-y-1">
            <CardHeader className="items-center text-center p-4 sm:p-6">
              <div className="p-3 sm:p-4 bg-primary/10 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <Laptop className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-semibold">Our Premium Laptops</CardTitle>
              <CardDescription className="text-sm sm:text-base min-h-[3em] mt-1">
                Find the perfect laptop for work, gaming, or everyday use from our curated selection.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-4 sm:p-6 pt-0 text-center">
              <div className="aspect-video relative mb-4 sm:mb-6 overflow-hidden rounded-md border">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Laptops Showcase"
                  fill
                  className="object-cover"
                  data-ai-hint="laptops selection"
                />
              </div>
            </CardContent>
            <CardFooter className="p-4 sm:p-6 pt-0 justify-center">
              <Button asChild size="lg" className="group text-sm sm:text-base w-full sm:w-auto">
                <Link href="/laptops">
                  Shop Laptops <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Services Category Card */}
          <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl bg-card transform hover:-translate-y-1">
            <CardHeader className="items-center text-center p-4 sm:p-6">
              <div className="p-3 sm:p-4 bg-primary/10 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <Layers className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-semibold">Custom Digital Solutions</CardTitle>
              <CardDescription className="text-sm sm:text-base min-h-[3em] mt-1">
                Leverage our expertise in web, mobile, and system development to bring your ideas to life.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-4 sm:p-6 pt-0 text-center">
              <div className="aspect-video relative mb-4 sm:mb-6 overflow-hidden rounded-md border">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Digital Solutions Showcase"
                  fill
                  className="object-cover"
                  data-ai-hint="software development technology"
                />
              </div>
            </CardContent>
            <CardFooter className="p-4 sm:p-6 pt-0 justify-center">
              <Button asChild size="lg" className="group text-sm sm:text-base w-full sm:w-auto">
                <Link href="/#projects">
                  View Our Portfolio <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </section>
  );
}
