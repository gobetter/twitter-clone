// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLal1MSNH4reoe5S8KVSpSIKNCiaCGJJs',
  authDomain: 'twitter-clone-nextjs-js.firebaseapp.com',
  projectId: 'twitter-clone-nextjs-js',
  storageBucket: 'twitter-clone-nextjs-js.appspot.com',
  messagingSenderId: '674354849504',
  appId: '1:674354849504:web:260131da1572e096245285',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
