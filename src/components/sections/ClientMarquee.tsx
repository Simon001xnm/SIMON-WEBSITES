
'use client';

import Image from 'next/image';

const clients = [
    { name: 'Ilorie Consult Limited', logoUrl: '/ilorie_consult_limited-removebg-preview.jpg' },
    { name: 'Lee Gifts and Flowers Limited', logoUrl: '/leegifts.jpg' },
    { name: 'Mpoa Wangu Flowers Shop', logoUrl: '/mpoawangu.png' },
    { name: 'Social Media Manager AI Agent', logoUrl: '/ROBO.png' },
    { name: 'Simon Styles Technologies', logoUrl: '/logo (2).webp' },
    { name: 'Beedee Shoe Shop', logoUrl: '/beedee.webp' },
];

export function ClientMarquee() {
  return (
    <div className="relative flex w-full overflow-hidden group py-4">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] [--gap:2rem]">
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div key={index} className="flex-shrink-0 mx-6" style={{ width: '180px' }}>
            <div className="relative h-24 w-full flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border-2 border-gray-50 hover:border-primary/20 transition-all duration-300 group/logo">
              <Image
                src={client.logoUrl}
                alt={client.name}
                fill
                sizes="180px"
                className="object-contain p-2 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  );
}
