
'use client';

import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import type { User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false, // Set loading to false
});

// Mock user for development
const mockUser: User = {
    uid: 'mock-user-id',
    email: 'dev@opulex.co',
    emailVerified: true,
    displayName: 'Mock User',
    isAnonymous: false,
    photoURL: 'https://placehold.co/100x100.png',
    providerData: [],
    // You may need to fill in more properties depending on what your app uses
    // For now, these are the basics.
    // Hack to satisfy the User type
} as User;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // The real auth logic is commented out.
  // We now provide a mock user directly.
  /*
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  */

  return (
    <AuthContext.Provider value={{ user: mockUser, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}
