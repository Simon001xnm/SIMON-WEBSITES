
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { 
  getAuth, 
  onAuthStateChanged, 
  User, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  AuthError
} from 'firebase/auth';
import { app } from '@/lib/firebase/config';
import { SignUpData, SignInData } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (data: SignUpData) => Promise<User | null>;
  login: (data: SignInData) => Promise<User | null>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const auth = getAuth(app);

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

  const value = { user, loading, signup, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
