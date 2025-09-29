
import {
  Laptop,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SubCategory {
  title: string;
  items: string[];
}

export interface MegaMenuCategory {
  name: string;
  icon: LucideIcon;
  subCategories: SubCategory[];
}

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    name: 'Computing',
    icon: Laptop,
    subCategories: []
  },
];
