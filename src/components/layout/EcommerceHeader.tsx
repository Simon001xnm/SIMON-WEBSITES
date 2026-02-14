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
    <>
      <div className="bg-primary text-primary-foreground py-2.5 px-4 flex justify-center items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
        <p>Expert Software Engineering & Digital Strategy • Based in Nairobi</p>
      </div>
      <header className="bg-white/90 backdrop-blur-xl py-4 px-4 shadow-sm border-b sticky top-0 z-50">
        <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <Image 
                  src="/logo.jpg"
                  alt="Simon Styles Logo"
                  fill
                  className="object-cover"
              />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tighter hidden sm:inline">
              SIMON<span className="text-primary">STYLES</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/services" className="text-sm font-black uppercase tracking-widest text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="/projects" className="text-sm font-black uppercase tracking-widest text-gray-600 hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/blog" className="text-sm font-black uppercase tracking-widest text-gray-600 hover:text-primary transition-colors">Insights</Link>
            <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2 rounded-full" asChild>
              <Link href="tel:+254758673616">
                <PhoneCall className="h-4 w-4 text-primary" />
                <span className="font-bold">+254 758 673616</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-full border-2 border-primary/20 px-4">
                  {user ? (
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                        <AvatarFallback className="text-[10px] font-bold">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  ) : <User className="h-4 w-4 text-primary" /> }
                  <span className="font-bold text-xs uppercase tracking-widest">{user ? 'Account' : 'Login'}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 rounded-2xl p-2 border-2">
                {user ? (
                  <>
                    <DropdownMenuLabel className="px-4 py-2 font-black text-xs uppercase tracking-widest">Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer font-bold px-4 py-3 rounded-xl">Profile Overview</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer font-bold px-4 py-3 rounded-xl">
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-xl">
                      <Link href="/login" className="cursor-pointer font-bold px-4 py-3">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-xl">
                      <Link href="/signup" className="cursor-pointer font-bold px-4 py-3">Create Account</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full bg-primary/5">
                    <Menu className="h-6 w-6 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72 mt-2 p-2 rounded-[2rem] border-2 shadow-2xl">
                  <DropdownMenuItem asChild className="rounded-xl mb-1"><Link href="/" className="font-black uppercase tracking-widest py-4 px-6 text-xs">Home</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl mb-1"><Link href="/services" className="font-black uppercase tracking-widest py-4 px-6 text-xs">Services</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl mb-1"><Link href="/projects" className="font-black uppercase tracking-widest py-4 px-6 text-xs">Portfolio</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl mb-1"><Link href="/blog" className="font-black uppercase tracking-widest py-4 px-6 text-xs">Insights</Link></DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  {user ? (
                    <>
                      <DropdownMenuItem asChild className="rounded-xl"><Link href="/account" className="py-4 px-6 font-bold">Account</Link></DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout} className="text-destructive rounded-xl font-bold"><span className="py-4 px-6">Logout</span></DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild className="rounded-xl"><Link href="/login" className="py-4 px-6 font-bold">Login</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="rounded-xl"><Link href="/signup" className="py-4 px-6 font-bold">Start Now</Link></DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button className="hidden sm:flex rounded-full bg-primary font-black uppercase tracking-widest text-[10px] px-6 h-11 shadow-xl shadow-primary/30" asChild>
              <Link href="/contact">Start Project</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}