
'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, Building, Code, Terminal } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Premium Sales",
    subtitle: "LAPTOP INVENTORY",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    icon: ShoppingCart,
    href: "/laptops",
    color: "text-blue-500",
    bgColor: "bg-blue-500"
  },
  {
    title: "Hire & Lease",
    subtitle: "CORPORATE SOLUTIONS",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1200&auto=format&fit=crop",
    icon: Building,
    href: "/#hire",
    color: "text-purple-500",
    bgColor: "bg-purple-500"
  },
  {
    title: "Web Engineering",
    subtitle: "DESIGN & DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    icon: Code,
    href: "/services",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500"
  },
  {
    title: "Business Hub ERP",
    subtitle: "INTEGRATED PAYMENTS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    icon: Terminal,
    href: "https://businesshub.co.ke",
    color: "text-green-500",
    bgColor: "bg-green-500"
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 1.5;
    const yPct = (mouseY / height - 0.5) * 1.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col group h-full cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl shadow-black/50 border border-white/5">
        <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" 
            data-ai-hint="service showcase image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
        
        {/* Floating Icon */}
        <div 
            style={{ transform: "translateZ(60px)" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-2xl border-4 border-gray-100 transition-transform duration-500 group-hover:scale-110`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
            </div>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(40px)" }}
        className="mt-6 space-y-2 px-2"
      >
        <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tight leading-none">{service.title}</h3>
        <Link href={service.href} className="inline-flex items-center gap-2 group/link">
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${service.color}`}>
                {service.subtitle}
            </span>
            <ArrowRight className="w-4 h-4 text-white group-hover/link:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export function CoreServicesSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-32 overflow-hidden relative">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #444 1px, transparent 0)', backgroundSize: '48px 48px' }}>
      </div>

      {/* End-to-End Banner Header */}
      <div className="relative mb-20 md:mb-24 w-full">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-r from-[#3b32e0] via-[#ff0099] to-[#3b32e0] py-12 md:py-20 relative overflow-hidden flex flex-col items-center justify-center text-center"
        >
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-[40vw] h-full bg-white/5 rounded-full blur-[100px] translate-x-1/2 -rotate-12"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-full bg-black/10 rounded-full blur-[100px] -translate-x-1/2 rotate-12"></div>
            
            <div className="relative z-10 px-4">
                <p className="text-[10px] md:text-xs font-black text-white/70 uppercase tracking-[0.5em] mb-4">
                    Our Expertise
                </p>
                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
                    Our Core Services
                </h2>
            </div>
        </motion.div>
      </div>

      <Container className="relative z-10">
        {/* Services Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
