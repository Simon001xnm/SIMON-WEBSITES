
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

export function EcommerceHeader() {
  return (
    <>
      <div className="bg-primary text-primary-foreground py-1 px-4 flex justify-center items-center text-xs sm:text-sm">
        <p>Clearance Sale - Up to 70% off!</p>
      </div>
      <header className="bg-white py-3 px-4 shadow-md sticky top-0 z-40">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image 
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/451458933_1007831461497422_4437508781498024263_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbtG_iV3g4N_Uf3e_F3i7u8a52Dk-dJjLxrnYOT50mMi1s9pSj8A-m9cK3K8c8jI5Y2H9F9z2SHiXvV5-vC0XF&_nc_ohc=y4A6F5A-Q0QQ7kNvgE9gG_m&_nc_ht=scontent.fnbo10-1.fna&oh=00_AYC2k-Xp3t7pZ8n8g3VvO2y3wI3lJzJkLg9hJz3m1gDkTA&oe=669B0C88"
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
            <Button variant="ghost" className="flex items-center gap-1">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
