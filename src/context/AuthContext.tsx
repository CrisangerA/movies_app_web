/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import SCREEN_ROUTES from '@shared/screen.routes';
import { useRouter } from 'next/router';
import { createContext, FC, useEffect, useState } from 'react';
import { whiteListEmails, delay } from 'src/shared/utils';

interface IAuthContext {
  isLoggedIn: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const initialState: IAuthContext = {
  isLoggedIn: false,
  signIn: (email: string, password: string) => new Promise<void>(() => {}),
  logout: () => {},
  loading: false,
};

const AuthContext = createContext<IAuthContext>(initialState);

const AuthProvider: FC = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (router.asPath.includes('login') && token) {
      router.push(SCREEN_ROUTES.movies.list);
    }
    if (!token) {
      router.push(SCREEN_ROUTES.auth.login);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await delay(1000);
    const user = whiteListEmails.find((e) => e.email === email);
    if (user) {
      if (user.password === password) {
        localStorage.setItem('token', 'superSecretGeneratedOnBackendToken');
        router.push(SCREEN_ROUTES.movies.list);
      } else {
        /** password incorrecto */
      }
    } else {
      /* Email incorrecto */
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.clear();
    router.push(SCREEN_ROUTES.auth.login);
  };

  return (
    <AuthContext.Provider
      value={{
        ...initialState,
        signIn,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
