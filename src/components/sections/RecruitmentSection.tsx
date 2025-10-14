
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Briefcase, Laptop, Building, Headset } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function RecruitmentSection() {
  return (
    <section id="corporate-services" className="py-12 md:py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
                        <CardHeader className="p-2 sm:p-4">
                        <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                            <Laptop className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-semibold">Flexible Laptop Rentals</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2 sm:p-4">
                        <p className="text-muted-foreground text-sm">
                            Hassle-free rental plans for your team, events, or short-term projects.
                        </p>
                        </CardContent>
                    </Card>
                     <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
                        <CardHeader className="p-2 sm:p-4">
                        <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                            <Building className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-semibold">Bulk Purchase Discounts</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2 sm:p-4">
                        <p className="text-muted-foreground text-sm">
                            Benefit from competitive pricing when you purchase multiple devices.
                        </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
                <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto md:mx-0 mb-3 sm:mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3 sm:mb-4">
                    Corporate & Business Solutions
                </h2>
                <p className="text-md sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto md:mx-0">
                    Equip your team with the best technology. We offer flexible laptop rental plans and bulk purchasing options tailored for corporate clients, startups, and events.
                </p>
                 <Button asChild size="lg" className="group text-md sm:text-lg py-3 px-6 sm:py-4 sm:px-8 mt-6">
                    <Link href="/#contact">
                        Inquire Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </Container>
    </section>
  );
}
