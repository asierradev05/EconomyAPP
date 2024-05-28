import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCt8F1BfgYkCo5rMONogbklfx9DqLfbQRY",
  authDomain: "economyapp-a3a6c.firebaseapp.com",
  projectId: "economyapp-a3a6c",
  storageBucket: "economyapp-a3a6c.appspot.com",
  messagingSenderId: "763031922599",
  appId: "1:763031922599:web:6775a7d868daf7532e7882",
  measurementId: "G-XN9JS2W47K"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const database = getDatabase(app);

export { app, auth, database, createUserWithEmailAndPassword };
