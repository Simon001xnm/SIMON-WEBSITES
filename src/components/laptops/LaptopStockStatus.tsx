
'use client';

import * as React from 'react';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function LaptopStockStatus() {
  // Systematic arrangement by name for the "model arrangement" requested
  const sortedLaptops = [...MOCK_LAPTOPS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Card className="mt-6 bg-secondary/50 border-2 border-primary/5 shadow-sm overflow-hidden">
      <CardHeader className="pb-3 bg-white/50 border-b">
        <CardTitle className="text-sm font-black uppercase tracking-tighter text-primary flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          Live Model Inventory
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-100">
          {sortedLaptops.map((laptop) => (
            <li key={laptop.id} className="group transition-colors hover:bg-white">
              <Link href={`/laptops/${laptop.id}`} className="flex flex-col p-4">
                <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest mb-1">
                  {laptop.brand}
                </span>
                <span className="text-xs font-bold text-gray-700 group-hover:text-primary transition-colors line-clamp-1">
                  {laptop.name}
                </span>
                <div className="flex justify-between items-center mt-2">
                   <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${laptop.stock > 0 ? 'text-accent bg-accent/5' : 'text-destructive bg-destructive/5'}`}>
                     {laptop.stock > 0 ? 'Ready to Ship' : 'Out of Stock'}
                   </span>
                   <span className="text-[9px] font-bold text-gray-400">
                     KES {new Intl.NumberFormat('en-KE').format(laptop.price)}
                   </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-4 bg-primary/5 text-center border-t border-gray-100">
            <p className="text-[8px] font-black text-primary/40 uppercase tracking-[0.2em]">
                Updated Real-Time • Nairobi Lab
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
