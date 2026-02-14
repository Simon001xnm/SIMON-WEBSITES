
'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import placeholders from '@/app/lib/placeholder-images.json';

export function TeamSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -rotate-3"></div>
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              <Image 
                src={placeholders.team.url} 
                alt="Simon Styles Team" 
                fill
                className="object-cover"
                data-ai-hint={placeholders.team.hint}
                priority
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The A-Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Driven by Passion, <br/>
              <span className="text-primary italic">Engineered for Success.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
              We are a team of dedicated designers, developers, and strategists committed to helping Kenyan businesses thrive in the digital age. Our diverse expertise allows us to tackle complex problems and deliver elegant solutions that scale effortlessly.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-gray-50 border-2 border-gray-100">
                <p className="text-3xl font-black text-primary">100+</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Solutions Delivered</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border-2 border-gray-100">
                <p className="text-3xl font-black text-primary">10+</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Expert Innovators</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
