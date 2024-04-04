// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
// import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// // import { isDev } from '../isDev';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: 'AIzaSyAlIA_KxXCJLcq9JcAqBuEiDIvwrrc1KWk',
//     authDomain: 'minext-9c06f.firebaseapp.com',
//     projectId: 'minext-9c06f',
//     storageBucket: 'minext-9c06f.appspot.com',
//     messagingSenderId: '301233216899',
//     appId: '1:301233216899:web:9e6ad946abe2b0d2bceab6',
// };

// // Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);

// export const firestore = getFirestore(firebaseApp);
// export const baseBucketName = 'minext';

// /* if (isDev) {
//     connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
// } */

import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { isDev } from '../isDev';
const firebaseConfig = {
    apiKey: 'AIzaSyAlIA_KxXCJLcq9JcAqBuEiDIvwrrc1KWk',
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
