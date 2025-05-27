
export interface LaptopSpec {
  key: string;
  value: string;
}

export type LaptopBadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'hotdeal' | 'new';

export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number; // For strikethrough pricing
  imageUrl: string;
  dataAiHint?: string;
  shortDescription: string; // This will be used as the main spec line below title
  specs: LaptopSpec[]; // Detailed specs, maybe for a detail page later
  stock: number;
  badgeText?: string; // e.g., "BRAND NEW", "SOLD OUT", "SALE"
  badgeVariant?: LaptopBadgeVariant;
  promotionalText?: string; // e.g., "Free Wireless Mouse"
  // Fields for potential filtering (can be expanded)
  processorType?: string;
  screenSize?: string;
  storageType?: string;
  graphicsType?: string;
  operatingSystem?: string;
}

export const MOCK_LAPTOPS: Laptop[] = [
  {
    id: 'laptop-1',
    name: 'ASUS X543M, Celeron N4020, 4 GB Ram, 1 TB',
    brand: 'Asus Celeron',
    price: 26499,
    originalPrice: 28000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'asus laptop',
    shortDescription: 'N4020, 4 GB Ram, 1 TB',
    specs: [
      { key: 'Processor', value: 'Intel Celeron N4020' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '1TB HDD' },
      { key: 'Display', value: '15.6" HD' },
    ],
    stock: 15,
    badgeText: 'BRAND NEW',
    badgeVariant: 'new',
    promotionalText: '+ Free Mouse',
    processorType: 'Celeron N4020',
    screenSize: '15.6"',
    storageType: '1TB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'Windows 10'
  },
  {
    id: 'laptop-2',
    name: 'Lenovo IdeaPad S145-15 Celeron, 4 GB Ram, 1 TB',
    brand: 'Lenovo Celeron',
    price: 27999,
    originalPrice: 31000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'lenovo laptop',
    shortDescription: 'Celeron, 4 GB Ram, 1 TB',
    specs: [
      { key: 'Processor', value: 'Intel Celeron' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '1TB HDD' },
      { key: 'Display', value: '15.6" HD' },
    ],
    stock: 0, // For "SOLD OUT"
    badgeText: 'SOLD OUT',
    badgeVariant: 'destructive',
    promotionalText: 'Free Wireless Mouse',
    processorType: 'Celeron',
    screenSize: '15.6"',
    storageType: '1TB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'Windows 10'
  },
  {
    id: 'laptop-3',
    name: 'Lenovo IdeaPad 3-14 Celeron, 4GB Ram, 1TB',
    brand: 'Lenovo Celeron',
    price: 29999,
    originalPrice: 33000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'ideapad laptop',
    shortDescription: 'Celeron, 4GB Ram, 1TB',
    specs: [
      { key: 'Processor', value: 'Intel Celeron' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '1TB HDD' },
      { key: 'Display', value: '14" HD' },
    ],
    stock: 10,
    badgeText: 'BRAND NEW',
    badgeVariant: 'new',
    promotionalText: '1 Year Warranty',
    processorType: 'Celeron',
    screenSize: '14"',
    storageType: '1TB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'Windows 11'
  },
  {
    id: 'laptop-4',
    name: 'Lenovo IdeaPad 330, Intel Celeron, 1TB, 4GB',
    brand: 'Lenovo Celeron',
    price: 29999,
    originalPrice: 32000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'lenovo ideapad',
    shortDescription: 'Intel Celeron, 1TB, 4GB',
    specs: [
      { key: 'Processor', value: 'Intel Celeron' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '1TB HDD' },
      { key: 'Display', value: '15.6" HD' },
    ],
    stock: 7,
    badgeText: 'SALE',
    badgeVariant: 'hotdeal',
    processorType: 'Celeron',
    screenSize: '15.6"',
    storageType: '1TB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'DOS'
  },
  {
    id: 'laptop-5',
    name: 'HP 250 G8 Celeron N4020, 4GB Ram, 500GB',
    brand: 'HP Celeron',
    price: 29999,
    originalPrice: 33000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'hp laptop',
    shortDescription: 'N4020, 4GB Ram, 500GB',
    specs: [
      { key: 'Processor', value: 'Intel Celeron N4020' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '500GB HDD' },
      { key: 'Display', value: '15.6" HD' },
    ],
    stock: 12,
    badgeText: 'BRAND NEW',
    badgeVariant: 'new',
    processorType: 'Celeron N4020',
    screenSize: '15.6"',
    storageType: '500GB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'Windows 10'
  },
  // Add more laptops to fill the page a bit
  {
    id: 'laptop-6',
    name: 'HP 250 G7 Celeron N4020, 4GB Ram, 500GB',
    brand: 'HP Celeron',
    price: 29999,
    originalPrice: 31000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'hp g7 laptop',
    shortDescription: 'N4020, 4GB Ram, 500GB',
    specs: [
      { key: 'Processor', value: 'Intel Celeron N4020' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '500GB HDD' },
      { key: 'Display', value: '15.6" HD' },
    ],
    stock: 9,
    badgeText: 'BRAND NEW',
    badgeVariant: 'new',
    promotionalText: '+ Free Bag',
    processorType: 'Celeron N4020',
    screenSize: '15.6"',
    storageType: '500GB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'Windows 10'
  },
  {
    id: 'laptop-7',
    name: 'Lenovo IdeaPad 3 15 IGL05, Intel Celeron',
    brand: 'Lenovo Celeron',
    price: 29999,
    originalPrice: 31000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'ideapad 3',
    shortDescription: 'Intel Celeron, 4GB, 1TB',
     specs: [
      { key: 'Processor', value: 'Intel Celeron' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '1TB HDD' },
      { key: 'Display', value: '15.6" HD' },
    ],
    stock: 11,
    badgeText: 'BRAND NEW',
    badgeVariant: 'new',
    processorType: 'Celeron',
    screenSize: '15.6"',
    storageType: '1TB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'Windows 11'
  },
  {
    id: 'laptop-8',
    name: 'HP 14 Notebook, Celeron, 4 GB Ram, 500 GB HDD',
    brand: 'HP Celeron',
    price: 33999,
    originalPrice: 36000,
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'hp 14 notebook',
    shortDescription: 'Celeron, 4 GB Ram, 500 GB HDD',
    specs: [
      { key: 'Processor', value: 'Intel Celeron' },
      { key: 'RAM', value: '4GB DDR4' },
      { key: 'Storage', value: '500GB HDD' },
      { key: 'Display', value: '14" HD' },
    ],
    stock: 0,
    badgeText: 'LIMITED STOCK',
    badgeVariant: 'hotdeal',
    processorType: 'Celeron',
    screenSize: '14"',
    storageType: '500GB HDD',
    graphicsType: 'Integrated',
    operatingSystem: 'Windows 10'
  }
];
