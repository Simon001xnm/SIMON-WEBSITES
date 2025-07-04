
import Link from 'next/link';
import { Container } from './Container';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CodeXml, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

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
                <CodeXml className="w-8 h-8 text-primary shrink-0" />
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
                <CodeXml className="w-6 h-6 text-primary"/>
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
