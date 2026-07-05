
'use client';

import React from 'react';
import { Cloud, Server, Database, Shield } from 'lucide-react';

export function PartnersSection() {
  return (
    <div className="pt-12">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Our Partners</p>
      <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-2">
          <Cloud className="w-5 h-5 text-orange-500" />
          <span className="font-black text-gray-900 tracking-tight">aws</span>
        </div>
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-blue-500" />
          <span className="font-black text-gray-900 tracking-tight">Google Cloud</span>
        </div>
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-[#008bcf]" />
          <span className="font-black text-gray-900 tracking-tight">DigitalOcean</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#00b050]" />
          <span className="font-black text-gray-900 tracking-tight">linode</span>
        </div>
      </div>
    </div>
  );
}
