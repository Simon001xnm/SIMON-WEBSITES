
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER, INSTAGRAM_PROFILE_URL } from '@/lib/constants';

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);


export function EcommerceFooter() {
  const currentYear = new Date().getFullYear();
  const contactEmail = "simonwanjiru224@gmail.com";
  const contactPhone = "+254758673616";
  const address = "Nairobi, Kenya";
  const whatsappMessage = "Hello! I'm interested in your services/products.";
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Laptops', href: '/laptops' },
      { name: 'Projects', href: '/projects' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'E-commerce Solutions', href: '/services' },
      { name: 'Laptop Rentals', href: '/#corporate-services' },
      { name: 'Bulk Purchases', href: '/#corporate-services' },
    ],
    account: [
      { name: 'My Account', href: '/account' },
      { name: 'Orders', href: '/account/orders' },
      { name: 'Cart', href: '/cart' },
      { name: 'Login / Register', href: '/login' },
    ]
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About/Contact Section */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <Image 
                    src="/logo.jpg"
                    alt="Simon Styles Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <span className="text-xl font-bold text-white">SIMON<span className="text-primary">STYLES</span></span>
              </Link>
              <p className="text-sm">
                Your one-stop shop for high-quality laptops, computer accessories, and expert tech solutions in Kenya.
              </p>
              <div className="space-y-3 pt-2">
                <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{contactEmail}</span>
                </a>
                <a href={`tel:${contactPhone}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{contactPhone}</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{address}</span>
                </div>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map(link => (
                <li key={link.name}><Link href={link.href} className="hover:text-white hover:underline underline-offset-4 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map(link => (
                <li key={link.name}><Link href={link.href} className="hover:text-white hover:underline underline-offset-4 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Account & Help</h4>
             <ul className="space-y-2">
              {footerLinks.account.map(link => (
                <li key={link.name}><Link href={link.href} className="hover:text-white hover:underline underline-offset-4 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Simon Styles Technology. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
             <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
