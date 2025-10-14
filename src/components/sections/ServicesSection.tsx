
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Code, Laptop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ServicesSection() {
  return (
    <section id="services" className="py-10 md:py-16 bg-secondary/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
                    <CardHeader className="p-2 sm:p-4">
                    <div className="mx-auto bg-purple-100/60 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-purple-200/80">
                        <Code className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-semibold">Custom Web Development</CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 sm:p-4">
                    <p className="text-muted-foreground text-sm">
                        Tailored websites and web applications built to solve your unique business challenges.
                    </p>
                    </CardContent>
                </Card>
                    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
                    <CardHeader className="p-2 sm:p-4">
                    <div className="mx-auto bg-purple-100/60 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-purple-200/80">
                        <Laptop className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-semibold">E-commerce Solutions</CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 sm:p-4">
                    <p className="text-muted-foreground text-sm">
                        Powerful online stores designed to drive sales and grow your brand.
                    </p>
                    </CardContent>
                </Card>
            </div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <Code className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 mx-auto md:mx-0 mb-3 sm:mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-purple-800 mb-3 sm:mb-4">
              Software Development Services
            </h2>
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto md:mx-0">
              From stunning websites to complex web applications, our team delivers high-quality, scalable, and secure software solutions to elevate your business.
            </p>
            <Button asChild size="lg" className="group text-md sm:text-lg py-3 px-6 sm:py-4 sm:px-8 mt-6 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/services">
                View Services & Pricing <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
