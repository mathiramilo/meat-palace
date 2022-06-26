import { doc, getDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore();

export const getProduct = (id: string) => {
    const productRef = doc(db, 'products', id);
    return getDoc(productRef);
} 