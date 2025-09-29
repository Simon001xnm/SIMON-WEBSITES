
import {
  Computer,
  Laptop,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SubCategory {
  title: string;
  items: string[];
}

export interface MegaMenuCategory {
  name: string;
  icon: LucideIcon | string; // Can be a component or an image path
  subCategories?: SubCategory[];
  href: string;
}

// Create a list of brands. In a real app, this might come from an API.
const laptopBrands = ["HP", "Dell", "Apple", "Lenovo", "Asus", "Acer", "Microsoft", "Samsung"];

const brandLogos: { [key: string]: string } = {
  "HP": "/hplogo.png",
  "Dell": "/delllogo.png",
  "Apple": "/applelogo.png",
  "Lenovo": "/lenovologo.png",
  "Asus": "/asuslogo.png",
  "Acer": "/acerlogo.png", // Added Acer logo
  "Microsoft": "/microsoftlogo.png",
  "Samsung": "/samsunglogo.png",
};

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  ...laptopBrands.map(brand => ({
    name: brand,
    icon: brandLogos[brand] || Laptop, // Use brand logo if available, otherwise default
    href: `/laptops?brand=${encodeURIComponent(brand)}`,
  })),
  {
    name: 'All Laptops',
    icon: Computer,
    href: '/laptops',
  }
];
