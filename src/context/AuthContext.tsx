
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { 
  getAuth, 
  onAuthStateChanged, 
  User, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  AuthError
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from '@/lib/firebase/config';
import { SignUpData, SignInData } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (data: SignUpData) => Promise<User | null>;
  login: (data: SignInData) => Promise<User | null>;
  logout: () => Promise<void>;
  updateUserProfile: (displayName: string, photoFile: File | null) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const auth = getAuth(app);
const storage = getStorage(app);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (data: SignUpData): Promise<User | null> => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Signup error:", error);
      throw error as AuthError;
    } finally {
      setLoading(false);
    }
  };
  
  const login = async (data: SignInData): Promise<User | null> => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Login error:", error);
      throw error as AuthError;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
       console.error("Logout error:", error);
       throw error as AuthError;
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (displayName: string, photoFile: File | null) => {
    if (!auth.currentUser) {
      throw new Error("No user is signed in to update profile.");
    }
    
    let photoURL = auth.currentUser.photoURL;

    if (photoFile) {
        const storageRef = ref(storage, `profile-pictures/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, photoFile);
        photoURL = await getDownloadURL(storageRef);
    }
    
    await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
    });

    // Manually update the user state to reflect changes immediately
    setUser({ ...auth.currentUser });
  };

  const value = { user, loading, signup, login, logout, updateUserProfile };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
