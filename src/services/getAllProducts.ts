import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();
const productsCollection = collection(db, 'products');

export const getAllProducts = () => getDocs(productsCollection);