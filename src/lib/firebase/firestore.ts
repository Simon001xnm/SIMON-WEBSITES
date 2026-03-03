
'use server';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/lib/firebase/config'; 

const db = getFirestore(app);

export interface StockStatus {
    id: string;
    [key: string]: any;
}

export async function getLaptopAvailability(): Promise<StockStatus[]> {
    try {
        // Updated to laptops_available to maintain consistency
        const querySnapshot = await getDocs(collection(db, "laptops_available"));
        if (querySnapshot.empty) {
            console.log('No documents found in "laptops_available" collection.');
            return [];
        }
        const stockStatus: StockStatus[] = [];
        querySnapshot.forEach((doc) => {
            stockStatus.push({ id: doc.id, ...doc.data() });
        });
        return stockStatus;
    } catch (error) {
        console.error("Error fetching from Firestore: ", error);
        throw new Error("Could not fetch laptop availability from Firestore.");
    }
}
