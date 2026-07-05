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
      <div className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden bg-gray-900 shadow-2xl shadow-black/50 border border-white/5">
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
            <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-2xl border-4 border-gray-100 transition-transform duration-500 group-hover:scale-125`}>
                <service.icon className={`w-10 h-10 ${service.color}`} />
            </div>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(40px)" }}
        className="mt-8 space-y-3 px-4"
      >
        <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors tracking-tight leading-none">{service.title}</h3>
        <Link href={service.href} className="inline-flex items-center gap-3 group/link">
            <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${service.color}`}>
                {service.subtitle}
            </span>
            <ArrowRight className="w-5 h-5 text-white group-hover/link:translate-x-3 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export function CoreServicesSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-40 overflow-hidden relative">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #444 1px, transparent 0)', backgroundSize: '48px 48px' }}>
      </div>

      <Container className="relative z-10">
        {/* Header Banner - Matches provided screenshot style */}
        <div className="max-w-4xl mx-auto mb-28 md:mb-36">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#3b32e0] via-[#ff0099] to-[#3b32e0] p-12 md:p-20 rounded-[4rem] md:rounded-[8rem] shadow-[0_30px_100px_rgba(59,50,224,0.4)] text-center relative overflow-hidden"
            >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                
                <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.4em] mb-4">What we do?</p>
                <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
                    Our Core <br className="md:hidden" /> Services
                </h2>
            </motion.div>
        </div>

        {/* Services Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
