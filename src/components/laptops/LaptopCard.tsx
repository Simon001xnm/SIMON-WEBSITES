'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Laptop } from '@/lib/laptop-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-1.5"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);


interface LaptopCardProps {
  laptop: Laptop;
}

export function LaptopCard({ laptop }: LaptopCardProps) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const formattedPrice = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(laptop.price);
  const formattedOriginalPrice = laptop.originalPrice ? new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(laptop.originalPrice) : null;

  const handleOrderViaWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault();
      toast({
        title: "Login Required",
        description: "Please log in to your account to place an order.",
        variant: "destructive",
      });
      router.push('/login');
    }
  };

  const whatsappMessage = `I'm interested in ordering the ${laptop.name} (ID: ${laptop.id}). Price: ${formattedPrice}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleAddToCart = () => {
    addToCart(laptop);
    toast({
      title: "Added to Cart",
      description: `${laptop.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Card className="flex flex-col overflow-hidden h-full border-2 border-gray-50 shadow-xl hover:shadow-2xl rounded-[2rem] group bg-white transition-shadow duration-500">
        <div className="relative p-2">
          {laptop.badgeText && (
            <Badge
              variant={laptop.badgeVariant}
              className="absolute top-4 left-4 z-10 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border-2 border-white"
            >
              {laptop.badgeText}
            </Badge>
          )}
          <Link href={`/laptops/${laptop.id}`} className="block aspect-square relative overflow-hidden rounded-[1.5rem] bg-gray-50">
            <Image
              src={laptop.imageUrl}
              alt={laptop.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain transition-transform duration-700 group-hover:scale-110 p-6"
              data-ai-hint={laptop.dataAiHint || "laptop image"}
              priority={laptop.id === 'laptop-32' || laptop.id === 'laptop-31'} // Load first few laptops with priority
            />
            {/* Hover Reveal */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                <ArrowUpRight className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Link>
        </div>

        <CardContent className="p-6 flex-grow flex flex-col justify-between">
          <div className="space-y-2 mb-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{laptop.brand}</p>
            <Link href={`/laptops/${laptop.id}`} className="hover:text-primary transition-colors">
              <h3 className="text-lg font-black leading-tight text-gray-900 group-hover:underline decoration-primary decoration-2 underline-offset-4">
                {laptop.name}
              </h3>
            </Link>
            <p className="text-xs font-medium text-gray-500 line-clamp-2">{laptop.shortDescription}</p>
            {laptop.promotionalText && (
              <p className="text-[10px] font-black text-green-600 bg-green-50 inline-block px-2 py-0.5 rounded-md uppercase tracking-wider">{laptop.promotionalText}</p>
            )}
          </div>

          <div className="mt-auto space-y-4">
             <div className="flex items-baseline gap-2">
              <p className="text-2xl font-black text-accent tracking-tighter">
                {formattedPrice}
              </p>
              {formattedOriginalPrice && laptop.price < laptop.originalPrice && (
                <p className="text-sm font-bold text-gray-300 line-through">
                  {formattedOriginalPrice}
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                size="sm"
                className="h-12 rounded-xl bg-gray-900 hover:bg-primary font-black uppercase tracking-widest text-[9px] shadow-sm transition-all"
                onClick={handleAddToCart}
                disabled={laptop.stock === 0}
              >
                <ShoppingCart className="w-3.5 h-3.5 mr-2"/>
                {laptop.stock === 0 ? 'Sold' : 'Cart'}
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="h-12 rounded-xl border-2 border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 font-black uppercase tracking-widest text-[9px] transition-all"
              >
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleOrderViaWhatsApp}
                >
                  <WhatsAppIcon />
                  Direct Order
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
