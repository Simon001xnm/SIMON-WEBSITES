
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const filterCategories = [
  {
    title: "Brand",
    options: ["All Brands", "HP", "Dell", "Apple", "Lenovo", "Asus", "Acer", "Microsoft", "Samsung"],
    placeholder: "All Brands",
  },
  {
    title: "Category",
    options: ["All Categories", "Laptops", "Monitors"],
    placeholder: "All Categories",
  },
];

export function LaptopFiltersSidebar() {
  // Approximate height of main header: 56px (small), 76px (sm+)
  // Approximate height of sticky search bar: p-4 (32px) + content (h-10 input = 40px) = 72px
  // Total offset for sidebar:
  // Small screens (sidebar is in sheet, so this doesn't apply directly): 56px + 72px = 128px (top-32)
  // Medium screens and up: 76px + 72px = 148px (approx top-36 or top-[148px])
  return (
    <Card className="sticky top-32 md:top-36 shadow-none border-0 md:border md:shadow-sm"> {/* Adjusted top based on header + search bar height */}
      <CardHeader className="pb-2 pt-4 px-4 hidden md:block">
        <CardTitle className="text-lg font-semibold">Filter By</CardTitle>
      </CardHeader>
      <CardContent className="p-2 md:p-4 space-y-4">
        {filterCategories.map((category, index) => (
          <div key={category.title}>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">{category.title}</h4>
            <Select>
              <SelectTrigger className="w-full text-xs h-9">
                <SelectValue placeholder={category.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {category.options.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {index < filterCategories.length - 1 && <Separator className="mt-4 md:hidden" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
