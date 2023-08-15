import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPUh-m51C3A7O1fnyCtbY-YaiKuycvF5I",
  authDomain: "popshap-scores.firebaseapp.com",
  projectId: "popshap-scores",
  storageBucket: "popshap-scores.appspot.com",
  messagingSenderId: "576701323576",
  appId: "1:576701323576:web:9ba064c1288d7da48ec9cd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);