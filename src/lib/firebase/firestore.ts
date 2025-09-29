
'use server';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/lib/firebase/config'; // Assuming you have a config file

const db = getFirestore(app);

export interface StockStatus {
    id: string;
    [key: string]: any;
}

export async function getLaptopAvailability(): Promise<StockStatus[]> {
    try {
        const querySnapshot = await getDocs(collection(db, "Laptops Available"));
        if (querySnapshot.empty) {
            console.log('No documents found in "Laptops Available" collection.');
            return [];
        }
        const stockStatus: StockStatus[] = [];
        querySnapshot.forEach((doc) => {
            stockStatus.push({ id: doc.id, ...doc.data() });
        });
        return stockStatus;
    } catch (error) {
        console.error("Error fetching from Firestore: ", error);
        // In a real app, you might want to handle this error more gracefully
        throw new Error("Could not fetch laptop availability from Firestore.");
    }
}
