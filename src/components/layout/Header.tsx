import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { CodeXml } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            <CodeXml className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            Simon Styles Ltd.
          </Link>
          {/* Navigation items can be added here if needed */}
        </div>
      </Container>
    </header>
  );
}
