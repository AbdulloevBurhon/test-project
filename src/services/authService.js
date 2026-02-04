import { auth, db } from "../firebase/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// 🔹 Регистрация
export const registerUser = async (email, password, name, age) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  const user = res.user;

  await setDoc(doc(db, "users", user.uid), {
    name,
    age: Number(age) || 0,
    email: user.email,

    avatar: "", // 👈 фото
    bio: "", // 👈 описание
    status: "active",

    role: "user",

    createdAt: serverTimestamp(),
  });

  return user;
};

// 🔹 Логин
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 🔹 Выход
export const logoutUser = () => {
  return signOut(auth);
};
