import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBn1hhxfBZVpJiQHG46Hg5PYHiGYAwLTJM",
  authDomain: "rn-instagram-clone-e30d1.firebaseapp.com",
  projectId: "rn-instagram-clone-e30d1",
  storageBucket: "rn-instagram-clone-e30d1.appspot.com",
  messagingSenderId: "893203172225",
  appId: "1:893203172225:web:faf00895f9c085494ff680"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();