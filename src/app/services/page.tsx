
import Link from 'next/link';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ChevronLeft, Code, ShoppingCart, Cloud } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Custom Website Design",
    description: "Beautiful, responsive, and user-friendly websites tailored to your brand. Perfect for portfolios, blogs, and corporate sites.",
    features: [
      "Unique, Modern Design",
      "Mobile-First & Responsive",
      "Content Management System (CMS)",
      "SEO Foundation",
      "Social Media Integration",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Robust online stores designed to convert visitors into customers, with secure payments and easy product management.",
    features: [
      "Secure Payment Gateway Integration",
      "Product & Inventory Management",
      "Customer Account System",
      "Discount & Coupon Engine",
      "Scalable Architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Web Application Development",
    description: "Complex, data-driven web applications to streamline your business processes and deliver value to your users.",
    features: [
      "Custom Business Logic",
      "Database Integration",
      "User Authentication & Authorization",
      "Third-Party API Integrations",
      "Cloud Deployment & Hosting",
    ],
  },
];

const pricingTiers = [
  {
    name: "Basic Website",
    price: "From KES 35,000",
    description: "Ideal for individuals and small businesses needing a professional online presence.",
    features: [
      "Up to 5 Pages",
      "Custom Design",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
    ],
    cta: "Get Started",
  },
  {
    name: "Business & E-commerce",
    price: "From KES 75,000",
    description: "Perfect for growing businesses looking to sell products or services online.",
    features: [
      "All Basic Features",
      "E-commerce Functionality",
      "Payment Integration",
      "Product Management",
      "Content Management System (CMS)",
    ],
    cta: "Choose Business",
    popular: true,
  },
  {
    name: "Custom Application",
    price: "Contact Us",
    description: "Tailor-made solutions for unique business needs and complex requirements.",
    features: [
      "Custom Feature Development",
      "Database & API Integration",
      "User Accounts & Dashboards",
      "Scalable Cloud Hosting",
      "Ongoing Support & Maintenance",
    ],
    cta: "Request a Quote",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-20">
            <Button asChild variant="outline" size="sm" className="mb-6">
                <Link href="/">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Software & Web Development
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We build high-quality, scalable, and secure digital solutions to help your business thrive online.
            </p>
          </div>

          {/* Services Section */}
          <section id="our-services" className="mb-16 md:mb-24">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="flex flex-col">
                    <CardHeader className="items-center text-center">
                      <div className="p-4 bg-primary/10 rounded-full w-fit mb-4 border border-primary/20">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm min-h-[3rem]">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Flexible Pricing Plans</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {pricingTiers.map((tier) => (
                <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary border-2 shadow-lg relative' : ''}`}>
                    {tier.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">POPULAR</div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold">{tier.name}</CardTitle>
                    <p className="text-3xl font-bold text-primary py-2">{tier.price}</p>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                      <Link href="/contact">{tier.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
