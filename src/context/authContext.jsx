import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      try {
        if (!fbUser) {
          setUser(null);
          setLoading(false);
          return;
        }

        const snap = await getDoc(doc(db, "users", fbUser.uid));

        if (!snap.exists()) {
          setUser(null);
          setLoading(false);
          return;
        }

        setUser({
          uid: fbUser.uid,
          email: fbUser.email,
          ...snap.data(),
        });
      } catch (err) {
        console.log("AUTH ERROR 👉", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
