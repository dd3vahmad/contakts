"use client";

import { IAuth } from "@/constants/interface";
import supabase from "@/lib/supabase/client";
import {
  AuthUser,
  Session,
  SignInWithPasswordCredentials,
} from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const Auth = createContext<IAuth | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  const login = async (credentials: SignInWithPasswordCredentials) => {
    const { error } = await supabase.auth.signInWithPassword(credentials);
    return error;
  };

  const signup = async (credentials: SignInWithPasswordCredentials) => {
    const { error } = await supabase.auth.signUp(credentials);
    return error;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    return error;
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const session = data.session;
      setSession(session);
      if (session) setCurrentUser(session.user);
    });

    const { data: authEvent } = supabase.auth.onAuthStateChange(
      (_EVENT, session) => {
        setSession(session);
        if (session) setCurrentUser(session.user);
      }
    );

    const subscription = authEvent.subscription;
    return () => subscription.unsubscribe();
  }, []);

  const value = { currentUser, login, logout, signup, session };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export const useAuth = useContext(Auth);

export default AuthProvider;
