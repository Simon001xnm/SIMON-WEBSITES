
import Image from 'next/image';
import Link from 'next/link';
import type { Laptop } from '@/lib/laptop-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';

interface LaptopCardProps {
  laptop: Laptop;
}

export function LaptopCard({ laptop }: LaptopCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl group">
      <CardHeader className="p-4">
        <div className="aspect-video relative mb-3 overflow-hidden rounded-md">
          <Image
            src={laptop.imageUrl}
            alt={laptop.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={laptop.dataAiHint || "laptop image"}
          />
        </div>
        <CardTitle className="text-lg sm:text-xl font-semibold leading-tight">{laptop.name}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">{laptop.brand}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-sm text-muted-foreground mb-3 min-h-[3em]">{laptop.shortDescription}</p>
        
        <div className="mb-3">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1.5">Key Specs</h4>
          <div className="flex flex-wrap gap-1">
            {laptop.specs.slice(0, 3).map((spec) => ( // Show first 3 specs
              <Badge key={spec.key} variant="secondary" className="text-xs">
                {spec.key}: {spec.value}
              </Badge>
            ))}
          </div>
        </div>
        <p className="text-xl font-bold text-primary">
          ${laptop.price.toFixed(2)}
        </p>
        <p className={`text-xs mt-1 ${laptop.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {laptop.stock > 0 ? `${laptop.stock} in stock` : 'Out of stock'}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-2 pt-3 border-t">
        <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
          {/* This link will eventually go to a detailed product page */}
          <Link href={`/laptops/${laptop.id}`}> 
            <Eye className="mr-2 h-4 w-4" /> View Details
          </Link>
        </Button>
        <Button size="sm" className="w-full sm:w-auto" disabled={laptop.stock === 0}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
