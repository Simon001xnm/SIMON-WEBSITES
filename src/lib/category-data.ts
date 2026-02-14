import {
  Code,
  Smartphone,
  Server,
  Shield,
  Cloud,
  Globe,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SubCategory {
  title: string;
  items: string[];
}

export interface MegaMenuCategory {
  name: string;
  icon: LucideIcon | string;
  subCategories?: SubCategory[];
  href: string;
}

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    name: 'Web Engineering',
    icon: Globe,
    href: '/services#website-development',
  },
  {
    name: 'Mobile Apps',
    icon: Smartphone,
    href: '/services#app-development',
  },
  {
    name: 'Custom Software',
    icon: Code,
    href: '/services#software-development',
  },
  {
    name: 'Cyber Security',
    icon: Shield,
    href: '/services#ethical-hacking',
  },
  {
    name: 'Cloud Services',
    icon: Cloud,
    href: '/services#cloud-computing',
  }
];