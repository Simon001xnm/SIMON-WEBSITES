
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ChevronDown,
  Search,
  User,
  HelpCircle,
  ShoppingCart,
  CodeXml,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';


export function EcommerceHeader() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="bg-primary text-primary-foreground py-1 px-4 flex justify-center items-center text-xs sm:text-sm">
        <p>Clearance Sale - Up to 70% off!</p>
      </div>
      <header className="bg-white py-3 px-4 shadow-md sticky top-0 z-40">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image 
                src="/logo.jpg"
                alt="Simon Styles Logo"
                width={40}
                height={40}
                className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-800">SIMON<span className="text-primary">STYLES</span></span>
          </Link>
          <div className="flex-grow max-w-2xl hidden sm:flex items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input placeholder="Search products, brands and categories" className="pl-10 bg-gray-100 border-gray-300 focus:ring-primary focus:border-primary" />
            </div>
            <Button className="ml-2 bg-primary hover:bg-primary/90">Search</Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex items-center gap-1" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span>Account</span>
                <ChevronDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="hidden md:flex items-center gap-1">
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-1 relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0 rounded-full bg-accent text-accent-foreground">
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
