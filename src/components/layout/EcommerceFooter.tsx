import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Star } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER, MPESA_TILL_NUMBER } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function EcommerceFooter() {
  const currentYear = new Date().getFullYear();
  const contactEmail = "info@royaltech.co.ke";
  const contactPhone = "0758673616";
  const address = "Biashara Street, Revlon Professional Plaza, 2nd Floor";
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}`;

  return (
    <footer className="bg-primary text-gray-400 pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl grayscale brightness-125">
                  <Image 
                      src="/logo.jpg"
                      alt="Simon Styles Logo"
                      fill
                      className="object-cover"
                  />
                </div>
                <span className="text-2xl font-black text-white tracking-tighter">SIMON<span className="text-accent">STYLES</span></span>
              </Link>
              <p className="text-sm leading-relaxed font-medium text-gray-500">
                Kenya's premier Information Technology partner. Over 11 years of experience and 1000+ innovative achievements.
              </p>
              
              <div className="inline-flex items-center gap-2 p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Google Verified</span>
              </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Solutions</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/laptops" className="hover:text-accent transition-colors">Computer Sales</Link></li>
              <li><Link href="/#hire" className="hover:text-accent transition-colors">Laptops for Hire</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Our Portfolio</Link></li>
              <li><Link href="https://businesshub.co.ke" target="_blank" className="text-green-500 hover:text-green-400">Free ERP Software</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Quick Access</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
              <li><Link href="/login" className="hover:text-accent transition-colors">Client Portal</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Visit Us</h4>
            <div className="space-y-4 text-sm font-bold">
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-accent" />
                <span>{contactPhone}</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-accent" />
                <span className="leading-tight">{address}</span>
              </div>
            </div>
            <Link 
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-accent text-white w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-all"
            >
              Get a Quote Now
            </Link>
          </div>
        </div>
        
        <Separator className="mb-8 bg-white/5" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40 text-center sm:text-left gap-6">
          <p>&copy; {currentYear} Simon Styles Technology Limited. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>M-Pesa Till: {MPESA_TILL_NUMBER}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}