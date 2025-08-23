
"use client";

import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  type ConfirmationResult,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useToast } from './use-toast';

export const useAuth = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);


  const handleAuthSuccess = (user: User) => {
    setIsUnlocking(true);
    const redirectPath = '/dashboard';
    
    setTimeout(() => {
        router.push(redirectPath);
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
    if (!email || !password) {
        return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
       handleAuthSuccess(userCredential.user);
    } catch (error) {
      handleAuthError(error);
    }
  };
  
  const setupRecaptcha = () => {
    try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible',
        });
        return window.recaptchaVerifier;
    } catch (error) {
       handleAuthError(error);
       return null;
    }
  }

  const signInWithPhone = async (phoneNumber: string) => {
    setError(null);

    const verifier = setupRecaptcha();
    if (!verifier) return { success: false };

    try {
        const result = await signInWithPhoneNumber(auth, phoneNumber, verifier);
        setConfirmationResult(result);
        toast({ title: "Verification code sent!", description: "Check your phone for the OTP." });
        return { success: true };
    } catch (error) {
        verifier.clear(); // Clear the verifier on error
        handleAuthError(error);
        return { success: false };
    }
  }

  const verifyOtp = async (otp: string) => {
    if (!confirmationResult) {
        handleAuthError({ message: "No confirmation result found. Please request a new code."});
        return;
    }
    try {
        const result = await confirmationResult.confirm(otp);
        handleAuthSuccess(result.user);
    } catch (error) {
        handleAuthError(error);
    }
  }

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
    signInWithPhone,
    verifyOtp,
    signInWithGoogle,
    signOut,
    isUnlocking,
    error,
  };
};

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier
  }
}
