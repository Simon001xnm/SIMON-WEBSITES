import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Instagram, Star, Terminal } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER, INSTAGRAM_PROFILE_URL, MPESA_TILL_NUMBER, MPESA_TILL_NAME } from '@/lib/constants';

export function EcommerceFooter() {
  const currentYear = new Date().getFullYear();
  const contactEmail = "simonwanjiru224@gmail.com";
  const contactPhone = "+254758673616";
  const address = "Nairobi, Kenya";
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}`;

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-12 px-4 md:px-0">
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
                <span className="text-2xl font-black text-white tracking-tighter">SIMON<span className="text-primary">STYLES</span></span>
              </Link>
              <p className="text-sm leading-relaxed font-medium text-gray-500">
                Leading tech partners in East Africa. No clutter, just high-performance results.
              </p>
              
              <div className="inline-flex items-center gap-2 p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Google Verified</span>
              </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Products</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/laptops" className="hover:text-primary transition-colors">Shop Laptops</Link></li>
              <li><Link href="#hire" className="hover:text-primary transition-colors">Hire & Lease</Link></li>
              <li><Link href="#web-design" className="hover:text-primary transition-colors">Web Engineering</Link></li>
              <li><Link href="https://royal-tech-computers-limited-7he6.vercel.app/login" target="_blank" className="text-green-500 hover:text-green-400">Free ERP System</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Policy</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Connect</h4>
            <div className="space-y-4 text-sm font-bold">
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 hover:text-white transition-colors">
                <Mail size={18} className="text-primary" />
                <span className="truncate">{contactEmail}</span>
              </a>
              <a href={`tel:${contactPhone}`} className="flex items-center gap-4 hover:text-white transition-colors">
                <Phone size={18} className="text-primary" />
                <span>{contactPhone}</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary" />
                <span>{address}</span>
              </div>
            </div>
            <Link 
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        <Separator className="mb-8 bg-white/5" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40 text-center sm:text-left gap-6">
          <p>&copy; {currentYear} Simon Styles Technology Limited.</p>
          <div className="flex gap-4">
            <Link href={INSTAGRAM_PROFILE_URL} target="_blank">Instagram</Link>
            <span>M-Pesa Till: {MPESA_TILL_NUMBER}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
