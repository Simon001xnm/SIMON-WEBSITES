
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
import { LaptopFiltersSidebar } from '@/components/laptops/LaptopFiltersSidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, LayoutGrid } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LaptopStockStatus } from '@/components/laptops/LaptopStockStatus';


export default function LaptopsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <EcommerceHeader />
      <main className="flex-grow">
        {/* Search and Category Section - Made Sticky */}
        <div className="sticky top-[56px] sm:top-[76px] z-40 bg-background shadow-md py-1"> {/* Adjusted top values and added py-1 for some spacing if needed */}
          <Container className="py-3 md:py-4"> {/* Reduced py slightly to compensate for wrapper padding */}
            <div className="p-3 bg-card border rounded-lg shadow-sm"> {/* Reduced internal padding slightly */}
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <div className="relative flex-grow w-full md:max-w-md lg:max-w-lg">
                  <Input
                    type="search"
                    placeholder="Search for Products..."
                    className="pl-10 h-10 text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Select defaultValue="all-categories">
                  <SelectTrigger className="w-full md:w-[200px] h-10 text-sm">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="desktops">Desktops</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    {/* Add more categories as needed */}
                  </SelectContent>
                </Select>
                <Button className="h-10 w-full md:w-auto text-sm">
                  <Search className="h-4 w-4 md:hidden" />
                  <span className="hidden md:inline">Search</span>
                </Button>
                <div className="md:hidden w-full">
                   <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="w-full h-10 text-sm">
                          <Filter className="mr-2 h-4 w-4" /> Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0">
                        <LaptopFiltersSidebar />
                      </SheetContent>
                    </Sheet>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Content Area: Filters + Product Grid */}
        <Container className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 items-start">
            {/* Filters Sidebar (Desktop) */}
            <div className="hidden md:block md:col-span-1">
              <LaptopFiltersSidebar />
              <LaptopStockStatus />
            </div>

            {/* Product Grid */}
            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-primary flex items-center">
                  <LayoutGrid className="mr-2 h-5 w-5" />
                  Laptops
                </h1>
                {/* Placeholder for sorting dropdown */}
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px] h-9 text-xs">
                    <SelectValue placeholder="Sort by: Featured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Sort by: Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {MOCK_LAPTOPS.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {MOCK_LAPTOPS.map((laptop) => (
                    <LaptopCard key={laptop.id} laptop={laptop} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground text-lg py-10">
                  No laptops available at the moment. Please check back soon!
                </p>
              )}
              {/* Placeholder for Pagination */}
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
