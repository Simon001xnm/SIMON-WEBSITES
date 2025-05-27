
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_LAPTOPS, type Laptop } from '@/lib/laptop-data';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-2"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

interface LaptopDetailPageProps {
  params: { id: string };
}

async function getLaptopById(id: string): Promise<Laptop | undefined> {
  return MOCK_LAPTOPS.find((laptop) => laptop.id === id);
}

export default async function LaptopDetailPage({ params }: LaptopDetailPageProps) {
  const laptop = await getLaptopById(params.id);

  if (!laptop) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(laptop.price);
  const formattedOriginalPrice = laptop.originalPrice ? new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(laptop.originalPrice) : null;

  const whatsappMessage = `Hello, I'm interested in the ${laptop.name} (ID: ${laptop.id}). Price: ${formattedPrice}. More info: ${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/laptops/${laptop.id}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  let badgeClass = '';
  if (laptop.badgeText) {
    switch (laptop.badgeVariant) {
      case 'new': badgeClass = 'bg-blue-500 text-white'; break;
      case 'hotdeal': badgeClass = 'bg-orange-500 text-white'; break;
      case 'destructive': badgeClass = 'bg-red-600 text-white'; break;
      default: badgeClass = 'bg-secondary text-secondary-foreground';
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-8">
        <Container>
          <div className="mb-6">
            <Button variant="outline" asChild size="sm">
              <Link href="/laptops">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Laptops
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery Section */}
            <div className="relative aspect-[4/3] md:aspect-square  rounded-lg overflow-hidden border bg-card p-4">
              <Image
                src={laptop.imageUrl}
                alt={laptop.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                data-ai-hint={laptop.dataAiHint || "laptop image large"}
                priority // Prioritize loading main product image
              />
               {laptop.badgeText && (
                <Badge className={cn("absolute top-4 left-4 z-10", badgeClass)}>
                  {laptop.badgeText}
                </Badge>
              )}
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground mb-1">{laptop.brand}</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-3">{laptop.name}</h1>
              
              <p className="text-sm text-muted-foreground mb-4">{laptop.shortDescription}</p>

              <div className="flex items-baseline gap-3 mb-4">
                <p className="text-3xl font-bold text-accent">{formattedPrice}</p>
                {formattedOriginalPrice && laptop.price < laptop.originalPrice && (
                  <p className="text-lg text-muted-foreground line-through">{formattedOriginalPrice}</p>
                )}
              </div>

              {laptop.promotionalText && (
                <p className="text-sm text-green-600 mb-4 bg-green-100 border border-green-300 p-2 rounded-md">{laptop.promotionalText}</p>
              )}
              
              {laptop.stock === 0 && (
                <p className="text-destructive font-semibold mb-4">This product is currently SOLD OUT.</p>
              )}

              <Button 
                asChild 
                size="lg" 
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white text-base py-3 mb-6"
                disabled={laptop.stock === 0}
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </Button>
              
              <Separator className="my-6" />

              <div>
                <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                <Table>
                  <TableBody>
                    {laptop.specs.map((spec) => (
                      <TableRow key={spec.key}>
                        <TableCell className="font-medium text-muted-foreground w-1/3 py-2 px-0 md:px-4">{spec.key}</TableCell>
                        <TableCell className="py-2 px-0 md:px-4">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

// Optional: Generate static paths if you know all laptop IDs at build time
// export async function generateStaticParams() {
//   return MOCK_LAPTOPS.map((laptop) => ({
//     id: laptop.id,
//   }));
// }

