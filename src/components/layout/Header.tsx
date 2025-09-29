
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
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/451458933_1007831461497422_4437508781498024263_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbtG_iV3g4N_Uf3e_F3i7u8a52Dk-dJjLxrnYOT50mMi1s9pSj8A-m9cK3K8c8jI5Y2H9F9z2SHiXvV5-vC0XF&_nc_ohc=y4A6F5A-Q0QQ7kNvgE9gG_m&_nc_ht=scontent.fnbo10-1.fna&oh=00_AYC2k-Xp3t7pZ8n8g3VvO2y3wI3lJzJkLg9hJz3m1gDkTA&oe=669B0C88"
                alt="Simon Styles Logo"
                width={40}
                height={40}
                className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary leading-tight">
                Simon<span className="tracking-tight">Styles</span>
              </span>
              <div className="text-xs sm:text-sm font-medium text-primary/90 leading-snug -mt-0.5 sm:-mt-1">
                <div>Technology</div>
                <div>Limited</div>
              </div>
            </div>
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
