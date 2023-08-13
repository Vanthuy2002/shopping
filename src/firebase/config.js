import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHjvFmzffy1h5YgvDdc7FKOpSz5ttefo4',
  authDomain: 'shopping-292e9.firebaseapp.com',
  projectId: 'shopping-292e9',
  storageBucket: 'shopping-292e9.appspot.com',
  messagingSenderId: '1066674898394',
  appId: '1:1066674898394:web:b554652cc18d5f1a10ece3',
  measurementId: 'G-8L9WS4RDPJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
