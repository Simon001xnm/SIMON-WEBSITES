'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronDown,
  User,
  LogOut,
  LogIn,
  Briefcase,
  LayoutGrid,
  FileText,
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
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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
      <div className="bg-primary text-primary-foreground py-2 px-4 flex justify-center items-center text-xs font-medium tracking-wide">
        <p>Now Accepting Custom Software Projects for Q2 2026</p>
      </div>
      <header className="bg-white/80 backdrop-blur-md py-4 px-4 shadow-sm border-b sticky top-0 z-40">
        <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image 
                src="/logo.jpg"
                alt="Simon Styles Logo"
                width={40}
                height={40}
                className="rounded-full shadow-sm"
            />
            <span className="text-2xl font-black text-gray-900 tracking-tight hidden sm:inline">
              SIMON<span className="text-primary">STYLES</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/services" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="/projects" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/blog" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Insights</Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2" asChild>
              <Link href="tel:+254758673616">
                <PhoneCall className="h-4 w-4" />
                <span className="font-semibold">+254 758 673616</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-full border-2">
                  {user ? (
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                        <AvatarFallback className="text-[10px]">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  ) : <User className="h-4 w-4" /> }
                  <span className="font-semibold text-sm">{user ? 'Account' : 'Login'}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl">
                {user ? (
                  <>
                    <DropdownMenuLabel>Account Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="cursor-pointer font-medium">Profile Details</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer font-medium">
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/login" className="cursor-pointer font-medium">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/signup" className="cursor-pointer font-medium">Create Account</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 mt-2 p-2 rounded-2xl">
                  <DropdownMenuItem asChild className="rounded-lg mb-1"><Link href="/" className="font-bold py-3 px-4">Home</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-lg mb-1"><Link href="/services" className="font-bold py-3 px-4">Services</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-lg mb-1"><Link href="/projects" className="font-bold py-3 px-4">Portfolio</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-lg mb-1"><Link href="/blog" className="font-bold py-3 px-4">Insights</Link></DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  {user ? (
                    <>
                      <DropdownMenuItem asChild className="rounded-lg"><Link href="/account" className="py-3 px-4 font-medium">Account</Link></DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout} className="text-destructive rounded-lg font-medium"><span className="py-3 px-4">Logout</span></DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild className="rounded-lg"><Link href="/login" className="py-3 px-4 font-medium">Login</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild className="rounded-lg"><Link href="/signup" className="py-3 px-4 font-medium">Join Now</Link></DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button className="hidden sm:flex rounded-full bg-primary font-bold shadow-lg shadow-primary/20" asChild>
              <Link href="/contact">Start Project</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}