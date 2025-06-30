
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Briefcase, Laptop, Building, Headset } from 'lucide-react';
import Link from 'next/link';

export function RecruitmentSection() {
  return (
    <section id="corporate-services" className="py-12 md:py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3 sm:mb-4">
            Corporate & Business Solutions
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto">
            Equip your team with the best technology. We offer flexible laptop rental plans and bulk purchasing options tailored for corporate clients, startups, and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
            <CardHeader className="p-2 sm:p-4">
              <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <Laptop className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-semibold">Flexible Laptop Rentals</CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-4">
              <p className="text-muted-foreground text-sm">
                Access high-performance laptops for your team, events, or short-term projects with our hassle-free rental plans.
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
                Benefit from competitive pricing when you purchase multiple devices for your organization. We cater to businesses of all sizes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
            <CardHeader className="p-2 sm:p-4">
              <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <Headset className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-semibold">Dedicated Business Support</CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-4">
              <p className="text-muted-foreground text-sm">
                Receive priority technical support and dedicated account management to ensure your business operations run smoothly.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
            <Button asChild size="lg" className="group text-md sm:text-lg py-3 px-6 sm:py-6 sm:px-10">
              <Link href="/#contact">
                Inquire About Corporate Services <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </Container>
    </section>
  );
}
