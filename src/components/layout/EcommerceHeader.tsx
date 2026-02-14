'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronDown,
  User,
  Menu,
  PhoneCall,
  Sparkles,
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
import { motion } from 'framer-motion';

export function EcommerceHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();
  
  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const getInitials = (name: string | null | undefined) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'S';
  }

  return (
    <div className="sticky top-0 z-50 w-full shadow-md">
      <div className="bg-primary text-primary-foreground py-2.5 px-4 flex justify-center items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">
        <Sparkles className="w-3 h-3 mr-2 animate-pulse" />
        <p>Leading Website Designer in Kenya & East Africa • Engineered in Nairobi</p>
      </div>
      <header className="bg-white/80 backdrop-blur-2xl py-5 px-4 border-b">
        <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                <Image 
                    src="/logo.jpg"
                    alt="Simon Styles Logo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-3xl font-black text-gray-900 tracking-tighter hidden sm:inline">
                SIMON<span className="text-primary italic">STYLES</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-12">
            {['Services', 'Portfolio', 'Insights', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Portfolio' ? '/projects' : item === 'Insights' ? '/blog' : `/${item.toLowerCase()}`} 
                className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2 rounded-full hover:bg-primary/5" asChild>
              <Link href="tel:+254758673616">
                <PhoneCall className="h-4 w-4 text-primary" />
                <span className="font-black text-xs uppercase tracking-widest">+254 758 673616</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-full border-2 border-primary/10 px-5 hover:border-primary/30 transition-all">
                  {user ? (
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                        <AvatarFallback className="text-[10px] font-black">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  ) : <User className="h-4 w-4 text-primary" /> }
                  <span className="font-black text-[10px] uppercase tracking-widest">{user ? 'Account' : 'Client Login'}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 mt-4 rounded-[2rem] p-3 border-2 shadow-2xl">
                {user ? (
                  <>
                    <DropdownMenuLabel className="px-4 py-3 font-black text-[10px] uppercase tracking-widest opacity-50">Admin Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-primary/5">Profile Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer font-black px-5 py-4 rounded-2xl hover:bg-destructive/5 mt-1">
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-2xl">
                      <Link href="/login" className="cursor-pointer font-black px-5 py-4 text-sm">Access Portal</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-2xl mt-1">
                      <Link href="/signup" className="cursor-pointer font-black px-5 py-4 text-sm text-primary">New Client? Join Us</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-2xl bg-primary/5 w-12 h-12">
                    <Menu className="h-6 w-6 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 mt-4 p-3 rounded-[2.5rem] border-2 shadow-2xl">
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/" className="font-black uppercase tracking-[0.2em] py-5 px-8 text-[10px]">Home</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/services" className="font-black uppercase tracking-[0.2em] py-5 px-8 text-[10px]">Services</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/projects" className="font-black uppercase tracking-[0.2em] py-5 px-8 text-[10px]">Portfolio</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-2xl mb-1"><Link href="/blog" className="font-black uppercase tracking-[0.2em] py-5 px-8 text-[10px]">Insights</Link></DropdownMenuItem>
                  <DropdownMenuSeparator className="my-3" />
                  {user ? (
                    <>
                      <DropdownMenuItem asChild className="rounded-2xl"><Link href="/account" className="py-5 px-8 font-black uppercase tracking-widest text-[10px]">Dashboard</Link></DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout} className="text-destructive rounded-2xl font-black uppercase tracking-widest text-[10px] mt-1"><span className="py-5 px-8">Sign Out</span></DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild className="rounded-2xl"><Link href="/login" className="py-5 px-8 font-black uppercase tracking-widest text-[10px]">Portal Login</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="rounded-2xl mt-1 bg-primary text-white"><Link href="/signup" className="py-5 px-8 font-black uppercase tracking-widest text-[10px]">Start Now</Link></DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="hidden sm:flex rounded-full bg-primary font-black uppercase tracking-[0.2em] text-[10px] px-8 h-12 shadow-2xl shadow-primary/30" asChild>
                <Link href="/contact">Start Project</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  );
}
