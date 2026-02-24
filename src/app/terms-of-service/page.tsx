'use client';

import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { Gavel, Scale, Handshake, AlertTriangle } from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-KE', { month: 'long', year: 'numeric', day: 'numeric' });

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16 md:mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <Scale className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Service Agreement</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight mb-6">
                Terms of <span className="text-primary italic">Service.</span>
              </h1>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Last Updated: {lastUpdated}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-gray-100 prose prose-gray max-w-none"
            >
              <div className="space-y-12">
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Handshake className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">Project Terms</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    All projects with Simon Styles Technology require a 50% deposit to initiate work. The remaining 50% is due immediately upon project completion and handover. As per our site-wide policy, we strongly advise consulting with our engineers to confirm your design and package requirements before sending any payment.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Gavel className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">Equity & Investment</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Purchasing equity shares through our investor portal constitutes an agreement to the Simon Styles Shareholder Framework. Investments in technology carry inherent risks, and dividend distributions are subject to company performance and board approval.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">Liability</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    While we provide world-class security and engineering, Simon Styles Technology is not liable for business losses resulting from third-party API downtimes (e.g., Daraja/M-Pesa) or misuse of handed-over systems by the client.
                  </p>
                </section>

                <div className="pt-12 border-t border-gray-100 text-center">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">
                    By using our site and services, you agree to these terms in full.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
