// ./services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCt8F1BfgYkCo5rMONogbklfx9DqLfbQRY",
  authDomain: "economyapp-a3a6c.firebaseapp.com",
  projectId: "economyapp-a3a6c",
  storageBucket: "economyapp-a3a6c.appspot.com",
  messagingSenderId: "763031922599",
  appId: "1:763031922599:web:6775a7d868daf7532e7882",
  measurementId: "G-XN9JS2W47K"
};

// Inicializar Firebase App
const app = initializeApp(firebaseConfig);

// Obtener la instancia de autenticación de Firebase
const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };
