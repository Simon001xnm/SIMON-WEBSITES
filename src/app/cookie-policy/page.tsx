'use client';

import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { Cookie, Settings, Info, Zap } from 'lucide-react';

export default function CookiePolicyPage() {
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
                <Cookie className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Web Technologies</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight mb-6">
                Cookie <span className="text-primary italic">Policy.</span>
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
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">What are Cookies?</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Cookies are small text files stored on your device when you visit our site. They help us remember your preferences, keep you logged in, and understand how you interact with our platform to improve your experience.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">Essential Cookies</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    We use essential cookies for core functionality such as user authentication and security. These are necessary for the website to function correctly and cannot be switched off in our systems.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 m-0">Managing Preferences</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    You can control and manage cookies through your browser settings. However, please note that removing or blocking cookies can impact your user experience and parts of this website may no longer be fully accessible.
                  </p>
                </section>

                <div className="pt-12 border-t border-gray-100 text-center">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Engineered for transparency and user control.
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
