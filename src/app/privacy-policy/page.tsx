'use client';

import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
                <ShieldCheck className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Data Protection</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight mb-6">
                Privacy <span className="text-primary italic">Policy.</span>
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
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">Information We Collect</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    At Simon Styles Technology, we respect your privacy. We collect information that you provide directly to us when you fill out forms, request consultations, or purchase shares. This may include your name, email address, phone number, and any project-specific details you share.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">How We Use Your Data</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Your data is used exclusively to provide our services, process your payments, and communicate with you about your projects. We do not sell or lease your personal information to third parties. We use industry-standard encryption to protect your sensitive data during transmission and storage.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">Compliance with Kenyan Law</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    We operate in full compliance with the Data Protection Act of Kenya. You have the right to access, correct, or request the deletion of your personal data at any time by contacting our lead engineer.
                  </p>
                </section>

                <div className="pt-12 border-t border-gray-100 text-center">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Questions about our privacy practices? <br/>
                    <a href="mailto:simonwanjiru224@gmail.com" className="text-primary hover:underline">simonwanjiru224@gmail.com</a>
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
