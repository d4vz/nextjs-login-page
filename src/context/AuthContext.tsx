import { createContext, useState, useEffect } from 'react';
import { iContext, iUser, signInData } from './types';
import { signInRequest } from '../services/auth';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
import { recoverUserInformation } from '../services/auth';

export const AuthContext = createContext({} as iContext);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<iUser | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'next.token': token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, password }: signInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, 'next.token', token, {
      maxAge: 60 * 60 * 24, // 24 hours
    });

    setUser(user);
    Router.push('/dashboard');
  }

  async function signOut() {
    destroyCookie(undefined, 'next.token');
    setUser(null);
    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
