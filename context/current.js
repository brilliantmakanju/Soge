'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';

const AuthContext = createContext();

export const AuthProvider = ({ children, initialSession }) => {
  const [session, setSession] = useState(initialSession);

  useEffect(() => {
    // Update the session state whenever the initial session changes
    setSession(initialSession);
  }, [initialSession]);

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
