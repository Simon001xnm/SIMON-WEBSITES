'use client';

import * as React from 'react';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, AlertCircle } from 'lucide-react';

export function LaptopStockStatus() {
  const firestore = useFirestore();

  // Memoize query for performance and to avoid infinite loops
  const stockQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'Laptops Available');
  }, [firestore]);

  const { data: stockStatus, isLoading, error } = useCollection(stockQuery);

  return (
    <Card className="mt-6 bg-secondary/50 border-2 border-primary/5 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-black uppercase tracking-tighter text-primary">
          Live Inventory Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground py-4">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest">Syncing with Firestore...</span>
          </div>
        )}
        
        {error && (
          <div className="flex items-center gap-2 text-destructive py-4">
            <AlertCircle className="h-4 w-4" />
            <p className="text-[10px] font-black uppercase">Permission Denied or Connection Error</p>
          </div>
        )}

        {!isLoading && !error && stockStatus && stockStatus.length > 0 && (
          <ul className="space-y-3">
            {stockStatus.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b border-white/20 pb-2 last:border-0">
                <span className="text-xs font-black text-gray-600 uppercase tracking-tight">{item.id}</span>
                <span className="px-3 py-1 rounded-full bg-white text-primary text-[10px] font-black shadow-sm">
                  {Object.values(item).find(val => typeof val === 'string' && val !== item.id) || 'In Stock'}
                </span>
              </li>
            ))}
          </ul>
        )}

        {!isLoading && !error && (!stockStatus || stockStatus.length === 0) && (
          <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest py-4">
            No stock updates available at this time.
          </p>
        )}
      </CardContent>
    </Card>
  );
}