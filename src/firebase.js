import { getAuth } from "firebase/auth";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCC6mc5T63NDM3USho_J980s5NGvLC5zxs",
  authDomain: "quiz-e9ab3.firebaseapp.com",
  projectId: "quiz-e9ab3",
  storageBucket: "quiz-e9ab3.appspot.com",
  messagingSenderId: "808078436468",
  appId: "1:808078436468:web:f20d674859c1704aa00921",
  measurementId: "G-0PQJ6E7KXF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth();

export const analytics = getAnalytics(app);
