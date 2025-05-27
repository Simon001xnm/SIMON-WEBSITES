
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const filterCategories = [
  {
    title: "Processor",
    options: ["Any Core type", "Intel Core i3", "Intel Core i5", "Intel Core i7", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 7", "Celeron"],
    placeholder: "Any Core type",
  },
  {
    title: "Screen-Size",
    options: ["Any Laptop display size", "13 inch", "14 inch", "15.6 inch", "17 inch"],
    placeholder: "Any Laptop display size",
  },
  {
    title: "Storage",
    options: ["Any Hard disk size", "256GB SSD", "512GB SSD", "1TB SSD", "1TB HDD", "2TB HDD"],
    placeholder: "Any Hard disk size",
  },
  {
    title: "Graphics card type",
    options: ["Any Graphics card type", "Integrated Graphics", "NVIDIA MX Series", "NVIDIA GTX Series", "NVIDIA RTX Series", "AMD Radeon RX"],
    placeholder: "Any Graphics card type",
  },
  {
    title: "Operating system",
    options: ["Any Operating system", "Windows 10", "Windows 11", "macOS", "Linux", "ChromeOS", "DOS / No OS"],
    placeholder: "Any Operating system",
  },
];

export function LaptopFiltersSidebar() {
  return (
    <Card className="sticky top-24 shadow-none border-0 md:border md:shadow-sm"> {/* Adjust top based on header height */}
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
