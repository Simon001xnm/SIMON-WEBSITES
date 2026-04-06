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
  Terminal,
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
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export function EcommerceHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Announcement Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-950 text-white py-2 px-4 flex justify-center items-center text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-center overflow-hidden border-b border-white/10"
          >
            <Sparkles className="w-3 h-3 mr-2 text-primary animate-pulse shrink-0" />
            <p className="truncate">Kenya's Elite Digital Architects • Powered by Innovation</p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={cn(
        "transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl py-2 md:py-3 shadow-2xl border-b border-gray-100" 
          : "bg-white py-4 md:py-6 border-b border-transparent"
      )}>
        <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto px-4 md:px-6">
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className={cn(
                "relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 bg-gray-50",
                isScrolled ? "w-8 h-8 md:w-10 md:h-10" : "w-10 h-10 md:w-14 md:h-14"
              )}>
                <Image 
                    src="/logo.jpg"
                    alt="Simon Styles Logo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <span className={cn(
                "font-black text-gray-900 tracking-tighter hidden sm:inline transition-all duration-500",
                isScrolled ? "text-lg md:text-2xl" : "text-xl md:text-4xl"
              )}>
                SIMON<span className="text-primary italic">STYLES</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {['Free ERP', 'Laptops', 'Services', 'Portfolio', 'Insights', 'Invest', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={
                  item === 'Free ERP' ? 'https://royal-tech-computers-limited-7he6.vercel.app/login' :
                  item === 'Portfolio' ? '/projects' : 
                  item === 'Insights' ? '/blog' : 
                  item === 'Invest' ? '/#investor' : 
                  `/${item.toLowerCase().replace(' ', '-')}`
                } 
                target={item === 'Free ERP' ? '_blank' : undefined}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group py-2",
                  item === 'Free ERP' ? "text-green-600 hover:text-green-700" : "text-gray-500 hover:text-primary"
                )}
              >
                {item}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  item === 'Free ERP' ? "bg-green-500" : "bg-primary"
                )}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2 rounded-full hover:bg-primary/5 h-9 md:h-11 px-3 md:px-5" asChild>
              <Link href="tel:+254758673616">
                <PhoneCall className="h-3.5 w-3.5 text-primary" />
                <span className="font-black text-[9px] md:text-xs uppercase tracking-widest">+254 758 673616</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-full border-2 border-primary/10 px-3 md:px-6 h-9 md:h-11 hover:border-primary/30 transition-all shadow-sm">
                  {user ? (
                    <Avatar className="h-5 w-5 md:h-6 md:w-6">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                        <AvatarFallback className="text-[10px] font-black">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  ) : <User className="h-3.5 w-3.5 text-primary" /> }
                  <span className="font-black text-[9px] md:text-[10px] uppercase tracking-widest">{user ? 'Account' : 'Client Access'}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 mt-4 rounded-[2rem] p-3 border-2 shadow-2xl bg-white/95 backdrop-blur-lg">
                {user ? (
                  <>
                    <DropdownMenuLabel className="px-4 py-3 font-black text-[10px] uppercase tracking-widest opacity-50">Authorized Control</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-primary/5 block transition-colors">Profile Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-destructive/5 mt-1 transition-colors">
                      Terminate Session
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-2xl">
                      <Link href="/login" className="cursor-pointer font-black px-5 py-4 text-sm block transition-colors">Portal Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-2xl mt-1">
                      <Link href="/signup" className="cursor-pointer font-black px-5 py-4 text-sm text-primary block transition-colors">Register Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="rounded-2xl mt-1 bg-primary/5">
                      <Link href="/#investor" className="cursor-pointer font-black px-5 py-4 text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                        <TrendingUp className="w-3 h-3" /> Investor Portal
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
                <DropdownMenuContent align="end" className="w-[calc(100vw-2rem)] max-w-sm mt-4 p-3 rounded-[2rem] border-2 shadow-2xl bg-white/95 backdrop-blur-lg overflow-y-auto max-h-[80vh]">
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Home</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1 bg-green-50"><Link href="https://royal-tech-computers-limited-7he6.vercel.app/login" target="_blank" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block text-green-600 flex items-center gap-2"><Terminal className="w-3 h-3" /> Free ERP System</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/laptops" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block text-primary flex items-center gap-2"><Laptop className="w-3 h-3" /> Shop Laptops</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/services" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Services</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/projects" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block">Portfolio</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/#investor" className="font-black uppercase tracking-[0.2em] py-4 px-6 text-[10px] block text-primary flex items-center gap-2"><TrendingUp className="w-3 h-3" /> Investment</Link></DropdownMenuItem>
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
                      <DropdownMenuItem asChild className="rounded-2xl mt-1 bg-primary text-white"><Link href="/signup" className="py-4 px-6 font-black uppercase tracking-widest text-[10px] block">Join Us</Link></DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="hidden sm:block"
            >
              <Button className={cn(
                "rounded-full bg-primary font-black uppercase tracking-[0.2em] text-[10px] px-6 md:px-8 shadow-2xl shadow-primary/30 transition-all duration-500",
                isScrolled ? "h-9 md:h-11" : "h-10 md:h-13"
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
