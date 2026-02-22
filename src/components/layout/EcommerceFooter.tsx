import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, CreditCard } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER, INSTAGRAM_PROFILE_URL, MPESA_TILL_NUMBER, MPESA_TILL_NAME } from '@/lib/constants';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

export function EcommerceFooter() {
  const currentYear = new Date().getFullYear();
  const contactEmail = "simonwanjiru224@gmail.com";
  const contactPhone = "+254758673616";
  const address = "Nairobi, Kenya";
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in starting a project with East Africa's leading agency.")}`;

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/#about' },
      { name: 'Our Work', href: '/projects' },
      { name: 'Services', href: '/services' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    expertise: [
      { name: 'Web Engineering', href: '/services#website-development' },
      { name: 'Software Systems', href: '/services#software-development' },
      { name: 'Mobile Innovation', href: '/services#app-development' },
      { name: 'Cloud Solutions', href: '/services#cloud-computing' },
      { name: 'Cyber Security', href: '/services#ethical-hacking' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  };

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-0">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20">
          <div className="sm:col-span-2 lg:col-span-1 space-y-6 md:space-y-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl md:rounded-2xl grayscale brightness-125">
                  <Image 
                      src="/logo.jpg"
                      alt="Simon Styles Logo"
                      fill
                      className="object-cover"
                  />
                </div>
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">SIMON<span className="text-primary">STYLES</span></span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs font-medium text-gray-500">
                The leading website designer in Kenya and East Africa. Engineering world-class digital ecosystems for forward-thinking enterprises.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all shadow-sm"><Twitter size={18} /></Link>
                <Link href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all shadow-sm"><Linkedin size={18} /></Link>
                <Link href={INSTAGRAM_PROFILE_URL} className="p-2.5 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all shadow-sm"><Instagram size={18} /></Link>
              </div>
          </div>

          <div className="hidden sm:block">
            <h4 className="font-black text-white mb-6 md:mb-8 uppercase tracking-[0.2em] text-[10px]">Expertise</h4>
            <ul className="space-y-4 md:space-y-5 text-sm font-bold">
              {footerLinks.expertise.map(link => (
                <li key={link.name}><Link href={link.href} className="hover:text-primary transition-colors block">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="hidden sm:block">
            <h4 className="font-black text-white mb-6 md:mb-8 uppercase tracking-[0.2em] text-[10px]">Agency</h4>
            <ul className="space-y-4 md:space-y-5 text-sm font-bold">
              {footerLinks.company.map(link => (
                <li key={link.name}><Link href={link.href} className="hover:text-primary transition-colors block">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="font-black text-white mb-6 md:mb-8 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <div className="space-y-4 md:space-y-5 text-sm font-bold">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors shrink-0"><CreditCard size={18} className="text-green-500" /></div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] md:text-[10px] uppercase text-gray-500 font-black tracking-widest">M-Pesa Till</span>
                  <span className="text-white truncate">{MPESA_TILL_NUMBER} - {MPESA_TILL_NAME}</span>
                </div>
              </div>
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 hover:text-white transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0"><Mail size={18} className="text-primary" /></div>
                <span className="truncate">{contactEmail}</span>
              </a>
              <a href={`tel:${contactPhone}`} className="flex items-center gap-4 hover:text-white transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0"><Phone size={18} className="text-primary" /></div>
                <span>{contactPhone}</span>
              </a>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 shrink-0"><MapPin size={18} className="text-primary" /></div>
                <span className="leading-relaxed">{address}</span>
              </div>
            </div>
            <Link 
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white w-full py-4 rounded-xl md:rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-all shadow-xl shadow-primary/20"
            >
              <WhatsAppIcon /> Work with the Leader
            </Link>
          </div>
        </div>
        
        <Separator className="mb-8 md:mb-10 bg-white/5" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40 text-center sm:text-left gap-6">
          <p className="max-w-xs md:max-w-none leading-relaxed">&copy; {currentYear} Simon Styles Technology Limited. East Africa's Leading Agency.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {footerLinks.legal.map(link => (
              <Link key={link.name} href={link.href} className="hover:underline">{link.name}</Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
