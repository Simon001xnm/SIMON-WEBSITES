
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Flame,
  ChevronRight,
  Phone,
  Gift,
  Store,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
import { MEGA_MENU_CATEGORIES } from '@/lib/category-data';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';


export default function JumiaClonePage() {
  const contactPhone = "0758673616";

  return (
    <div className="bg-background min-h-screen">
      <div className="fixed top-0 left-0 h-full w-[calc((100vw-1280px)/2)] bg-primary z-0 hidden xl:block">
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
        <EcommerceHeader />

        <main className="p-4">
          <div
            className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 relative"
          >
            <aside className="hidden lg:block bg-white p-4 rounded-md shadow h-fit sticky top-24">
              <ul>
                {MEGA_MENU_CATEGORIES.map((cat) => (
                  <li key={cat.name}>
                    <Link href={cat.href} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-sm">
                      <cat.icon className="w-5 h-5 text-gray-600" />
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            
            <div className="flex-grow space-y-4">
              {/* Adjusted Grid for compact view */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4 h-[280px]">
                  {/* Main Hero Banner with reduced height */}
                  <div className="bg-white rounded-md shadow overflow-hidden relative group h-full">
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
                  {/* Side panels with reduced height */}
                  <div className="flex flex-col gap-4 h-full">
                       <div className="bg-white p-3 rounded-md shadow text-sm flex-grow flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-1">
                              <Store className="w-5 h-5 text-primary"/>
                              <h3 className="font-semibold">SELL ON SIMON STYLES</h3>
                          </div>
                          <p className="text-xs text-gray-500">Millions Of Visitors</p>
                      </div>
                      <div className="bg-white rounded-md shadow overflow-hidden relative group h-full flex-grow">
                           <Image src="/OURTEAM.jpg" data-ai-hint="our team" layout="fill" objectFit="cover" alt="Our Team" className="w-full h-full transition-transform duration-300 group-hover:scale-105"/>
                           <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-2">
                              <h3 className="text-lg font-bold text-white">Our Team</h3>
                              <p className="text-sm text-white/90 mt-1">Dedicated professionals to serve you.</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2">
                  {MOCK_LAPTOPS.slice(0, 15).map(laptop => (
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
