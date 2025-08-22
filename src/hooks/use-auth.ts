
"use client";

import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useToast } from './use-toast';

export const useAuth = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleAuthSuccess = (user: User) => {
    setIsUnlocking(true);
    setTimeout(() => {
        router.push('/dashboard');
    }, 1200);
  }

  const handleAuthError = (error: any) => {
    const errorMessage = error.message || 'An unknown error occurred.';
    setError(errorMessage);
    toast({
        title: "Authentication Error",
        description: errorMessage,
        variant: "destructive",
    })
    setIsUnlocking(false);
  }

  const signUpWithEmail = async (email: string, password:  string) => {
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      handleAuthSuccess(userCredential.user);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signInWithEmail = async (email: string, password:  string) => {
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
       handleAuthSuccess(userCredential.user);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signInWithGoogle = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      handleAuthSuccess(result.user);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      router.push('/signin');
    } catch (error) {
      handleAuthError(error);
    }
  };

  return {
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    signOut,
    isUnlocking,
    error,
  };
};
