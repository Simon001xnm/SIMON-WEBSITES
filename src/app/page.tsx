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
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SmallBizLandingPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'm interested in a website for my business.`;
  const paypalPaymentLink = "https://www.paypal.com/ncp/payment/ZG36SA5K8RCEA";

  return (
    <div className="bg-background min-h-screen selection:bg-primary/30 overflow-x-hidden">
      <EcommerceHeader />

      <main className="pt-[100px] md:pt-[140px]">
        {/* Playful Hero Section */}
        <section className="relative pb-16 md:pb-32 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent/5 rounded-full blur-[70px] md:blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-2xl mx-auto lg:mx-0"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-white border-2 border-primary/10 neo-shadow mb-8">
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary animate-pulse" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-600">The #1 Choice for Digital Excellence</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-gray-900 leading-[0.95] mb-8">
                  Engineering <br/>
                  <span className="text-primary italic underline decoration-primary/10 underline-offset-8">Digital Success.</span>
                </h1>
                
                <p className="text-base md:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium opacity-80">
                  We bridge the gap between vision and reality with world-class web engineering and software tailored for the African market.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="h-16 px-10 md:px-12 text-base md:text-lg rounded-2xl bg-primary hover:bg-primary/90 neo-shadow-hover transition-all font-black uppercase tracking-widest group w-full sm:w-auto shadow-2xl shadow-primary/20">
                    <Link href={whatsappLink} target="_blank">
                      Start Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-16 px-10 md:px-12 text-base md:text-lg rounded-2xl border-2 border-gray-100 hover:bg-white neo-shadow-hover transition-all font-black uppercase tracking-widest w-full sm:w-auto shadow-sm">
                    <Link href="/projects">See Portfolio</Link>
                  </Button>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-xl">
                        <Image src={`https://picsum.photos/seed/${i + 20}/100/100`} alt="Client" width={48} height={48} />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-[0.2em]">100+ Brands Dominated Locally</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="relative aspect-square w-full max-w-[600px] mx-auto group">
                  <div className="absolute -inset-4 md:-inset-8 bg-primary/10 rounded-[3rem] md:rounded-[4rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                  <div className="relative h-full w-full bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl shadow-gray-200">
                    <Image 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                      alt="Leading Digital Agency Kenya" 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      priority
                    />
                    {/* Floating Status UI */}
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-12 -left-8 glass-card p-5 rounded-[2rem] shadow-2xl border border-white/40 hidden xl:block"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Growth Metric</p>
                          <p className="text-xl font-black text-gray-900">+340% ROI</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-12 -right-8 glass-card p-5 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-white/40 hidden xl:flex"
                    >
                      <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900">System Online</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* The "Why Us" Grid */}
        <section className="py-24 md:py-40 bg-white">
          <Container>
            <div className="text-center mb-20 md:mb-24">
              <motion.h2 {...fadeIn} className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">Why Leaders <span className="text-primary italic">Choose Styles.</span></motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto font-medium opacity-70">We provide the high-performance technical backbone for the region's fastest-growing enterprises.</motion.p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
            >
              {[
                {
                  icon: Wallet,
                  title: "M-Pesa Engineering",
                  desc: "Daraja API specialists providing seamless local payment automation for your platforms.",
                  color: "bg-emerald-50 text-emerald-600 border-emerald-100"
                },
                {
                  icon: CreditCard,
                  title: "Fintech Precision",
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
                  variants={fadeIn}
                  className={`p-10 rounded-[2.5rem] bg-white border-2 ${item.color} neo-shadow-hover transition-all text-center md:text-left group`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 ${item.color.replace('border', 'bg')} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        <TeamSection />

        <ClientsAndReachSection />

        {/* Pricing Packages */}
        <section className="py-24 md:py-40 bg-gray-50 border-y border-gray-100">
          <Container>
            <div className="text-center mb-20">
              <motion.h2 {...fadeIn} className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Elite Solutions. <br/><span className="text-primary">Transparent Pricing.</span></motion.h2>
              <motion.div {...fadeIn} className="flex flex-col items-center gap-4 px-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[10px] md:text-xs uppercase tracking-widest">
                  <Info className="w-4 h-4" /> 50% Deposit to Initiate • Balance on Delivery
                </div>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-black text-[10px] uppercase tracking-widest">
                  <AlertTriangle className="w-4 h-4" /> Consult with an Engineer before paying
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  title: "STK Push Pro",
                  price: "15,000",
                  features: ["M-Pesa STK Prompt", "Callback Integration", "Email Alerts", "Sandbox to Live Setup", "1-Year Support", "3-Day Delivery"],
                  cta: "Deploy Now",
                  popular: false
                },
                {
                  title: "Enterprise Web",
                  price: "60,000",
                  features: ["Unlimited Pages", "M-Pesa STK Push", "Product Gallery", "Blog System", "Google Maps Setup", "Free Hosting/Domain"],
                  cta: "Consult Architect",
                  popular: true
                },
                {
                  title: "Fintech Custom",
                  price: "120,000+",
                  features: ["Custom B2C Payouts", "Full Daraja Suite", "Inventory Mgmt", "Advanced APIs", "Priority Maintenance", "Bank-Level Security"],
                  cta: "Get Custom Quote",
                  popular: false
                }
              ].map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={`relative p-10 md:p-12 rounded-[3rem] bg-white border-2 transition-all ${pkg.popular ? 'border-primary neo-shadow ring-4 ring-primary/5' : 'border-gray-100 shadow-sm'}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                      Industry Leader
                    </div>
                  )}
                  <h3 className="text-2xl font-black mb-3 text-gray-900">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-sm font-black text-gray-400 uppercase">KES</span>
                    <span className="text-4xl md:text-5xl font-black text-primary">{pkg.price}</span>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant={pkg.popular ? 'default' : 'outline'} className="w-full rounded-2xl font-black h-16 shadow-lg transition-all uppercase tracking-widest text-xs">
                    <Link href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(`Hello! I'm interested in the "${pkg.title}" package.`)}`} target="_blank">{pkg.cta}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Investor Section */}
        <section id="investor" className="py-24 md:py-40 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div {...fadeIn} className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Equity Opportunity</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
                  Join the <br/>
                  <span className="text-primary italic">Elite Board.</span>
                </h2>
                <p className="text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed font-medium opacity-80">
                  Be part of East Africa's most ambitious tech growth story. Secure direct equity shares through our encrypted investor portal.
                </p>
                <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                  {[
                    "Direct Ownership in Simon Styles Technology",
                    "Quarterly Dividend Payouts",
                    "Voting Rights on Strategic Innovation",
                    "Early Access to High-Yield IP"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4 text-left">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm md:text-base font-black text-gray-300 uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-2xl relative text-center border border-white/10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
                
                <div className="mb-12 relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tighter uppercase">Purchase Shares</h3>
                  <p className="text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-[0.3em]">Institutional Grade Investment</p>
                </div>
                
                {/* Mode 1: PayPal */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[160px] border-2 border-dashed border-gray-100 rounded-3xl p-8 mb-8 hover:border-primary/30 transition-colors">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Mode 1: Global Settlement via PayPal</p>
                  <Button asChild size="lg" className="w-full h-20 text-lg md:text-xl rounded-2xl bg-[#0070ba] hover:bg-[#003087] text-white font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.02]">
                    <Link href={paypalPaymentLink} target="_blank">
                      Buy via PayPal <ExternalLink className="ml-3 w-6 h-6" />
                    </Link>
                  </Button>
                </div>

                {/* Mode 2: M-Pesa */}
                <div className="relative z-10 p-8 border-2 border-dashed border-emerald-100 rounded-3xl bg-emerald-50/50 hover:border-emerald-300 transition-colors">
                  <p className="text-center text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-6">Mode 2: Local Settlement via M-Pesa</p>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-5">
                      <div className="p-3 bg-emerald-600 rounded-2xl text-white shadow-xl shadow-emerald-200">
                        <Smartphone className="w-7 h-7" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Buy Goods Till</p>
                        <p className="text-2xl md:text-4xl font-black text-emerald-700 leading-none">{MPESA_TILL_NUMBER}</p>
                      </div>
                    </div>
                    <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mt-2">Verified Recipient: {MPESA_TILL_NAME}</p>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col items-center gap-5 relative z-10">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Shield className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">AES-256 Encrypted Gateway</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed max-w-xs mx-auto font-medium">
                    Investments in equity carry risk. Please review our Shareholder Agreement carefully before proceeding.
                  </p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-40">
          <Container>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 md:p-24 rounded-[3.5rem] md:rounded-[5rem] bg-primary text-white text-center relative overflow-hidden neo-shadow"
            >
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4"></div>
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView">
                <motion.h2 variants={fadeIn} className="text-4xl md:text-8xl font-black mb-8 md:mb-12 leading-[0.95] tracking-tighter">Ready to outpace <br/>the competition?</motion.h2>
                <motion.p variants={fadeIn} className="text-lg md:text-2xl mb-12 md:mb-16 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">Partner with the region's leading website designer and software engineer. Let's build your dominance today.</motion.p>
                <motion.div variants={fadeIn} className="flex flex-col items-center gap-8">
                  <Button asChild size="lg" variant="secondary" className="h-20 px-12 md:px-16 text-lg md:text-2xl rounded-[2rem] bg-white text-primary hover:bg-gray-50 font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 w-full sm:w-auto">
                    <Link href={whatsappLink} target="_blank">Chat with East Africa's Best</Link>
                  </Button>
                  <div className="space-y-3">
                    <p className="text-[10px] md:text-base font-black uppercase tracking-[0.3em] text-white/80">Pay securely via M-Pesa Till: {MPESA_TILL_NUMBER}</p>
                    <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-white/40">Technical Blueprint must be confirmed via WhatsApp before payment</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
