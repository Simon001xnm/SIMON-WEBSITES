
import Image from 'next/image';
import Link from 'next/link';
import type { Laptop } from '@/lib/laptop-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants'; // Import the WhatsApp number

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-2"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);


interface LaptopCardProps {
  laptop: Laptop;
}

export function LaptopCard({ laptop }: LaptopCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(laptop.price);
  const formattedOriginalPrice = laptop.originalPrice ? new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(laptop.originalPrice) : null;

  let badgeClass = '';
  switch (laptop.badgeVariant) {
    case 'new':
      badgeClass = 'bg-blue-500 text-white';
      break;
    case 'hotdeal':
      badgeClass = 'bg-orange-500 text-white';
      break;
    case 'destructive': // for SOLD OUT
      badgeClass = 'bg-red-600 text-white';
      break;
    default:
      badgeClass = 'bg-secondary text-secondary-foreground';
  }

  const whatsappMessage = `I'm interested in ordering the ${laptop.name} (ID: ${laptop.id}). Price: ${formattedPrice}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-lg group border rounded-md">
      <div className="relative p-2">
        {laptop.badgeText && (
          <Badge
            className={cn(
              "absolute top-2 left-2 z-10 text-xs px-1.5 py-0.5",
              badgeClass
            )}
          >
            {laptop.badgeText}
          </Badge>
        )}
        <Link href={`/laptops/${laptop.id}`} className="block aspect-[4/3] relative overflow-hidden rounded-sm">
          <Image
            src={laptop.imageUrl}
            alt={laptop.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
            data-ai-hint={laptop.dataAiHint || "laptop image"}
          />
        </Link>
      </div>

      <CardContent className="p-3 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">{laptop.brand}</p>
          <Link href={`/laptops/${laptop.id}`} className="hover:text-primary">
            <h3 className="text-sm font-medium leading-tight mb-1 min-h-[2.5rem] group-hover:underline">
              {laptop.name}
            </h3>
          </Link>
          {laptop.promotionalText && (
            <p className="text-xs text-green-600 mb-1.5">{laptop.promotionalText}</p>
          )}
        </div>

        <div className="mt-auto">
           <div className="flex items-baseline gap-2 mb-2">
            <p className="text-lg font-bold text-primary">
              {formattedPrice}
            </p>
            {formattedOriginalPrice && laptop.price < laptop.originalPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {formattedOriginalPrice}
              </p>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <Button className="w-full h-9 text-xs">
              <ShoppingCart className="w-4 h-4 mr-2"/>
              Add to Cart
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full h-9 text-xs bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Order via WhatsApp
              </a>
            </Button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
