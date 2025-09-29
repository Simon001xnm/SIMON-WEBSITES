
import { Container } from "@/components/layout/Container";
import { EcommerceHeader } from "@/components/layout/EcommerceHeader";
import { EcommerceFooter } from "@/components/layout/EcommerceFooter";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PlaceholderPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <EcommerceHeader />
      <main>
        <Container className="py-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Orders</CardTitle>
              <CardDescription>
                This page is under construction. Come back soon to view your order history!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/account">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Account
                </Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
