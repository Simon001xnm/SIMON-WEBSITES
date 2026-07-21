'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  Menu,
  PhoneCall,
  Sparkles,
  Laptop,
  Terminal,
  Zap,
  Package,
  Share2,
  Mail,
  ChevronDown,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

export function EcommerceHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const getInitials = (name: string | null | undefined) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'S';
  }

  const navLinks = [
    { name: 'Services', href: '/services', icon: Sparkles },
    { name: 'Laptop Hire', href: '/laptop-hire', icon: Laptop },
    { name: 'Social Media', href: '/social-media-management', icon: Share2 },
    { name: 'Portfolio', href: '/projects', icon: Package },
    { name: 'Blog', href: '/blog', icon: Terminal },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const whatsappQuoteLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'd like to get a free quote for my project.`;

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <header className="bg-white py-5 border-b border-transparent">
          <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gray-50" />
              <span className="font-black text-primary tracking-tighter text-lg md:text-2xl uppercase">
                SIMON STYLES
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border bg-gray-50" />
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <header className={cn(
        "transition-all duration-500",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl py-3 shadow-xl border-b border-gray-100" 
          : "bg-white py-5"
      )}>
        <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className={cn(
              "relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-500 bg-gray-50",
              isScrolled ? "w-8 h-8" : "w-10 h-10"
            )}>
              <Image 
                  src="/logo.jpg"
                  alt="SIMON STYLES Logo"
                  fill
                  className="object-cover"
              />
            </div>
            <span className="font-black text-primary tracking-tighter text-lg md:text-2xl uppercase">
              SIMON STYLES
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="group flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex h-11 px-6 rounded-xl bg-[#3b32e0] hover:bg-[#3229c7] text-white font-black uppercase tracking-widest text-[9px] shadow-xl shadow-blue-100">
              <a href={whatsappQuoteLink} target="_blank" rel="noopener noreferrer">
                Get a Free Quote
              </a>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 border">
                  {user ? (
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                        <AvatarFallback className="text-[10px] font-black">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  ) : <User className="h-5 w-5 text-gray-400" /> }
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 mt-4 rounded-3xl p-3 border-2 shadow-2xl bg-white">
                {user ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-primary/5 block transition-colors text-primary">Profile Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-destructive/5 mt-1 transition-colors">
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-2xl">
                      <Link href="/login" className="cursor-pointer font-black px-5 py-4 text-sm block text-primary">Portal Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-2xl mt-1">
                      <Link href="/signup" className="cursor-pointer font-black px-5 py-4 text-sm text-accent block">Create Account</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="xl:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-xl bg-gray-50 w-10 h-10">
                    <Menu className="h-6 w-6 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[calc(100vw-2rem)] max-w-sm mt-4 p-3 rounded-3xl border-2 shadow-2xl bg-white">
                  {navLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild className="rounded-2xl mb-1">
                      <Link href={link.href} className="font-black uppercase tracking-widest py-4 px-6 text-xs block flex items-center gap-3 text-primary">
                        <link.icon className="w-4 h-4 text-accent" /> {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild className="rounded-2xl mt-2 p-0">
                    <a href={whatsappQuoteLink} target="_blank" rel="noopener noreferrer" className="w-full bg-[#3b32e0] text-white font-black uppercase tracking-widest py-4 text-center rounded-2xl block text-[10px]">
                      Get a Free Quote
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
