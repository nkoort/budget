import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD_0ubHbmoOMsjxcGb7Q6W48aQLnNvlzNY',
  authDomain: 'budget-ba544.firebaseapp.com',
  databaseURL: 'https://budget-ba544-default-rtdb.firebaseio.com',
  projectId: 'budget-ba544',
  storageBucket: 'budget-ba544.appspot.com',
  messagingSenderId: '336445004982',
  appId: '1:336445004982:web:edd3ce6d5da26f5a84da17',
  measurementId: 'G-5GDT8JEFBR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
