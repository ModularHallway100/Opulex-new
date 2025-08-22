
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

// Ensure the recaptcha is only initialized once
let recaptchaVerifier: RecaptchaVerifier | null = null;

const DEV_EMAIL = 'dev@opulex.co';
const DEV_PHONE = '+10000000000';

export const useAuth = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  const handleAuthSuccess = (user: User) => {
    setIsUnlocking(true);
    const redirectPath = user.email === DEV_EMAIL ? '/dashboard/developer' : '/dashboard';
    
    setTimeout(() => {
        router.push(redirectPath);
    }, 1200);
  }
  
  const handlePhoneAuthSuccess = (user: User, phone: string) => {
    setIsUnlocking(true);
    const redirectPath = phone === DEV_PHONE ? '/dashboard/developer' : '/dashboard';
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
        // Don't show an error if the user is just trying the phone method
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
    if (recaptchaVerifier) return recaptchaVerifier;
    try {
      recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
      });
      return recaptchaVerifier;
    } catch (error) {
      handleAuthError(error);
      return null;
    }
  }

  const signInWithPhone = async (phoneNumber: string) => {
    setError(null);
    if (phoneNumber === DEV_PHONE) {
        // This is a mock sign-in for the dev user. In a real app, you'd never do this.
        // For this special case, we simulate a successful auth flow.
        setIsUnlocking(true);
        setTimeout(() => {
            router.push('/dashboard/developer');
        }, 1200);
        return true;
    }

    const verifier = setupRecaptcha();
    if (!verifier) return false;

    try {
        const result = await signInWithPhoneNumber(auth, phoneNumber, verifier);
        setConfirmationResult(result);
        toast({ title: "Verification code sent!", description: "Check your phone for the OTP." });
        return true;
    } catch (error) {
        handleAuthError(error);
        return false;
    }
  }

  const verifyOtp = async (otp: string, phone: string) => {
    if (!confirmationResult) {
        handleAuthError({ message: "No confirmation result found. Please request a new code."});
        return;
    }
    try {
        const result = await confirmationResult.confirm(otp);
        handlePhoneAuthSuccess(result.user, phone);
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
