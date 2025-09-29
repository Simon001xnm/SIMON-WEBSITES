
import Link from 'next/link';
import Image from 'next/image';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { ShoppingBag } from 'lucide-react'; // Added ShoppingBag for Shop link
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <EcommerceHeader />
  );
}
