
import {
  Laptop,
  Monitor,
  Computer,
  Smartphone,
  Tablet,
  Printer,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SubCategory {
  title: string;
  items: string[];
}

export interface MegaMenuCategory {
  name: string;
  icon: LucideIcon;
  subCategories?: SubCategory[];
  href: string;
}

// Create a list of brands. In a real app, this might come from an API.
const laptopBrands = ["HP", "Dell", "Apple", "Lenovo", "Asus", "Acer", "Microsoft", "Samsung"];

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  ...laptopBrands.map(brand => ({
    name: brand,
    icon: Laptop, // Use a generic laptop icon for all brands
    href: `/laptops?brand=${encodeURIComponent(brand)}`,
  })),
  {
    name: 'All Laptops',
    icon: Computer,
    href: '/laptops',
  }
];
