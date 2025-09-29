
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MOCK_LAPTOPS } from '@/lib/laptop-data';
import { LaptopCard } from '@/components/laptops/LaptopCard';
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
  XCircle,
  LogOut,
  ChevronRight,
  Pencil,
  Loader2,
} from 'lucide-react';

const sidebarNavItems = [
    { title: 'My Simon Styles Account', icon: User, href: '/account', active: true },
    { title: 'Orders', icon: Package, href: '#' },
    { title: 'Inbox', icon: Inbox, href: '#' },
    { title: 'Pending Reviews', icon: MessageSquare, href: '#' },
    { title: 'Vouchers', icon: Ticket, href: '#' },
    { title: 'Followed Sellers', icon: Store, href: '#' },
    { title: 'Recently Viewed', icon: History, href: '#' },
];

const accountManagementItems = [
    { title: 'Account Management', heading: true },
    { title: 'Payment Settings', icon: CreditCard, href: '#' },
    { title: 'Address Book', icon: BookUser, href: '#' },
    { title: 'Newsletter Preferences', icon: MailCheck, href: '#' },
    { title: 'Close Account', icon: XCircle, href: '#' },
];


export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Display a loading state while checking for user authentication
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
            {/* Left Sidebar */}
            <aside className="bg-white p-4 rounded-md shadow-sm hidden lg:block">
              <nav>
                <ul>
                  {sidebarNavItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded text-sm font-medium transition-colors ${
                          item.active
                            ? 'bg-primary/10 text-primary border-l-4 border-primary'
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
                       {item.heading ? (
                         <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.title}</h3>
                       ) : (
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 p-3 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                          </Link>
                       )}
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

            {/* Right Content */}
            <div className="space-y-6">
                <h1 className="text-2xl font-semibold text-gray-800">Account Overview</h1>
                
                {/* Account Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4">
                        <h2 className="font-semibold border-b pb-2 mb-2">ACCOUNT DETAILS</h2>
                        <p className="text-sm font-bold">{user.displayName || 'No Name Set'}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </Card>
                     <Card className="p-4">
                        <div className="flex justify-between items-center border-b pb-2 mb-2">
                            <h2 className="font-semibold">ADDRESS BOOK</h2>
                            <Button variant="ghost" size="icon" className="h-6 w-6 text-primary"><Pencil className="w-4 h-4"/></Button>
                        </div>
                        <p className="text-sm font-bold">Your default shipping address:</p>
                        <p className="text-sm text-gray-500">Nairobi CBD, Nairobi</p>
                        <p className="text-sm text-gray-500">+254-758673616</p>
                    </Card>
                    <Card className="p-4">
                        <h2 className="font-semibold border-b pb-2 mb-2">SIMON STYLES STORE CREDIT</h2>
                        <p className="text-sm text-gray-500">Simon Styles store credit balance: KSh 0</p>
                    </Card>
                    <Card className="p-4">
                        <h2 className="font-semibold border-b pb-2 mb-2">NEWSLETTER PREFERENCES</h2>
                         <p className="text-sm text-gray-500 mb-2">Manage your email communications to stay updated with the latest news and offers.</p>
                        <Button variant="link" className="p-0 h-auto text-primary">Edit Newsletter preferences</Button>
                    </Card>
                </div>
                
                {/* Product Sections */}
                <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Top selling items</h2>
                        <Link href="#" className="flex items-center text-sm font-semibold text-primary">
                            See All <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
                        {MOCK_LAPTOPS.slice(5, 10).map(laptop => (
                            <LaptopCard key={laptop.id} laptop={laptop} />
                        ))}
                    </div>
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
