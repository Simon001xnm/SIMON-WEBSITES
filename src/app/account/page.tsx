
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    User,
    Package,
    Inbox,
    MessageSquare,
    Ticket,
    Store,
    History,
    CreditCard,
    BookUser,
    MailCheck,
    LogOut,
    ChevronRight,
    Loader2,
    ShieldCheck,
    Heart,
    Newspaper,
    Camera,
} from 'lucide-react';

const sidebarNavItems = [
    { title: 'My Simon Styles Account', icon: User, href: '/account', active: true },
    { title: 'Orders', icon: Package, href: '/account/orders' },
    { title: 'Inbox', icon: Inbox, href: '/account/inbox' },
    { title: 'Pending Reviews', icon: MessageSquare, href: '/account/reviews' },
    { title: 'Vouchers', icon: Ticket, href: '/account/vouchers' },
    { title: 'Saved Items', icon: Heart, href: '/account/saved-items'},
    { title: 'Recently Viewed', icon: History, href: '/account/recently-viewed' },
];

const accountManagementItems = [
    { title: 'Address Book', icon: BookUser, href: '/account/address-book' },
    { title: 'Account Management', icon: ShieldCheck, href: '/account/management' },
    { title: 'Newsletter Preferences', icon: Newspaper, href: '/account/newsletter' },
];


export default function AccountPage() {
  const { user, loading, logout, updateUserProfile } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // State for form fields
  const [displayName, setDisplayName] = useState('');
  const [address, setAddress] = useState('Nairobi CBD, Nairobi');
  const [phone, setPhone] = useState('+254-758673616');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);


  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user) {
      setDisplayName(user.displayName || 'Your Name');
      setPreviewImageUrl(user.photoURL);
    }
  }, [user, loading, router]);
  
  const handleEditToggle = async () => {
    if (isEditing) {
      setIsSaving(true);
      try {
        await updateUserProfile(displayName, profileImage);
        toast({
          title: "Profile Updated",
          description: "Your account information has been successfully saved.",
        });
      } catch (error) {
        console.error("Profile update error:", error);
        toast({
          title: "Update Failed",
          description: "Could not save your profile. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsSaving(false);
        setIsEditing(false);
        setProfileImage(null); // Clear the image file after saving
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfileImage(file);
      setPreviewImageUrl(URL.createObjectURL(file));
    }
  };

  const handleAvatarClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };
  
  if (loading || !user) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase() || 'S';
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <EcommerceHeader />

      <main>
        <Container className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
            <aside className="bg-white p-4 rounded-md shadow-sm hidden lg:block">
              <nav>
                <ul>
                  {sidebarNavItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded text-sm font-medium transition-colors ${
                          router.pathname === item.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                <ul>
                   {accountManagementItems.map((item) => (
                     <li key={item.title}>
                          <Link
                            href={item.href}
                            className={`flex items-center gap-3 p-3 rounded text-sm font-medium transition-colors ${
                                router.pathname === item.href
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                          </Link>
                     </li>
                   ))}
                </ul>
                <Separator className="my-4" />
                <ul>
                    <li>
                        <button onClick={handleLogout} className="flex items-center w-full gap-3 p-3 rounded text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
              </nav>
            </aside>

            <div className="space-y-6">
                <h1 className="text-2xl font-semibold text-gray-800">Account Overview</h1>
                
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Personal Profile</CardTitle>
                            <CardDescription>Manage your name, email and profile picture.</CardDescription>
                        </div>
                        <Button onClick={handleEditToggle} variant={isEditing ? 'default' : 'outline'} disabled={isSaving}>
                            {isSaving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : isEditing ? 'Save Changes' : 'Edit Profile'}
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="relative">
                            <Avatar 
                              className={`h-24 w-24 border-2 ${isEditing ? 'cursor-pointer border-primary' : 'border-transparent'}`}
                              onClick={handleAvatarClick}
                            >
                              <AvatarImage src={previewImageUrl || user.photoURL || ''} alt={displayName} />
                              <AvatarFallback className="text-3xl">{getInitials(displayName)}</AvatarFallback>
                            </Avatar>
                            {isEditing && (
                              <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-1.5 cursor-pointer">
                                <Camera className="h-4 w-4" />
                              </div>
                            )}
                            <input 
                              type="file" 
                              ref={fileInputRef} 
                              onChange={handleImageChange} 
                              className="hidden" 
                              accept="image/png, image/jpeg" 
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow w-full">
                              <div>
                                <Label htmlFor="displayName">Full Name</Label>
                                {isEditing ? (
                                  <Input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} disabled={isSaving} />
                                ) : (
                                  <p className="text-sm font-medium p-2">{displayName}</p>
                                )}
                              </div>
                              <div>
                                <Label htmlFor="email">Email Address</Label>
                                <p className="text-sm text-gray-500 p-2">{user.email}</p>
                              </div>
                          </div>
                       </div>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                         <CardTitle>Shipping Information</CardTitle>
                         <CardDescription>Edit your default shipping address.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="address">Address</Label>
                                {isEditing ? (
                                <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} disabled={isSaving} />
                                ) : (
                                <p className="text-sm font-medium p-2">{address}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone Number</Label>
                                {isEditing ? (
                                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={isSaving} />
                                ) : (
                                <p className="text-sm font-medium p-2">{phone}</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Recently Viewed</h2>
                         <Link href="/account/recently-viewed" className="flex items-center text-sm font-semibold text-primary">
                            See All <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
                        {MOCK_LAPTOPS.slice(10, 15).map(laptop => (
                            <LaptopCard key={laptop.id} laptop={laptop} />
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </main>
      
      <EcommerceFooter />
    </div>
  );
}
