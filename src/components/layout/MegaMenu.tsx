'use client';

import Link from 'next/link';
import type { MegaMenuCategory } from '@/lib/category-data';

interface MegaMenuProps {
  category: MegaMenuCategory | null;
}

export function MegaMenu({ category }: MegaMenuProps) {
  if (!category || !category.subCategories.length) {
    return null;
  }

  return (
    <div className="absolute top-0 left-[240px] w-[calc(100%-240px)] h-full bg-white shadow-lg z-20 p-6 border-l border-gray-200">
      <div className="grid grid-cols-4 gap-x-6 gap-y-8">
        {category.subCategories.map((subCat) => (
          <div key={subCat.title} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase text-gray-500 border-b pb-2">
              {subCat.title}
            </h3>
            <ul className="space-y-2">
              {subCat.items.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-700 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
