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
  TrendingUp,
  Laptop,
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const getInitials = (name: string | null | undefined) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'S';
  }

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Announcement Bar - Hides on scroll for a more compact sticky nav */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-primary text-primary-foreground py-2 px-4 flex justify-center items-center text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-center overflow-hidden"
          >
            <Sparkles className="w-3 h-3 mr-2 animate-pulse shrink-0" />
            <p className="truncate">Leading Website Designer in East Africa • Engineered in Nairobi</p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={cn(
        "transition-all duration-500 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl py-2 md:py-3 shadow-xl border-gray-100" 
          : "bg-white py-3 md:py-5 border-transparent"
      )}>
        <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto px-4 md:px-6">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className={cn(
                "relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-primary/20 transition-all duration-500",
                isScrolled ? "w-8 h-8 md:w-10 md:h-10" : "w-10 h-10 md:w-12 md:h-12"
              )}>
                <Image 
                    src="/logo.jpg"
                    alt="Simon Styles Logo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className={cn(
                "font-black text-gray-900 tracking-tighter hidden sm:inline transition-all duration-500",
                isScrolled ? "text-lg md:text-2xl" : "text-xl md:text-3xl"
              )}>
                SIMON<span className="text-primary italic">STYLES</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {['Laptops', 'Services', 'Portfolio', 'Insights', 'Invest', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Portfolio' ? '/projects' : item === 'Insights' ? '/blog' : item === 'Invest' ? '/#investor' : `/${item.toLowerCase()}`} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2 rounded-full hover:bg-primary/5 h-9 md:h-10 px-3 md:px-4" asChild>
              <Link href="tel:+254758673616">
                <PhoneCall className="h-3.5 w-3.5 text-primary" />
                <span className="font-black text-[9px] md:text-xs uppercase tracking-widest">+254 758 673616</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-full border-2 border-primary/10 px-3 md:px-5 h-9 md:h-10 hover:border-primary/30 transition-all">
                  {user ? (
                    <Avatar className="h-5 w-5 md:h-6 md:w-6">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                        <AvatarFallback className="text-[10px] font-black">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  ) : <User className="h-3.5 w-3.5 text-primary" /> }
                  <span className="font-black text-[9px] md:text-[10px] uppercase tracking-widest">{user ? 'Account' : 'Client Login'}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 mt-4 rounded-[1.5rem] md:rounded-[2rem] p-3 border-2 shadow-2xl">
                {user ? (
                  <>
                    <DropdownMenuLabel className="px-4 py-3 font-black text-[10px] uppercase tracking-widest opacity-50">Admin Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-primary/5 block">Profile Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-destructive/5 mt-1">
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-xl md:rounded-2xl">
                      <Link href="/login" className="cursor-pointer font-black px-5 py-4 text-sm block">Access Portal</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-xl md:rounded-2xl mt-1">
                      <Link href="/signup" className="cursor-pointer font-black px-5 py-4 text-sm text-primary block">New Client? Join Us</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="rounded-xl md:rounded-2xl mt-1 bg-primary/5">
                      <Link href="/#investor" className="cursor-pointer font-black px-5 py-4 text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                        <TrendingUp className="w-3 h-3" /> Equity Portal
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-xl bg-primary/5 w-10 h-10">
                    <Menu className="h-5 w-5 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[calc(100vw-2rem)] max-w-sm mt-4 p-3 rounded-[2rem] border-2 shadow-2xl overflow-y-auto max-h-[80vh]">
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Home</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/laptops" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block text-primary flex items-center gap-2"><Laptop className="w-3 h-3" /> Buy Laptops</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/services" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Services</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/projects" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Portfolio</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/#investor" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block text-primary flex items-center gap-2"><TrendingUp className="w-3 h-3" /> Invest in Us</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/blog" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Insights</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/contact" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Contact</Link></DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  {user ? (
                    <>
                      <DropdownMenuItem asChild className="rounded-2xl"><Link href="/account" className="py-4 px-6 font-black uppercase tracking-widest text-[10px] block">Dashboard</Link></DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout} className="text-destructive rounded-2xl font-black uppercase tracking-widest text-[10px] mt-1"><span className="py-4 px-6 block">Sign Out</span></DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild className="rounded-2xl"><Link href="/login" className="py-4 px-6 font-black uppercase tracking-widest text-[10px] block">Portal Login</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="rounded-2xl mt-1 bg-primary text-white"><Link href="/signup" className="py-4 px-6 font-black uppercase tracking-widest text-[10px] block">Start Now</Link></DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
              <Button className={cn(
                "rounded-full bg-primary font-black uppercase tracking-[0.2em] text-[10px] px-6 md:px-8 shadow-xl shadow-primary/30 transition-all duration-500",
                isScrolled ? "h-9 md:h-10" : "h-10 md:h-12"
              )} asChild>
                <Link href="/contact">Start Project</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  );
}
