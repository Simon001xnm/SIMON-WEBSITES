
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Flame,
  ChevronRight,
  Phone,
  Gift,
  Store,
  HelpCircle,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
import { MEGA_MENU_CATEGORIES } from '@/lib/category-data';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';


export default function JumiaClonePage() {
  const contactPhone = "0758673616";

  const CategorySidebar = () => (
    <aside className="bg-white p-4 rounded-md shadow h-fit sticky top-24">
      <h3 className="text-md font-semibold mb-2 text-primary">Categories</h3>
      <ul>
        {MEGA_MENU_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <li key={cat.name}>
              <Link href={cat.href} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-sm">
                {typeof Icon === 'string' ? (
                  <Image src={Icon} alt={`${cat.name} logo`} width={20} height={20} className="w-5 h-5 object-contain" />
                ) : (
                  <Icon className="w-5 h-5 text-gray-600" />
                )}
                <span>{cat.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="relative z-10 max-w-screen-2xl mx-auto bg-background">
        <EcommerceHeader />

        <main className="p-4">
          <div className="lg:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Menu className="mr-2 h-4 w-4" />
                  Shop by Category
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <div className="p-4">
                  <CategorySidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 relative"
          >
            <div className="hidden lg:block">
              <CategorySidebar />
            </div>
            
            <div className="flex-grow space-y-4">
              {/* Adjusted Grid for compact view */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4">
                  {/* Main Hero Banner */}
                  <div className="bg-white rounded-md shadow overflow-hidden relative group h-[200px] md:h-[280px]">
                      <Image src="https://royaltech.co.ke/uploads/portfolio/GT-1.jpeg" data-ai-hint="tech banner" layout="fill" objectFit="cover" alt="Hero banner" className="w-full h-full"/>
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                          <h2 className="text-xl md:text-3xl font-extrabold text-white drop-shadow-lg leading-tight">Laptops For Hire Available</h2>
                          <p className="text-white/90 mt-2 text-xs md:text-sm max-w-md">Daily, weekly, & monthly rental plans for businesses, events, and corporate needs.</p>
                          <Button asChild className="mt-3 bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base py-2 px-4 h-auto">
                              <a href={`tel:${contactPhone}`}>
                                  <Phone className="mr-2 h-4 w-4"/>
                                  Call to Inquire
                              </a>
                          </Button>
                      </div>
                  </div>
                  {/* Side panels */}
                  <div className="flex flex-col gap-4">
                       <div className="bg-white p-3 rounded-md shadow text-sm flex-grow flex flex-col justify-center h-[96px] md:h-auto">
                          <div className="flex items-center gap-2 mb-1">
                              <Store className="w-5 h-5 text-primary"/>
                              <h3 className="font-semibold">SELL ON SIMON STYLES</h3>
                          </div>
                          <p className="text-xs text-gray-500">Millions Of Visitors</p>
                      </div>
                      <div className="bg-white rounded-md shadow overflow-hidden relative group h-[120px] md:h-full flex-grow">
                           <Image src="/OURTEAM.jpg" data-ai-hint="our team" layout="fill" objectFit="cover" alt="Our Team" className="w-full h-full transition-transform duration-300 group-hover:scale-105"/>
                           <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-2">
                              <h3 className="text-lg font-bold text-white">Our Team</h3>
                              <p className="text-sm text-white/90 mt-1">Dedicated professionals to serve you.</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {MOCK_LAPTOPS.slice(0, 18).map(laptop => (
                      <LaptopCard key={laptop.id} laptop={laptop} />
                  ))}
              </div>
            </div>
          </div>
        </main>

        <EcommerceFooter />
      </div>
    </div>
  );
}
