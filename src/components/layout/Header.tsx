
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { CodeXml, Laptop } from 'lucide-react'; // Added Laptop icon
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="py-4 sm:py-6 border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            <CodeXml className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
            Simon Styles Ltd.
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" asChild size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              <Link href="/#projects">Portfolio</Link>
            </Button>
            <Button variant="ghost" asChild size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              <Link href="/laptops">
                <Laptop className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Laptops
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
