
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
} from 'lucide-react';

const sidebarNavItems = [
    { title: 'My Simon Styles Account', icon: User, href: '/account', active: true },
    { title: 'Orders', icon: Package, href: '#' },
    { title: 'Inbox', icon: Inbox, href: '#' },
    { title: 'Pending Reviews', icon: MessageSquare, href: '#' },
    { title: 'Vouchers', icon: Ticket, href: '#' },
    { title: 'Saved Items', icon: Heart, href: '#'},
    { title: 'Recently Viewed', icon: History, href: '#' },
];

const accountManagementItems = [
    { title: 'Address Book', icon: BookUser, href: '#' },
    { title: 'Account Management', icon: ShieldCheck, href: '#' },
    { title: 'Newsletter Preferences', icon: Newspaper, href: '#' },
];


export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [address, setAddress] = useState('Nairobi CBD, Nairobi');
  const [phone, setPhone] = useState('+254-758673616');


  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user) {
      setDisplayName(user.displayName || 'Your Name');
    }
  }, [user, loading, router]);
  
  const handleEditToggle = () => {
    if (isEditing) {
      // Logic to save data would go here
      // For now, just simulating a save with a toast
      toast({
        title: "Details Saved",
        description: "Your account information has been updated.",
      });
    }
    setIsEditing(!isEditing);
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
                          item.active
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
                   {accountManagementItems.map((item, index) => (
                     <li key={item.title}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 p-3 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
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
                            <CardDescription>Manage your name, email and address.</CardDescription>
                        </div>
                        <Button onClick={handleEditToggle} variant={isEditing ? 'default' : 'outline'}>
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="displayName">Full Name</Label>
                            {isEditing ? (
                              <Input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                            ) : (
                              <p className="text-sm font-medium p-2">{displayName}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <p className="text-sm text-gray-500 p-2">{user.email}</p>
                          </div>
                          <div>
                            <Label htmlFor="address">Address</Label>
                             {isEditing ? (
                              <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            ) : (
                              <p className="text-sm font-medium p-2">{address}</p>
                            )}
                          </div>
                           <div>
                            <Label htmlFor="phone">Phone Number</Label>
                             {isEditing ? (
                              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            ) : (
                              <p className="text-sm font-medium p-2">{phone}</p>
                            )}
                          </div>
                       </div>
                    </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4">
                        <CardHeader className="p-0 mb-2">
                           <CardTitle className="text-base flex items-center gap-2"><CreditCard className="w-5 h-5 text-primary"/> Payment Methods</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-sm text-gray-500">You have not saved any payment methods.</p>
                          <Button variant="link" className="p-0 h-auto text-primary mt-2">Add a Payment Method</Button>
                        </CardContent>
                    </Card>
                     <Card className="p-4">
                        <CardHeader className="p-0 mb-2">
                           <CardTitle className="text-base flex items-center gap-2"><Store className="w-5 h-5 text-primary"/> Followed Sellers</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <p className="text-sm text-gray-500">You are not following any sellers yet.</p>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Recently Viewed</h2>
                         <Link href="#" className="flex items-center text-sm font-semibold text-primary">
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
