'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
import { LaptopFiltersSidebar } from '@/components/laptops/LaptopFiltersSidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, LayoutGrid, X, Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LaptopStockStatus } from '@/components/laptops/LaptopStockStatus';
import { motion, AnimatePresence } from 'framer-motion';

function LaptopsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const brandQuery = searchParams.get('brand');
  const searchQuery = searchParams.get('q');
  
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');

  const filteredLaptops = useMemo(() => {
    return MOCK_LAPTOPS.filter(laptop => {
      const brandMatch = brandQuery ? laptop.brand.toLowerCase() === brandQuery.toLowerCase() : true;
      const searchMatch = searchQuery 
        ? laptop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          laptop.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          laptop.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return brandMatch && searchMatch;
    });
  }, [brandQuery, searchQuery]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('q', searchTerm);
    } else {
      params.delete('q');
    }
    router.push(`/laptops?${params.toString()}`);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    const params = new URLSearchParams(searchParams);
    params.delete('q');
    router.push(`/laptops?${params.toString()}`);
  };

  const pageTitle = () => {
    if (searchQuery) return `Search results for "${searchQuery}"`;
    if (brandQuery) return `${brandQuery} Laptops`;
    return 'Premium Inventory';
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <EcommerceHeader />
      <main className="flex-grow">
        {/* Optimized Search Bar */}
        <div className="sticky top-[112px] z-40 bg-white/80 backdrop-blur-md border-b py-4">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-grow w-full">
                <Input
                  type="search"
                  placeholder="Search HP, Dell, MacBook..."
                  className="pl-12 h-12 text-sm rounded-2xl bg-gray-50 border-gray-100 focus:bg-white transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                {searchTerm && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-gray-200"
                    onClick={handleClearSearch}
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </Button>
                )}
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Button className="h-12 px-8 rounded-2xl bg-primary hover:bg-primary/90 font-black uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20 flex-grow md:flex-grow-0" onClick={handleSearch}>
                  Search Catalog
                </Button>
                <div className="md:hidden">
                   <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="h-12 w-12 p-0 rounded-2xl border-2">
                          <Filter className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-[300px] p-0">
                        <SheetHeader className="sr-only">
                          <SheetTitle>Filter Options</SheetTitle>
                        </SheetHeader>
                        <div className="p-6">
                          <h2 className="text-xl font-black mb-6">Filter Stock</h2>
                          <LaptopFiltersSidebar />
                          <div className="mt-8">
                            <LaptopStockStatus />
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            {/* Sidebar for Desktop */}
            <aside className="hidden md:block md:col-span-1 space-y-8">
              <div className="p-6 bg-white rounded-[2rem] border-2 border-gray-50 shadow-xl">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Browse by Brand</h3>
                <LaptopFiltersSidebar />
              </div>
              <LaptopStockStatus />
            </aside>

            {/* Product Grid */}
            <div className="md:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-black text-gray-900 tracking-tighter flex items-center"
                >
                  <LayoutGrid className="mr-3 h-6 w-6 text-primary" />
                  {pageTitle()}
                </motion.h1>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Sort by</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px] h-10 rounded-xl bg-white border-2 border-gray-50 text-xs font-bold shadow-sm">
                      <SelectValue placeholder="Featured" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-2">
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredLaptops.length > 0 ? (
                    filteredLaptops.map((laptop, index) => (
                      <motion.div
                        key={laptop.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <LaptopCard laptop={laptop} />
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-24 text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="h-8 w-8 text-gray-300" />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-2">No matches found.</h3>
                      <p className="text-gray-500 font-medium max-w-xs mx-auto">Try adjusting your search terms or filters to find what you're looking for.</p>
                      <Button variant="link" onClick={handleClearSearch} className="mt-4 font-bold text-primary">
                        Clear all filters
                      </Button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
              
              {filteredLaptops.length > 0 && (
                <div className="mt-16 flex justify-center">
                  <Button variant="outline" className="h-14 px-12 rounded-2xl border-2 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:border-primary hover:text-primary transition-all shadow-sm">
                    Load More Inventory
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}


export default function LaptopsPage() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <LaptopsPageContent />
    </React.Suspense>
  );
}
