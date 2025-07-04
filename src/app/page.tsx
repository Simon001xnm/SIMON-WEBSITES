'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronDown,
  Search,
  User,
  HelpCircle,
  ShoppingCart,
  Store,
  Smartphone,
  Tv,
  Drumstick,
  Heart,
  Home,
  Shirt,
  Gamepad2,
  Baby,
  MoreHorizontal,
  Flame,
  ChevronRight,
  CodeXml,
  Laptop,
  Phone,
  Gift,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
import { MEGA_MENU_CATEGORIES, type MegaMenuCategory } from '@/lib/category-data';
import { MegaMenu } from '@/components/layout/MegaMenu';

export default function JumiaClonePage() {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState<MegaMenuCategory | null>(null);
  const contactPhone = "0758673616";

  return (
    <div className="bg-background min-h-screen">
      <div className="fixed top-0 left-0 h-full w-[calc((100vw-1280px)/2)] bg-accent z-0 hidden xl:block">
        <div className="flex flex-col items-center justify-center h-full text-white p-4 text-center">
            <Gift className="w-16 h-16 mb-4" />
            <h2 className="text-3xl font-bold">Karibu To</h2>
            <h1 className="text-5xl font-extrabold my-2">SIMON STYLES</h1>
            <p className="text-2xl">Let's Style It</p>
        </div>
      </div>
      <div className="fixed top-0 right-0 h-full w-[calc((100vw-1280px)/2)] bg-accent z-0 hidden xl:block">
        <div className="flex flex-col items-center justify-center h-full text-white p-4 text-center">
            <Gift className="w-16 h-16 mb-4" />
            <h2 className="text-3xl font-bold">Karibu To</h2>
            <h1 className="text-5xl font-extrabold my-2">SIMON STYLES</h1>
            <p className="text-2xl">Let's Style It</p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto bg-background">
        <div className="bg-primary text-primary-foreground py-1 px-4 flex justify-center items-center text-xs sm:text-sm">
          <p>Clearance Sale - Up to 70% off!</p>
        </div>

        <header className="bg-white py-3 px-4 shadow-md sticky top-0 z-40">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
                <CodeXml className="w-8 h-8 text-primary shrink-0" />
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
              <Button variant="ghost" className="hidden md:flex items-center gap-1">
                <User className="h-5 w-5" />
                <span>Account</span>
                <ChevronDown className="h-4 w-4" />
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

        <main className="p-4">
          <div 
            className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 relative"
            onMouseLeave={() => setActiveCategory(null)}
          >
            <aside className="hidden lg:block bg-white p-4 rounded-md shadow h-fit">
              <ul>
                {MEGA_MENU_CATEGORIES.map((cat) => (
                  <li key={cat.name} onMouseEnter={() => setActiveCategory(cat)}>
                    <Link href="#" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-sm">
                      <cat.icon className="w-5 h-5 text-gray-600" />
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <MegaMenu category={activeCategory} />
            
            <div className="flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 bg-white rounded-md shadow overflow-hidden relative group">
                      <Image src="https://royaltech.co.ke/uploads/portfolio/GT-1.jpeg" data-ai-hint="tech banner" width={800} height={400} alt="Hero banner" className="w-full h-full object-cover"/>
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                          <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg leading-tight">Laptops For Hire Available</h2>
                          <p className="text-white/90 mt-2 text-sm md:text-base max-w-md">Daily, weekly, & monthly rental plans for businesses, events, and corporate needs.</p>
                          <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg py-3 px-6 h-auto">
                              <a href={`tel:${contactPhone}`}>
                                  <Phone className="mr-2 h-5 w-5"/>
                                  Call to Inquire
                              </a>
                          </Button>
                      </div>
                  </div>
                  <div className="space-y-4">
                      <div className="bg-white p-3 rounded-md shadow text-sm">
                          <div className="flex items-center gap-2 mb-2">
                              <HelpCircle className="w-5 h-5 text-primary"/>
                              <h3 className="font-semibold">HELP CENTER</h3>
                          </div>
                          <p className="text-xs text-gray-500">Guide to Customer Care</p>
                      </div>
                       <div className="bg-white p-3 rounded-md shadow text-sm">
                          <div className="flex items-center gap-2 mb-2">
                              <Store className="w-5 h-5 text-primary"/>
                              <h3 className="font-semibold">SELL ON SIMON STYLES</h3>
                          </div>
                          <p className="text-xs text-gray-500">Millions Of Visitors</p>
                      </div>
                      <div className="bg-white rounded-md shadow overflow-hidden relative group">
                           <Image src="https://royaltech.co.ke/uploads/banner.jpeg" data-ai-hint="laptop partners banner" width={400} height={200} alt="Our Partners" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                           <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                              <h3 className="text-lg font-bold text-white">Our Trusted Partners</h3>
                              <p className="text-xs text-white/90 mt-1">The best laptop deals & suppliers in town.</p>
                          </div>
                      </div>
                      <Link href="/laptops" className="bg-white rounded-md shadow overflow-hidden relative group block">
                           <Image src="https://placehold.co/400x200.png" data-ai-hint="tech deals" width={400} height={200} alt="Shop now" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                           <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Shop Now</h3>
                          </div>
                      </Link>
                  </div>
              </div>

              <div className="bg-accent text-accent-foreground p-3 rounded-md shadow flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-6 h-6" />
                  <h2 className="text-lg font-bold">Flash Sales | Live Now</h2>
                </div>
                <div className="flex items-center gap-4">
                   <p className="text-sm">Time Left: 08h : 33m : 01s</p>
                   <Link href="#" className="flex items-center text-sm font-semibold">
                      See All <ChevronRight className="w-4 h-4 ml-1" />
                   </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4">
                  {MOCK_LAPTOPS.slice(0, 12).map(laptop => (
                      <LaptopCard key={laptop.id} laptop={laptop} />
                  ))}
              </div>
            </div>
          </div>
        </main>
        
        {isCookieBannerVisible && (
          <Card className="fixed bottom-4 left-4 w-80 shadow-2xl z-50 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
              <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">This website uses cookies</h3>
                  <p className="text-sm text-muted-foreground mb-4">For further information on how we use cookies you can read our Privacy and Cookie notice.</p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => setIsCookieBannerVisible(false)}
                  >
                    Accept cookies
                  </Button>
              </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
