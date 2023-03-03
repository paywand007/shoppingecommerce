// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAX3wr_q-feJ8-nr4zCNv-Ge0Mrfq6PYRI',
  authDomain: 'ecommerce-auth-fe796.firebaseapp.com',
  projectId: 'ecommerce-auth-fe796',
  storageBucket: 'ecommerce-auth-fe796.appspot.com',
  messagingSenderId: '939117549345',
  appId: '1:939117549345:web:a1596b8b4b74184a51d060',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);