
export interface LaptopSpec {
  key: string;
  value: string;
}

export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  dataAiHint?: string;
  shortDescription: string;
  specs: LaptopSpec[];
  stock: number;
}

export const MOCK_LAPTOPS: Laptop[] = [
  {
    id: 'laptop-1',
    name: 'Zenith ProBook X1',
    brand: 'Zenith',
    price: 1299.99,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sleek laptop',
    shortDescription: 'Ultra-thin powerhouse for professionals on the go.',
    specs: [
      { key: 'Processor', value: 'Intel Core i7-13700H' },
      { key: 'RAM', value: '16GB DDR5' },
      { key: 'Storage', value: '1TB NVMe SSD' },
      { key: 'Display', value: '14" QHD+ (2880x1800) OLED' },
      { key: 'Graphics', value: 'Intel Iris Xe' },
    ],
    stock: 15,
  },
  {
    id: 'laptop-2',
    name: 'Nova GamerForce GFX',
    brand: 'NovaTech',
    price: 1799.00,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'gaming laptop',
    shortDescription: 'High-performance gaming laptop with cutting-edge graphics.',
    specs: [
      { key: 'Processor', value: 'AMD Ryzen 9 7945HX' },
      { key: 'RAM', value: '32GB DDR5' },
      { key: 'Storage', value: '2TB NVMe SSD' },
      { key: 'Display', value: '16" WQHD (2560x1600) 165Hz' },
      { key: 'Graphics', value: 'NVIDIA GeForce RTX 4070' },
    ],
    stock: 8,
  },
  {
    id: 'laptop-3',
    name: 'EcoLite Chromebook 13',
    brand: 'EcoSystems',
    price: 349.50,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'chromebook laptop',
    shortDescription: 'Lightweight and secure Chromebook for everyday tasks.',
    specs: [
      { key: 'Processor', value: 'Intel Celeron N5100' },
      { key: 'RAM', value: '8GB LPDDR4X' },
      { key: 'Storage', value: '128GB eMMC' },
      { key: 'Display', value: '13.3" FHD (1920x1080) IPS' },
      { key: 'Graphics', value: 'Intel UHD Graphics' },
    ],
    stock: 25,
  },
  {
    id: 'laptop-4',
    name: 'Creator StudioMax 16',
    brand: 'Artisan PCs',
    price: 2499.99,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'creator laptop',
    shortDescription: 'Powerful workstation for content creators and designers.',
    specs: [
      { key: 'Processor', value: 'Intel Core i9-13900HX' },
      { key: 'RAM', value: '64GB DDR5' },
      { key: 'Storage', value: '2TB NVMe SSD + 1TB SATA SSD' },
      { key: 'Display', value: '16" 4K UHD (3840x2400) Mini-LED' },
      { key: 'Graphics', value: 'NVIDIA GeForce RTX 4080 Laptop' },
    ],
    stock: 5,
  },
  {
    id: 'laptop-5',
    name: 'FlexiBook 2-in-1',
    brand: 'VersaTech',
    price: 899.00,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'convertible laptop',
    shortDescription: 'Versatile 2-in-1 laptop with touch screen and stylus support.',
    specs: [
      { key: 'Processor', value: 'AMD Ryzen 7 7730U' },
      { key: 'RAM', value: '16GB DDR4' },
      { key: 'Storage', value: '512GB NVMe SSD' },
      { key: 'Display', value: '14" FHD (1920x1080) Touchscreen' },
      { key: 'Graphics', value: 'AMD Radeon Graphics' },
    ],
    stock: 12,
  },
];
