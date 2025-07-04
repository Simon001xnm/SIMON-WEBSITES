import {
  Store,
  Smartphone,
  Tv,
  Heart,
  Home,
  Shirt,
  Gamepad2,
  Baby,
  MoreHorizontal,
  Laptop,
  ShoppingCart
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
    name: 'Official Stores',
    icon: Store,
    subCategories: [
      { title: 'Top Brands', items: ['Samsung', 'Apple', 'HP', 'Dell', 'Lenovo'] },
      { title: 'Exclusive Deals', items: ['Store-Only Discounts', 'Bundles'] }
    ]
  },
  {
    name: 'Phones & Tablets',
    icon: Smartphone,
    subCategories: [
      { title: 'Mobile Phones', items: ['Samsung', 'Tecno', 'Infinix', 'FreeYond', 'Apple iPhone', 'Xiaomi'] },
      { title: 'Tablets', items: ['iPad', 'Samsung Galaxy Tab', 'Amazon Fire'] },
      { title: 'Accessories', items: ['Chargers', 'Cases', 'Screen Protectors', 'Oraimo Accessories'] }
    ]
  },
  {
    name: 'TVs & Audio',
    icon: Tv,
    subCategories: [
      { title: 'Televisions', items: ['Vitron', 'Vision Plus', 'TCL', 'Hisense', 'Samsung', 'LG'] },
      { title: 'Audio', items: ['Headphones', 'Bluetooth Speakers', 'Home Theatres', 'Multichoice'] }
    ]
  },
  {
    name: 'Appliances',
    icon: Laptop,
    subCategories: [
      { title: 'Large Appliances', items: ['Fridges', 'Washing Machines', 'Cookers'] },
      { title: 'Small Appliances', items: ['Microwaves', 'Blenders', 'Kettles', 'Nunix', 'Roch', 'Ramtons', 'Hotpoint', 'Mika'] }
    ]
  },
  {
    name: 'Health & Beauty',
    icon: Heart,
    subCategories: [
      { title: 'Makeup', items: ['Maybelline', 'MAC', 'L\'Oréal'] },
      { title: 'Skincare', items: ['Garnier', 'Nivea', 'Nice & Lovely', 'Cerave'] },
      { title: 'Fragrances', items: ['For Men', 'For Women'] }
    ]
  },
  {
    name: 'Home & Office',
    icon: Home,
    subCategories: [
      { title: 'Furniture', items: ['Desks', 'Chairs', 'Shelving'] },
      { title: 'Decor', items: ['Rugs', 'Lighting', 'Wall Art'] },
      { title: 'Suppliers', items: ['Solarmax', 'Nunix', 'Annov', 'Redberry', 'Miniso'] }
    ]
  },
  {
    name: 'Fashion',
    icon: Shirt,
    subCategories: [
      { title: 'Men\'s Fashion', items: ['T-Shirts', 'Trousers', 'Shoes'] },
      { title: 'Women\'s Fashion', items: ['Dresses', 'Tops', 'Handbags'] },
      { title: 'Brands', items: ['adidas', 'Ecko Unltd', 'Nike'] }
    ]
  },
  {
    name: 'Computing',
    icon: Laptop,
    subCategories: [
      { title: 'Laptops', items: ['HP', 'Lenovo', 'Dell', 'Asus', 'Apple MacBook'] },
      { title: 'Desktops', items: ['All-in-Ones', 'Towers'] },
      { title: 'Accessories', items: ['Keyboards', 'Mice', 'Monitors', 'Printers', 'Canon'] }
    ]
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    subCategories: [
      { title: 'Consoles', items: ['PlayStation 5', 'Xbox Series X/S'] },
      { title: 'PC Gaming', items: ['Gaming Laptops', 'Graphics Cards', 'Gaming Mice'] }
    ]
  },
  {
    name: 'Supermarket',
    icon: ShoppingCart,
    subCategories: [
      { title: 'Grocery', items: ['Beverages (PRK, EABL)', 'Cooking Essentials', 'Snacks'] },
      { title: 'Household', items: ['Cleaning Supplies', 'Laundry'] }
    ]
  },
  {
    name: 'Baby Products',
    icon: Baby,
    subCategories: [
      { title: 'Diapering', items: ['Huggies', 'Pampers'] },
      { title: 'Feeding', items: ['Bottles', 'High Chairs'] }
    ]
  },
  {
    name: 'Other categories',
    icon: MoreHorizontal,
    subCategories: [
      { title: 'Books & Stationery', items: [] },
      { title: 'Automotive', items: [] }
    ]
  }
];
