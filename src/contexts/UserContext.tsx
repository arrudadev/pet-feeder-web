import { createContext, ReactNode, useState } from 'react';

import { useRouter } from 'next/router';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth } from '../services/firebase';

type UserContextProviderProps = {
  children: ReactNode;
};

type UserContextData = {
  userName: string;
  userEmail: string;
  userPhotoUrl: string;
  token: string;
  googleLogin: () => Promise<void>;
};

export const UserContext = createContext({} as UserContextData);

const provider = new GoogleAuthProvider();

export function UserContextProvider({ children }: UserContextProviderProps) {
  const router = useRouter();

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhotoUrl, setUserPhotoUrl] = useState('');
  const [token, setToken] = useState('');

  async function googleLogin() {
    const response = await signInWithPopup(auth, provider);

    const googleAccount = response.user;

    const currentUserToken = await auth.currentUser?.getIdToken(true);

    setUserName(googleAccount.displayName || '');
    setUserEmail(googleAccount.email || '');
    setUserPhotoUrl(googleAccount.photoURL || '');
    setToken(currentUserToken || '');

    router.push('/dashboard');
  }

  return (
    <UserContext.Provider
      value={{ userName, userEmail, userPhotoUrl, token, googleLogin }}
    >
      {children}
    </UserContext.Provider>
  );
}
