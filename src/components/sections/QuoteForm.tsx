
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  source: z.string().min(1, "Please select an option"),
  budget: z.string().min(1, "Please select an option"),
  engagementModel: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const { toast } = useToast();
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      source: '',
      budget: '',
      engagementModel: '',
      message: '',
    },
  });

  const onSubmit = (values: QuoteFormValues) => {
    // Construct a professional, readable message for WhatsApp
    const text = `🚀 *New Project Inquiry from Simon Styles Website* 🚀\n\n` +
      `👤 *Name:* ${values.fullName}\n` +
      `📧 *Email:* ${values.email}\n` +
      `📞 *Phone:* +254 ${values.phone}\n` +
      `🔍 *Found us via:* ${values.source}\n` +
      `💰 *Estimated Budget:* ${values.budget}\n` +
      `🤝 *Engagement Model:* ${values.engagementModel}\n\n` +
      `📝 *Project Details:* \n${values.message}`;

    const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(text)}`;
    
    toast({
      title: "Request Prepared",
      description: "Redirecting you to WhatsApp to finalize your quote request...",
    });

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <Card className="w-full max-w-md mx-auto border-none shadow-2xl rounded-[2.5rem] bg-white p-2">
      <CardHeader className="text-center pt-8 pb-4">
        <CardTitle className="text-[#3b32e0] text-xl font-black uppercase tracking-widest">Request a Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Full Name*" {...field} className="h-12 rounded-xl bg-gray-50 border-gray-100 focus-visible:ring-primary/20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email*" {...field} className="h-12 rounded-xl bg-gray-50 border-gray-100 focus-visible:ring-primary/20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2">
                       <div className="flex items-center gap-2 px-3 bg-gray-50 border border-gray-100 rounded-xl">
                         <span className="text-sm font-bold">🇰🇪 +254</span>
                       </div>
                       <Input placeholder="712345678*" {...field} className="h-12 rounded-xl bg-gray-50 border-gray-100 focus-visible:ring-primary/20" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-gray-100 text-gray-500">
                        <SelectValue placeholder="How did you hear about us?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Client Referral</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-gray-100 text-gray-500">
                        <SelectValue placeholder="What is your budget?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="below-50k">Below KSh 50,000</SelectItem>
                      <SelectItem value="50k-150k">KSh 50,000 - 150,000</SelectItem>
                      <SelectItem value="above-150k">Above KSh 150,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="engagementModel"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-gray-100 text-gray-500">
                        <SelectValue placeholder="Engagement model" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="fixed">Fixed Price Project</SelectItem>
                      <SelectItem value="lease">Subscription / Lease</SelectItem>
                      <SelectItem value="consultancy">Tech Consultancy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project goals..." 
                      className="min-h-[100px] rounded-2xl bg-gray-50 border-gray-100 resize-none focus-visible:ring-primary/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-14 rounded-2xl bg-[#3b32e0] hover:bg-[#3229c7] text-white font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-blue-200 transition-all active:scale-[0.98]">
              Submit Request
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
