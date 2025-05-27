
import Image from 'next/image';
import Link from 'next/link';
import type { Laptop } from '@/lib/laptop-data';
import { Card, CardContent } from '@/components/ui/card'; // Removed Header, Footer, Description
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, GitCompare, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
            <h3 className="text-sm font-medium leading-tight mb-1 h-10 overflow-hidden group-hover:underline">
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

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-primary">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-primary">
                <GitCompare className="h-4 w-4" />
                <span className="sr-only">Compare</span>
              </Button>
            </div>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-muted hover:bg-primary/20">
              <Link href={`/laptops/${laptop.id}`}>
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
