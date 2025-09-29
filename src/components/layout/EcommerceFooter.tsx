
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  "LET US HELP YOU": ["Help Center", "Contact Us", "How to shop on Simon Styles?", "Shipping and delivery", "Return Policy", "Dispute Resolution Policy", "Corporate and Bulk Purchase", "Advertise with us", "Report a Product", "Ship your package anywhere in Kenya"],
  "ABOUT SIMON STYLES": ["About us", "Simon Styles Careers", "Simon Styles Express", "Terms and Conditions", "Privacy and Cookie Notice", "Simon Styles Global", "Official Stores"],
  "MAKE MONEY WITH SIMON STYLES": ["Sell on Simon Styles", "Become a Sales Consultant", "Become a Logistics Service Partner", "Join the Simon Styles DA Academy", "Join the Simon Styles KOL Program"],
  "SIMON STYLES INTERNATIONAL": ["Algeria", "Egypt", "Ghana", "Ivory Coast", "Morocco", "Nigeria", "Senegal", "Tunisia", "Uganda"],
};


export function EcommerceFooter() {
  return (
    <footer className="bg-[#313133] text-white pt-10 pb-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-gray-600">
          <div className="space-y-4">
             <Link href="/" className="flex items-center gap-2">
                <Image 
                    src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/451458933_1007831461497422_4437508781498024263_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbtG_iV3g4N_Uf3e_F3i7u8a52Dk-dJjLxrnYOT50mMi1s9pSj8A-m9cK3K8c8jI5Y2H9F9z2SHiXvV5-vC0XF&_nc_ohc=y4A6F5A-Q0QQ7kNvgE9gG_m&_nc_ht=scontent.fnbo10-1.fna&oh=00_AYC2k-Xp3t7pZ8n8g3VvO2y3wI3lJzJkLg9hJz3m1gDkTA&oe=669B0C88"
                    alt="Simon Styles Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <span className="text-2xl font-bold text-white">SIMON<span className="text-primary">STYLES</span></span>
            </Link>
            <h3 className="font-semibold">NEW TO SIMON STYLES?</h3>
            <p className="text-sm text-gray-300">Subscribe to our newsletter to get updates on our latest offers!</p>
            <form className="flex gap-2">
              <Input placeholder="Enter E-mail Address" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Male</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Female</Button>
            </form>
          </div>
          
          {/* This section is simplified for brevity. In a real scenario, you might map over an object */}
          <div className="flex flex-col items-start space-y-4 md:items-center">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                 <Image 
                    src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/451458933_1007831461497422_4437508781498024263_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbtG_iV3g4N_Uf3e_F3i7u8a52Dk-dJjLxrnYOT50mMi1s9pSj8A-m9cK3K8c8jI5Y2H9F9z2SHiXvV5-vC0XF&_nc_ohc=y4A6F5A-Q0QQ7kNvgE9gG_m&_nc_ht=scontent.fnbo10-1.fna&oh=00_AYC2k-Xp3t7pZ8n8g3VvO2y3wI3lJzJkLg9hJz3m1gDkTA&oe=669B0C88"
                    alt="Simon Styles Logo"
                    width={24}
                    height={24}
                    className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold">DOWNLOAD SIMON STYLES FREE APP</h3>
                <p className="text-xs text-gray-400">Get access to exclusive offers!</p>
              </div>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" className="bg-black text-white border-gray-600 h-12">App Store</Button>
                <Button variant="outline" className="bg-black text-white border-gray-600 h-12">Google Play</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            {Object.entries(footerLinks).slice(0, 4).map(([title, links]) => (
                <div key={title}>
                    <h4 className="font-semibold uppercase text-sm mb-4 text-gray-400">{title}</h4>
                    <ul className="space-y-2">
                        {links.map(link => (
                            <li key={link}>
                                <Link href="#" className="text-xs text-gray-300 hover:text-white">{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-600">
            <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">JOIN US ON</h4>
                <div className="flex gap-4">
                    <Link href="#"><Facebook className="w-6 h-6 hover:text-primary"/></Link>
                    <Link href="#"><Twitter className="w-6 h-6 hover:text-primary"/></Link>
                    <Link href="#"><Instagram className="w-6 h-6 hover:text-primary"/></Link>
                    <Link href="#"><Youtube className="w-6 h-6 hover:text-primary"/></Link>
                </div>
            </div>
             <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">PAYMENT METHODS & DELIVERY PARTNERS</h4>
                <div className="flex gap-4 text-xs">
                    <span>M-PESA</span>
                    <span>VISA</span>
                    <span>MasterCard</span>
                    <span>DHL</span>
                </div>
            </div>
        </div>

      </Container>
    </footer>
  );
}
