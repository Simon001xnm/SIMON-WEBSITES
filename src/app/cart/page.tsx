
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus, Minus, ChevronLeft, ShoppingCart, CreditCard } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER, MPESA_TILL_NUMBER, MPESA_TILL_NAME } from '@/lib/constants';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleInputChange = (id: string, value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 1) {
      updateQuantity(id, quantity);
    }
  };
  
  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault();
      toast({
        title: "Login Required",
        description: "Please log in or create an account to proceed with checkout.",
        variant: "destructive",
      });
      router.push('/login');
    }
  };

  const formattedCartTotal = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(cartTotal);

  const generateCheckoutMessage = () => {
    const itemsText = cart.map(item => 
      `${item.name} (Qty: ${item.quantity}) - KES ${new Intl.NumberFormat('en-KE').format(item.price * item.quantity)}`
    ).join('\n');
    const message = `Hello, I'd like to place an order for the following items:\n\n${itemsText}\n\nTotal: ${formattedCartTotal}\n\nPlease let me know the next steps. I'll pay via M-Pesa Till ${MPESA_TILL_NUMBER}.`;
    return encodeURIComponent(message);
  };
  
  const whatsappCheckoutLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${generateCheckoutMessage()}`;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <EcommerceHeader />
      <main className="flex-grow py-6 sm:py-10">
        <Container>
          {cart.length === 0 ? (
            <Card className="text-center p-8 sm:p-16">
              <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <CardTitle className="text-2xl font-bold mb-2">Your Cart is Empty</CardTitle>
              <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild>
                <Link href="/laptops">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">Shopping Cart ({cart.length} items)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4" />
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <Link href={`/laptops/${item.id}`} className="block w-24 h-24 sm:w-28 sm:h-28 aspect-square relative overflow-hidden rounded-md border flex-shrink-0 bg-white">
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fill
                              className="object-contain p-2"
                            />
                          </Link>
                          <div className="flex-grow">
                            <Link href={`/laptops/${item.id}`} className="font-medium hover:text-primary leading-tight">{item.name}</Link>
                            <p className="text-sm text-muted-foreground mt-1">{item.brand}</p>
                            <p className="font-bold text-lg text-primary mt-2 sm:hidden">
                              {new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(item.price)}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
                             <div className="flex items-center border rounded-md">
                                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <Input
                                  type="text"
                                  value={item.quantity}
                                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                                  className="h-9 w-12 text-center border-l border-r rounded-none focus-visible:ring-0"
                                />
                                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>
                                  <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="font-bold text-lg text-primary hidden sm:block w-28 text-center">
                              {new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(item.price * item.quantity)}
                            </p>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                 <Button variant="link" asChild className="mt-4 text-primary">
                    <Link href="/laptops">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
              </div>

              <div className="lg:col-span-1 space-y-6 sticky top-28">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal</span>
                        <span>{formattedCartTotal}</span>
                    </div>
                     <div className="flex justify-between text-muted-foreground">
                        <span>Shipping</span>
                        <span className="text-primary">Calculated at next step</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{formattedCartTotal}</span>
                    </div>
                    <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-base">
                      <a 
                        href={whatsappCheckoutLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={handleCheckout}
                      >
                        Proceed to Checkout via WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-600 rounded-lg text-white">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-green-900">Payment Information</h3>
                    </div>
                    <div className="space-y-2 text-sm text-green-800">
                      <div className="flex justify-between">
                        <span className="font-medium">M-Pesa Till:</span>
                        <span className="font-bold">{MPESA_TILL_NUMBER}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Till Name:</span>
                        <span className="font-bold">{MPESA_TILL_NAME}</span>
                      </div>
                      <p className="text-[10px] mt-4 opacity-70 italic text-center">
                        Please pay after confirming your order via WhatsApp.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
