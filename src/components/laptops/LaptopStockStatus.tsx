
'use client';

import { useEffect, useState } from 'react';
import { getLaptopAvailability, type StockStatus } from '@/lib/firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export function LaptopStockStatus() {
  const [stockStatus, setStockStatus] = useState<StockStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStock() {
      try {
        setIsLoading(true);
        const data = await getLaptopAvailability();
        setStockStatus(data);
        setError(null);
      } catch (e) {
        setError('Failed to fetch stock status from Firestore.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStock();
  }, []);

  return (
    <Card className="mt-6 bg-secondary/50">
      <CardHeader>
        <CardTitle className="text-lg">Live Stock Status (from Firestore)</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading data...</span>
          </div>
        )}
        {error && <p className="text-destructive">{error}</p>}
        {!isLoading && !error && stockStatus.length > 0 && (
          <ul className="space-y-1 text-sm">
            {stockStatus.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span className="font-medium">{item.id}:</span>
                {/* We dynamically find the value since the key is not consistent in the screenshot */}
                <span>{Object.values(item).find(val => typeof val === 'string')}</span>
              </li>
            ))}
          </ul>
        )}
         {!isLoading && !error && stockStatus.length === 0 && (
            <p className="text-muted-foreground text-sm">No stock information found in Firestore.</p>
        )}
      </CardContent>
    </Card>
  );
}
