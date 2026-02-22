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
  Wallet,
  Shield,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { ClientsAndReachSection } from '@/components/sections/ClientsAndReachSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { motion } from 'framer-motion';
import { WHATSAPP_ORDER_NUMBER, MPESA_TILL_NUMBER, MPESA_TILL_NAME } from '@/lib/constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SmallBizLandingPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'm interested in a website for my business.`;
  const paypalPaymentLink = "https://www.paypal.com/ncp/payment/ZG36SA5K8RCEA";

  return (
    <div className="bg-background min-h-screen selection:bg-primary/30 overflow-x-hidden">
      <EcommerceHeader />

      <main>
        {/* Playful Hero Section */}
        <section className="relative pt-8 pb-16 md:pt-24 md:pb-32 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-accent/5 rounded-full blur-[70px] md:blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl mx-auto lg:mx-0"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border-2 border-primary/10 neo-shadow mb-6">
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-600">The #1 Website Designer in East Africa</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
                  Kenya's Leading <br/>
                  <span className="text-primary underline decoration-primary/20 decoration-4 md:decoration-8 underline-offset-4">Digital Agency</span> <br/>
                  for Success.
                </h1>
                
                <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                  We are the premier choice for world-class web engineering and custom software. Join the 100+ businesses dominating the East African market with Simon Styles.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="h-14 px-8 md:px-10 text-base md:text-lg rounded-2xl bg-primary hover:bg-primary/90 neo-shadow-hover transition-all font-bold group w-full sm:w-auto">
                    <Link href={whatsappLink} target="_blank">
                      Start My Website <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 md:px-10 text-base md:text-lg rounded-2xl border-2 border-primary/10 hover:bg-white neo-shadow-hover transition-all font-bold w-full sm:w-auto">
                    <Link href="/projects">See Our Portfolio</Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                  <div className="flex -space-x-2.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                        <Image src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Client" width={40} height={40} />
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] md:text-sm font-bold text-gray-500 uppercase tracking-wide">Dominating the East African Tech Scene</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="relative aspect-[4/3] w-full max-w-[550px] mx-auto group">
                  <div className="absolute -inset-2 md:-inset-4 bg-primary/20 rounded-[2rem] md:rounded-[3rem] blur-xl md:blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                  <div className="relative h-full w-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 md:border-4 border-white neo-shadow">
                    <Image 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                      alt="Leading Digital Agency Kenya" 
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Floating elements hidden on small screens */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-10 -left-10 glass-card p-4 rounded-2xl neo-shadow hidden xl:block"
                    >
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute bottom-10 -right-10 glass-card p-4 rounded-2xl neo-shadow flex items-center gap-3 hidden xl:flex"
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
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-black mb-4 leading-tight">Why the Region's Leaders <br/> <span className="text-primary italic">Choose Simon Styles.</span></motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto font-medium">We provide the technical backbone for the fastest-growing enterprises in East Africa.</motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Wallet,
                  title: "M-Pesa Engineering",
                  desc: "We are official Daraja API specialists, providing your customers with seamless local payment automation.",
                  color: "bg-emerald-50 text-emerald-600 border-emerald-100"
                },
                {
                  icon: CreditCard,
                  title: "Fintech Integration",
                  desc: "Real-time STK Push, C2B Paybill synchronization, and automated B2C payout systems built for scale.",
                  color: "bg-blue-50 text-blue-600 border-blue-100"
                },
                {
                  icon: Zap,
                  title: "Award-Winning UX",
                  desc: "We build the most intuitive and visually stunning interfaces in the East African market.",
                  color: "bg-yellow-50 text-yellow-600 border-yellow-100"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-[2rem] bg-white border-2 ${item.color} neo-shadow-hover transition-all text-center md:text-left`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 ${item.color.replace('border', 'bg')}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Leading Solutions. <br/><span className="text-primary">Transparent Pricing.</span></h2>
              <div className="flex flex-col items-center gap-3 px-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest">
                  <Info className="w-3.5 h-3.5 md:w-4 md:h-4" /> 50% Deposit to Start, Balance on Handover
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-black text-[9px] md:text-[10px] uppercase tracking-widest">
                  <AlertTriangle className="w-3 h-3" /> Consult first: Don't pay before design confirmation
                </div>
              </div>
              <p className="text-muted-foreground mt-6 font-medium text-sm md:text-base">Premium quality tailored for the African business landscape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "STK Push Pro",
                  price: "15,000",
                  features: ["M-Pesa STK Prompt", "Callback Integration", "Email Alerts", "Sandbox to Live Setup", "1-Year Support", "Fast 3-Day Delivery"],
                  cta: "Get Started",
                  popular: false
                },
                {
                  title: "Enterprise Web",
                  price: "60,000",
                  features: ["Unlimited Pages", "M-Pesa STK Push", "Product Gallery", "Blog Section", "Google Maps Setup", "Free Domain/Hosting"],
                  cta: "Consult Expert",
                  popular: true
                },
                {
                  title: "Fintech Custom",
                  price: "120,000+",
                  features: ["Custom B2C Payouts", "Full Daraja Suite", "Inventory Mgmt", "Advanced APIs", "Maintenance Support", "Banking-Level Security"],
                  cta: "Custom Quote",
                  popular: false
                }
              ].map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border-2 transition-all ${pkg.popular ? 'border-primary neo-shadow' : 'border-gray-100 shadow-sm'}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-8 md:right-10 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-black mb-2 text-gray-900">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-xs font-bold text-gray-400 uppercase">KES</span>
                    <span className="text-3xl md:text-4xl font-black text-primary">{pkg.price}</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant={pkg.popular ? 'default' : 'outline'} className="w-full rounded-2xl font-bold h-14 shadow-sm">
                    <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(`Hello! I'm interested in the "${pkg.title}" package.`)}`} target="_blank">{pkg.cta}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <TeamSection />

        <ClientsAndReachSection />

        {/* Investor Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...fadeIn} className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Equity Opportunity</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-[1.1]">
                  Invest in the <br/>
                  <span className="text-primary italic">Future of Tech.</span>
                </h2>
                <p className="text-base md:text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                  We are expanding our digital footprint across East Africa. Be part of our growth story by purchasing equity shares directly through our secure investor portal.
                </p>
                <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                  {[
                    "Direct Ownership in Simon Styles Technology",
                    "Quarterly Dividend Opportunities",
                    "Voting Rights on Major Strategic Shifts",
                    "Exclusive Access to Private Tech Launches"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-left">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl relative text-center"
              >
                <div className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Purchase Shares</h3>
                  <p className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-widest">Select your equity package below</p>
                </div>
                
                {/* PayPal Link Button - Mode 1 */}
                <div className="flex flex-col items-center justify-center min-h-[140px] border-2 border-dashed border-gray-100 rounded-2xl md:rounded-3xl p-6 mb-6">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Mode 1: Global Payment via PayPal</p>
                  <Button asChild size="lg" className="w-full h-16 text-base md:text-lg rounded-2xl bg-[#0070ba] hover:bg-[#003087] text-white font-black uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02]">
                    <Link href={paypalPaymentLink} target="_blank">
                      Buy via PayPal <ExternalLink className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* M-Pesa Alternative - Mode 2 */}
                <div className="p-6 border-2 border-dashed border-emerald-100 rounded-2xl md:rounded-3xl bg-emerald-50/50">
                  <p className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4">Mode 2: Local Payment via M-Pesa</p>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-600 rounded-lg text-white">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Buy Goods Till</p>
                        <p className="text-xl md:text-2xl font-black text-emerald-700 leading-none">{MPESA_TILL_NUMBER}</p>
                      </div>
                    </div>
                    <p className="text-[9px] md:text-[10px] font-bold text-emerald-600/60 uppercase tracking-tight mt-1">Till Name: {MPESA_TILL_NAME}</p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Encrypted & Secure Transaction</span>
                  </div>
                  <p className="text-[9px] text-gray-400 leading-relaxed max-w-xs mx-auto">
                    By purchasing shares, you agree to the terms of the Simon Styles Shareholder Agreement. Investments carry risk.
                  </p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-primary text-white text-center relative overflow-hidden neo-shadow">
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">Ready to lead your industry?</h2>
                <p className="text-base md:text-xl mb-10 md:mb-12 opacity-90 max-w-xl mx-auto font-medium">Work with the leading website designer in East Africa. Consult with us today to find your perfect fit.</p>
                <div className="flex flex-col items-center gap-6">
                  <Button asChild size="lg" variant="secondary" className="h-16 px-8 md:px-12 text-base md:text-xl rounded-2xl bg-white text-primary hover:bg-gray-100 font-black neo-shadow-hover transition-all w-full sm:w-auto">
                    <Link href={whatsappLink} target="_blank">Chat with East Africa's Best</Link>
                  </Button>
                  <div className="space-y-2">
                    <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-white/70">Pay securely via M-Pesa Till: {MPESA_TILL_NUMBER}</p>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] text-white/40">Confirm Design & Package via WhatsApp before paying</p>
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
