
import Link from 'next/link';
import { Container } from './Container';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone } from 'lucide-react';

export function EcommerceFooter() {
  const currentYear = new Date().getFullYear();
  const contactEmail = "simonwanjiru224@gmail.com";
  const contactPhone = "+254758673616";

  return (
    <footer className="bg-[#313133] text-white pt-8 pb-6">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold uppercase text-sm mb-3 text-gray-400">Customer Care</h4>
            <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm">
               <a href={`mailto:${contactEmail}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>{contactEmail}</span>
                </a>
                <a href={`tel:${contactPhone}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{contactPhone}</span>
                </a>
            </div>
          </div>
        </div>
        <Separator className="my-6 bg-gray-600" />
        <div className="text-center">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Simon Styles Technology. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
