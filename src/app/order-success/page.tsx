'use client';

import React, { useEffect } from 'react';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import Script from 'next/script';

export default function OrderSuccessPage() {
  const { user } = useAuth();

  useEffect(() => {
    // Generate a random order ID for tracking if not provided
    const orderId = `SS-${Math.floor(Math.random() * 1000000)}`;
    const email = user?.email || "customer@example.com";
    
    // Calculate delivery date (today + 7 days) in YYYY-MM-DD
    const date = new Date();
    date.setDate(date.getDate() + 7);
    const estimatedDeliveryDate = date.toISOString().split('T')[0];

    // Define the render function globally for the Google script
    (window as any).renderOptIn = function() {
      if ((window as any).gapi) {
        (window as any).gapi.load('surveyoptin', function() {
          (window as any).gapi.surveyoptin.render({
            "merchant_id": 5532241116,
            "order_id": orderId,
            "email": email,
            "delivery_country": "KE",
            "estimated_delivery_date": estimatedDeliveryDate,
          });
        });
      }
    };

    // If script is already loaded, trigger immediately
    if ((window as any).gapi && (window as any).renderOptIn) {
        (window as any).renderOptIn();
    }
  }, [user]);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <EcommerceHeader />
      
      {/* Google Opt-in Script */}
      <Script 
        src="https://apis.google.com/js/platform.js?onload=renderOptIn" 
        strategy="afterInteractive"
      />

      <main className="py-20 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mb-6">
              Order <span className="text-primary italic">Confirmed.</span>
            </h1>
            
            <Card className="border-2 border-gray-100 shadow-2xl rounded-[2.5rem] p-8 md:p-12">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-black text-gray-900">Thank you for choosing the best.</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  Your project has been successfully queued. Our lead engineer will contact you shortly to finalize the next steps of your digital transformation.
                </p>
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 inline-flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">A Google Review prompt will appear shortly</span>
                </div>
              </CardContent>
            </Card>
            
            <p className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Simon Styles Technology • Nairobi, Kenya
            </p>
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
