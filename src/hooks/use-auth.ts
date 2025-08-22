
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

const DEV_PHONE_NUMBER = '050308';
const DEV_EMAIL = 'dev@opulex.co';

export const useAuth = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [isDevUser, setIsDevUser] = useState(false);


  const handleAuthSuccess = (user: User) => {
    setIsUnlocking(true);
    const isDev = user.email === DEV_EMAIL;
    setIsDevUser(isDev);
    const redirectPath = isDev ? '/dashboard/developer' : '/dashboard';
    
    setTimeout(() => {
        router.push(redirectPath);
    }, 1200);
  }
  
  const handleDevAuthSuccess = () => {
    setIsUnlocking(true);
    setIsDevUser(true);
    setTimeout(() => {
        router.push('/dashboard/developer');
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
        const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible',
        });
        return recaptcha;
    } catch (error) {
       handleAuthError(error);
       return null;
    }
  }

  const signInWithPhone = async (phoneNumber: string) => {
    setError(null);

    if (phoneNumber === DEV_PHONE_NUMBER) {
        handleDevAuthSuccess();
        return { isDev: true };
    }

    const verifier = setupRecaptcha();
    if (!verifier) return { isDev: false, success: false };

    try {
        const result = await signInWithPhoneNumber(auth, phoneNumber, verifier);
        setConfirmationResult(result);
        toast({ title: "Verification code sent!", description: "Check your phone for the OTP." });
        return { isDev: false, success: true };
    } catch (error) {
        verifier.clear(); // Clear the verifier on error
        handleAuthError(error);
        return { isDev: false, success: false };
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
      setIsDevUser(false);
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
    isDevUser,
  };
};
