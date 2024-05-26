
// ./services/firebase.js
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';


const firebaseConfig =  {apiKey: "AIzaSyCt8F1BfgYkCo5rMONogbklfx9DqLfbQRY",
authDomain: "economyapp-a3a6c.firebaseapp.com",
projectId: "economyapp-a3a6c",
storageBucket: "economyapp-a3a6c.appspot.com",
messagingSenderId: "763031922599",
appId: "1:763031922599:web:6775a7d868daf7532e7882",
measurementId: "G-XN9JS2W47K"} 

// initialize Firebase App
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  
});

export { app, auth, getApp, getAuth };