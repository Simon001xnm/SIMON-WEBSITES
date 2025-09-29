
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { ShoppingBag } from 'lucide-react'; // Added ShoppingBag for Shop link
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="py-4 sm:py-6 border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
             <Image 
                src="/logo.jpg"
                alt="Simon Styles Logo"
                width={50}
                height={50}
                className="rounded-full"
            />
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2"> {/* Reduced gap slightly to accommodate new link */}
            <Button variant="ghost" asChild size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              <Link href="/laptops"> {/* Link to the laptops page */}
                <ShoppingBag className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> {/* Icon for Shop */}
                Shop
              </Link>
            </Button>
            <Button variant="ghost" asChild size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              <Link href="/#contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
