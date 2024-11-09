/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState, ReactNode } from "react";
import { app } from "../firebase/firebase.config";
import { UserCredential } from "firebase/auth/web-extension";
interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  createUser: (email: any, password: any) => Promise<UserCredential>;
  signIn: (email: any, password: any) => Promise<UserCredential>;
  googleSignIn: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
  updateUserProfile: (name: any) => Promise<void>;
  // Add other properties or methods you need in your context
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
const auth = getAuth(app);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email: any, password: any) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: any, password: any) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name: any) => {
    if (auth.currentUser) {
      // Only attempt to update the profile if currentUser is not null
      return updateProfile(auth.currentUser, {
        displayName: name,
      });
    } else {
      console.error("No user is currently signed in.");
      return Promise.reject("No user is currently signed in.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo: AuthContextType = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
    setUser: function (): void {
      throw new Error("Function not implemented.");
    },
    setLoading: function (): void {
      throw new Error("Function not implemented.");
    },
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
