'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronDown,
  User,
  Menu,
  PhoneCall,
  Sparkles,
  Laptop,
  Terminal,
  Zap,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function EcommerceHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
    { name: 'Shop Laptops', href: '/laptops', icon: Laptop },
    { name: 'Hire & Lease', href: '#hire', icon: Zap },
    { name: 'Web Design', href: '#web-design', icon: Sparkles },
    { name: 'Free ERP', href: 'https://royal-tech-computers-limited-7he6.vercel.app/login', icon: Terminal, external: true, accent: true },
  ];

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
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            )}>
              <Image 
                  src="/logo.jpg"
                  alt="Simon Styles Logo"
                  fill
                  className="object-cover"
              />
            </div>
            <span className="font-black text-gray-900 tracking-tighter text-xl md:text-3xl">
              SIMON<span className="text-primary">STYLES</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                target={link.external ? '_blank' : undefined}
                className={cn(
                  "text-[11px] font-black uppercase tracking-widest transition-all hover:text-primary",
                  link.accent ? "text-green-600" : "text-gray-500"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2 rounded-full hover:bg-primary/5 h-10 px-5" asChild>
              <Link href="tel:+254758673616">
                <PhoneCall className="h-4 w-4 text-primary" />
                <span className="font-black text-xs uppercase tracking-widest">+254 758 673616</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-full border-2 border-primary/10 px-5 h-10 hover:border-primary/30 transition-all">
                  {user ? (
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                        <AvatarFallback className="text-[10px] font-black">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  ) : <User className="h-4 w-4 text-primary" /> }
                  <span className="font-black text-[10px] uppercase tracking-widest">{user ? 'Account' : 'Login'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 mt-4 rounded-3xl p-3 border-2 shadow-2xl bg-white">
                {user ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-primary/5 block transition-colors">Profile Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-destructive/5 mt-1 transition-colors">
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-2xl">
                      <Link href="/login" className="cursor-pointer font-black px-5 py-4 text-sm block">Portal Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-2xl mt-1">
                      <Link href="/signup" className="cursor-pointer font-black px-5 py-4 text-sm text-primary block">Create Account</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-xl bg-primary/5 w-10 h-10">
                    <Menu className="h-6 w-6 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[calc(100vw-2rem)] max-w-sm mt-4 p-3 rounded-3xl border-2 shadow-2xl bg-white">
                  {navLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild className="rounded-2xl mb-1">
                      <Link href={link.href} target={link.external ? '_blank' : undefined} className="font-black uppercase tracking-widest py-4 px-6 text-xs block flex items-center gap-3">
                        <link.icon className="w-4 h-4 text-primary" /> {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="my-2" />
                  <DropdownMenuItem asChild className="rounded-2xl"><Link href="/login" className="py-4 px-6 font-black uppercase tracking-widest text-xs block">Login</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
