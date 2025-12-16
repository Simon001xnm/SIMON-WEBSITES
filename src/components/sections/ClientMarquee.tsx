
import Image from 'next/image';
import { cn } from '@/lib/utils';

const clients = [
    { name: 'Metocus', logoUrl: '/cropped-rsz_metocuslogo2023-removebg-preview_1.png' },
    { name: 'Client 2', logoUrl: '/download.png' },
    { name: 'Client 3', logoUrl: '/images.webp' },
];

export function ClientMarquee() {
  return (
    <div className="relative flex w-full overflow-hidden group">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] [--gap:2rem]">
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="flex-shrink-0 mx-4" style={{ width: '160px' }}>
            <div className="relative h-24 w-full flex items-center justify-center p-2 bg-white rounded-lg shadow-sm border">
              <Image
                src={client.logoUrl}
                alt={client.name}
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-secondary/30 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-secondary/30 to-transparent"></div>
      </div>
    </div>
  );
}
