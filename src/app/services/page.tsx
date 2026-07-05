import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicesPageContent } from '@/components/sections/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Elite Web Engineering & Software Architecture Services',
  description: 'Custom Next.js web development, M-Pesa Daraja API integration, and bespoke ERP/CRM system architecture engineered for business growth in Kenya.',
  keywords: ['web development services nairobi', 'mpesa api integration kenya', 'software architecture africa', 'custom erp systems nairobi', 'next.js developers kenya'],
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
