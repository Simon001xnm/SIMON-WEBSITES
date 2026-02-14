'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Smartphone,
  CheckCircle2,
  Zap,
  Layout,
  Sparkles,
  MousePointer2,
  MessageCircle,
  TrendingUp,
  CreditCard,
  Info,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { ClientsAndReachSection } from '@/components/sections/ClientsAndReachSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { motion } from 'framer-motion';
import { WHATSAPP_ORDER_NUMBER, MPESA_TILL_NUMBER } from '@/lib/constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SmallBizLandingPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'm interested in a website for my business.`;

  return (
    <div className="bg-background min-h-screen selection:bg-primary/30">
      <EcommerceHeader />

      <main>
        {/* Playful Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-primary/10 neo-shadow mb-6">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">The #1 Website Designer in East Africa</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
                  Kenya's Leading <br/>
                  <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-4">Digital Agency</span> <br/>
                  for Success.
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                  We are the premier choice for world-class web engineering and custom software. Join the 100+ businesses dominating the East African market with Simon Styles.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="h-14 px-10 text-lg rounded-2xl bg-primary hover:bg-primary/90 neo-shadow-hover transition-all font-bold group">
                    <Link href={whatsappLink} target="_blank">
                      Start My Website <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg rounded-2xl border-2 border-primary/10 hover:bg-white neo-shadow-hover transition-all font-bold">
                    <Link href="/projects">See Our Portfolio</Link>
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Client" width={40} height={40} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-600">Dominating the East African Tech Scene</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative block"
              >
                <div className="relative aspect-[4/3] w-full max-w-[550px] mx-auto group">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                  <div className="relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden border-4 border-white neo-shadow">
                    <Image 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                      alt="Leading Digital Agency Kenya" 
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Floating elements hidden on mobile */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-10 -left-10 glass-card p-4 rounded-2xl neo-shadow hidden lg:block"
                    >
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute bottom-10 -right-10 glass-card p-4 rounded-2xl neo-shadow flex items-center gap-3 hidden lg:flex"
                    >
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold">Project Handover Complete!</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* The "Why Us" Grid */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-black mb-4">Why the Region's Leaders <br/> <span className="text-primary italic">Choose Simon Styles.</span></motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg max-w-xl mx-auto">We provide the technical backbone for the fastest-growing enterprises in East Africa.</motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Regional Reach",
                  desc: "Providing local expertise with global standards across Kenya, Uganda, Tanzania, and Rwanda.",
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: CreditCard,
                  title: "M-Pesa Integrated",
                  desc: "We are Daraja API specialists, providing your customers with seamless local payment solutions.",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: Zap,
                  title: "Award-Winning UX",
                  desc: "We build the most intuitive and visually stunning interfaces in the East African market.",
                  color: "bg-yellow-100 text-yellow-600"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white border-2 border-gray-50 neo-shadow-hover transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing Packages */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Leading Solutions. <br/><span className="text-primary">Transparent Pricing.</span></h2>
              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-xs uppercase tracking-widest mt-2">
                  <Info className="w-4 h-4" /> 50% Deposit to Start, Balance on Handover
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-black text-[10px] uppercase tracking-widest">
                  <AlertTriangle className="w-3 h-3" /> Consult first: Don't pay before design confirmation
                </div>
              </div>
              <p className="text-muted-foreground mt-6">Premium quality tailored for the African business landscape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Startup Power",
                  price: "20,000",
                  features: ["5 Custom Pages", "Mobile Responsive", "Free Domain (1 Year)", "Free Hosting (1 Year)", "WhatsApp Button", "Basic SEO"],
                  cta: "Inquire Now",
                  popular: false
                },
                {
                  title: "Enterprise Elite",
                  price: "60,000",
                  features: ["Unlimited Pages", "Product Gallery", "M-Pesa Integration", "Blog Section", "Google Maps Setup"],
                  cta: "Consult Expert",
                  popular: true
                },
                {
                  title: "Global Custom",
                  price: "120,000+",
                  features: ["Custom Software", "Inventory Mgmt", "Client Portals", "Advanced APIs", "Maintenance Support"],
                  cta: "Custom Quote",
                  popular: false
                }
              ].map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-10 rounded-[2.5rem] bg-white border-2 transition-all ${pkg.popular ? 'border-primary neo-shadow' : 'border-gray-100'}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-2xl font-black mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-sm font-bold text-gray-400 uppercase">KES</span>
                    <span className="text-4xl font-black text-primary">{pkg.price}</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant={pkg.popular ? 'default' : 'outline'} className="w-full rounded-2xl font-bold h-14">
                    <Link href={whatsappLink} target="_blank">{pkg.cta}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <TeamSection />

        <ClientsAndReachSection />

        {/* Final CTA */}
        <section className="py-24">
          <Container>
            <div className="p-12 md:p-20 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden neo-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to lead your industry?</h2>
                <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto">Work with the leading website designer in East Africa. Consult with us today to find your perfect fit.</p>
                <div className="flex flex-col items-center gap-6">
                  <Button asChild size="lg" variant="secondary" className="h-16 px-12 text-xl rounded-2xl bg-white text-primary hover:bg-gray-100 font-black neo-shadow transition-all">
                    <Link href={whatsappLink} target="_blank">Chat with East Africa's Best</Link>
                  </Button>
                  <div className="space-y-2">
                    <p className="text-sm font-black uppercase tracking-widest text-white/60">Pay securely via M-Pesa Till: {MPESA_TILL_NUMBER}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Confirm Design & Package via WhatsApp before paying</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
