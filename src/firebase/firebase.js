import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASTU6ElufwTYOpUeARgSJTUws2OHueSSc",
  authDomain: "chat-app-baha.firebaseapp.com",
  projectId: "chat-app-baha",
  storageBucket: "chat-app-baha.firebasestorage.app",
  messagingSenderId: "309467209154",
  appId: "1:309467209154:web:c68351f6350ea3c1f64a5b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
