
'use client';

import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

// Define a mock user type that is compatible with Firebase's User
type MockUser = Pick<User, 'uid' | 'email' | 'displayName' | 'photoURL'>;


interface AuthContextType {
  user: MockUser | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true, 
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Directly set a mock user and set loading to false.
  const mockUser: MockUser = {
    uid: 'mock-user-id',
    email: 'dev@opulex.co',
    displayName: 'Dev User',
    photoURL: 'https://placehold.co/100x100.png'
  };

  const [user, setUser] = useState<MockUser | null>(mockUser);
  const [loading, setLoading] = useState(false);

  // The original useEffect with onAuthStateChanged is commented out
  // to disable real authentication.
  /*
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  */

  return (
    <AuthContext.Provider value={{ user, loading }}>
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
