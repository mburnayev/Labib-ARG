import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABmeYqOnU2kKb-MPyX0LSD94afKKTsbRM",
  authDomain: "labib-arg.firebaseapp.com",
  projectId: "labib-arg",
  storageBucket: "labib-arg.firebasestorage.app",
  messagingSenderId: "1059877551854",
  appId: "1:1059877551854:web:fe8ca3b36c5ece45d87dff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }