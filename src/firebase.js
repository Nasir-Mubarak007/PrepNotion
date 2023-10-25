import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0cq81vsbE2hn6bkFQzVfL0pW8b5yc85U",
  authDomain: "prep-notion.firebaseapp.com",
  projectId: "prep-notion",
  storageBucket: "prep-notion.appspot.com",
  messagingSenderId: "424965898810",
  appId: "1:424965898810:web:2ffc9ac378293ac7da6b03",
  measurementId: "G-BYKM849DV1",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

// const analytics = getAnalytics(app);
