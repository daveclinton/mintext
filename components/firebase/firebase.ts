import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { isDev } from '../isDev';
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'minext-9c06f.firebaseapp.com',
    projectId: 'minext-9c06f',
    storageBucket: 'minext-9c06f.appspot.com',
    messagingSenderId: '301233216899',
    appId: '1:301233216899:web:9e6ad946abe2b0d2bceab6',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

if (isDev) {
    connectFirestoreEmulator(firestore, 'localhost', 8081);
    connectStorageEmulator(storage, 'localhost', 9199);
}
