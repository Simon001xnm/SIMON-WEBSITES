'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Palette,
  ArrowRight,
  Info
} from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

const packages = [
  {
    title: "Small Business Package",
    price: "KSh 2,000",
    period: "per month",
    description: "Ideal for startups and local shops looking to establish a professional digital presence.",
    suitableFor: ["Small businesses", "Startups", "Local shops", "Individual brands"],
    services: [
      "Content planning",
      "Professional Graphic Design",
      "One video post per week",
      "Scheduled posting",
      "Facebook post boosting",
      "Basic engagement monitoring",
      "Weekly performance review"
    ],
    accent: "border-blue-100 bg-blue-50/30"
  },
  {
    title: "Standard Management",
    price: "KSh 3,000 – 4,000",
    period: "per month",
    description: "Advanced management for growing brands requiring more frequent engagement.",
    suitableFor: ["Growing businesses", "Service providers", "Schools & Institutions", "NGOs", "Personal brands"],
    services: [
      "Full account management",
      "Professional Graphic Design",
      "3–5 posts per week",
      "Content calendar creation",
      "Audience engagement monitoring",
      "Facebook & Instagram management",
      "Post boosting & campaign monitoring",
      "Weekly performance reporting"
    ],
    accent: "border-primary/10 bg-primary/5",
    featured: true
  },
  {
    title: "Premium Full-Time",
    price: "KSh 5,000 – 7,000+",
    period: "per month",
    description: "Comprehensive daily management and strategy for high-performance organizations.",
    suitableFor: ["E-commerce businesses", "Politicians & Public figures", "NGOs", "Large organizations", "Daily engagement brands"],
    services: [
      "Full-time account management",
      "Dedicated account moderator",
      "Community management",
      "Audience response handling",
      "Professional Graphic Design",
      "Video content support",
      "FB, IG, & WhatsApp integration",
      "Advertising campaign management",
      "Strategy development & consultation"
    ],
    accent: "border-accent/20 bg-accent/5"
  }
];

const protocols = [
  "Advertising accounts remain the property of the client.",
  "Only the account owner should fund advertising accounts through official platform prompts.",
  "All advertising budgets are discussed and approved before campaigns are launched.",
  "Campaigns are executed based on agreed objectives, timelines, and performance targets.",
  "Regular reports are provided to monitor results and optimize performance.",
  "Consistent posting and optimization are essential for long-term growth."
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SocialMediaManagementPage() {
  const generateWhatsAppLink = (pkgTitle: string) => {
    const message = `Hello! I'm interested in the "${pkgTitle}" social media management package.`;
    return `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <EcommerceHeader />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 text-center">
          <Container>
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Palette className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Graphic Design Included in All Packages</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 leading-tight mb-8">
                Social Media <br/>
                <span className="text-primary italic">Sorted.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                We provide professional social media management designed to help businesses, institutions, and public figures grow their online presence and achieve measurable marketing results.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Pricing Grid */}
        <section className="pb-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, i) => (
                <motion.div 
                  key={pkg.title}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`h-full flex flex-col border-2 rounded-[2.5rem] shadow-xl transition-all hover:scale-[1.02] ${pkg.accent} ${pkg.featured ? 'ring-2 ring-primary ring-offset-4' : ''}`}>
                    <CardHeader className="p-8 pb-4 text-center">
                      {pkg.featured && (
                        <div className="mb-4">
                          <span className="bg-primary text-white text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</span>
                        </div>
                      )}
                      <CardTitle className="text-2xl font-black text-gray-900">{pkg.title}</CardTitle>
                      <CardDescription className="font-medium mt-2">{pkg.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-8 pt-0 flex-grow">
                      <div className="text-center mb-8">
                        <p className="text-4xl font-black text-primary tracking-tighter">{pkg.price}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{pkg.period}</p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Suitable For</p>
                          <div className="flex flex-wrap gap-2">
                            {pkg.suitableFor.map(item => (
                              <span key={item} className="text-[9px] font-bold px-3 py-1 bg-white border rounded-full text-gray-600 italic">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">What's Included</p>
                          <ul className="space-y-3">
                            {pkg.services.map(service => (
                              <li key={service} className="flex items-start gap-3 text-xs font-bold text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-8 pt-0">
                      <Button asChild className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                        <Link href={generateWhatsAppLink(pkg.title)}>
                          Inquire Now <ArrowRight className="ml-2 w-3 h-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Protocols Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
          </div>
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Management Protocols</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {protocols.map((protocol, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-accent font-black text-lg">0{i+1}.</div>
                    <p className="text-sm font-medium text-gray-300 leading-relaxed">{protocol}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-[2.5rem] border-2 border-dashed border-white/20 bg-white/5 text-center">
                <Info className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="text-lg font-bold text-white mb-6">
                  Ready to scale your digital presence?
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-xs">
                   <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'd like to discuss a social media management strategy.`}>
                    Book Free Consultation
                   </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
